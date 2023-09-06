import AdminLayout from '@/layout/AdminLayout';
import { message } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import router, { useRouter } from 'next/router';
import React, { useState, useRef, useEffect } from 'react';

const New = () => {
  const beoferRef = useRef<HTMLInputElement>(null)
  const afterRef = useRef<HTMLInputElement>(null)
  const [messageApi, contextHolder] = message.useMessage();
  const [before, setBefore] = useState("")
  const [after, setAfter] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)
  const { query } = useRouter()

  const handleBefore = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    const reader = new FileReader()

    if (files && files.length > 0) {
      reader.readAsDataURL(files[0])
      reader.onloadend = () => {
        if (reader.result) {
          // const type = files[0].name.substr(files[0].name.length - 3)
          setBefore(
            reader.result as string,
          )
        }
      }
    }
  }
  const handleAfter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    const reader = new FileReader()

    if (files && files.length > 0) {
      reader.readAsDataURL(files[0])
      reader.onloadend = () => {
        if (reader.result) {
          // const type = files[0].name.substr(files[0].name.length - 3)
          setAfter(
            reader.result as string,
          )
        }
      }
    }
  }

  const addReview = async () => {
    try {
      setLoading(true)
      const { data } = await axios.post('/reviews', {
        title,
        description,
        image: [before, after]
      })
      messageApi.open({
        type: 'success',
        content: 'Review created successfully!',
      });
      console.log(data)
      setLoading(false)
      router.push(`/admin/reviews`)
    } catch (err: any) {
      setLoading(false)
      messageApi.open({
        type: 'error',
        content: err.response.data.message,
      });
    }
  }
  const getReview = async () => {
    try {
      const { data } = await axios.get(`reviews/${query.page}`)
      // console.log(data[0])
      // setReview(data[0])

      setTitle(data[0].title)
      setDescription(data[0].description)
      setBefore(data[0].image[0])
      setAfter(data[0].image[1])

    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    if (query.page !== undefined) {
      getReview()
    }
  }, [])
  const editReview = async () => {
    try {
      setLoading(true)
      const { data } = await axios.put(`/reviews/${query.page}`, {
        title,
        description,
        image: [before, after]
      })
      messageApi.open({
        type: 'success',
        content: 'Review edited successfully!',
      });
      console.log(data)
      setLoading(false)
      router.push(`/admin/reviews`)
    } catch (err: any) {
      setLoading(false)
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
        {query.page !== undefined ? <p className='text-2xl font-bold'>Edit Review</p> : <p className='text-2xl font-bold'>New Review</p>
        }
        <div className='border p-6 mt-4 rounded-xl'>
          <div>
            <p className='tet-xl'>Review Images</p>
            <div className='flex mt-4'>
              <div>
                <p className='text-sm p-2 text-center'>Before </p>
                <input type="file" ref={beoferRef} className="hidden" onChange={handleBefore} />

                {before === "" ? <div onClick={() => beoferRef.current?.click()} className='border w-72 cursor-pointer h-52 pt-10 rounded-md text-center'>
                  <img src="/assets/icons/upload.png" className='w-20 mx-auto' alt="" />
                  <p className='text-xs my-1'>Click to upload</p>
                  <p className='text-sm'>SVG, PNG, JPG</p>
                </div> : <img onClick={() => beoferRef.current?.click()} className='w-72 h-52 rounded-md' src={before} alt="" />}
              </div>

              <div className='ml-10'>
                <p className='text-sm p-2 text-center'>After </p>
                <input type="file" ref={afterRef} className="hidden" onChange={handleAfter} />

                {after === "" ? <div onClick={() => afterRef.current?.click()} className='border w-72 cursor-pointer h-52 pt-10 rounded-md text-center'>
                  <img src="/assets/icons/upload.png" className='w-20 mx-auto' alt="" />
                  <p className='text-xs my-1'>Click to upload</p>
                  <p className='text-sm'>SVG, PNG, JPG</p>
                </div> : <img onClick={() => afterRef.current?.click()} className='w-72 h-52 rounded-md' src={after} alt="" />}
              </div>
            </div>
          </div>
          <div className='my-4'>
            <label htmlFor="" className='my-1'>Review Title</label>
            <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='Enter Title' className='p-3 rounded-md bg-[#EFEFF7] w-full' />
          </div>
          <div className='my-4'>
            <label htmlFor="" className='my-1'>Review Description</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder='Enter Description' className='p-3 rounded-md bg-[#EFEFF7] w-full h-40' ></textarea>
          </div>

          <div className=''>
            <Link href={'/admin/products'}><button className='p-3 font-bold px-6 rounded-md'>Cancel</button></Link>
            {query.page !== undefined ? <button onClick={() => editReview()} className='p-3 font-bold bg-warning rounded-md px-6'>{loading ? 'loading...' : 'Edit'}</button> : <button onClick={() => addReview()} className='p-3 font-bold bg-warning rounded-md px-6'>{loading ? 'loading...' : 'Publish'}</button>
            }
          </div>
        </div>
      </div>
    </AdminLayout>

  );
};

export default New;