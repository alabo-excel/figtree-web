import ShopBanner from '@/components/ShopBanner';
import MainLayout from '@/layout/MainLayout';
import React, { useEffect, useState } from 'react';
import { MdPreview, MdCatalog } from 'md-editor-rt';
import { JobType } from '@/types/Applicant.types';
import axios from 'axios';
import { useRouter } from 'next/router';

const SingleCareer = () => {
  const [id] = useState('preview-only');
  const [data, setData] = useState<JobType | null>(null)
  const { query } = useRouter()

  useEffect(() => {
    getJobs()
  }, [])
  const getJobs = async () => {
    try {
      const { data } = await axios.get(`/careers/${query.slug}`)
      // console.log(data[0])
      setData(data[0])
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <MainLayout>
      <div>
        <ShopBanner text="Careers" />
        <div className='lg:p-8 p-4'>
          <p className='text-3xl mb-4 text-center'>Job Offers</p>
          <div>
            {data !== null && <MdPreview editorId={id} modelValue={data.description} />}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SingleCareer;