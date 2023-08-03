import ShopBanner from '@/components/ShopBanner';
import ShopCard from '@/components/cards/ShopCard';
import MainLayout from '@/layout/MainLayout';
import React from 'react';

const Shop = () => {
  const products = [
    {
      title: "Cream",
      price: "₦ 2,000",
      img: [
        "ing1.png",
        "ing2.png",
      ]
    }
  ]

  return (
    <MainLayout>
      <div>
        <ShopBanner text="All Skincare" />
        <div className='lg:mx-20'>
          <div className="lg:flex flex-wrap justify-between">
            {products.map((item, index) => (
              <ShopCard item={item} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Shop;