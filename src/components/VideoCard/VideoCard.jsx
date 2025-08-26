import React from 'react';
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
  return <div className="video-card">
      <div className="video-thumbnail">
        <img src={image} alt={location} />
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