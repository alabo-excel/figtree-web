import AdminLayout from '@/layout/AdminLayout';
import { UserType } from '@/types/Applicant.types';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Customers = () => {

  const [data, setData] = useState<UserType[]>()

  const columns: ColumnsType<UserType> = [
    {
      title: 'Customer Name ',
      dataIndex: 'name',
      key: 'name',
      render: (_, record) => record.fName + ' ' + record.lName,

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
      render: (text) => text.substring(0, 10),
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
  ];

  // const data: DataType[] = [
  //   {
  //     name: 'John Brown',
  //     email: '32',
  //     phone: 'New York No. 1 Lake Park',
  //     date: "Processing",
  //     country: "Nigeria",
  //   },
  // ];
  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    try {
      const { data } = await axios.get('users')
      console.log(data)
      setData(data)
    } catch (err) {
      console.log(err)
    }
  }

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