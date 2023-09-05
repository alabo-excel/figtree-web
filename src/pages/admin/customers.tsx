import AdminLayout from '@/layout/AdminLayout';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';

const Customers = () => {
  interface DataType {
    name: string;
    email: string;
    phone: string;
    date: string;
    country: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Customer Name ',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Joined At',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
  ];

  const data: DataType[] = [
    {
      name: 'John Brown',
      email: '32',
      phone: 'New York No. 1 Lake Park',
      date: "Processing",
      country: "Nigeria",
    },
  ];

  return (
    <AdminLayout>
      <div>
        <p className='font-bold text-2xl'>Customers</p>
        <div className='border p-6 mt-6 rounded-t-xl'>
          <p className='text-xl'>All Customers</p>
          <p className='my-2'>You're viewing all registered customers below</p>
        </div>
        <div className='my-4'>
          <input type="text" className='p-3 rounded-md mb-4 border w-1/2' placeholder='Search Product' />
          <Table columns={columns} dataSource={data} />

        </div>
      </div>
    </AdminLayout>

  );
};

export default Customers;