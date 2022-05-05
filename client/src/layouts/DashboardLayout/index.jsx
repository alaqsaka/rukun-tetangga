import React from 'react';
import { Header, Footer } from '../../components/atoms';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Header></Header>
      <div className="dashboard-layout__content">
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;