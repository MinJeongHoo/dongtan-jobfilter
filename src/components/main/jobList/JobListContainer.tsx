import React, { useEffect, useState } from 'react';
import styles from './JobList.module.css';
import { useRecoilValue, useRecoilState } from 'recoil';
import JobItem from './jobItem/JobItem'
import { jobListState,selectedSkillList } from '../../../moduels/atom/jobState';
import { getAsync } from '../../../moduels/selector/jobSelector';
import FilterSection from './filterSection/FilterSection';

const JobListContainer = () => {
  
  type JobType = {
    id: string,
  }

  const [jobLists, setJobList] = useRecoilState(jobListState);
  const [originJobLists ,setOriginJobList] = useState([]);
  const selectedList = useRecoilValue(selectedSkillList);
  const getAsyncjobList = useRecoilValue(getAsync);


  type listType = {
    filterList : Array<string>
  }
  useEffect(() => {
    if(selectedList.length>0){
      let newData = originJobLists.filter((list:listType) => { 
        return selectedList.every(skill => { 
          return list.filterList.includes(skill); 
        }); 
      });   
      setJobList(newData);
    }
    else{
      setOriginJobList(getAsyncjobList);
      setJobList(getAsyncjobList);
    }
  },[selectedList]);
  return (
   
    <article  className = {styles.main}>
      {selectedList.length>0 && <FilterSection selectedList = {selectedList}/>}
      {jobLists && jobLists.map((job: JobType) => <JobItem key={job.id} item={job} />)}
    </article>

  )
};
export default JobListContainer;