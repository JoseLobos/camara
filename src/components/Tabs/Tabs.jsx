import React, { useState } from 'react';
import { VideoIcon, BarChartIcon } from 'lucide-react';
import './Tabs.css';
const Tabs = () => {
  const [activeTab, setActiveTab] = useState('recordings');
  return <div className="tabs">
      <button className={`tab ${activeTab === 'recordings' ? 'active' : ''}`} onClick={() => setActiveTab('recordings')}>
        <VideoIcon size={18} />
        <span>Grabaciones</span>
      </button>
      <button className={`tab ${activeTab === 'statistics' ? 'active' : ''}`} onClick={() => setActiveTab('statistics')}>
        <BarChartIcon size={18} />
        <span>Estadísticas</span>
      </button>
    </div>;
};
export default Tabs;