import { BlogTypes } from '@/types/Applicant.types';
import { message } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';

const BlogAdminCard = ({ blog }: { blog: BlogTypes }) => {
  const [messageApi, contextHolder] = message.useMessage();

  const deleteBlog = async () => {
    try {
      await axios.delete(`/blog/${blog._id}`)
      messageApi.open({
        type: 'success',
        content: 'Blog deleted successfully!',
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
    <div className='border w-[33%]'>
      {contextHolder}
      <img src={blog.image} className='object-cover h-44 w-full' alt="" />
      <div className='p-3 border-b'>
        <div className='flex justify-between'>
          <Link href={`/admin/blogs/blog?page=${blog._id}`}><p className='tet-2xl font-bold my-2'>{blog.title}</p></Link>
          <div className='cursor-pointer my-auto' onClick={() => deleteBlog()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg>
          </div>
        </div>
        <p className='text-sm my-2 text-[#000000B2]'>{blog.brief}</p>
      </div>
      <div className='flex p-3 justify-between'>
        <p className=' text-sm'>{blog.views.length} Views</p>
        <p className='flex  text-sm'>{blog.reaction.length}<img className='w-4 my-auto h-4 mx-1' src="/assets/icons/favourite.png" alt="" /></p>
      </div>
    </div>
  );
};

export default BlogAdminCard;