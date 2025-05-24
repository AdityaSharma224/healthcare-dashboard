import React from 'react';
import Header from '../AppLayout/Header';
import Sidebar from '../AppLayout/Sidebar';
import DashboardMainContent from '../AppLayout/DashboardMainContent';
import '../../styles/App.css';

const DashboardOverview = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-layout">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default DashboardOverview;