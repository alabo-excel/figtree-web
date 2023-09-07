import React, { useState } from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import Link from 'next/link';

const Delivery = () => {
  const [data, setData] = useState<DataType[]>([])

  interface DataType {
    title: string;
    category: string;
    date: string;
    price: string;
    delete: any;
    view: any;
    _id: string;
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
      dataIndex: 'view',
      key: 'view',
      render: (_, record) => <Link href={`/admin/products/single?page=${record._id}`}><img src='/assets/icons/view.png' /></Link>,
    },
  ];

  return (
    <div>
      <div className='my-4'>
        <input type="text" className='p-3 rounded-md mb-4 border w-1/2' placeholder='Search Delivery Items' />
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Delivery;