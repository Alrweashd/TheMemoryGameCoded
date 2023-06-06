import React, { useRef, useState } from "react";
import Card from "./Card";
import cards_ from "../data/cards";
const CardsList = () => {
  const [cards, setCards] = useState(cards_.sort(() => Math.random() - 0.5));
  const [preCardState, setPreCardState] = useState(-1);
  const preIndex = useRef(-1);
  const [comp, setComp] = useState(0);
  const score = useRef(0);
  //initial both preIndex and preCardS are -1
  const matchCheck = (currentIndex) => {
    if (cards[currentIndex].name === cards[preCardState].name) {
      console.log(cards[currentIndex].id);
      console.log(cards[preCardState].id);
      cards[preCardState].status = "active matched";
      cards[currentIndex].status = "active matched";
      score.current = score.current + 1;
      console.log(score.current);
      setPreCardState(-1);
      setTimeout(() => {
        setComp(0);
      }, 1000);
    } else {
      cards[currentIndex].status = "active";
      setCards([...cards]);
      setTimeout(() => {
        cards[currentIndex].status = "unmatch";
        cards[preCardState].status = "unmatch";
        setCards([...cards]);
        setPreCardState(-1);
        setComp(0);
      }, 1000);
    }
  };

  const handleLogic = (index) => {
    if (preCardState !== -1 && preCardState == index) {
      return;
    }
    if (comp <= 2) {
      console.log(score.current);
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
            setComp(comp + 2);
          } else {
            setComp(comp + 1);
            if (cards[index].status !== "active") matchCheck(index);
            preIndex.current = -1;
          }
        }
      } else {
        console.log(`Card ${cards[index].name} has been picked`);
      }
    } else {
      console.log("More then two compartizon");
    }
  };

  let ArrayOfCards = cards
    .filter((card) => card)
    .map((card, index) => (
      <Card card={card} index={index} key={index} handleLogic={handleLogic} />
    ));
  return (
    <>
      <div className="centering">Score: {score.current}</div>
      <div className="container">{ArrayOfCards}</div>
    </>
  );
};

export default CardsList;
