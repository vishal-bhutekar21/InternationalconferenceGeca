import { motion } from 'framer-motion';
import { timelineMilestones } from '../data/conferenceData';
import { FaCalendarCheck, FaClock } from 'react-icons/fa';

const TimelinePage = () => {
    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-bg-soft-blue)' }}>
            <div className="container" style={{ paddingBottom: '5rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <div className="badge" style={{ marginBottom: '1rem' }}>CONFERENCE SCHEDULE</div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: 'var(--color-primary)' }}>Event <span style={{ color: 'var(--color-accent-orange)' }}>Timeline</span></h1>
                    <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '1rem auto' }}>
                        Key milestones and deadlines for ICAISG 2026. Stay updated with the conference progression.
                    </p>
                </motion.div>

                <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
                    <div className="timeline-line" style={{
                        position: 'absolute',
                        left: '50%',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        backgroundColor: 'var(--color-accent-orange-light)',
                        transform: 'translateX(-50%)',
                        zIndex: 0
                    }} />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {timelineMilestones.map((milestone, index) => (
                            <motion.div
                                key={milestone.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                style={{
                                    display: 'flex',
                                    justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                                    alignItems: 'center',
                                    width: '100%',
                                    position: 'relative',
                                    zIndex: 1
                                }}
                                className="timeline-item"
                            >
                                <motion.div
                                    whileHover={{
                                        scale: 1.05,
                                        y: -10,
                                        boxShadow: milestone.status === 'active' 
                                            ? '0 30px 60px rgba(251, 146, 60, 0.3)' 
                                            : '0 25px 50px rgba(0, 0, 0, 0.15)',
                                        borderColor: milestone.status === 'active' 
                                            ? 'var(--color-accent-orange)' 
                                            : 'rgba(251, 146, 60, 0.5)',
                                        transition: {
                                            duration: 0.3,
                                            ease: [0.19, 1, 0.22, 1]
                                        }
                                    }}
                                    style={{
                                        width: '45%',
                                        backgroundColor: 'white',
                                        padding: '2.5rem',
                                        borderRadius: '32px',
                                        boxShadow: milestone.status === 'active' ? '0 20px 40px rgba(251, 146, 60, 0.15)' : 'var(--shadow-md)',
                                        border: milestone.status === 'active' ? '2px solid var(--color-accent-orange)' : '1px solid rgba(226, 232, 240, 0.8)',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        overflow: 'hidden'
                                    }} 
                                    className="timeline-card"
                                >
                                    {/* Hover gradient overlay */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.03) 0%, rgba(251, 146, 60, 0.01) 100%)',
                                            pointerEvents: 'none',
                                            zIndex: 0
                                        }}
                                    />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
                                        <motion.div 
                                            whileHover={{
                                                backgroundColor: milestone.status === 'active' 
                                                    ? 'rgba(251, 146, 60, 0.2)' 
                                                    : 'rgba(251, 146, 60, 0.1)',
                                                color: 'var(--color-accent-orange)',
                                                scale: 1.05,
                                                transition: {
                                                    duration: 0.2
                                                }
                                            }}
                                            style={{
                                                padding: '0.5rem 1rem',
                                                borderRadius: '12px',
                                                backgroundColor: milestone.status === 'active' ? 'rgba(251, 146, 60, 0.1)' : '#f8fafc',
                                                color: milestone.status === 'active' ? 'var(--color-accent-orange)' : '#64748b',
                                                fontSize: '0.75rem',
                                                fontWeight: 800,
                                                letterSpacing: '0.05em',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {milestone.label.toUpperCase()}
                                        </motion.div>
                                        <motion.div 
                                            whileHover={{
                                                rotate: 360,
                                                scale: 1.2,
                                                backgroundColor: 'rgba(251, 146, 60, 0.2)',
                                                color: 'var(--color-accent-orange)',
                                                transition: {
                                                    duration: 0.5,
                                                    ease: [0.19, 1, 0.22, 1]
                                                }
                                            }}
                                            style={{
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '50%',
                                                backgroundColor: milestone.status === 'active' ? 'rgba(251, 146, 60, 0.1)' : '#f8fafc',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: milestone.status === 'active' ? 'var(--color-accent-orange)' : '#64748b',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {milestone.status === 'active' ? <FaClock /> : <FaCalendarCheck />}
                                        </motion.div>
                                    </div>
                                    <div style={{ position: 'relative', zIndex: 1 }}>
                                        <motion.h3 
                                            whileHover={{ color: 'var(--color-accent-orange)' }}
                                            transition={{ duration: 0.2 }}
                                            style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--color-primary)' }}
                                        >
                                            {milestone.title}
                                        </motion.h3>
                                        <motion.div 
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.2 }}
                                            style={{
                                                display: 'inline-block',
                                                color: 'var(--color-accent-orange)',
                                                fontWeight: 800,
                                                fontSize: '1rem',
                                                marginBottom: '1.25rem',
                                                padding: '0.2rem 0',
                                                borderBottom: '2px solid rgba(251, 146, 60, 0.2)'
                                            }}
                                        >
                                            {milestone.date}
                                        </motion.div>
                                        <motion.p 
                                            whileHover={{ color: 'var(--color-primary)' }}
                                            transition={{ duration: 0.2 }}
                                            style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}
                                        >
                                            {milestone.description}
                                        </motion.p>
                                    </div>
                                </motion.div>
                                <motion.div 
                                    className="timeline-dot"
                                    whileHover={{
                                        scale: 1.5,
                                        boxShadow: milestone.status === 'active' 
                                            ? '0 0 30px rgba(251, 146, 60, 0.6)' 
                                            : '0 0 20px rgba(251, 146, 60, 0.4)',
                                        borderColor: 'var(--color-accent-orange)',
                                        transition: {
                                            duration: 0.3,
                                            ease: [0.19, 1, 0.22, 1]
                                        }
                                    }}
                                    style={{
                                        position: 'absolute',
                                        left: '50%',
                                        width: '24px',
                                        height: '24px',
                                        backgroundColor: 'white',
                                        border: `6px solid ${milestone.status === 'active' ? 'var(--color-accent-orange)' : '#cbd5e1'}`,
                                        borderRadius: '50%',
                                        transform: 'translateX(-50%)',
                                        boxShadow: milestone.status === 'active' ? '0 0 20px rgba(251, 146, 60, 0.4)' : 'none',
                                        zIndex: 2,
                                        cursor: 'pointer'
                                    }} 
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    .timeline-line { left: 20px !important; }
                    .timeline-item { justify-content: flex-start !important; padding-left: 50px !important; }
                    .timeline-card { width: 100% !important; }
                    .timeline-dot { left: 20px !important; }
                }
            `}</style>
        </div>
    );
};

export default TimelinePage;
