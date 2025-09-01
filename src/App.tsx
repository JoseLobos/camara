import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Tabs from './components/Tabs/Tabs.jsx';
import './App.css';

// Componente principal de la aplicación
export const App: React.FC = () => {
	return (
		<div className="app-container">
			<Navbar />
			<main className="main-content">
				<Tabs />
			</main>
		</div>
	);
};

// También exportación por defecto para compatibilidad si se usa import default
export default App;
