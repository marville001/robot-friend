import React from "react";

const Card = ({ name, email, id }) => {
  // destructuring the props <<<
  return (
    <div className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow">
      <img alt="my pic here" src={`https://robohash.org/${id}?200x200`} />

      <div>
        <h2> {name} </h2>
        <p> {email} </p>
      </div>
    </div>
  );
};

export default Card;
