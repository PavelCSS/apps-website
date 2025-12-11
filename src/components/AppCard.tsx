import React from 'react';
import { AppData } from '../data/apps';
import './AppCard.css';
import { Link } from 'react-router-dom';

interface AppCardProps {
    app: AppData;
}

const AppCard: React.FC<AppCardProps> = ({ app }) => {
    const { name, description, logo, appleId, googleId, id } = app;

    return (
        <div className="app-card fade-in">
            <div className="app-logo-wrapper">
                <img src={logo} alt={`${name} logo`} className="app-logo" />
            </div>
            <h3 className="app-name">{name}</h3>
            <p className="app-description">{description}</p>

            <div className="app-footer">
                <div className="store-links">
                    {appleId && (
                        <a
                            href={`https://apps.apple.com/app/id${appleId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Download on the App Store"
                        >
                            <img src="/app-store.png" alt="Download on the App Store" className="store-badge" />
                        </a>
                    )}
                    {googleId && (
                        <a
                            href={`https://play.google.com/store/apps/details?id=${googleId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Get it on Google Play"
                        >
                            <img src="/google-play-store.png" alt="Get it on Google Play" className="store-badge" />
                        </a>
                    )}
                </div>

                <Link to={`/privacy-policy?appId=${id}`} className="privacy-mini-link">
                    Privacy Policy
                </Link>
            </div>
        </div>
    );
};

export default AppCard;
