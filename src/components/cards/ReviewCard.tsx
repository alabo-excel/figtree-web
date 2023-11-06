import { Review } from '@/types/Applicant.types';
import Link from 'next/link';
import React from 'react';

const ReviewCard = ({ review }: { review: Review }) => {
  const route = window.location.pathname
  return (
    <div className='lg:w-[30%] w-[33.33%] lg:my-0 my-4 sm:w-[100%]'>
      <div className='flex'>
        <img className='w-1/2 h-52 object-cover' src={review.image[0]} alt="" />
        <img className='w-1/2 h-52 object-cover' src={review.image[1]} alt="" />
      </div>
      <div>
        <p className='text-[#F26122] capitalize lg:text-lg text-base text-center my-3'>{review.title}</p>
        <p className='lg:text-base text-sm'>{review.description.substring(0, 50)}</p>
        {
          route.includes('admin') ? <Link href={`/admin/reviews/single?page=${review._id}`}><p className='text-center underline'>Read more</p></Link> :
            <Link href={`/reviews/single?page=${review._id}`}><p className='text-center underline'>Read more</p></Link>
        }
      </div>
    </div>
  );
};

export default ReviewCard;