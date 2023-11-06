import ShopBanner from '@/components/ShopBanner';
import ReviewCard from '@/components/cards/ReviewCard';
import MainLayout from '@/layout/MainLayout';
import { Review } from '@/types/Applicant.types';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';


const prevPage= ()=>{
  history.back()
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review []>([])
  const getReviews = async () => {
    try {
      const { data } = await axios.get('reviews')
      // console.log(data)
      setReviews(data)
    } catch (err) {
      console.log(err);
    }
  }
  
  useEffect(() => {
    getReviews()
  }, [])
  return (
    <MainLayout>
      <div>
        <ShopBanner text="Reviews" />
        <div className="lg:flex justify-between flex-wrap lg:m-8 m-4">
          {reviews.map((review, index) => <ReviewCard key={index} review={review} />)}
        </div>
        <p className="flex justify-items-end mb-28 w-full px-4" >
            <button onClick={prevPage} className='p-3 rounded-sm lg:w-[20%] md:w-[40%] sm:w-[100%] bg-warning'>Go Back</button>
        </p>
      </div>
    </MainLayout>

  );
};

export default Reviews;