import React from "react";
import "../assets/css/style.css";

const Card = ({ card }) => {
  return <img src={card.image} className="card"></img>;
};

export default Card;
