import ShopBanner from '@/components/ShopBanner';
import ReviewCard from '@/components/cards/ReviewCard';
import MainLayout from '@/layout/MainLayout';
import { Review } from '@/types/Applicant.types';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState<Review []>([])
  const getReviews = async () => {
    try {
      const { data } = await axios.get('reviews')
      console.log(data)
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
      </div>
    </MainLayout>

  );
};

export default Reviews;