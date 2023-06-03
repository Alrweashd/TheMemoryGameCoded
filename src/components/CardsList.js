import React, { useRef, useState } from "react";
import Card from "./Card";
import cards_ from "../data/cards";
const CardsList = () => {
  const [cards, setCards] = useState(cards_.sort(() => Math.random() - 0.5));
  const [preCardState, setPreCardState] = useState(-1);
  const preIndex = useRef(-1);
  const score = useRef([0]);
  //initial both preIndex and preCardS are -1
  const matchCheck = (currentIndex) => {
    if (cards[currentIndex].id === cards[preCardState].id) {
      console.log(cards[currentIndex].id);
      console.log(cards[preCardState].id);
      cards[preCardState].status = "active matched";
      cards[currentIndex].status = "active matched";
      score.current = score.current + 1;
      setPreCardState(-1);
    } else {
      cards[currentIndex].status = "active";
      setCards([...cards]);
      setTimeout(() => {
        cards[currentIndex].status = "unmatch";
        cards[preCardState].status = "unmatch";
        setCards([...cards]);
        setPreCardState(-1);
      }, 500);
    }
  };

  const handleLogic = (index) => {
    if (index !== preIndex) {
      //if cards by index has not picked
      if (cards[index].status === "active matched") {
        // if is picked
        console.log(`Card ${cards[index].name} has been picked`);
        setPreCardState(-1);
      } else {
        if (preCardState === -1) {
          //first pick
          //preIndex changes to current index
          preIndex.current = index;
          console.log(cards[index].id);
          cards[index].status = "active";
          //calling to re-render
          setCards([...cards]);
          //changing preCardS to be current picked index
          setPreCardState(index);
        } else {
          if (cards[index].status !== "active") matchCheck(index);
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
  return (
    <>
      <div className="container">{ArrayOfCards}</div>
      <div>score: {}</div>
    </>
  );
};

export default CardsList;
