import React, { useState } from 'react';
import { VideoIcon, BarChartIcon } from 'lucide-react';
import './Tabs.css';

import FilterBar from '../FilterBar/FilterBar';
import VideoGrid from '../VideoGrid/VideoGrid';
import Statistics from '../Statistics/Statistics';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('recordings');

  return (
    <div className="tabs-wrapper">
      {/* Botones de navegación */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'recordings' ? 'active' : ''}`}
          onClick={() => setActiveTab('recordings')}
        >
          <VideoIcon size={18} />
          <span>Grabaciones</span>
        </button>
        <button
          className={`tab ${activeTab === 'statistics' ? 'active' : ''}`}
          onClick={() => setActiveTab('statistics')}
        >
          <BarChartIcon size={18} />
          <span>Estadísticas</span>
        </button>
      </div>

      {/* Mostrar solo si estamos en Grabaciones */}
      {activeTab === 'recordings' && (
        <>
          <FilterBar />
          <VideoGrid />
        </>
      )}

      {/* Mostrar solo si estamos en Estadísticas */}
      {activeTab === 'statistics' && <Statistics />}
    </div>
  );
};

export default Tabs;
