import React from 'react';
import { BellIcon, SettingsIcon, ShieldIcon } from 'lucide-react';
import './Navbar.css';
const Navbar = () => {
  return <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="logo-container">
            <ShieldIcon className="logo-icon" />
          </div>
          <div className="brand-text">
            <h1>Sistema de Seguridad</h1>
            <p>Gestión de Cámaras y Monitoreo</p>
          </div>
        </div>
        <div className="navbar-actions">
          <button className="icon-button">
            <BellIcon />
          </button>
          <button className="icon-button">
            <SettingsIcon />
          </button>
        </div>
      </div>
    </nav>;
};
export default Navbar;