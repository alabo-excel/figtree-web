import AdminLayout from '@/layout/AdminLayout';
import { JobType } from '@/types/Applicant.types';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { MdPreview, MdCatalog } from 'md-editor-rt';

const SingleJob = () => {
  const [data, setData] = useState<JobType | null>(null)
  const { query } = useRouter()
  const [id] = useState('preview-only');

  useEffect(() => {
    getJobs()
  }, [])
  const getJobs = async () => {
    try {
      const { data } = await axios.get(`/careers/${query.page}`)
      console.log(data[0])
      setData(data[0])
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <AdminLayout>
      <div>
        <div className='mt-4 border rounded-t-xl'>
          <div className='flex justify-between p-4'>
            <div className=''>
              <p className='text-xl capitalize'>{data?.title}</p>
              <p className='my-2'>You're viewing job description of {data?.title}</p>
            </div>
            <Link href={`/admin/jobs/create?page=${data?._id}`}>
              <button className='p-3 rounded-md bg-warning h-12 my-auto font-bold px-10'>+ Edit job post</button>
            </Link>
          </div>
        </div>
        <div className='border rounded-b-xl p-4'>
        {data !== null && <MdPreview editorId={id} modelValue={data.description} />}
        </div>
      </div>
    </AdminLayout>

  );
};

export default SingleJob;