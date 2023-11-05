import ShopBanner from '@/components/ShopBanner';
import ShopCard from '@/components/cards/ShopCard';
import MainLayout from '@/layout/MainLayout';
import { ProductType } from '@/types/Applicant.types';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const New = () => {
  const [newProducts, setNewProducts] = useState<ProductType[]>([])

  const getNewProducts = async () => {
    try {
      const {data}= await axios.get('product/new');
      console.log(data)
      setNewProducts(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getNewProducts()
  }, [])

  return (
    <MainLayout>
      <div>
        <ShopBanner text="Newly Launched" />
        <div className='lg:mx-20 mx-4'>
          <div className="flex flex-wrap justify-between">
            {newProducts.map((item, index) => (
              <ShopCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default New;