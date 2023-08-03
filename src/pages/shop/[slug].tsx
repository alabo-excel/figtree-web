import ShopBanner from '@/components/ShopBanner';
import MainLayout from '@/layout/MainLayout';
import React from 'react';

const SingleProduct = () => {
  return (
    <MainLayout>
      <div>
        <ShopBanner text="Product Details" />
      </div>
    </MainLayout>
  );
};

export default SingleProduct;