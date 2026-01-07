import { motion } from 'framer-motion';
import { FaArrowRight, FaUsers, FaMicrophone, FaFileAlt } from 'react-icons/fa';

const About = () => {
    const stats = [
        { icon: <FaMicrophone />, value: "30+", label: "Keynote Speakers" },
        { icon: <FaUsers />, value: "500+", label: "Global Attendees" },
        { icon: <FaFileAlt />, value: "100+", label: "Research Papers" }
    ];

    return (
        <section id="about" className="section" style={{ backgroundColor: 'var(--color-bg-light)', padding: '8rem 0' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '5rem', alignItems: 'center' }}>

                    {/* Left content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="badge" style={{ marginBottom: '1.5rem', color: 'var(--color-accent-orange)', backgroundColor: 'rgba(249, 115, 22, 0.05)' }}>
                            About GECA
                        </div>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.2, marginBottom: '2rem', color: 'var(--color-primary)' }}>
                            Advancing Technology for a <br />
                            <span style={{ color: 'var(--color-accent-orange)' }}>Sustainable Future</span>
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                            The International Conference on Artificial Intelligence and Sustainable Development (ICAISD) brings together leading academicians, scientists, researchers, and scholars to exchange and share their experiences and research results on all aspects of Artificial Intelligence.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
                            Hosted by the prestigious <span style={{ fontWeight: 700, color: 'var(--color-text-main)' }}>Government College of Engineering Aurangabad (GECA)</span>, this year's theme focuses on how AI technologies can be leveraged to solve critical environmental and societal challenges.
                        </p>

                        {/* Stats Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '3rem' }}>
                            {stats.map((stat, i) => (
                                <div key={i}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-primary)', marginBottom: '0.25rem' }}>{stat.value}</div>
                                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <button className="btn btn-text" style={{ padding: 0, color: 'var(--color-accent-orange)', fontWeight: 800, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            Read more about GECA <FaArrowRight size={14} />
                        </button>
                    </motion.div>

                    {/* Right content: Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', position: 'relative' }}
                    >
                        {/* Main Tall Image */}
                        <div style={{
                            gridRow: 'span 2',
                            borderRadius: '32px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                            height: '500px'
                        }}>
                            <img src="/images/geca-building.jpg" alt="GECA Building" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>

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
                            boxShadow: '0 20px 40px rgba(249, 115, 22, 0.2)'
                        }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                <FaUsers />
                            </div>
                            <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Networking</h4>
                            <p style={{ opacity: 0.8, fontSize: '0.85rem' }}>Connect with global peers and researchers</p>
                        </div>

                        {/* Middle image */}
                        <div style={{
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                            height: '240px'
                        }}>
                            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Session" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>

                        {/* Floating Venue Badge */}
                        <div style={{
                            position: 'absolute',
                            bottom: '20px',
                            right: '20px',
                            backgroundColor: 'white',
                            padding: '1.25rem 2rem',
                            borderRadius: '20px',
                            boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            border: '1px solid #F1F5F9'
                        }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-accent-orange-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent-orange)' }}>
                                <FaFileAlt />
                            </div>
                            <div>
                                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--color-primary)' }}>World Class Venue</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>State of the art facilities</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
