import React, { useState } from "react";
import { useImageUpload } from "../context/ImageUploadContext";

const ImageUploadFrom = () => {
    const { uploadImage, uploadStatus, error } = useImageUpload()
    const [selectedFile, setSelectedFile] = useState<File | null>(null)

   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
        setSelectedFile(event.target.files[0])
   }
   }

   const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if(selectedFile) {
        uploadImage(selectedFile)
    }
   }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fileInput">Upload Image</label>
        <input
          type="file"
          id="fileInput"
          name="file"
          placeholder="Upload Image"
          onChange={handleFileChange}
          accept="image/*"
          required
        />
      </div>
      <button type="submit" disabled={uploadStatus === 'uploading'}>
        {uploadStatus === 'uploading' ? 'Uploading ...' : 'Upload'}
      </button>

      {uploadStatus === 'failed' && <p>Error: {error}</p>}
      {uploadStatus === 'completed' && <p>Upload successful!</p>}

    </form>
  );
};

export default ImageUploadFrom;
