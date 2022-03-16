import React from "react";
import "./ComputerSkills.css";

const ComputerSkills = (props) => {
  const data = props.data;
  return (
    <div className="computerSkills">
      <h2>Computer Skills</h2>
      {data.map((item) => (
        <div className="computerSkills__row" key={item.id}>
          <div className="computerSkills__item">
            {item.skill}{" "}
            <div className="computerSkills__item__point">{item.point}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComputerSkills;
