import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/ServiceData';
// @ts-ignore
import MusicNoteIcon from '@mui/icons-material/MusicNote';
// @ts-ignore
import PersonIcon from '@mui/icons-material/Person';
// @ts-ignore
import MicIcon from '@mui/icons-material/Mic';
// @ts-ignore
import PublicIcon from '@mui/icons-material/Public';
// @ts-ignore
import CampaignIcon from '@mui/icons-material/Campaign';
// @ts-ignore
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Services.css';

const iconMap: { [key: string]: any } = {
  MusicNoteIcon,
  PersonIcon,
  MicIcon,
  PublicIcon,
  CampaignIcon,
};

const Services: FC = () => {
  const renderIcon = (iconName?: string) => {
    if (!iconName || !iconMap[iconName]) return null;
    const IconComponent = iconMap[iconName];
    return <IconComponent style={{ fontSize: '3rem' }} />;
  };

  return (
    <main className="services-container">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Professional music services designed to elevate your career and amplify your sound</p>
      </div>

      <div className="services-grid">
        {SERVICES.map((service) => (
          <Link 
            key={service.id} 
            to={`/services/${service.slug}`}
            className="service-card-link"
          >
            <div className="service-card">
              <div className="service-icon">
                {renderIcon(service.iconName)}
              </div>
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
              <div className="service-fab">
                <ArrowForwardIcon style={{ fontSize: '1.5rem' }} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Services;
