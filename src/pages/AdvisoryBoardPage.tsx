import { motion } from 'framer-motion';
import { FaGlobeAmericas, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';

const AdvisoryBoardPage = () => {
    const internationalBoard = [
        { name: "Dr. James Wilson", institution: "Stanford University, USA", role: "International Advisor" },
        { name: "Dr. Sarah Chen", institution: "University of Toronto, Canada", role: "International Advisor" },
        { name: "Dr. Hans Mueller", institution: "Technical University of Munich, Germany", role: "International Advisor" },
        { name: "Dr. Akiko Tanaka", institution: "University of Tokyo, Japan", role: "International Advisor" }
    ];

    const nationalBoard = [
        { name: "Dr. R.K. Sharma", institution: "IIT Bombay, India", role: "National Advisor" },
        { name: "Dr. Amit Verma", institution: "IISc Bangalore, India", role: "National Advisor" },
        { name: "Dr. Priya Sundar", institution: "IIT Madras, India", role: "National Advisor" },
        { name: "Dr. Vijay Prasad", institution: "IIT Delhi, India", role: "National Advisor" }
    ];

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-bg-light)' }}>
            <div className="container" style={{ paddingBottom: '5rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <div className="badge" style={{ marginBottom: '1rem' }}>EXPERTISE</div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: 'var(--color-primary)' }}>Advisory <span style={{ color: 'var(--color-accent-orange)' }}>Board</span></h1>
                    <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '1rem auto' }}>
                        Guiding ICAISD 2026 with global academic and industry perspective.
                    </p>
                </motion.div>

                {/* International Board */}
                <section style={{ marginBottom: '6rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3.5rem' }}>
                        <div style={{ padding: '0.75rem', backgroundColor: 'var(--color-orange-soft)', borderRadius: '12px', color: 'var(--color-accent-orange)', fontSize: '1.25rem' }}>
                            <FaGlobeAmericas />
                        </div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)' }}>International Advisory Board</h2>
                        <div style={{ flex: 1, height: '2px', backgroundColor: 'var(--color-accent-orange-light)', opacity: 0.2 }} />
                    </div>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '2.5rem',
                        justifyContent: 'center'
                    }} className="board-flex-container">
                        {internationalBoard.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{
                                    backgroundColor: 'white',
                                    padding: '2.5rem',
                                    borderRadius: '28px',
                                    boxShadow: 'var(--shadow-md)',
                                    border: '1px solid rgba(0,0,0,0.03)',
                                    flex: '1 1 280px',
                                    maxWidth: '350px'
                                }}
                            >
                                <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--color-bg-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                                    <FaGraduationCap opacity={0.6} />
                                </div>
                                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{member.name}</h3>
                                <div style={{ fontSize: '0.85rem', color: 'var(--color-accent-orange)', fontWeight: 800, marginBottom: '0.75rem', textTransform: 'uppercase' }}>{member.role}</div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: 500, lineHeight: 1.5 }}>
                                    <FaMapMarkerAlt style={{ marginRight: '0.5rem' }} /> {member.institution}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* National Board */}
                <section>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3.5rem' }}>
                        <div style={{ padding: '0.75rem', backgroundColor: 'var(--color-orange-soft)', borderRadius: '12px', color: 'var(--color-accent-orange)', fontSize: '1.25rem' }}>
                            <FaMapMarkerAlt />
                        </div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)' }}>National Advisory Board</h2>
                        <div style={{ flex: 1, height: '2px', backgroundColor: 'var(--color-accent-orange-light)', opacity: 0.2 }} />
                    </div>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '2.5rem',
                        justifyContent: 'center'
                    }} className="board-flex-container">
                        {nationalBoard.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{
                                    backgroundColor: 'white',
                                    padding: '2.5rem',
                                    borderRadius: '28px',
                                    boxShadow: 'var(--shadow-md)',
                                    border: '1px solid rgba(0,0,0,0.03)',
                                    flex: '1 1 280px',
                                    maxWidth: '350px'
                                }}
                            >
                                <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--color-bg-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                                    <FaGraduationCap opacity={0.6} />
                                </div>
                                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{member.name}</h3>
                                <div style={{ fontSize: '0.85rem', color: 'var(--color-accent-orange)', fontWeight: 800, marginBottom: '0.75rem', textTransform: 'uppercase' }}>{member.role}</div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: 500, lineHeight: 1.5 }}>
                                    <FaMapMarkerAlt style={{ marginRight: '0.5rem' }} /> {member.institution}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AdvisoryBoardPage;
