import React from "react";
import "./AreasOfInterest.css";

const AreasOfInterest = (props) => {
  const data = props.data;
  return (
    <div className="areasOfInterest">
      <h2 className="areasOfInterest__heading">AREAS OF INTEREST</h2>
      {data.map((item) => (
        <div className="areasOfInterest__row" key={item.id}>
          <div className="areasOfInterest__item">
            <p className="areasOfInterest__title">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AreasOfInterest;
