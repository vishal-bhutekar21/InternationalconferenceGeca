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
                        Guiding ICAISG2026 with global academic and industry perspective.
                    </p>
                </motion.div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4rem',
                    backgroundColor: 'white',
                    borderRadius: '32px',
                    boxShadow: 'var(--shadow-md)',
                    border: '1px solid rgba(0,0,0,0.03)',
                    maxWidth: '800px',
                    margin: '0 auto',
                    textAlign: 'center'
                }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-orange-soft)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.5rem'
                    }}>
                        <FaGraduationCap style={{ fontSize: '2.5rem', color: 'var(--color-accent-orange)' }} />
                    </div>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '1rem' }}>Coming Soon</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                        The list of our distinguished International and National Advisory Board members is currently being finalized. <br />
                        Please check back soon for updates.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdvisoryBoardPage;
