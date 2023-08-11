import ShopBanner from '@/components/ShopBanner';
import ReviewCard from '@/components/cards/ReviewCard';
import MainLayout from '@/layout/MainLayout';
import React from 'react';

const Reviews = () => {
  return (

    <MainLayout>
      <div>
        <ShopBanner text="Reviews" />
        <div className="lg:flex justify-between flex-wrap lg:m-8 m-4">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </MainLayout>

  );
};

export default Reviews;