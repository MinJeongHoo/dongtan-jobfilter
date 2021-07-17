import React from 'react';
import styles from './JobInfo.module.css';
type JobType = {
  jobInfo: {
    company: string,
    logo: string,
    newOccur: boolean,
    featured: boolean,
    position: string,
    postedAt: string,
    contract: string,
    location: string
  }
}

const JobInfo = ({ jobInfo: { company, logo, newOccur, featured, position, postedAt, contract, location } }: JobType) => {
  return (
    <div className = {styles.jobInfoSection}>
      <img src={`${logo}`} className={styles.logoSection}></img>
      <div className = {styles.jobInfo}>
        <div className = {styles.companyInfo}> 
          <p className={styles.detailText}>{company}</p>
          {newOccur && <p className={styles.detailText}>New</p>}
          {featured && <p className={styles.detailText}>FEATURED</p>}
        </div>
        <h1>{position}</h1>
        <div className = {styles.detailInfo}>
          <p className = {styles.detailText}>{postedAt}</p>
          <p className = {styles.detailText}>{contract}</p>
          <p className = {styles.detailText}>{location}</p>
        </div>
      </div>
    </div >
  )
}

export default JobInfo;