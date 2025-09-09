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
    detections: item.detections || 0,
    // preserve original mtime for sorting/grouping
    mtimeISO: item.mtime || null,
    mtime: dateObj
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

  // Group videos by recency
  const groupVideos = (list) => {
    const now = new Date();
    const msPerDay = 24 * 60 * 60 * 1000;

    const groups = {
      Hoy: [],
      Ayer: [],
      'Esta semana': [],
      'Este mes': [],
      'Más antiguo': []
    };

    list.forEach((v) => {
      const d = v.mtime instanceof Date ? v.mtime : (v.mtime ? new Date(v.mtime) : null);
      if (!d) {
        groups['Más antiguo'].push(v);
        return;
      }
      // compute difference in days (floor)
      const diffDays = Math.floor((now - d) / msPerDay);
      if (diffDays === 0) groups['Hoy'].push(v);else if (diffDays === 1) groups['Ayer'].push(v);else if (diffDays <= 7) groups['Esta semana'].push(v);else if (diffDays <= 30) groups['Este mes'].push(v);else groups['Más antiguo'].push(v);
    });

    // sort each group by date desc
    Object.keys(groups).forEach(k => {
      groups[k].sort((a, b) => {
        const da = a.mtime ? new Date(a.mtime).getTime() : 0;
        const db = b.mtime ? new Date(b.mtime).getTime() : 0;
        return db - da;
      });
    });

    return groups;
  };

  const grouped = groupVideos(videos);

  // filtering by type
  const TYPES = ['Todos', 'Movimiento', 'Alerta', 'Programada', 'Clip'];
  const [filter, setFilter] = React.useState('Todos');

  // collapsed state per group
  const [collapsed, setCollapsed] = React.useState({});

  const toggleGroup = (key) => {
    setCollapsed(c => ({ ...c, [key]: !c[key] }));
  };

  const matchesFilter = (item) => {
    if (!item) return false;
    if (filter === 'Todos') return true;
    return (item.type || '').toLowerCase() === filter.toLowerCase();
  };

  return (
    <div className="video-grid">
      <div className="filter-bar">
        {TYPES.map(t => (
          <button key={t} className={`filter-button ${filter === t ? 'active' : ''}`} onClick={() => setFilter(t)}>{t}</button>
        ))}
      </div>

      {loading && <p>Cargando videos...</p>}
      {error && <p className="error">Error al cargar videos: {error}</p>}

      {!loading && !error && (
        Object.entries(grouped).map(([title, items]) => {
          const filtered = items.filter(matchesFilter);
          if (!filtered || filtered.length === 0) return null;
          const isCollapsed = !!collapsed[title];
          return (
            <section key={title} className="video-group">
              <h3 className="group-title">
                <span>{title} <small>({filtered.length})</small></span>
                <div>
                  <button className="group-toggle" onClick={() => toggleGroup(title)}>{isCollapsed ? 'Mostrar' : 'Ocultar'}</button>
                </div>
              </h3>
              {!isCollapsed && <div className="group-items">{filtered.map(video => <VideoCard key={video.id} data={video} />)}</div>}
            </section>
          );
        })
      )}
    </div>
  );
};

export default VideoGrid;