import AdminLayout from '@/layout/AdminLayout';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import Link from 'next/link';
import React from 'react';

const Products = () => {
  interface DataType {
    product: string;
    category: string;
    date: string;
    price: string;
    delete: any;
    view: any;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Product ',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Amount per product',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '',
      dataIndex: 'delete',
      key: 'delete',
    },
    {
      title: '',
      dataIndex: 'view',
      key: 'view',
    },
  ];

  const data: DataType[] = [
    {
      product: 'John Brown',
      category: '32',
      date: 'New York No. 1 Lake Park',
      price: "Processing",
      delete: (<img src='/assets/icons/fluent_delete.png' />),
      view: (<img src='/assets/icons/view.png' />)
    },
  ];
  return (
    <AdminLayout>
      <div>
        <p className='font-bold text-3xl'>Products</p>
        <div className='m-4 border rounded-t-xl'>
          <div className='flex justify-between p-4'>
            <div className=''>
              <p className='text-xl'>All Products</p>
              <p className='my-2'>You're viewing all products below</p>
            </div>
            <Link href={'/admin/products/create'}>
              <button className='p-3 rounded-md bg-warning h-12 my-auto font-bold px-10'>+ Add New Product</button>
            </Link>
          </div>
          {/* <div className='flex justify-between p-4'>
            <div className='flex w-[30%] justify-between'>
              <p className='font-bold'>Total Products</p>
              <p className='text-[#FFCE07]'>150</p>
            </div>
            <div className='flex w-[30%] justify-between'>
              <p className='font-bold'>Products Categories</p>
              <p className='text-[#00AF4D]'>20</p>
            </div>
            <div className='flex w-[30%] justify-between'>
              <p className='font-bold'>Total Products Value</p>
              <p className='text-[#66170F]'>N500,000</p>
            </div>
          </div> */}
        </div>
        <div className='m-4'>
          <input type="text" className='p-3 rounded-md mb-4 border w-1/2' placeholder='Search Product' />
          <Table columns={columns} dataSource={data} />

        </div>
      </div>
    </AdminLayout>
  );
};

export default Products;