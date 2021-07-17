import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import TopSection from './topSection/TopSection';
import JobList from './jobList/JobListContainer';
import LoadingSpinner from '../loadingSpiner/LoadingSpinner';

const MainContainer = () => {

  const style : React.CSSProperties = {
    overflowX :'hidden'
  }

  return (
    <RecoilRoot>
      <div style={style}>
        <TopSection />
        <Suspense fallback={<LoadingSpinner/>}>
          <JobList />
        </Suspense>
      </div>
    </RecoilRoot >
  )
};
export default MainContainer;