import AdminLayout from '@/layout/AdminLayout';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MdEditor } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import router, { useRouter } from 'next/router';
import axios from 'axios';
import { message } from 'antd';

const CreateJob = () => {
  const [title, setTitle] = useState("")
  const [summary, setSummary] = useState("")
  const [discription, setDiscription] = useState("**Hello world!!!**")
  const [loading, setLoading] = useState(false)
  const { query } = useRouter()
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (query.page !== undefined) {
      getJob()
    }
  }, [query.page])

  const getJob = async () => {
    try {
      const { data } = await axios.get(`/careers/${query.page}`)
      console.log(data[0])
      setTitle(data[0].title)
      setDiscription(data[0].description)
      setSummary(data[0].summary)
    } catch (err) {
      console.log(err)
    }
  }

  const addJob = async () => {
    try {
      setLoading(true)
      const { data } = await axios.post('/careers', {
        title,
        description: discription,
        summary
      })
      messageApi.open({
        type: 'success',
        content: 'Job created successfully!',
      });
      console.log(data)
      setLoading(false)
      router.push(`/admin/jobs`)
    } catch (err: any) {
      setLoading(false)
      messageApi.open({
        type: 'error',
        content: err.response.data.message,
      });
    }
  }

  const editJob = async () => {

  }

  return (
    <AdminLayout>
      <div>
        {contextHolder}
        <Link href={'/admin/jobs'}>
          <div className='flex'>
            <img src="/assets/icons/Back.png" className='h-6' alt="" /> <p className='text-xl fontbold my-auto ml-4'>Back</p>
          </div>
        </Link>
        <div className='border mt-8 p-6 rounded-md'>
          {query.page !== undefined ? <p className='text-lg'>Edit job post</p> : <p className='text-lg'>Add a job post</p>}
          <div className='my-6'>
            <label htmlFor="">Job title</label>
            <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='Enter job title' className='w-full bg-[#EFEFF7] rounded-md p-3 my-1' />
          </div>
          <div className='my-6'>
            <label htmlFor="">Summary</label>
            <textarea value={summary} onChange={e => setSummary(e.target.value)} name="" placeholder='Enter a brief summary of the job' className='w-full bg-[#EFEFF7] rounded-md p-3 my-1 h-24' ></textarea>
          </div>
          <div className='my-6'>
            <label htmlFor="">Description</label>
            <MdEditor modelValue={discription} onChange={setDiscription} language='en-US' toolbars={['bold', 'underline', 'italic', 'strikeThrough', 'title', 'sub', 'sup', 'quote', 'unorderedList', 'orderedList', 'link',]} />
          </div>

          <div className=''>
            <Link href={'/admin/jobs'}><button className='p-3 font-bold px-6 rounded-md'>Cancel</button></Link>
            {query.page !== undefined ? <button onClick={() => editJob()} className='p-3 font-bold bg-warning rounded-md px-6'>{loading ? 'loading...' : 'Edit'}</button> : <button onClick={() => addJob()} className='p-3 font-bold bg-warning rounded-md px-6'>{loading ? 'loading...' : 'Publish'}</button>
            }
          </div>
        </div>
      </div>
    </AdminLayout>

  );
};

export default CreateJob;