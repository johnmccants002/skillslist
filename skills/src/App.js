import React from 'react';
import logo from './logo.svg';
import './App.css';
import SkillsList from './SkillsList'
import NewSkillForm from './NewSkillForm'
import { useState } from 'react'


function App() {
  const [skills, setSkills] = useState(
    [
      { skillName: "HTML", level: 5 },
      { skillName: "CSS", level: 3 },
      { skillName: "JavaScript", level: 4 },
      { skillName: "Python", level: 2 }
    ]
    );
    
    
    function addSkill(skill) {
      setSkills([...skills, skill]);
    }
  return (
    <div className="App">
      <h1 className="teal-text">React Skills</h1>
      <SkillsList skills={skills}/>
      <NewSkillForm addSkill={addSkill}/>
    </div>
  );
}

export default App;
