import React from 'react';
import Banner from '../components/Banner';
import HomeCards from '../components/HomeCards';
import Joblistings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
        <Banner />
        <HomeCards />
        <Joblistings isHome={true}/>
        <ViewAllJobs />
    </>
  )
}

export default HomePage