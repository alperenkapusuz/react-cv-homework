import React from "react";
import "./Experience.css";

const Experience = (props) => {
  const data = props.data;
  return (
    <div className="experience">
      <h2 className="experience__heading">EXPERIENCES</h2>
      {data.map((item) => (
        <div className="experience__row" key={item.id}>
          <div className="experience__item">
            <h3 className="experience__title">{item.title}</h3>
            <p className="experience__title">{item.date}</p>
            <p className="experience__location">{item.location}</p>
            <p className="experience__text">{item.text}</p>
            <p className="experience__missions">{item.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
