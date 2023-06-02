import React, { useRef, useState } from "react";
import Card from "./Card";
import cards_ from "../data/cards";
const CardsList = () => {
  const [cards, setCards] = useState(cards_.sort(() => Math.random() - 0.5));
  const [preCardState, setPreCardState] = useState(-1);
  const preIndex = useRef(-1);

  const matchCheck = (currentIndex) => {
    if (cards[currentIndex].id === cards[preCardState].id) {
      console.log(cards[currentIndex].id);
      console.log(cards[preCardState].id);
      cards[preCardState].status = "active matched";
      cards[currentIndex].status = "active matched";
      setPreCardState(-1);
    } else {
      cards[currentIndex].status = "active";
      setCards([...cards]);
      setTimeout(() => {
        cards[preCardState].status = "unmatch";
        cards[currentIndex].status = "unmatch";
        setCards([...cards]);
      }, 1000);
    }
  };

  const handleLogic = (index) => {
    if (index !== preIndex) {
      //if cards by index has not picked
      if (cards[index].status === "active matched") {
        // if it is matched
        console.log(`Card ${cards[index].name} has been already matched`);
      } else {
        if (preCardState === -1) {
          preIndex.current = index;
          cards[index].status = "active";
          setCards([...cards]);
          setPreCardState(index);
        } else {
          matchCheck(index);
          preIndex.current = -1;
        }
      }
    } else {
      console.log(`Card ${cards[index].name} has been picked`);
    }
  };

  function changeCardStatus(indexOfCard) {
    const cardsCopy = [...cards];
    cardsCopy[indexOfCard].status = true;

    //!cardsCopy[indexOfCard].status;
    //setCards(cardsCopy);
  }
  const clickHandler = (index) => {
    alert(index);
  };

  let ArrayOfCards = cards
    .filter((card) => card)
    .map((card, index) => (
      <Card
        card={card}
        changeCardStatus={changeCardStatus}
        index={index}
        key={index}
        clickHandler={clickHandler}
        handleLogic={handleLogic}
      />
    ));
  return <div className="container">{ArrayOfCards}</div>;
};

export default CardsList;
