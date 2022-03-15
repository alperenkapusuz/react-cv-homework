import React from "react";
import Header from "./components/header/Header";
import EducationData from "./components/data/EducationData";
import ExperienceData from "./components/data/ExperienceData"
import ComputerSkillsData from "./components/data/ComputerSkillsData";
import Experience from "./components/experience/Experience"
import Education from "./components/education/Education"
import ComputerSkills from "./components/computerSkills/ComputerSkills"

const App = () => {
  return (
    <div>
      <div><Header /></div>
      <div><Education data={EducationData} /></div>
      <div><Experience data={ExperienceData} /></div>
      <div><ComputerSkills data={ComputerSkillsData} /></div>
    </div>
  );
};

export default App;
