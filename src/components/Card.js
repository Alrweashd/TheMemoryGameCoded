import React from "react";
import "../assets/css/style.css";

const Card = ({ card }) => {
  return (
    <div className="card">
      <img src={card.image} className="card"></img>
    </div>
  );
};

export default Card;
