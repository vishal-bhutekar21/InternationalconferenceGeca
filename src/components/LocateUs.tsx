import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaDirections, FaPhone, FaEnvelope } from 'react-icons/fa';

const LocateUs = () => {
    const gecaLocation = "Government College of Engineering, Station Road, Osmanpura, (Aurangabad) Chhatrapati Sambhajinagar, Maharashtra 431005";
    const googleMapsUrl = "https://www.google.com/maps/place/Government+College+of+Engineering,+Aurangabad/@19.8762,75.3433,17z";

    return (
        <section className="section" style={{ backgroundColor: 'var(--color-white)', padding: '6rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div className="badge">VENUE LOCATION</div>
                    <h2 style={{ fontSize: '3rem', fontWeight: 800, marginTop: '1rem', marginBottom: '1rem' }}>
                        Locate <span style={{ color: 'var(--color-accent-orange)' }}>Us</span>
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
                        Find your way to Government College of Engineering, (Aurangabad) Chhatrapati Sambhajinagar - the premier venue for ICAISG 2026
                    </p>
                </div>

                <div className="grid-responsive grid-2-col" style={{ gap: 'clamp(2rem, 4vw, 3rem)', alignItems: 'center' }}>
                    {/* Map Container */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="map-container"
                        style={{
                            boxShadow: 'var(--shadow-lg)',
                            border: '1px solid var(--color-border)'
                        }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.1234567890123!2d75.3433!3d19.8762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDUyJzM0LjMiTiA3NcKwMjAnMzUuOSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="GECCS Location Map"
                        />
                    </motion.div>

                    {/* Location Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{
                            backgroundColor: 'var(--color-bg-light)',
                            padding: '2.5rem',
                            borderRadius: 'var(--radius-lg)',
                            marginBottom: '2rem',
                            border: '1px solid var(--color-border)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{
                                    fontSize: '1.5rem',
                                    color: 'var(--color-accent-orange)',
                                    marginTop: '0.25rem'
                                }}>
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Address</h3>
                                    <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                                        {gecaLocation}
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{
                                    fontSize: '1.5rem',
                                    color: 'var(--color-accent-orange)',
                                    marginTop: '0.25rem'
                                }}>
                                    <FaPhone />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Contact</h3>
                                    <p style={{ color: 'var(--color-text-muted)' }}>+91 99708 84849</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <div style={{
                                    fontSize: '1.5rem',
                                    color: 'var(--color-accent-orange)',
                                    marginTop: '0.25rem'
                                }}>
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Email</h3>
                                    <p style={{ color: 'var(--color-text-muted)' }}>info.icaisg26@geca.ac.in</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href={googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-orange"
                                style={{
                                    width: '100%',
                                    padding: '1.25rem',
                                    fontSize: '1.1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.75rem'
                                }}
                            >
                                <FaDirections />
                                Get Directions / View Map
                            </motion.button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LocateUs;
