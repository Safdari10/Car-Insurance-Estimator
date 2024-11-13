import { createContext, useContext, ReactNode, useState } from "react";

interface ImageUploadContextType {
  uploadStatus: string;
  error: string | null;
  uploadImage: (file: File) => Promise<void>;
}

const ImageUploadContext = createContext<ImageUploadContextType | undefined>(
  undefined
);

export const useImageUpload = () => {
  const context = useContext(ImageUploadContext);
  if (!context) {
    throw new Error(
      "useImageUpload must be used within an ImageUPloadProvider"
    );
  }
  return context;
};

interface ImageUploadProviderProps {
  children: ReactNode;
}

export const ImageUploadProvider = ({ children }: ImageUploadProviderProps) => {
  const [uploadStatus, setUploadStatus] = useState<string>("idle");
  const [error, setError] = useState<string | null>(null);

  const uploadImage = async (file: File) => {
    setUploadStatus("uploading");
    setError(null);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(`https://localhost:5000/api/image/analyse`, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Image upload failed");
      }

      await response.json();

      setUploadStatus("completed");
    } catch (err) {
      setError((err as Error).message);
      setUploadStatus("failed");
    }
  };

  return (
    <ImageUploadContext.Provider value={{ uploadStatus, error, uploadImage }}>
      {children}
    </ImageUploadContext.Provider>
  );
};
