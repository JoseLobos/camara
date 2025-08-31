import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Tabs from './components/Tabs/Tabs.jsx';
import VideoClips from './components/VideoClips/VideoClips';
import './App.css';

// Componente principal de la aplicación
export const App: React.FC = () => {
	return (
		<div className="app-container">
			<Navbar />
			<main className="main-content">
				<Tabs />
				<VideoClips />
			</main>
		</div>
	);
};

// También exportación por defecto para compatibilidad si se usa import default
export default App;
