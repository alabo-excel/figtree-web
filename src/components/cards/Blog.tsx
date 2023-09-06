import { BlogTypes } from '@/types/Applicant.types';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import { getCookie } from 'cookies-next';
import { message } from 'antd';

const UserBlog = ({ blog }: { blog: BlogTypes }) => {
  const author = getCookie('user')
  const [messageApi, contextHolder] = message.useMessage();

  const likeBlog = async () => {
    try {
      const { data } = await axios.put(`/blog/react/${blog._id}`, {
        user: author
      })
      // console.log(data)
      messageApi.open({
        type: 'success',
        content: 'Blog liked successfully!',
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
    <div className='flex border lg:mb-8 mb-4 relative'>
      {contextHolder}
      <img src={blog.image} className='w-1/2 h-96 object-cover' alt="" />
      <div className='w-1/2 lg:p-8 p-4'>
        <div className=''>
          <img src="/assets/logo-bg.png" className='w-40' alt="" />
          <p className='text-xs text-[#00000080]'>{blog.date.substring(0, 10)}</p>
          <Link href={`/blog/${blog._id}`}><p className='text-3xl my-3'>{blog.title}</p></Link>
          <p className='text-lg my-2'>{blog.brief}</p>
        </div>
        <div className='flex w-[45%] absolute bottom-0 border-t p-3 justify-between'>
          <p className=' text-sm'>{blog.views.length} Views</p>
          <p className='flex  text-sm'>{blog.reaction.length}<img onClick={() => likeBlog()} className='w-4 my-auto cursor-pointer h-4 mx-1' src="/assets/icons/favourite.png" alt="" /></p>
        </div>
      </div>
    </div>
  );
};

export default UserBlog;