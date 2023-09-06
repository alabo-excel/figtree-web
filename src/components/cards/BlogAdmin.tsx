import { BlogTypes } from '@/types/Applicant.types';
import Link from 'next/link';
import React from 'react';

const BlogAdminCard = ({ blog }: { blog: BlogTypes }) => {
  return (
    <div className='border w-[33%]'>
      <img src={blog.image} className='object-cover h-44 w-full' alt="" />
      <div className='p-3 border-b'>
        <Link href={`/admin/blogs/blog?page=${blog._id}`}><p className='tet-2xl font-bold my-2'>{blog.title}</p></Link>
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