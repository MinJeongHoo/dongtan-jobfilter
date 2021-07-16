import React from 'react';

type SkillType = {
  filterList: Array<string>
}

const SkillInfo = ({ filterList }: SkillType) => {
  return (
    <div>
      <p>Frontend</p>
      <p>Senior</p>
      <p>HTML</p>
      <p>CSS</p>
      <p>Javascript</p>
    </div>
  )
};

export default SkillInfo;