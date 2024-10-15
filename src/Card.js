// src/Card.js
import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="border rounded-lg p-4 m-2 shadow-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
