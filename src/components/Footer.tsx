import { conferenceConfig } from '../data/conferenceData';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaGlobe, FaEnvelope, FaPhone, FaUsers } from 'react-icons/fa';
import AnimatedCounter from './AnimatedCounter';

const Footer = () => {
    return (
        <footer className="no-print" style={{
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            padding: '5rem 0 2rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Accent */}
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(249, 115, 22, 0.05) 0%, transparent 70%)',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '3.5rem',
                    marginBottom: '4rem',
                    justifyContent: 'space-between'
                }} className="footer-flex-container">

                    {/* Brand & Stats */}
                    <div style={{ flex: '1 1 300px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <img src={conferenceConfig.logo} alt="GECCS Logo" style={{ width: '50px', height: '50px', borderRadius: '8px', backgroundColor: 'white', padding: '2px' }} />
                            <h3 style={{ color: 'white', margin: 0, fontSize: '1.4rem', fontWeight: 800 }}>{conferenceConfig.title}</h3>
                        </div>
                        <p style={{ opacity: 0.7, fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '300px' }}>
                            {conferenceConfig.description}
                        </p>

                        {/* Official Logos */}
                        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', alignItems: 'center' }}>
                            <img
                                src="/logos/dte-logo.gif"
                                alt="DTE Maharashtra"
                                style={{ height: '60px', width: 'auto', backgroundColor: 'white', borderRadius: '50%', padding: '2px' }}
                            />
                            <img
                                src="/logos/satyamev_jayate.jpg"
                                alt="Satyamev Jayate"
                                style={{ height: '70px', width: 'auto', mixBlendMode: 'plus-lighter' }}
                            />
                        </div>

                        {/* Visitor Count */}
                        <div style={{
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            padding: '1rem 1.5rem',
                            borderRadius: '16px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '1rem',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <div style={{ color: 'var(--color-accent-orange)', fontSize: '1.2rem' }}><FaUsers /></div>
                            <div>
                                <div style={{ fontSize: '0.65rem', fontWeight: 800, opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Visitor Count</div>
                                <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>
                                    <AnimatedCounter from={1000} to={12458} duration={2.5} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Navigation */}
                    <div style={{ flex: '1 1 180px' }}>
                        <h4 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 800, marginBottom: '1.5rem', position: 'relative', paddingBottom: '0.5rem' }}>
                            Quick Links
                            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '30px', height: '2px', backgroundColor: 'var(--color-accent-orange)' }} />
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><a href="/about" className="footer-link">About Conference</a></li>
                            <li><a href="/tracks" className="footer-link">Research Tracks</a></li>
                            <li><a href="/registration" className="footer-link">Registration Info</a></li>
                            <li><a href="/contact" className="footer-link">Support & Contact</a></li>
                        </ul>
                    </div>

                    {/* Venue & Contact */}
                    <div style={{ flex: '1 1 220px' }}>
                        <h4 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 800, marginBottom: '1.5rem', position: 'relative', paddingBottom: '0.5rem' }}>
                            Venue
                            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '30px', height: '2px', backgroundColor: 'var(--color-accent-orange)' }} />
                        </h4>
                        <p style={{ opacity: 0.7, fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                            GECCS, Station Road, <br />
                            Osmanpura, (Aurangabad) Chhatrapati Sambhajinagar, <br />
                            Maharashtra 431005
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                            <a href="mailto:contact@icaisd2026.org" style={{ color: 'white', textDecoration: 'none', opacity: 0.7 }} className="footer-link">
                                <FaEnvelope style={{ marginRight: '0.5rem' }} /> contact@icaisd2026.org
                            </a>
                            <span style={{ opacity: 0.7 }}>
                                <FaPhone style={{ marginRight: '0.5rem' }} /> +91 240 2403101
                            </span>
                        </div>
                    </div>

                    {/* Connect With Us */}
                    <div style={{ flex: '1 1 200px' }}>
                        <h4 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 800, marginBottom: '1.5rem', position: 'relative', paddingBottom: '0.5rem' }}>
                            Connect
                            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '30px', height: '2px', backgroundColor: 'var(--color-accent-orange)' }} />
                        </h4>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="#" className="social-icon" style={{ backgroundColor: '#1877F2' }}><FaFacebook /></a>
                            <a href="#" className="social-icon" style={{ backgroundColor: '#E4405F' }}><FaInstagram /></a>
                            <a href="#" className="social-icon" style={{ backgroundColor: '#0A66C2' }}><FaLinkedin /></a>
                            <a href="#" className="social-icon" style={{ backgroundColor: '#FF0000' }}><FaYoutube /></a>
                            <a href="https://geca.ac.in" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ backgroundColor: '#444' }}><FaGlobe /></a>
                        </div>
                        <p style={{ marginTop: '1.5rem', opacity: 0.5, fontSize: '0.75rem' }}>
                            Follow us for latest updates and announcements.
                        </p>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1.5rem',
                    fontSize: '0.85rem',
                    opacity: 0.6
                }}>
                    <div>© 2026 {conferenceConfig.title}. All rights reserved.</div>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="https://geca.ac.in" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>GECCS Website</a>
                        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</a>
                        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Sitemap</a>
                    </div>
                </div>
            </div>

            <style>{`
                .footer-link {
                    color: white;
                    text-decoration: none;
                    transition: 0.3s;
                    opacity: 0.7;
                }
                .footer-link:hover {
                    opacity: 1;
                    padding-left: 5px;
                    color: var(--color-accent-orange);
                }
                .social-icon {
                    width: 38px;
                    height: 38px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 1.2rem;
                    transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    text-decoration: none;
                }
                .social-icon:hover {
                    transform: translateY(-5px) rotate(8deg);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                }
                @media (max-width: 1024px) {
                    .footer-flex-container {
                        gap: 2.5rem !important;
                    }
                    .footer-flex-container > div {
                        flex: 1 1 40% !important;
                    }
                }
                @media (max-width: 767px) {
                    .footer-flex-container > div {
                        flex: 1 1 100% !important;
                    }
                }
            `}</style>
        </footer >
    );
};

export default Footer;

