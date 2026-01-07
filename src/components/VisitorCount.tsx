import { motion } from 'framer-motion';
import { FaUsers, FaEye, FaGlobe } from 'react-icons/fa';
import AnimatedCounter from './AnimatedCounter';

const VisitorCount = () => {
    const stats = [
        { icon: <FaEye />, label: 'Total Visitors', value: 15847, suffix: '' },
        { icon: <FaUsers />, label: 'Registered Delegates', value: 450, suffix: '+' },
        { icon: <FaGlobe />, label: 'Countries Represented', value: 25, suffix: '+' }
    ];

    return (
        <section className="section" style={{ backgroundColor: 'var(--color-bg-light)', padding: '5rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <div className="badge">CONFERENCE STATISTICS</div>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: '1rem' }}>
                        Join the <span style={{ color: 'var(--color-accent-orange)' }}>Global Community</span>
                    </h2>
                </div>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    justifyContent: 'center'
                }} className="stats-flex-container">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ y: -5 }}
                            style={{
                                backgroundColor: 'var(--color-white)',
                                padding: 'clamp(2rem, 4vw, 2.5rem) clamp(1.5rem, 3vw, 2rem)',
                                borderRadius: 'var(--radius-lg)',
                                textAlign: 'center',
                                boxShadow: 'var(--shadow-md)',
                                border: '1px solid var(--color-border)',
                                flex: '1 1 300px',
                                maxWidth: '350px'
                            }}
                        >
                            <div style={{
                                fontSize: '2.5rem',
                                color: 'var(--color-accent-orange)',
                                marginBottom: '1rem'
                            }}>
                                {stat.icon}
                            </div>
                            <div style={{
                                fontSize: '3rem',
                                fontWeight: 900,
                                color: 'var(--color-primary)',
                                marginBottom: '0.5rem'
                            }}>
                                <AnimatedCounter from={0} to={stat.value} suffix={stat.suffix} />
                            </div>
                            <div style={{
                                fontSize: '0.9rem',
                                color: 'var(--color-text-muted)',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VisitorCount;
