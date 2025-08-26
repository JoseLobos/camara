import React from 'react';
import { BarChart2Icon, ActivityIcon, AlertTriangleIcon, CameraIcon, ClockIcon } from 'lucide-react';
import './Statistics.css';
const Statistics = () => {
  return (
    <div className="statistics-container">
      {/* Stats Cards */}
      <div className="stats-cards">
        <div className="stat-card">
          <div className="stat-info">
            <span className="stat-title">Total Grabaciones</span>
            <span className="stat-value red">123</span>
          </div>
          <div className="stat-icon-container">
            <div className="stat-icon blue-bg">
              <BarChart2Icon size={24} />
            </div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-info">
            <span className="stat-title">Detecciones de Movimiento</span>
            <span className="stat-value blue">100</span>
          </div>
          <div className="stat-icon-container">
            <div className="stat-icon yellow-bg">
              <ActivityIcon size={24} />
            </div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-info">
            <span className="stat-title">Alertas de Seguridad</span>
            <span className="stat-value red">23</span>
          </div>
          <div className="stat-icon-container">
            <div className="stat-icon red-bg">
              <AlertTriangleIcon size={24} />
            </div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-info">
            <span className="stat-title">Cámaras Activas</span>
            <span className="stat-value green">3</span>
          </div>
          <div className="stat-icon-container">
            <div className="stat-icon green-bg">
              <CameraIcon size={24} />
            </div>
          </div>
        </div>
      </div>
      {/* Camera Status Section */}
      <div className="camera-status-section">
        <div className="section-header">
          <CameraIcon size={18} />
          <h3>Estado de Cámaras</h3>
        </div>
        <div className="camera-grid">
          {/* Camera 1 - Entrada Principal */}
          <div className="camera-card">
            <div className="camera-header">
              <h4>Entrada Principal</h4>
              <span className="status online">En línea</span>
            </div>
            <div className="camera-stats">
              <div className="stat-row">
                <div className="stat-column">
                  <span className="stat-label">Grabaciones Totales</span>
                  <span className="stat-number blue">45</span>
                </div>
                <div className="stat-column">
                  <span className="stat-label">Eventos de Movimiento</span>
                  <span className="stat-number red">38</span>
                </div>
              </div>
              <div className="last-activity">
                <ClockIcon size={14} />
                <span>Última actividad: 15/1/2024, 8:30:00</span>
              </div>
            </div>
          </div>
          {/* Camera 2 - Estacionamiento */}
          <div className="camera-card">
            <div className="camera-header">
              <h4>Estacionamiento</h4>
              <span className="status online">En línea</span>
            </div>
            <div className="camera-stats">
              <div className="stat-row">
                <div className="stat-column">
                  <span className="stat-label">Grabaciones Totales</span>
                  <span className="stat-number blue">32</span>
                </div>
                <div className="stat-column">
                  <span className="stat-label">Eventos de Movimiento</span>
                  <span className="stat-number red">25</span>
                </div>
              </div>
              <div className="last-activity">
                <ClockIcon size={14} />
                <span>Última actividad: 15/1/2024, 7:15:00</span>
              </div>
            </div>
          </div>
          {/* Camera 3 - Patio Trasero */}
          <div className="camera-card">
            <div className="camera-header">
              <h4>Patio Trasero</h4>
              <span className="status offline">Desconectada</span>
            </div>
            <div className="camera-stats">
              <div className="stat-row">
                <div className="stat-column">
                  <span className="stat-label">Grabaciones Totales</span>
                  <span className="stat-number blue">18</span>
                </div>
                <div className="stat-column">
                  <span className="stat-label">Eventos de Movimiento</span>
                  <span className="stat-number red">15</span>
                </div>
              </div>
              <div className="last-activity">
                <ClockIcon size={14} />
                <span>Última actividad: 15/1/2024, 6:45:00</span>
              </div>
            </div>
          </div>
          {/* Camera 4 - Oficina Principal */}
          <div className="camera-card">
            <div className="camera-header">
              <h4>Oficina Principal</h4>
              <span className="status online">En línea</span>
            </div>
            <div className="camera-stats">
              <div className="stat-row">
                <div className="stat-column">
                  <span className="stat-label">Grabaciones Totales</span>
                  <span className="stat-number blue">28</span>
                </div>
                <div className="stat-column">
                  <span className="stat-label">Eventos de Movimiento</span>
                  <span className="stat-number red">22</span>
                </div>
              </div>
              <div className="last-activity">
                <ClockIcon size={14} />
                <span>Última actividad: 15/1/2024, 4:30:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Statistics;