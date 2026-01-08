import { motion } from 'framer-motion';
import { FaArrowRight, FaUsers, FaMicrophone, FaFileAlt } from 'react-icons/fa';

const About = () => {
    const stats = [
        { icon: <FaMicrophone />, value: "30+", label: "Keynote Speakers" },
        { icon: <FaUsers />, value: "500+", label: "Global Attendees" },
        { icon: <FaFileAlt />, value: "100+", label: "Research Papers" }
    ];

    return (
        <section id="about" className="section" style={{ backgroundColor: 'var(--color-bg-soft-blue)', padding: '8rem 0' }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '5rem',
                    alignItems: 'center'
                }} className="about-main-flex">

                    {/* Left content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ flex: '1 1 500px' }}
                    >
                        <div className="badge" style={{ marginBottom: '1.5rem', color: 'var(--color-accent-orange)', backgroundColor: 'rgba(249, 115, 22, 0.05)' }}>
                            About GECCS
                        </div>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: 900, lineHeight: 1.2, marginBottom: '2rem', color: 'var(--color-primary)' }}>
                            Advancing Technology for a <br />
                            <span style={{ color: 'var(--color-accent-orange)' }}>Sustainable Future</span>
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                            The International Conference on Artificial Intelligence and Sustainable Development (ICAISDG 26) brings together leading academicians, scientists, researchers, and scholars to exchange and share their experiences and research results on all aspects of Artificial Intelligence.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
                            Hosted by the prestigious <span style={{ fontWeight: 700, color: 'var(--color-text-main)' }}>Government College of Engineering, (Aurangabad) Chhatrapati Sambhajinagar (GECCS)</span>, this year's theme focuses on how AI technologies can be leveraged to solve critical environmental and societal challenges.
                        </p>

                        {/* Stats Flex */}
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '2rem',
                            marginBottom: '3rem'
                        }} className="stats-flex-container">
                            {stats.map((stat, i) => (
                                <div key={i} style={{ flex: '1 1 120px' }}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-primary)', marginBottom: '0.25rem' }}>{stat.value}</div>
                                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <a
                            href="http://www.geca.ac.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-text"
                            style={{ padding: 0, color: 'var(--color-accent-orange)', fontWeight: 800, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
                        >
                            Read more about GECCS <FaArrowRight size={14} />
                        </a>
                    </motion.div>

                    {/* Right content: Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{
                            flex: '1 1 400px',
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '1.5rem',
                            position: 'relative'
                        }}
                        className="about-image-flex"
                    >
                        {/* Main Tall Image */}
                        <div style={{
                            flex: '1 1 300px',
                            borderRadius: '32px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                            height: '500px'
                        }}>
                            <img src="/images/geca-building.jpg" alt="GECCS Building" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>

                        <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {/* Top Small Card (Networking) */}
                            <div style={{
                                borderRadius: '24px',
                                overflow: 'hidden',
                                backgroundColor: 'var(--color-accent-orange)',
                                padding: '1.5rem',
                                color: 'white',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                boxShadow: '0 20px 40px rgba(249, 115, 22, 0.2)',
                                flex: '1'
                            }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                    <FaUsers />
                                </div>
                                <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Networking</h4>
                                <p style={{ opacity: 0.8, fontSize: '0.85rem' }}>Connect with global peers and researchers</p>
                            </div>

                            <div style={{
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                height: '240px'
                            }}>
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/93EFs6KStWQ?si=pU2iyIZ-4AkyzKJv&autoplay=1&mute=1&controls=0"
                                    title="Department of E&TC, GECA"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
