import React from "react";
import "./Experience.css";

const Experience = (props) => {
  const data = props.data;
  return (
    <div className="experience">
      <h2>Experiences</h2>
      {data.map((item) => (
        <div className="experience__row" key={item.id}>
          <div className="experience__item">
            <h3 className="experience__title">{item.title}</h3>
          </div>
          <div className="experience__item">
            <p className="experience__title">{item.date}</p>
            <p className="experience__location">{item.location}</p>
            <p className="experience__text">{item.text}</p>
            <p className="experience__missions">{item.location}</p>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
