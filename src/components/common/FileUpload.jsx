import React from 'react';
import { Card, Typography } from "@material-tailwind/react";

const FileUpload = () => {
  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log("Files dropped: ", files);
  };

  const handleFileInput = (e) => {
    const files = e.target.files;
    console.log("Files selected: ", files);
  };

  return (
    <div className="justify-center items-center">
      <Card
        className="mx-2 max-w-lg p-6 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer transition duration-300 hover:border-gray-500"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <input
          type="file"
          id="file-upload"
          className="hidden"
          multiple
          onChange={handleFileInput}
        />
        <label htmlFor="file-upload" className="flex flex-col items-center">
          <Typography
            variant="h6"
            className="text-sm text-gray-500 hover:text-gray-600 transition duration-300"
          >
            Click here to upload or drop file here.
          </Typography>
          <Typography variant="body2" className="text-sm text-gray-600 text-gray-400 mt-2">
            Supported formats: JPG, PNG
          </Typography>
        </label>
      </Card>
    </div>
  );
};

export default FileUpload;
