import React from 'react';
import { FilterIcon, SearchIcon, CalendarIcon } from 'lucide-react';
import './FilterBar.css';
const FilterBar = () => {
  return <div className="filter-bar">
      <div className="filter-header">
        <FilterIcon size={16} />
        <h3>Filtros y Ordenación</h3>
      </div>
      <div className="filter-controls">
        <div className="filter-group">
          <label>Fecha Inicio</label>
          <div className="input-with-icon">
            <input type="text" placeholder="dd/mm/aaaa" />
            <CalendarIcon size={16} className="input-icon" />
          </div>
        </div>
        <div className="filter-group">
          <label>Fecha Fin</label>
          <div className="input-with-icon">
            <input type="text" placeholder="dd/mm/aaaa" />
            <CalendarIcon size={16} className="input-icon" />
          </div>
        </div>
        <div className="filter-group">
          <label>Tipo de Evento</label>
          <select>
            <option>Todos</option>
            <option>Movimiento</option>
            <option>Alerta</option>
            <option>Programada</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Ordenar por</label>
          <select>
            <option>Fecha</option>
            <option>Tipo</option>
            <option>Ubicación</option>
          </select>
        </div>
        <button className="search-button">
          <SearchIcon size={16} />
        </button>
      </div>
    </div>;
};
export default FilterBar;