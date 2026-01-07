import { motion } from 'framer-motion';
import { timelineMilestones } from '../data/conferenceData';
import { FaCalendarAlt, FaCheckCircle, FaClock } from 'react-icons/fa';

const ImportantDates = () => {
    return (
        <section id="dates-horizontal" className="section" style={{ backgroundColor: 'var(--color-bg-soft-blue)', padding: '8rem 0' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <div className="badge" style={{ marginBottom: '1.5rem' }}>CONFERENCE SCHEDULE</div>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--color-primary)', letterSpacing: '-0.02em' }}>
                        Important <span style={{ color: 'var(--color-accent-orange)' }}>Dates</span>
                    </h2>
                    <p style={{ maxWidth: '600px', margin: '1rem auto 0', color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                        Track the key milestones for ICAISD 2026. Don't miss the deadlines for submission and registration.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2.5rem',
                    position: 'relative'
                }}>
                    {timelineMilestones.map((milestone, index) => (
                        <motion.div
                            key={milestone.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(0,0,0,0.08)' }}
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '24px',
                                padding: '2.5rem',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                                border: '1px solid rgba(226, 232, 240, 0.6)',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                        >
                            {/* Status Badge */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '2rem'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    backgroundColor: milestone.status === 'active' ? 'var(--color-orange-soft)' : '#F1F5F9',
                                    padding: '0.4rem 0.8rem',
                                    borderRadius: '50px',
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    color: milestone.status === 'active' ? 'var(--color-accent-orange)' : '#64748b',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>
                                    {milestone.status === 'active' ? <FaClock /> : <FaCheckCircle />}
                                    {milestone.status === 'active' ? 'Active' : 'Upcoming'}
                                </div>
                                <div style={{
                                    fontSize: '0.75rem',
                                    fontWeight: 800,
                                    color: 'var(--color-primary)',
                                    opacity: 0.4,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em'
                                }}>
                                    {milestone.label}
                                </div>
                            </div>

                            {/* Date */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '0.75rem',
                                marginBottom: '1rem'
                            }}>
                                <FaCalendarAlt style={{ color: 'var(--color-accent-orange)', marginTop: '0.2rem', fontSize: '1.1rem' }} />
                                <h4 style={{
                                    fontSize: '1.2rem',
                                    fontWeight: 800,
                                    color: 'var(--color-primary)',
                                    lineHeight: 1.3
                                }}>
                                    {milestone.date}
                                </h4>
                            </div>

                            {/* Title */}
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: 900,
                                color: 'var(--color-secondary)',
                                marginBottom: '1rem'
                            }}>
                                {milestone.title}
                            </h3>

                            {/* Description */}
                            <p style={{
                                fontSize: '1rem',
                                color: 'var(--color-text-muted)',
                                lineHeight: 1.6,
                                flexGrow: 1
                            }}>
                                {milestone.description}
                            </p>

                            {/* Bottom Accent */}
                            <div style={{
                                marginTop: '2rem',
                                height: '4px',
                                width: '40px',
                                backgroundColor: milestone.status === 'active' ? 'var(--color-accent-orange)' : '#E2E8F0',
                                borderRadius: '2px'
                            }} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImportantDates;
