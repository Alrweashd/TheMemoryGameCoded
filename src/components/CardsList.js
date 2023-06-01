import React from "react";
import Card from "./Card";
import cards from "../data/cards";
const CardsList = () => {
  let ArrayOfCards = cards
    .filter((card) => card)
    .map((card) => <Card card={card} />);
  return <div className="container">{ArrayOfCards}</div>;
};

export default CardsList;
