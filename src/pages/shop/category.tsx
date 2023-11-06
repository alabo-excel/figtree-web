import ShopBanner from '@/components/ShopBanner';
import ShopCard from '@/components/cards/ShopCard';
import MainLayout from '@/layout/MainLayout';
import { ProductType } from '@/types/Applicant.types';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const Shop = () => {
  const [products, setProducts] = useState<ProductType[]>([])
  const { query } = useRouter()

  const getProducts = async () => {
    try {
      const { data } = await axios.get('product/category/' + query.page)
      // console.log(data)
      setProducts(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getProducts()
  }, [query.page])

  function replaceHyphensWithSpaces(inputString: string | string[] | undefined) {
    if (typeof inputString !== "string") {
      return
    }
    return inputString.replace(/-/g, " ");
  }

  return (
    <MainLayout>
      <div>
        <ShopBanner text={replaceHyphensWithSpaces(query.page)} />
        <div className='lg:mx-20'>
          <div className="lg:flex flex-wrap justify-between">
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