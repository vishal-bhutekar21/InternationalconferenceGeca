import { motion } from 'framer-motion';
import { FaMicrophone, FaChalkboardTeacher, FaClock, FaFilePowerpoint, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const PresentationGuidelinesPage = () => {
    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-bg-light)' }}>
            <div className="container" style={{ paddingBottom: '5rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <div className="badge" style={{ marginBottom: '1rem' }}>PRESENTER RESOURCES</div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: 'var(--color-primary)' }}>Presentation <span style={{ color: 'var(--color-accent-orange)' }}>Guidelines</span></h1>
                    <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '1rem auto' }}>
                        Everything you need to know about preparing and delivering your presentation at ICAISD 2026.
                    </p>
                </motion.div>

                {/* Presentation Types */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '3rem',
                    marginBottom: '5rem',
                    justifyContent: 'center'
                }} className="presentation-flex-container">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{
                            backgroundColor: 'white',
                            padding: '3rem',
                            borderRadius: '32px',
                            boxShadow: 'var(--shadow-md)',
                            flex: '1 1 450px',
                            maxWidth: '600px'
                        }}
                    >
                        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                            <div style={{ fontSize: '2.5rem', color: 'var(--color-accent-orange)' }}><FaMicrophone /></div>
                            <div>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Oral Presentation</h2>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent-orange)', fontWeight: 800, fontSize: '0.9rem' }}>
                                    <FaClock /> 15 Minutes Total
                                </div>
                            </div>
                        </div>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                "12 minutes for presentation + 3 minutes for Q&A",
                                "PPT/PPTX format is preferred (16:9 aspect ratio)",
                                "Please bring your presentation on a USB drive",
                                "Report to the session chair 15 mins before start"
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                                    <FaCheckCircle style={{ color: 'var(--color-accent-orange)', marginTop: '0.3rem', flexShrink: 0 }} /> {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{
                            backgroundColor: 'white',
                            padding: '3rem',
                            borderRadius: '32px',
                            boxShadow: 'var(--shadow-md)',
                            flex: '1 1 450px',
                            maxWidth: '600px'
                        }}
                    >
                        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                            <div style={{ fontSize: '2.5rem', color: 'var(--color-accent-orange)' }}><FaChalkboardTeacher /></div>
                            <div>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Poster Presentation</h2>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent-orange)', fontWeight: 800, fontSize: '0.9rem' }}>
                                    <FaClock /> Scheduled Session
                                </div>
                            </div>
                        </div>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                "Poster Size: A0 (841mm x 1189mm) - Vertical Orientation",
                                "Clear legible text (minimum 24pt font recommended)",
                                "Include Title, Authors, and Institution at the top",
                                "Materials for mounting will be provided at the venue"
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                                    <FaCheckCircle style={{ color: 'var(--color-accent-orange)', marginTop: '0.3rem', flexShrink: 0 }} /> {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Technical Guidelines */}
                <div style={{ backgroundColor: 'white', borderRadius: '32px', padding: '4rem', boxShadow: 'var(--shadow-lg)', marginBottom: '4rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
                        <div style={{ padding: '1rem', backgroundColor: 'var(--color-accent-orange-light)', borderRadius: '16px', color: 'var(--color-accent-orange)', fontSize: '1.5rem' }}>
                            <FaFilePowerpoint />
                        </div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)' }}>Technical Specifications</h2>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '4rem'
                    }} className="tech-specs-flex">
                        <div style={{ flex: '1 1 300px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Slide Format & Structure</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-light)', borderRadius: '20px' }}>
                                    <div style={{ fontWeight: 800, color: 'var(--color-accent-orange)', marginBottom: '0.5rem' }}>Slide 1: Title & Authors</div>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Include Paper ID, Title, and full names of authors.</p>
                                </div>
                                <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-light)', borderRadius: '20px' }}>
                                    <div style={{ fontWeight: 800, color: 'var(--color-accent-orange)', marginBottom: '0.5rem' }}>Naming Convention</div>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontFamily: 'monospace' }}>ICAISD2026_PaperID_FirstAuthor.pptx</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ flex: '1 1 300px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Best Practices</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    "Limit text to 6-7 lines per slide",
                                    "Use high-contrast colors (Dark text on light bg)",
                                    "Ensure all charts and figures are high resolution",
                                    "Test your embedded videos/animations beforehand",
                                    "Have a backup on cloud/email"
                                ].map((step, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800, flexShrink: 0 }}>{i + 1}</div>
                                        <div style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{step}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Important Note */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    style={{
                        backgroundColor: '#fff7ed',
                        border: '1px solid #ffedd5',
                        padding: '2.5rem',
                        borderRadius: '24px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '2rem',
                        alignItems: 'center'
                    }}
                    className="flex-responsive"
                >
                    <div style={{ fontSize: '2.5rem', color: '#f97316' }}><FaExclamationTriangle /></div>
                    <div>
                        <h4 style={{ color: '#9a3412', fontWeight: 800, marginBottom: '0.5rem' }}>Important Submission Note</h4>
                        <p style={{ color: '#c2410c', fontSize: '0.95rem', lineHeight: 1.6 }}>
                            Presenting authors are requested to upload their final presentation slides via the registration portal or bring it to the venue registration desk at least 4 hours prior to their scheduled session.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PresentationGuidelinesPage;
