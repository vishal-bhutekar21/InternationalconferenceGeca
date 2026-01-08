import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaChevronRight, FaGlobe, FaCertificate, FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
        <section
            className="hero-section-bg"
            style={{
                position: 'relative',
                padding: 'clamp(6rem, 15vw, 10rem) 0 clamp(4rem, 10vw, 8rem)',
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden'
            }}>
            {/* Professional Grid Pattern Overlay */}
            < div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `radial-gradient(var(--color-accent-orange-light) 0.5px, transparent 0.5px)`,
                backgroundSize: '30px 30px',
                opacity: 0.15,
                zIndex: 0
            }} />

            < div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '4rem',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }} className="hero-flex-container">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ flex: '1 1 550px' }}
                    >
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', backgroundColor: 'var(--color-orange-soft)', padding: '0.5rem 1rem', borderRadius: '50px', marginBottom: '2rem' }}>
                            <div className="pulse-dot" />
                            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent-orange)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                ICAISDG 26 • Call for Papers
                            </span>
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(2.8rem, 7vw, 4.5rem)',
                            fontWeight: 900,
                            lineHeight: 1.1,
                            marginBottom: '1.75rem',
                            color: 'var(--color-primary)',
                            letterSpacing: '-0.03em'
                        }}>
                            Innovating for a <br />
                            <span style={{
                                background: 'linear-gradient(135deg, var(--color-accent-orange) 0%, #EA580C 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>Sustainable Future</span> <br />
                            Through AI
                        </h1>

                        <p style={{
                            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                            lineHeight: 1.6,
                            color: 'var(--color-text-muted)',
                            marginBottom: '2.5rem',
                            maxWidth: '680px',
                            fontWeight: 500
                        }}>
                            The <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>International Conference on Artificial Intelligence and Sustainable Development (ICAISDG 26)</span> is a premier platform for global researchers, hosted by <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Centre of Excellence, E&TC, Government College of Engineering, Chhatrapati Sambhajinagar</span>. Join us for a transformative exchange of ideas in technical innovation and environmental stewardship.
                        </p>

                        <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
                            <NavLink to="/registration" className="btn btn-orange" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem', borderRadius: '50px' }}>
                                Register Now <FaChevronRight size={12} style={{ marginLeft: '0.5rem' }} />
                            </NavLink>
                            <button className="btn btn-outline" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem', borderRadius: '50px', backgroundColor: 'white' }}>
                                Submission Link
                            </button>
                        </div>

                        {/* Stats / Info tags */}
                        {/* Info tags & Credibility Badges */}
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', backgroundColor: '#F1F5F9', padding: '0.4rem 0.8rem', borderRadius: '8px' }}>
                                <FaCalendarAlt color="var(--color-accent-orange)" size={14} />
                                <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#334155' }}>Aug 27-28, 2026</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', backgroundColor: '#F1F5F9', padding: '0.4rem 0.8rem', borderRadius: '8px' }}>
                                <FaMapMarkerAlt color="var(--color-accent-orange)" size={14} />
                                <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#334155' }}>GECCS, Chhatrapati Sambhajinagar</span>
                            </div>
                        </div>

                    </motion.div>

                    {/* Right Image Wrapper */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        style={{ position: 'relative', flex: '1 1 450px' }}
                        className="hero-image-container"
                    >
                        <div style={{
                            borderRadius: '48px',
                            overflow: 'hidden',
                            boxShadow: '0 50px 100px rgba(0,0,0,0.12)',
                            aspectRatio: '1/1',
                            border: '1px solid rgba(255,255,255,0.4)',
                            position: 'relative'
                        }}>
                            <img
                                src="/images/geca-drone.jpg"
                                alt="GECCS Campus"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />

                            {/* Overlay Card - Refined Layout */}
                            <div style={{
                                position: 'absolute',
                                bottom: '2rem',
                                left: '2rem',
                                right: '2rem',
                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                backdropFilter: 'blur(20px)',
                                borderRadius: '28px',
                                padding: '2.5rem',
                                boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                                border: '1px solid rgba(255,255,255,0.5)'
                            }} className="hero-overlay-card">
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '0.7rem',
                                    fontWeight: 900,
                                    color: 'white',
                                    backgroundColor: 'var(--color-accent-orange)',
                                    padding: '0.4rem 1rem',
                                    borderRadius: '50px',
                                    marginBottom: '1rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em'
                                }}>Conference Theme</div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                                    Building Sustainable Futures <br />Through <span style={{ color: 'var(--color-accent-orange)' }}>AI Innovation</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div >

            <style>{`
                .hero-section-bg {
                    background-image: linear-gradient(to bottom right, rgba(255,255,255,0.9), rgba(255,255,255,0.7), rgba(239, 246, 255, 0.8)), url("/images/geca-drone.jpg");
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
                }
                .pulse-dot {
                    width: 8px;
                    height: 8px;
                    background: var(--color-accent-orange);
                    border-radius: 50%;
                    animation: pulse 2s infinite;
                }
                @keyframes pulse {
                    0% { box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.7); }
                    70% { box-shadow: 0 0 0 10px rgba(249, 115, 22, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(249, 115, 22, 0); }
                }
                @media (max-width: 1024px) {
                    .hero-flex-container {
                        flex-direction: column !important;
                        text-align: center;
                        gap: 3rem !important;
                    }
                    .hero-flex-container > div {
                        flex: 1 1 auto !important;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .hero-flex-container p {
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .hero-image-container {
                        max-width: 500px;
                        margin: 0 auto;
                    }
                }
                @media (max-width: 767px) {
                    .hero-overlay-card {
                        padding: 1.25rem !important;
                        bottom: 1rem !important;
                        left: 1rem !important;
                        right: 1rem !important;
                    }
                    /* Disable fixed background on mobile to ensure proper scaling */
                    .hero-section-bg {
                        background-attachment: scroll !important;
                        background-position: center top !important;
                    }
                }
            `}</style>
        </section >
    );
};


export default Hero;
