import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import TopSection from './topSection/TopSection';
import JobList from './jobList/JobListContainer';
import styles from './MainContainer.module.css';

const MainContainer = () => {

  return (
    <RecoilRoot>
      <div>
        <TopSection />
        <Suspense fallback={<div className={styles.loadingSpinner}></div>}>
          <JobList />
        </Suspense>
      </div>
    </RecoilRoot >
  )
};
export default MainContainer;