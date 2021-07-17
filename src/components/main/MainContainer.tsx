import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import TopSection from './topSection/TopSection';
import JobList from './jobList/JobListContainer';
import LoadingSpinner from '../loadingSpiner/LoadingSpinner';

const MainContainer = () => {

  return (
    <RecoilRoot>
      <div>
        <TopSection />
        <Suspense fallback={<LoadingSpinner/>}>
          <JobList />
        </Suspense>
      </div>
    </RecoilRoot >
  )
};
export default MainContainer;