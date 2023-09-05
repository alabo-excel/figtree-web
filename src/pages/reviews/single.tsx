import ShopBanner from '@/components/ShopBanner';
import MainLayout from '@/layout/MainLayout';
import { Review } from '@/types/Applicant.types';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Single = () => {
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
    <MainLayout>
      <div>
        <ShopBanner text="Reviews" />
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
    </MainLayout>
  );
};

export default Single;