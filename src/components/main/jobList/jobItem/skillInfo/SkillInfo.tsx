import React from 'react';
import styles from './SkillInfo.module.css';

type SkillType = {
  filterList: Array<string>
}

const test = (event : React.DOMAttributes<HTMLParagraphElement>)=> {
  console.log(event.target.innerText);
}

const SkillInfo = ({ filterList }: SkillType) => {
  return (
    <div className={styles.skillSection}>
      {filterList.map((text,idx)=>{
        return <p key ={idx} className={styles.skillText} onClick={test}>{text}</p>
      })}
    </div>
  )
};

export default SkillInfo;