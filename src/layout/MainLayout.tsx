import FooterNav from '@/components/FooterNav';
import HeaderNav from '@/components/HeaderNav';
import React, { Fragment, ReactChild } from 'react';

const MainLayout = ({ children }: { children: ReactChild }) => {
  return (
    <Fragment>
      <title>FigTree</title>
      <HeaderNav />
      <main>
        {children}
      </main>
      <FooterNav />
    </Fragment>
  );
};

export default MainLayout;