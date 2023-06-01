import React, { useState } from "react";
import Card from "./Card";
import cards_ from "../data/cards";
const CardsList = () => {
  const [cards, setCards] = useState(cards_);

  function changeCardStatus(indexOfCard) {
    const cardsCopy = [...cards];
    cardsCopy[indexOfCard].status = true;

    //!cardsCopy[indexOfCard].status;
    setCards(cardsCopy);
  }

  let ArrayOfCards = cards
    .filter((card) => card)
    .map((card, index) => (
      <Card card={card} changeCardStatus={changeCardStatus} index={index} />
    ));
  return <div className="container">{ArrayOfCards}</div>;
};

export default CardsList;
