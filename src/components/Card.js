import React, { useState } from "react";
import "../assets/css/style.css";

const Card = ({ card, index, changeCardStatus }) => {
  const clicked = () => {
    changeCardStatus(index);
  };

  return (
    <>
      <p>Status:{`${card.status}`}</p>
      <div className="card">
        <img src={card.image} onClick={clicked}></img>
      </div>
    </>
  );
};

export default Card;
