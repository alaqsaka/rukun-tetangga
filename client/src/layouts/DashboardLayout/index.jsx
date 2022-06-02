import React from 'react';
import { Header } from '../../components/atoms';

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <div>{children}</div>
      <div className="" style={{ paddingTop: '10px' }}></div>
    </div>
  );
};

export default DashboardLayout;
