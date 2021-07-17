import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import TopSection from './topSection/TopSection';
import JobList from './jobList/JobListContainer';

const MainContainer = () => {

  return (
    <RecoilRoot>
      <div>
        <TopSection />
        <Suspense fallback={<div>Loading...</div>}>
          <JobList />
        </Suspense>
      </div>
    </RecoilRoot >
  )
};
export default MainContainer;