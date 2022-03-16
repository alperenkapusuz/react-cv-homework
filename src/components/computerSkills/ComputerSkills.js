import React from "react";
import "./ComputerSkills.css";

const ComputerSkills = (props) => {
  const data = props.data;
  return (
    <div className="computerSkills">
      <h2 className="computerSkills__heading">COMPUTER SKILLS</h2>
      {data.map((item) => (
        <div className="computerSkills__row" key={item.id}>
          <div className="computerSkills__item">
            {/* {item.skill}{" "}
            <div className="computerSkills__item__point">{item.point}</div> */}
            <img src={`https://img.shields.io/badge/${item.skill}-323330?style=for-the-badge&logo=${item.point}&logoColor=white`}></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComputerSkills;
