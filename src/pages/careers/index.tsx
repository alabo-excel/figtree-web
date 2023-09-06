import ShopBanner from '@/components/ShopBanner';
import MainLayout from '@/layout/MainLayout';
import { JobType } from '@/types/Applicant.types';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Careers = () => {
  const [jobs, setJobs] = useState<JobType[]>()

  useEffect(() => {
    getJobs()
  }, [])
  const getJobs = async () => {
    try {
      const { data } = await axios.get('/careers')
      // console.log(data)
      setJobs(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <MainLayout>
      <div>
        <ShopBanner text="Careers" />
        <p className='text-3xl mb-4 text-center'>Job Offers</p>

        {jobs !== undefined ? <div className='lg:p-8 p-4'>
          {jobs?.map((job, index) => <div key={index}>
            <ul><li className='lg:text-2xl text-lg text-orange font-bold '>{job.title}</li></ul>
            <div className='lg:pl-9'>
              <p className='py-3 text-[#000000B2] lg:text-lg text-sm'>{job.summary}</p>
              <Link href={`/careers/${job._id}`}><p className='underline text-sm'>Learn more</p></Link>
            </div>
          </div>)}
        </div> : <div className='text-center lg:p-8 p-4 lg:w-[80%] mx-auto'>
          <p className='text-lg'> Thanks for your interest in joining Figtree Company. However, we have no current openings at the moment. Kindly check at a later date.</p>
        </div>}
      </div>
    </MainLayout>
  );
};

export default Careers;