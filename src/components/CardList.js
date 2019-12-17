import React from "react";
import Card from "./Card";
const CardList = ({ robots }) => {
  return (
    <div>
      {/* {cardsArray} */}
      {robots.map(robot => (
        <Card
          id={robot.id}
          key={robot.id}
          name={robot.name}
          email={robot.email}
        />
      ))}
    </div>
  );
};

export default CardList;
