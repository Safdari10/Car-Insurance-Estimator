import { createContext, useContext, ReactNode, useState } from "react";

interface Prediction {
  tag: string;
  confidence: number;
}

interface ImageUploadContextType {
  uploadStatus: string;
  error: string | null;
  uploadImage: (file: File) => Promise<void>;
  prediction: Prediction | null;
}

const ImageUploadContext = createContext<ImageUploadContextType | undefined>(undefined);

export const useImageUpload = () => {
  const context = useContext(ImageUploadContext);
  if (!context) {
    throw new Error("useImageUpload must be used within an ImageUploadProvider");
  }
  return context;
};

interface ImageUploadProviderProps {
  children: ReactNode;
}

export const ImageUploadProvider = ({ children }: ImageUploadProviderProps) => {
  const [uploadStatus, setUploadStatus] = useState<string>("idle");
  const [error, setError] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<Prediction | null>(null); 

  const uploadImage = async (file: File) => {
    setUploadStatus("uploading");
    setError(null);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(`http://localhost:5000/api/image/analyze`, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Image upload failed");
      }

      const data = await response.json();
      setUploadStatus("completed");
      setPrediction(data.prediction); 

    } catch (err) {
      setError((err as Error).message);
      setUploadStatus("failed");
    }
  };

  return (
    <ImageUploadContext.Provider value={{ uploadStatus, error, uploadImage, prediction }}>
      {children}
    </ImageUploadContext.Provider>
  );
};
