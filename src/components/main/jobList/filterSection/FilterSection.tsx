import React from 'react';
import { useSetRecoilState } from 'recoil';
import {selectedSkillList} from '../../../../moduels/atom/jobState'
import styles from './FilterSection.module.css';

type SelectedListType = {
    selectedList:Array<string>
}


const FilterSection = ({selectedList}:SelectedListType) => {
    
    const setSelectedList = useSetRecoilState(selectedSkillList);
    
    const removeFilterValue=(event : React.MouseEvent<HTMLButtonElement>)=>{
        const target :HTMLInputElement = event.target;
        const filterName = target.parentNode.getAttribute("id");
        //console.log(filterName);
        const newSelectedList = selectedList.filter(value=>{
            return value!==filterName;
          });
          setSelectedList(newSelectedList);
    }

    const removeAllfilter = ()=>{
        setSelectedList([]);
    }
    
    return(
        <div className={styles.filterSection}>
            {selectedList.map((value,idx)=>{
                return <div id ={value} className={styles.area} key={idx} ><span className={styles.filterName} id={value}>{value}</span><button className={styles.button} type="button" onClick={removeFilterValue} >X</button></div>
            })}
            <button className={styles.clearButton} type="button" onClick={removeAllfilter}>Clear</button>
        </div>
    )
};

export default FilterSection;