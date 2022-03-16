import React from "react";
import ComputerSkillsData from "../data/ComputerSkillsData";
import AreasOfInterestData from "../data/AreasOfInterestData";
import GrammarData from "../data/GrammarData";
import ComputerSkills from "../computerSkills/ComputerSkills";
import AreasOfInterest from "../areasOfInterest/AreasOfInterest";
import Grammar from "../grammar/Grammar";
import "./SkillsGrammarInterest.css";

const SkillsGrammarInterest = () => {
  return (
    <div className="skillsGrammarInterest">
      <div className="skillsGrammarInterest__skill">
        <ComputerSkills data={ComputerSkillsData} />
      </div>
        <div className="skillsGrammarInterest__gram">
          <Grammar data={GrammarData} />
        </div>
        <div className="skillsGrammarInterest__Int">
          <AreasOfInterest data={AreasOfInterestData} />
        </div>
    </div>
  );
};

export default SkillsGrammarInterest;
