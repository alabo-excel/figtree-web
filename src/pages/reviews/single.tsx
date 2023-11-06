import ShopBanner from '@/components/ShopBanner';
import MainLayout from '@/layout/MainLayout';
import { Review } from '@/types/Applicant.types';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';


const prevPage= ()=>{
  history.back()
}

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
          <div className='flex mt-10 sm:flex-col gap-3'>
            <img className='w-1/2 h-80 object-cover sm:object-contain sm:w-full' src={review?.image[0]} alt="" />
            <img className='w-1/2 h-80 object-cover sm:object-contain sm:w-full' src={review?.image[1]} alt="" />
          </div>
          <div>
            <p className='text-[#F26122] text-xl text-center my-3'>{review?.title}</p>
            <p className='lg:text-base text-sm px-3'>{review?.description}</p>
            <p className="mb-28 mt-7 flex justify-center">
              <button onClick={prevPage} className='p-3 m-auto rounded-sm lg:w-[20%] md:w-[50%] sm:w-[90%] bg-warning'>Go Back</button>
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Single;