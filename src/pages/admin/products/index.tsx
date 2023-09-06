import AdminLayout from '@/layout/AdminLayout';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { message } from 'antd';

const Products = () => {
  interface DataType {
    title: string;
    category: string;
    date: string;
    price: string;
    delete: any;
    view: any;
    _id: string;
  }
  const [messageApi, contextHolder] = message.useMessage();

  const [data, setData] = useState<DataType[]>([])
  const getProducts = async () => {
    try {
      const { data } = await axios.get('product')
      // console.log(data)
      setData(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  const deleteProduct = async (id: string) => {
    try {
      await axios.delete(`/product/remove/${id}`)
      getProducts()
      messageApi.open({
        type: 'success',
        content: 'Product deleted successfully!',
      });
    } catch (err: any) {
      console.log(err)
      messageApi.open({
        type: 'error',
        content: err.response.data.message,
      });
    }
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Product ',
      dataIndex: 'title',
      key: 'title',
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
      render: (text) => text.substring(0, 10),

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
      render: (_, record) => (<img onClick={() => deleteProduct(record._id)} src='/assets/icons/fluent_delete.png' />),
    },
    {
      title: '',
      dataIndex: 'view',
      key: 'view',
      render: (_, record) => <Link href={`/admin/products/single?page=${record._id}`}><img src='/assets/icons/view.png' /></Link>,
    },
  ];

  return (
    <AdminLayout>
      <div>
        {contextHolder}
        <p className='font-bold text-2xl'>Products</p>
        <div className='my-4 border rounded-t-xl'>
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
        <div className='my-4'>
          <input type="text" className='p-3 rounded-md mb-4 border w-1/2' placeholder='Search Product' />
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Products;