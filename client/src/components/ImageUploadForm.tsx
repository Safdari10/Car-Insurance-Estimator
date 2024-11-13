import React, { useState, useEffect } from "react";
import { useImageUpload } from "../context/ImageUploadContext";

const ImageUploadForm = () => {
  const { uploadImage, uploadStatus, error, prediction } = useImageUpload();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [selectedFile]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedFile) {
      uploadImage(selectedFile);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center gap-2 p-5">
          <label
            htmlFor="fileInput"
            className="text-xl px-5 block font-semibold p-2">
            Upload Image:
          </label>

          <div className="relative w-80 h-52 bg-slate-300 border border-slate-400 rounded-lg flex justify-center items-center">
            <input
              type="file"
              id="fileInput"
              name="file"
              onChange={handleFileChange}
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              required
            />
            <span className="text-lg text-slate-700">Choose File</span>
          </div>

          {/* Message below the file input */}
          <p className="text-sm text-slate-600 mt-2">
            {selectedFile ? `Selected: ${selectedFile.name}` : "No file chosen"}
          </p>
        </div>

        <button
          type="submit"
          disabled={uploadStatus === "uploading"}
          className="bg-blue-600 text-xl my-3 py-2 px-3 rounded-lg hover:text-white">
          {uploadStatus === "uploading" ? "Uploading ..." : "Upload"}
        </button>

        {uploadStatus === "failed" && <p>Error: {error}</p>}
        {uploadStatus === "completed" && (
          <p className="text-lg font-semibold">Upload successful!</p>
        )}
      </form>
      {previewUrl && (
        <div className="flex justify-center flex-col items-center p-2 gap-2">
          <h3 className="text-xl">Selected Image Preview:</h3>
          <img src={previewUrl} alt="Preview" width="200" />
        </div>
      )}

      {prediction && (
        <div className="flex flex-col justify-center items-center">
          <h2 className="z-30 text-2xl font-semibold">Prediction Result</h2>
          <p>
            Vehicle Type: <strong>{prediction.tag}</strong>
          </p>
          <p>Confidence: {prediction.confidence}</p>
        </div>
      )}
    </div>
  );
};

export default ImageUploadForm;
