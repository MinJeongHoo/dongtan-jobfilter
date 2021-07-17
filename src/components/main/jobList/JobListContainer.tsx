import React, { useEffect } from 'react';
import styles from './JobList.module.css';
import { useRecoilValue, useRecoilState } from 'recoil';
import JobItem from './jobItem/JobItem'
import { jobListState,selectedSkillList } from '../../../moduels/atom/jobState';
import { getAsync } from '../../../moduels/selector/jobSelector';

const JobListContainer = () => {
  
  type jobType = {
    id: string,
  }

  const [jobLists, setJobList] = useRecoilState(jobListState);
  const selectedList = useRecoilValue(selectedSkillList);
  const getAsyncjobList = useRecoilValue(getAsync);


  type listType = {
    filterList : Array<string>
  }
  useEffect(() => {
    if(selectedList.length>0){
      let newData = jobLists.filter((list:listType) => { 
        console.log(list);
        return selectedList.every(skill => { 
          return list.filterList.includes(skill); 
        }); 
      });   
      setJobList(newData);
    }
    else{
      setJobList(getAsyncjobList);
    }
  },[selectedList]);
  return (
    <article className={styles.main}>
      {jobLists && jobLists.map((job: jobType) => <JobItem key={job.id} item={job} />)}
    </article>

  )
};
export default JobListContainer;