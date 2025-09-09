import React, { useEffect, useState } from 'react';
import VideoCard from '../VideoCard/VideoCard';
import './VideoGrid.css';

// Local fallback sample data (used if API fails)
const FALLBACK_VIDEOS = [{
  id: 'clip1.mp4',
  location: 'Entrada Principal',
  type: 'Movimiento',
  image: '/Captura_de_pantalla_%2857%29.png',
  video: '/videos/clip1.mp4',
  date: '15/01/2024',
  time: '08:30',
  duration: '0:45',
  detections: 3
}, {
  id: 'clip2.mp4',
  location: 'Estacionamiento',
  type: 'Alerta',
  image: '/Captura_de_pantalla_%2857%29.png',
  video: '/videos/clip2.mp4',
  date: '15/01/2024',
  time: '07:15',
  duration: '1:02',
  detections: 8
}];

const mapApiToCard = (item, index) => {
  // item expected shape from /api/videos: { name, size, mtime, url }
  const name = item.name || `video-${index}`;
  const dateObj = item.mtime ? new Date(item.mtime) : null;
  const date = dateObj ? dateObj.toLocaleDateString() : '';
  const time = dateObj ? dateObj.toLocaleTimeString() : '';

  return {
    id: name,
    location: name.replace(/\.[^.]+$/, ''), // filename without extension
    type: 'Clip',
    image: '/Captura_de_pantalla_%2857%29.png',
    video: item.url || item.urlpath || item.path || '',
    date,
    time,
    duration: item.duration || '',
    detections: item.detections || 0
  };
};

const VideoGrid = () => {
  const [videos, setVideos] = useState(FALLBACK_VIDEOS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const resp = await fetch('/api/videos');
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        const data = await resp.json();
        // API shape: { videos: [ { name, size, mtime, url } ] } or an array
        const list = Array.isArray(data) ? data : data.videos || [];
        const mapped = list.map(mapApiToCard);
        if (mounted && mapped.length > 0) setVideos(mapped);
      } catch (e) {
        console.warn('VideoGrid: failed to fetch /api/videos', e);
        if (mounted) setError(e.message || String(e));
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  return (
    <div className="video-grid">
      {loading && <p>Cargando videos...</p>}
      {error && <p className="error">Error al cargar videos: {error}</p>}
      {!loading && videos.map(video => <VideoCard key={video.id} data={video} />)}
    </div>
  );
};

export default VideoGrid;