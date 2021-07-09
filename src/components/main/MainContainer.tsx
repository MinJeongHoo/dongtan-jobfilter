import React from 'react';
import TopSection from './topSection/TopSection';
import JobList from './jobList/JobListContainer';



const MainContainer = () => {
  return (
    <div>
      <TopSection />
      <JobList />
    </div>
  )
};
export default MainContainer;