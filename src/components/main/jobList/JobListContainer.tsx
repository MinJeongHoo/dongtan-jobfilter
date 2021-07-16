import React, { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import JobItem from './jobItem/JobItem'
import { jobListState } from '../../../moduels/atom/jobState';
import { getAsync } from '../../../moduels/selector/jobSelector';
const JobListContainer = () => {
  const [jobLists, setJobList] = useRecoilState(jobListState);
  const getAsyncjobList = useRecoilValue(getAsync);
  type jobType = {
    id: string,
  }
  useEffect(() => {
    setJobList(getAsyncjobList);
  })
  return (
    <article>
      {jobLists && jobLists.map((job: jobType) => <JobItem key={job.id} item={job} />)}
    </article>

  )
};
export default JobListContainer;