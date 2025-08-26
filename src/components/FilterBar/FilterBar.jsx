import React from 'react';
import { FilterIcon, SearchIcon } from 'lucide-react';
import './FilterBar.css';

const FilterBar = () => {
  return (
    <div className="filter-bar">
      <div className="filter-header">
        <FilterIcon size={16} />
        <h3>Filtros y Ordenación</h3>
      </div>

      <div className="filter-controls">
        {/* Fecha Inicio */}
        <div className="filter-group">
          <label>Fecha Inicio</label>
          <div className="input-with-icon">
            <input type="date" />
         
          </div>
        </div>

        {/* Fecha Fin */}
        <div className="filter-group">
          <label>Fecha Fin</label>
          <div className="input-with-icon">
            <input type="date" />
       
          </div>
        </div>

        {/* Tipo de Evento */}
        <div className="filter-group">
          <label>Tipo de Evento</label>
          <select>
            <option>Todos</option>
            <option>Deteccion de Movimiento</option>
            <option>Alerta</option>
            <option>Programada</option>
          </select>
        </div>

        {/* Ordenar por */}
        <div className="filter-group">
          <label>Ordenar por</label>
          <select>
            <option>Fecha</option>
            <option>Duracion</option>
            <option>Camara</option>
          </select>
        </div>

        {/* Botón de búsqueda */}
        <button className="search-button">
          <SearchIcon size={16} />
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
