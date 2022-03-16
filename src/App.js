import React from "react";
import Header from "./components/header/Header";
import EducationData from "./components/data/EducationData";
import ExperienceData from "./components/data/ExperienceData";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";
import SkillsGrammarInterest from "./components/skillsGrammarInterest/SkillsGrammarInterest";

const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Education data={EducationData} />
      </div>
      <div>
        <Experience data={ExperienceData} />
      </div>
      <div>
        <SkillsGrammarInterest />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default App;
