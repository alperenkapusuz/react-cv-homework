import React from "react";
import "./Grammar.css";

const Grammar = (props) => {
  const data = props.data;
  return (
    <div className="grammar">
      <h2 className="grammar__heading">GRAMMAR</h2>
      {data.map((item) => (
        <div className="grammar__row" key={item.id}>
          <div className="grammar__item">
            <h3 className="grammar__title">{item.language}</h3>
            <p className="grammar__title">{item.level}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grammar;
