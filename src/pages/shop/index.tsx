import ShopBanner from '@/components/ShopBanner';
import ShopCard from '@/components/cards/ShopCard';
import MainLayout from '@/layout/MainLayout';
import { ProductType } from '@/types/Applicant.types';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const Shop = () => {
  const [products, setProducts] = useState<ProductType[]>([])

  const getProducts = async () => {
    try {
      const { data } = await axios.get('product')
      console.log(data)
      setProducts(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <MainLayout>
      <div>
        <ShopBanner text="All Skincare" />
        <div className='lg:mx-20 mx-4'>
          <div className="flex flex-wrap justify-between">
            {products.map((item, index) => (
              <ShopCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Shop;