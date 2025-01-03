import React from 'react'
import PropTypes from "prop-types";

const FlexibleCard = ({height, width, children }) => {

  const sizeClasses = {
    small: "w-40 h-40",
    medium: "w-60 h-60",
    large: "w-80 h-80",
  };
    
  return (
    <div
      className="bg-white shadow-2xl rounded-xl m-2 p-4 flex flex-col w-[400px] items-center"
    >
      {children}
    </div>
  );
}

// Prop Types
FlexibleCard.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node.isRequired,
};

// Default Props
FlexibleCard.defaultProps = {
  height: 15, // Default height in 'rem'
  width: 15,  // Default width in 'rem'
};

export default FlexibleCard;
