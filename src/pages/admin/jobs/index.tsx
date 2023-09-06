import AdminLayout from '@/layout/AdminLayout';
import { JobType } from '@/types/Applicant.types';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { message } from 'antd';

const JobsPage = () => {
  const [data, setData] = useState<JobType[]>([])
  const [messageApi, contextHolder] = message.useMessage();

  const columns: ColumnsType<JobType> = [
    {
      title: 'Job Title ',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Date Posted',
      dataIndex: 'date',
      key: 'date',
      render: (text) => text.substring(0, 10),

    },
    {
      title: '',
      dataIndex: 'delete',
      key: 'delete',
      render: (_, record) => (<img onClick={() => deleteJob(record._id)} src='/assets/icons/fluent_delete.png' />),
    },
    {
      title: '',
      dataIndex: 'view',
      key: 'view',
      render: (_, record) => <Link href={`/admin/jobs/single?page=${record._id}`}><img src='/assets/icons/view.png' /></Link>,
    },
  ];

  useEffect(() => {
    getJobs()
  }, [])
  const getJobs = async () => {
    try {
      const { data } = await axios.get('/careers')
      // console.log(data)
      setData(data)
    } catch (err) {
      console.log(err)
    }
  }

  const deleteJob = async (id: string) => {
    try {
      await axios.delete(`/careers/${id}`)
      getJobs()
      messageApi.open({
        type: 'success',
        content: 'Job deleted successfully!',
      });
    } catch (err: any) {
      console.log(err)
      messageApi.open({
        type: 'error',
        content: err.response.data.message,
      });
    }
  }
  return (
    <AdminLayout>
      <div>
        {contextHolder}

        <p className='font-bold text-2xl'>Jobs</p>
        <div className='my-4 border rounded-t-xl'>
          <div className='flex justify-between p-4'>
            <div className=''>
              <p className='text-xl'>All Jobs</p>
              <p className='my-2'>You're viewing all jobs below</p>
            </div>
            <Link href={'/admin/jobs/create'}>
              <button className='p-3 rounded-md bg-warning h-12 my-auto font-bold px-10'>+ Add a job post</button>
            </Link>
          </div>
        </div>
        <div className='my-4'>
          <input type="text" className='p-3 rounded-md mb-4 border w-1/2' placeholder='Search Product' />
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </AdminLayout>

  );
};

export default JobsPage;