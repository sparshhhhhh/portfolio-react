import React from 'react';
import "./skills.css";
import SkillSet1 from './SkillSet1';
import SkillSet2 from './SkillSet2';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technichal Skills.</span>
        <div className="skills__container container grid">
            <SkillSet1/>
            <SkillSet2/>
        </div>
    </section>
  );
}

export default Skills;