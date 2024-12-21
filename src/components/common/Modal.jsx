import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render if the modal is closed

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <button
          className="absolute top-3 right-3 hover:text-gray-300 text-gray-900 hover:bg-gray-600 bg-white rounded translation duration-300 ease"
          onClick={onClose} // Call the close function
        >
          {/* <label className="font-bold text-xl hover:text-gray-200 text-black p-2 translation duration-300 ease"> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
          </svg>

          {/* </label> */}
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
