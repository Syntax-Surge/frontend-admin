import React, { useRef } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { useCustomContext } from "../../contexts/Context";

const FileUpload = ({ onFileSelect }) => {
  const {previewImage, setPreviewImage } = useCustomContext();
  const fileInputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      onFileSelect(file);
      console.log("Files dropped: ", file);
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    console.log("File input: ", file);
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      onFileSelect(file);
      console.log("Files selected: ", file);
    }
  };

  const handleClear = () => {
    setPreviewImage(null);
    onFileSelect(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset file input value
    }
  };

  return (
    <div className="justify-center items-center">
      {/* Display the selected image */}
      {previewImage ? (
        <div className="flex items-center justify-center mt-4">
          <img
            src={previewImage}
            alt="Selected"
            className="max-w-[5rem] h-[5rem] border rounded-lg"
          />
          <div className="flex pb-14 ">
            <button
              onClick={handleClear}
              className=" text-sm text-white rounded-xl bg-gray-200 translation duration 300 ease hover:bg-gray-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="black" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>            
          </div>
        </div>
      ):(
        <Card
          className="mx-2 max-w-lg p-6 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer transition duration-300 hover:border-gray-500"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <input
            ref={fileInputRef}
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
            <Typography
              variant="body2"
              className="text-sm text-gray-600 text-gray-400 mt-2"
            >
              Supported formats: JPG, PNG
            </Typography>
          </label>
        </Card>
      )}
    </div>
  );
};

export default FileUpload;
