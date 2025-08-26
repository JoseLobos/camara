import React from 'react';
import VideoCard from '../VideoCard/VideoCard';
import './VideoGrid.css';
const VideoGrid = () => {
  const videoData = [{
    id: 1,
    location: 'Entrada Principal',
    type: 'Movimiento',
    image: "/Captura_de_pantalla_%2857%29.png",
    date: '15/01/2024',
    time: '08:30',
    duration: '0:45',
    detections: 3
  }, {
    id: 2,
    location: 'Estacionamiento',
    type: 'Alerta',
    image: "/Captura_de_pantalla_%2857%29.png",
    date: '15/01/2024',
    time: '07:15',
    duration: '1:02',
    detections: 8
  }, {
    id: 3,
    location: 'Patio Trasero',
    type: 'Movimiento',
    image: "/Captura_de_pantalla_%2857%29.png",
    date: '15/01/2024',
    time: '06:45',
    duration: '0:38',
    detections: 2
  }, {
    id: 4,
    location: 'Entrada Principal',
    type: 'Programada',
    image: "/Captura_de_pantalla_%2857%29.png",
    date: '15/01/2024',
    time: '05:20',
    duration: '0:54',
    detections: 1
  }, {
    id: 5,
    location: 'Oficina Principal',
    type: 'Movimiento',
    image: "/Captura_de_pantalla_%2857%29.png",
    date: '15/01/2024',
    time: '04:30',
    duration: '1:12',
    detections: 5
  }];
  return <div className="video-grid">
      {videoData.map(video => <VideoCard key={video.id} data={video} />)}
    </div>;
};
export default VideoGrid;