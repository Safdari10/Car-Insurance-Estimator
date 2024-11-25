import { useState } from "react";
import { useImageUpload } from "../context/ImageUploadContext";
import { premiumPrices } from "../assets/PremiumPrices";

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const {
    uploadImage,
    prediction,
    setPrediction,
  } = useImageUpload();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const clearImage = () => {
    setSelectedImage(null);
    setPrediction(null);
  };

  const handleSubmit = () => {
    if (selectedImage) {
      uploadImage(selectedImage);
    }
  };

  const vehiclePremium = prediction ? premiumPrices[prediction.tag] : null;

  return (
    <div className="flex flex-col items-center justify-center p-4  rounded-lg">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
        Upload a picture of your car to get started
      </h1>

      {/* Upload Area */}
      <div className="relative bg-gray-100 w-[40rem] h-[30rem] rounded-lg border-dashed border-2 border-gray-400 flex items-center justify-center hover:bg-gray-200 transition">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="absolute w-full h-full opacity-0 cursor-pointer"
        />
        {!selectedImage ? (
          <p className="text-gray-600 text-center text-lg font-medium">
            Drag & Drop or{" "}
            <span className="text-blue-600 underline">Click to Upload</span>
          </p>
        ) : (
          <div className="absolute inset-0 flex  items-center justify-center bg-gray-50 bg-opacity-80  ">
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Preview"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}
      </div>

      {/* Action Buttons */}
      {selectedImage && (
        <div className="mt-4 flex gap-4">
          <button
            onClick={clearImage}
            className="text-lg bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition">
            Clear
          </button>
          <button
            onClick={handleSubmit}
            className="text-lg bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
            Upload
          </button>
        </div>
      )}
      <div>
        {prediction && (
          <div className="flex flex-col justify-center items-center bg-white mt-10 py-5 px-10 rounded-lg shadow-lg">
            <h2 className="z-30 text-3xl font-semibold pb-5">
              Estimated Premium Cost of your Vehicle:
            </h2>
            <p className="text-2xl font-semibold">
              Vehicle Type: <strong>{prediction.tag}</strong>
            </p>
            <p className="text-2xl font-semibold">
              Confidence: {prediction.confidence}
            </p>
            {vehiclePremium && (
              <p className="my-4 text-2xl font-semibold">
                Premium Price: <strong>{vehiclePremium}</strong>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
