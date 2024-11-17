import React, {useState} from 'react';
import { Card, Typography } from "@material-tailwind/react";

const FileUpload = ({onFileSelect}) => {

  const handleDrop = (e) => {
    e.preventDefault();
    onFileSelect(e.dataTransfer.files[0])
    console.log("Files dropped: ", e.dataTransfer.files[0]);
  };

  const handleFileInput = (e) => {
    onFileSelect(e.target.files[0])
    console.log("Files selected: ", e.target.files[0]);
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
