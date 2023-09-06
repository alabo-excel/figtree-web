import ReviewCard from '@/components/cards/ReviewCard';
import AdminLayout from '@/layout/AdminLayout';
import axios from 'axios';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    getReviews()
  }, [])

  const getReviews = async () => {
    try {
      const { data } = await axios.get('reviews')
      // console.log(data)
      setReviews(data)
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <AdminLayout>
      <div>
        <div className='flex justify-between'>
          <p className='text-2xl font-bold'>Ratings & Review</p>
          <Link href={'/admin/reviews/new'}>
            <button className='bg-warning p-3 rounded-md font-bold px-6'>+ Add New Review</button>
          </Link>
        </div>
        <div className='p-3 border mt-4 rounded-xl'>
          <p>Reviews</p>

          <div className='flex mt-3 flex-wrap justify-between'>
            {reviews.map((review, index) => <ReviewCard key={index} review={review} />)}
          </div>
        </div>
      </div>
    </AdminLayout>

  );
};

export default Reviews;