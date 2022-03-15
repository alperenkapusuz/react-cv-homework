import React from "react";
import './Education.css'

const Education = (props) => {
    const data = props.data;
  return (
    <div className="education">
      <h2>Educations</h2>
      {data.map((item) => (
        
        <div className="education__row" key={item.id}>
          
          <div className="education__item">
            <h3 className="education__title">{item.title}</h3>
          </div>
          <div className="education__item">
            <p className="education__title">{item.date}</p>
            <p className="education__location">{item.location}</p>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
