import React from 'react';
import { Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';
import Link from 'next/link';

const Shop = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div className='flex justify-between p-2 w-[550px]'>
          <Link href={'/shop'} className='mr-20 w-full'>All Skincare</Link>
          <Link href={'/shop/category?page=lipcare'} className='mr-20 w-full'>Lipcare</Link>
          <Link href={'/shop/category?page=scrubs'} className='w-full'>Scrubs</Link>
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div className='flex justify-between p-2 text-left'>
          <Link href={'/shop/category?page=custom-oils'} className='mr-20 w-full'>Custom Oils</Link>
          <Link href={'/shop/category?page=moisturizers'} className='mr-20 w-full'>Moisturizers</Link>
          <Link href={'/shop/category?page=serums'} className='w-full'>Serums</Link>
        </div>
      ),
    },
    {
      key: '3',
      label: (
        <div className='flex justify-between p-2 text-left'>
          <Link href={'/shop/category?page=face-cleaners'} className='mr-20 w-full'>Face Cleaners</Link>
          <Link href={'/shop/category?page=pure-utters'} className='mr-20 w-full'>Pure Butters</Link>
          <Link href={'/shop/category?page=soaps'} className='w-full'>Soaps</Link>
        </div>
      ),
    },
    {
      key: '4',
      label: (
        <div className='flex justify-between p-2 text-left'>
          <Link href={'/shop/category?page=face-wash'} className='mr-20 w-full'>Face Wash</Link>
          <Link href={'/shop/category?page=pure-carrier-oils'} className='mr-20 w-full'>Pure Carrier Oils</Link>
          <Link href={'/shop/category?page=sponges'} className='w-full'>Sponges</Link>
        </div>
      ),
    },
    {
      key: '5',
      label: (
        <div className='flex justify-between p-2 text-left'>
          <Link href={'/shop/category?page=haircare'} className='mr-20 w-full'>Haircare</Link>
          <Link href={'/shop/category?page=pure-essential-oils'} className='mr-20 w-full'>Pure Essential Oils</Link>
          <Link href={'/shop/category?page=sponges'} className='w-full'>Toners</Link>
        </div>
      ),
    },
    {
      key: '6',
      label: (
        <Link href={'/shop/category?page=kits'} className='p-2'>Kits</Link>
      ),
    },
  ]
  return (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Shop
          <img src="/assets/icons/dropdown.png" alt="" />
          {/* <DownOutlined /> */}
        </Space>
      </a>
    </Dropdown>
  );
};

export default Shop;