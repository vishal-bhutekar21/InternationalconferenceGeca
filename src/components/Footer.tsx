import { conferenceConfig } from '../data/conferenceData';

const Footer = () => {
    return (
        <footer className="no-print" style={{
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            padding: '4rem 0 2rem'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>
                    <div>
                        <h3 style={{ color: 'white', marginBottom: '1rem' }}>{conferenceConfig.title}</h3>
                        <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>
                            {conferenceConfig.venue}
                        </p>
                    </div>
                    <div>
                        <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1rem' }}>Contact</h4>
                        <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Email: contact@icaisd2025.org</p>
                        <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Phone: +91 123 456 7890</p>
                    </div>
                    <div>
                        <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', opacity: 0.8, fontSize: '0.9rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: 'white' }}>Registration</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: 'white' }}>Keynote Speakers</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: 'white' }}>Paper Submission</a></li>
                        </ul>
                    </div>
                </div>
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    opacity: 0.6,
                    fontSize: '0.8rem'
                }}>
                    © 2025 {conferenceConfig.title}. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
