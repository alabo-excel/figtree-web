import { Review } from '@/types/Applicant.types';
import Link from 'next/link';
import React from 'react';

const ReviewCard = ({ review }: { review: Review }) => {
  const route = window.location.pathname
  return (
    <div className='lg:w-[30%] lg:my-0 my-4'>
      <div className='flex'>
        <img className='w-1/2 h-52 object-cover' src={review.image[0]} alt="" />
        <img className='w-1/2 h-52 object-cover' src={review.image[1]} alt="" />
      </div>
      <div>
        <p className='text-[#F26122] capitalize text-lg text-center my-3'>{review.title}</p>
        <p>{review.description.substring(0, 50)}</p>
        {
          route.includes('admin') ? <Link href={`/admin/reviews/single?page=${review._id}`}><p className='text-center underline'>Read more</p></Link> :
            <Link href={`/reviews/single?page=${review._id}`}><p className='text-center underline'>Read more</p></Link>
        }
      </div>
    </div>
  );
};

export default ReviewCard;