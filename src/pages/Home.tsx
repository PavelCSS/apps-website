import React from 'react';
import { apps } from '../data/apps';
import AppCard from '../components/AppCard';

const Home: React.FC = () => {
    return (
        <div className="home-page">
            <header className="main-header fade-in">
                <div className="header-content">
                    <div className="logo">Ziby Apps</div>
                    <a href="mailto:yashin.ziby@icloud.com" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 600 }}>
                        Contact
                    </a>
                </div>
            </header>

            <div className="container">
                <main>
                    <div className="hero fade-in" style={{ marginBottom: '4rem', textAlign: 'center' }}>
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                            Showcase of <br />
                            <span style={{ color: 'var(--accent-color)' }}>Awesome Apps</span>
                        </h1>
                        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                            Explore our collection of educational and utility applications designed to make life easier and learning fun.
                        </p>
                    </div>

                    <div className="apps-grid">
                        {apps.map((app) => (
                            <AppCard key={app.id} app={app} />
                        ))}
                    </div>
                </main>

                <footer className="main-footer fade-in">
                    <p style={{ marginBottom: '1rem' }}>
                        Contact us: <a href="mailto:yashin.ziby@icloud.com" style={{ color: 'var(--accent-color)' }}>yashin.ziby@icloud.com</a>
                    </p>
                    <p>&copy; {new Date().getFullYear()} Yashin Pavlo. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default Home;
