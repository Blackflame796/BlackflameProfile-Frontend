import React from 'react';

interface Skill {
  name: string;
  icon: string;
}

interface TechStackProps {
  skills: Skill[];
}

const TechStack: React.FC<TechStackProps> = ({ skills }) => {
  return (
    <div style={{ marginBottom: '6rem' }}>
      <h2 className="SectionTitle">Technical Stack</h2>
      <div className="SkillsGrid">
        {skills.map((skill) => (
          <div key={skill.name} className="SkillItem">
            <img src={skill.icon} alt={skill.name} className="SkillIcon" />
            <span className="SkillName">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
