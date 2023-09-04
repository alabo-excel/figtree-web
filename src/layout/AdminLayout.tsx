import Sidebar from '@/components/Sidebar';
import React, { ReactChild, Fragment } from 'react';

const AdminLayout = ({ children }: { children: ReactChild }) => {
  return (
    <Fragment>
      <title>FigTree Admin</title>
      <main>
        <div className='flex'>
          <Sidebar />
          <div className='w-[80%] ml-auto p-8'>{children}</div>
        </div>
      </main>
    </Fragment>
  );
};

export default AdminLayout;