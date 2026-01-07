import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
import { gecaStats } from '../data/conferenceData';

const GECA = () => {
    const disciplines = [
        "Computer Science & Engineering",
        "Information Technology",
        "Mechanical Engineering",
        "Electronics & Telecommunication",
        "Civil Engineering",
        "Electrical Engineering"
    ];

    return (
        <section id="geca" className="section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
            <div className="container">
                <div className="section-title-wrapper">
                    <div className="badge">Host Institution</div>
                    <h2 className="section-title">About GECCS</h2>
                    <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-accent-orange)', margin: '0 auto', borderRadius: 'var(--radius-full)' }} />
                </div>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '4rem',
                    alignItems: 'center'
                }} className="geca-flex-container">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ flex: '1 1 450px' }}
                    >
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: 600 }}>
                            Government College of Engineering, (Aurangabad) Chhatrapati Sambhajinagar (GECCS) <span style={{ fontWeight: 400, color: 'var(--color-text-muted)' }}>is an autonomous engineering institute located in the historic city of (Aurangabad) Chhatrapati Sambhajinagar, Maharashtra, India. Established in </span><span style={{ color: 'var(--color-accent-orange)', fontWeight: 700 }}>1960</span><span style={{ fontWeight: 400, color: 'var(--color-text-muted)' }}> by the Government of Maharashtra, it stands as a beacon of technical education in the region.</span>
                        </p>
                        <p style={{ marginBottom: '2.5rem', color: 'var(--color-text-muted)' }}>
                            With a rich legacy spanning over six decades, the institute is affiliated with Dr. Babasaheb Ambedkar Marathwada University.
                            It is recognized for its academic excellence, offering a diverse range of undergraduate, postgraduate, and doctoral
                            programs aimed at fostering innovation and engineering acumen.
                        </p>

                        <div className="card-glass" style={{ padding: '2rem', borderLeft: '4px solid var(--color-accent-orange)' }}>
                            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                <FaGraduationCap color="var(--color-accent-orange)" /> Key Disciplines
                            </h4>
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '1rem'
                            }}>
                                {disciplines.map((dis, i) => (
                                    <div key={i} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        fontSize: '0.9rem',
                                        flex: '1 1 200px'
                                    }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent-orange)' }} />
                                        {dis}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '3rem',
                            marginTop: '3rem'
                        }}>
                            {gecaStats.map((stat, i) => (
                                <div key={i}>
                                    <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-accent-orange)' }}>{stat.value}</div>
                                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{ flex: '1 1 400px' }}
                    >
                        <div style={{
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                            position: 'relative',
                            backgroundColor: '#eee'
                        }}>
                            <img src="/images/geca-building.jpg" alt="GECCS Building" style={{ width: '100%', display: 'block' }}
                                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: '20px',
                                left: '20px',
                                backgroundColor: 'rgba(0,0,0,0.6)',
                                color: 'white',
                                padding: '0.5rem 1rem',
                                borderRadius: '8px',
                                backdropFilter: 'blur(5px)',
                                fontSize: '0.8rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                <FaMapMarkerAlt color="var(--color-accent-orange)" />
                                (AURANGABAD) CHHATRAPATI SAMBHAJINAGAR, MAHARASHTRA
                            </div>
                            <div style={{
                                position: 'absolute',
                                bottom: '60px',
                                left: '20px',
                                color: 'white',
                                fontSize: '1.5rem',
                                fontWeight: 700
                            }}>
                                Main Campus Building
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GECA;
