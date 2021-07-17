import React from 'react';
import JobInfo from './jobInfo/JobInfo';
import SkillInfo from './skillInfo/SkillInfo';
import styles from './JobItem.module.css';

type ItemType = {
  item: {
    filterList: Array<string>;
    company: string,
    logo: string,
    newOccur: boolean,
    featured: boolean,
    position: string,
    postedAt: string,
    contract: string,
    location: string
  }

};

const JobItem = ({ item }: ItemType) => {
  return(
    <section className={styles.jobSection}>
      <JobInfo jobInfo={item} />
      <SkillInfo filterList={item.filterList} />
    </section>
  )
};

export default JobItem;