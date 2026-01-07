import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Hero = () => {
    return (
        <section style={{
            position: 'relative',
            padding: '10rem 0 8rem',
            backgroundImage: `linear-gradient(rgba(255,255,255,0.78), rgba(255,255,255,0.88)), url("/images/geca-drone.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflow: 'hidden',
            filter: 'saturate(1.5)'
        }}>
            {/* Background Decorative Element */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(249, 115, 22, 0.05) 0%, transparent 70%)',
                zIndex: 0,
                borderRadius: '50%'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '4rem', alignItems: 'center' }}>

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent-orange)' }} />
                            <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--color-accent-orange)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                Call for Papers Open
                            </span>
                        </div>

                        <h1 style={{ fontSize: '5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '2rem', color: 'var(--color-primary)' }}>
                            Artificial <br />
                            Intelligence & <br />
                            <span style={{ color: 'var(--color-accent-orange)' }}>Sustainable <br />Development</span>
                        </h1>

                        <p style={{ fontSize: '1.25rem', lineHeight: 1.6, color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '600px' }}>
                            Join us for the 2025 International Conference hosted by <span style={{ fontWeight: 700, color: 'var(--color-secondary)' }}>Government College of Engineering Aurangabad (GECA)</span>. Exploring the future of ethical AI.
                        </p>

                        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem' }}>
                            <button className="btn btn-orange" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>Register Now</button>
                            <button className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>View Call for Papers</button>
                        </div>

                        {/* Keynote Avatars */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                {[1, 2, 3].map((i) => (
                                    <div key={i} style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        border: '3px solid white',
                                        marginLeft: i === 1 ? 0 : '-12px',
                                        overflow: 'hidden',
                                        backgroundColor: '#E2E8F0'
                                    }}>
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                ))}
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    border: '3px solid white',
                                    marginLeft: '-12px',
                                    backgroundColor: 'var(--color-accent-orange)',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.7rem',
                                    fontWeight: 800
                                }}>
                                    +12
                                </div>
                            </div>
                            <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Keynote speakers announced</span>
                        </div>
                    </motion.div>

                    {/* Right Visual Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{ position: 'relative' }}
                    >
                        {/* Main Image Container - PROPER BIG SIZE */}
                        <div style={{
                            borderRadius: '40px',
                            overflow: 'hidden',
                            boxShadow: '0 40px 100px rgba(0,0,0,0.2)',
                            position: 'relative',
                            aspectRatio: '1 / 1.1',
                            backgroundColor: 'var(--color-primary)',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <img
                                src="/images/geca-drone.jpg"
                                alt="GECA Campus Drone Shot"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(1.05) contrast(1.1)' }}
                            />

                            {/* Floating Conference Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                style={{
                                    position: 'absolute',
                                    bottom: '30px',
                                    left: '30px',
                                    right: '30px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: '24px',
                                    padding: '2rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1.5rem',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                                }}
                            >
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '16px',
                                    backgroundColor: 'var(--color-accent-orange-light)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--color-accent-orange)',
                                    fontSize: '1.5rem'
                                }}>
                                    <FaCalendarAlt />
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                                        Conference Date
                                    </div>
                                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                                        December 20-21, 2025
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                                        <FaMapMarkerAlt />
                                        Aurangabad, India
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative Background Glows */}
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            left: '-20px',
                            width: '100px',
                            height: '100px',
                            backgroundColor: 'var(--color-accent-orange)',
                            filter: 'blur(60px)',
                            opacity: 0.3,
                            zIndex: -1
                        }} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
