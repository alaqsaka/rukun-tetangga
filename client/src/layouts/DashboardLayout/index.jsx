import React from 'react';
import { Header } from '../../components/atoms';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Header></Header>
      <div className="dashboard-layout__content" style={{ paddingTop: '20px' }}>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
