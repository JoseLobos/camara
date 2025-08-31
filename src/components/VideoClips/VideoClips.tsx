import React, { useEffect, useState } from 'react';
import './VideoClips.css';

interface VideoItem {
  name: string;
  size: number; // bytes
  mtime: string; // ISO date
  url: string;  // /videos/<file>
}

export const VideoClips: React.FC = () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const resp = await fetch('/api/videos');
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        const data = await resp.json();
        if (active) {
          setVideos(data.videos || []);
        }
      } catch (e: any) {
        if (active) setError(e.message);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => { active = false; };
  }, []);

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    const units = ['KB','MB','GB','TB'];
    let v = bytes / 1024; let i = 0;
    while (v >= 1024 && i < units.length - 1) { v /= 1024; i++; }
    return v.toFixed(1) + ' ' + units[i];
  };

  return (
    <section className="video-clips">
      <h2>Clips de Video</h2>
      {loading && <p>Cargando...</p>}
      {error && <p className="error">Error: {error}</p>}
      {!loading && !error && videos.length === 0 && <p className="empty">No hay videos disponibles.</p>}
      {!loading && !error && videos.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Fecha</th>
              <th>Tamaño</th>
              <th>Enlace</th>
            </tr>
          </thead>
          <tbody>
            {videos.map(v => {
              const date = new Date(v.mtime);
              return (
                <tr key={v.name}>
                  <td>{v.name}</td>
                  <td>{date.toLocaleString()}</td>
                  <td>{formatSize(v.size)}</td>
                  <td><a href={v.url} target="_blank" rel="noreferrer">Ver</a></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default VideoClips;
