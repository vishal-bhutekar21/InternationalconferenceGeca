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
                                ICAISG2026 • Call for Papers
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
                            Artificial Intelligence for <br />
                            <span style={{
                                background: 'linear-gradient(135deg, var(--color-accent-orange) 0%, #EA580C 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>Societal Growth</span>
                        </h1>

                        <p style={{
                            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                            lineHeight: 1.6,
                            color: 'var(--color-text-muted)',
                            marginBottom: '2.5rem',
                            maxWidth: '680px',
                            fontWeight: 500
                        }}>
                            The <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>International Conference on Artificial Intelligence for Societal Growth (ICAISG2026)</span> brings together thought leaders, researchers, policymakers, technologists, and social innovators from around the world. Hosted by <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Department of Electronics and Telecommunication Engg, Centre Of Excellence (Thinking Systems for Signal and Image Processing), Government College of Engineering, Aurangabad, Chh. Sambhajinagar</span>. Join us for a transformative exchange of ideas that harness AI for societal advancement.
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
                                <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#334155' }}>August 2026</span>
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
                        <div style={{ position: 'relative' }}>
                            <div style={{
                                borderRadius: '48px',
                                overflow: 'hidden',
                                boxShadow: '0 50px 100px rgba(0,0,0,0.12)',
                                aspectRatio: '1/1',
                                border: '1px solid rgba(255,255,255,0.4)',
                                position: 'relative'
                            }} className="hero-img-wrapper">
                                <img
                                    src="/images/geca-drone.jpg"
                                    alt="GECCS Campus"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>

                            {/* Overlay Card - Refined Layout */}
                            <div style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                backdropFilter: 'blur(12px)',
                                borderRadius: '20px',
                                padding: '1.75rem',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                border: '1px solid rgba(255,255,255,0.8)'
                            }} className="hero-overlay-card">
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                                    <div style={{
                                        fontSize: '0.65rem',
                                        fontWeight: 800,
                                        color: 'var(--color-accent-orange)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}>
                                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-accent-orange)' }}></span>
                                        Conference Theme
                                    </div>
                                </div>

                                <div style={{
                                    fontSize: '1.35rem',
                                    fontWeight: 800,
                                    color: 'var(--color-primary)',
                                    lineHeight: 1.3,
                                    letterSpacing: '-0.02em',
                                    marginBottom: '1.25rem'
                                }}>
                                    Harnessing AI for <span style={{ color: 'var(--color-accent-orange)' }}>Societal Growth</span>
                                </div>

                                <div style={{
                                    borderTop: '1px solid rgba(0,0,0,0.08)',
                                    paddingTop: '1rem',
                                    marginTop: 'auto'
                                }}>
                                    <div style={{
                                        fontSize: '0.6rem',
                                        fontWeight: 700,
                                        color: '#94A3B8',
                                        textTransform: 'uppercase',
                                        marginBottom: '0.5rem',
                                        letterSpacing: '0.05em'
                                    }}>
                                        Organized By
                                    </div>
                                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155', lineHeight: 1.4 }}>
                                        Government College Of Engineering
                                    </div>
                                    <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '0.2rem' }}>
                                        Chh. Sambhajinagar • Center of Excellence (E&TC)
                                    </div>
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
                .hero-overlay-card {
                    position: absolute;
                    bottom: 1.5rem;
                    left: 1.5rem;
                    right: 1.5rem;
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
                    .hero-image-container {
                        max-width: 100% !important;
                        padding: 0 1rem;
                    }
                    /* On mobile, move card below image */
                    .hero-overlay-card {
                        position: relative !important;
                        bottom: auto !important;
                        left: auto !important;
                        right: auto !important;
                        margin-top: 1.5rem;
                        transform: none !important;
                    }
                    /* Adjust image container slightly */
                    .hero-img-wrapper {
                        border-radius: 32px !important;
                        max-width: 400px;
                        margin: 0 auto;
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
