import AdminLayout from '@/layout/AdminLayout';
import { Review } from '@/types/Applicant.types';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const SingleReview = () => {
  const [review, setReview] = useState<Review>()
  const { query } = useRouter()

  const getReview = async () => {
    try {
      const { data } = await axios.get(`reviews/${query.page}`)
      // console.log(data[0])
      setReview(data[0])
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getReview()
  }, [])

  return (
    <AdminLayout>
      <div>
        <div className='flex justify-between'>
          <p></p>
          <Link href={`/admin/reviews/new?page=${review?._id}`}><button className='w-40 font-bold ml-auto p-3 rounded-md bg-warning'>Edit Review</button></Link>
        </div>
        <div className='lg:w-[80%] mx-auto lg:mt-10'>
          <div className='flex'>
            <img className='w-1/2 h-80 object-cover' src={review?.image[0]} alt="" />
            <img className='w-1/2 h-80 object-cover' src={review?.image[1]} alt="" />
          </div>
          <div>
            <p className='text-[#F26122] text-xl text-center my-3'>{review?.title}</p>
            <p>{review?.description}</p>
          </div>
        </div>
      </div>
    </AdminLayout>

  );
};

export default SingleReview;