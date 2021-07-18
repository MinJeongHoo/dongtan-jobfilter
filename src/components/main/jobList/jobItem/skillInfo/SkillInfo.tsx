import React from 'react';
import styles from './SkillInfo.module.css';
import { useRecoilState } from 'recoil';
import {selectedSkillList} from '../../../../../moduels/atom/jobState';

type SkillType = {
  filterList: Array<string>
}


const SkillInfo = ({ filterList }: SkillType) => {
  const [selectedList , setSelectedList] = useRecoilState(selectedSkillList);
  const test  = (event: React.MouseEvent<HTMLButtonElement>)=> {
    const target :EventTarget = event.target;
    const filterName : string  = target.innerText;
    if(selectedList.includes(filterName)){
      return;
    }
    setSelectedList([...selectedList,filterName]);
  }
  return (
    <div className={styles.skillSection}>
      {filterList.map((text,idx)=>{
        return <p key ={idx} className={styles.skillText} onClick={test}>{text}</p>
      })}
    </div>
  )
};

export default SkillInfo;