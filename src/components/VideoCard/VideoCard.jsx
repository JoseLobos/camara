import React, { useEffect, useRef, useState } from 'react';
import { ClockIcon, EyeIcon } from 'lucide-react';
import './VideoCard.css';
const VideoCard = ({
  data
}) => {
  const {
    id,
    location,
    type,
    image,
    date,
    time,
    duration,
    detections
  } = data;
  const getTypeClass = () => {
    switch (type.toLowerCase()) {
      case 'movimiento':
        return 'type-movement';
      case 'alerta':
        return 'type-alert';
      case 'programada':
        return 'type-scheduled';
      default:
        return '';
    }
  };
  // lazy-load video src when card becomes visible
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!data.video) return;
    const el = videoRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      // no IntersectionObserver support — load immediately
      setLoaded(true);
      return;
    }
    let mounted = true;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && mounted) {
          setLoaded(true);
          io.disconnect();
        }
      });
    }, { threshold: 0.25 });
    io.observe(el);
    return () => { mounted = false; io.disconnect(); };
  }, [data.video]);

  return <div className="video-card">
      <div className="video-thumbnail" ref={videoRef}>
        {data.video ? (
          loaded ? (
            <video src={data.video} controls preload="metadata" poster={image} />
          ) : (
            // placeholder shows poster until video is loaded
            <img className="lazy-poster" src={image} alt={location} />
          )
        ) : (
          <img src={image} alt={location} />
        )}
        <span className={`video-type ${getTypeClass()}`}>{type}</span>
      </div>
      <div className="video-info">
        <div className="video-header">
          <h3>{location}</h3>
          <span className="video-id">ID: {id}</span>
        </div>
        <div className="video-details">
          <div className="detail-item">
            <ClockIcon size={14} className="detail-icon" />
            <span>{date}, {time}</span>
          </div>
          <div className="detail-item">
            <ClockIcon size={14} className="detail-icon" />
            <span>Duración: {duration}</span>
          </div>
          <div className="detail-item">
            <EyeIcon size={14} className="detail-icon" />
            <span>{detections} detecciones</span>
          </div>
        </div>
      </div>
    </div>;
};
export default VideoCard;