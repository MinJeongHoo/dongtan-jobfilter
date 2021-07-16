import React from 'react';
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
    <div>
      <img src={`${logo}`}></img>
      <div>
        <div>
          <p>{company}</p>
          {newOccur && <p>New</p>}
          {featured && <p>FEATURED</p>}
        </div>
        <h1>{position}</h1>
        <div>
          <p>{postedAt}</p>
          <p>{contract}</p>
          <p>{location}</p>
        </div>
      </div>
    </div >
  )
}

export default JobInfo;