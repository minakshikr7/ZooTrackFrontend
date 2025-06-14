import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Dashboard } from './Dashboard';
import { AnimalList } from './AnimalList';
import { StaffList } from './StaffList';

function Home() {
  const [currentView, setCurrentView] = useState('dashboard');

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar setCurrentView={setCurrentView} />
      <div className="     flex-1" 
 style={{
  width: "70%",
  position: "absolute",
  right: "40px",
  top: "90px",
}}
    >
        {currentView === 'dashboard' && <Dashboard />}
        {currentView === 'animals' && <AnimalList />}
        {currentView === 'staff' && <StaffList />}
      </div>
    </div>
  );
}

export default Home;