import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <div className="dashboard-layout__navbar">navbar</div>
      <div className="dashboard-layout__content">
        <div className="dashboard-layout__sidebar">sidebar</div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
