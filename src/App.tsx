import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Tabs from './components/Tabs/Tabs';
import FilterBar from './components/FilterBar/FilterBar';
import VideoGrid from './components/VideoGrid/VideoGrid';
import './App.css';
export function App() {
  return <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Tabs />
        <FilterBar />
        <VideoGrid />
      </div>
    </div>;
}