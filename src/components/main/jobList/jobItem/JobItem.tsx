import React from 'react';
import JobInfo from './jobInfo/JobInfo';
import SkillInfo from './skillInfo/SkillInfo';

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

const JobItem = ({ item }: ItemType) => (
  <section>
    <JobInfo jobInfo={item} />
    <SkillInfo filterList={item.filterList} />
  </section>
);

export default JobItem;