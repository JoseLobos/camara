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
          const list = data.videos || [];
          // sort descending by mtime
          list.sort((a: VideoItem, b: VideoItem) => new Date(b.mtime).getTime() - new Date(a.mtime).getTime());
          setVideos(list);
        }
      } catch (e: any) {
        if (active) setError(e.message);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => { active = false; };
  }, []);

  const latest = videos.length > 0 ? new Date(videos[0].mtime) : null;

  return (
    <section className="video-clips-summary">
      {loading && <p>Cargando videos...</p>}
      {error && <p className="error">Error: {error}</p>}

      {!loading && !error && (
        <div className="summary-card">
          <div className="summary-header">
            <div>
              <div className="summary-title">Videos disponibles</div>
              <div className="summary-sub">Últimos videos mostrados en las cards</div>
            </div>
            <div className="summary-count">{videos.length}</div>
          </div>
          {latest && <div className="summary-meta">Última actualización: <strong>{latest.toLocaleString()}</strong></div>}
          <div className="summary-actions">
            <a className="btn-link" href="/videos">Abrir carpeta de videos</a>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoClips;
