// src/Button.js
import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
