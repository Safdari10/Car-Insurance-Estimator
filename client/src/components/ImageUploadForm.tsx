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
        <div>
          <label htmlFor="fileInput" className="text-xl px-5">Upload Image:</label>
          <input
            type="file"
            id="fileInput"
            name="file"
            placeholder="Upload Image"
            onChange={handleFileChange}
            accept="image/*"
            className="text-xl px-3"
            required
          />
        </div>
        <button type="submit" disabled={uploadStatus === "uploading"}>
          {uploadStatus === "uploading" ? "Uploading ..." : "Upload"}
        </button>

        {uploadStatus === "failed" && <p>Error: {error}</p>}
        {uploadStatus === "completed" && <p>Upload successful!</p>}
      </form>
      {prediction && (
        <div>
          <h2>Prediction Result</h2>
          <p>
            Vehicle Type: <strong>{prediction.tag}</strong>
          </p>
          <p>Confidence: {(prediction.confidence * 100).toFixed(2)}%</p>
        </div>
      )}
      {previewUrl && (
        <div>
          <h3>Selected Image Preview:</h3>
          <img src={previewUrl} alt="Preview" width="200" />
        </div>
      )}
    </div>
  );
};

export default ImageUploadForm;
