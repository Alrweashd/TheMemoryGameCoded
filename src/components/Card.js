import React, { useState } from "react";
import "../assets/css/style.css";

const Card = ({ card, index, changeCardStatus, clickHandler, handleLogic }) => {
  const clicked = () => {
    changeCardStatus(index);
    console.log(`${card.name} ${card.status}`);
  };

  return (
    <>
      {/* <p>Status:{`${card.status}`}</p> */}
      <div className={`card ${card.status}`}>
        <img src={card.image} onClick={() => handleLogic(index)}></img>
      </div>
    </>
  );
};

export default Card;
