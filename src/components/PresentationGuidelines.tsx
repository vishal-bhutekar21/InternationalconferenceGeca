import { motion } from 'framer-motion';
import { FaFileDownload, FaClock, FaDesktop, FaFileAlt } from 'react-icons/fa';

const PresentationGuidelines = () => {
    const guidelines = [
        {
            icon: <FaClock />,
            title: 'Time Allocation',
            points: [
                'Oral presentations: 15 minutes (12 min presentation + 3 min Q&A)',
                'Poster presentations: Display throughout the session',
                'Arrive 10 minutes before your session'
            ]
        },
        {
            icon: <FaDesktop />,
            title: 'Presentation Format',
            points: [
                'Use PowerPoint or PDF format',
                'Recommended aspect ratio: 16:9',
                'Font size: Minimum 24pt for body text',
                'Include title slide with paper ID and authors'
            ]
        },
        {
            icon: <FaFileAlt />,
            title: 'Content Guidelines',
            points: [
                'Start with clear problem statement',
                'Highlight key contributions and results',
                'Conclude with future work and implications',
                'Avoid excessive text on slides'
            ]
        }
    ];

    return (
        <section className="section" style={{ backgroundColor: 'var(--color-white)', padding: '6rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div className="badge">FOR PRESENTERS</div>
                    <h2 style={{ fontSize: '3rem', fontWeight: 800, marginTop: '1rem', marginBottom: '1rem' }}>
                        Presentation <span style={{ color: 'var(--color-accent-orange)' }}>Guidelines</span>
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
                        Follow these guidelines to deliver an effective presentation at ICAISD 2025.
                    </p>
                </div>

                <div className="grid-responsive grid-3-col" style={{ gap: '2rem', marginBottom: '3rem' }}>
                    {guidelines.map((guideline, index) => (
                        <motion.div
                            key={guideline.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                backgroundColor: 'var(--color-bg-light)',
                                padding: '2rem',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid var(--color-border)'
                            }}
                        >
                            <div style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '10px',
                                backgroundColor: 'var(--color-orange-soft)',
                                color: 'var(--color-accent-orange)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.25rem',
                                marginBottom: '1.5rem'
                            }}>
                                {guideline.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700 }}>
                                {guideline.title}
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {guideline.points.map((point, idx) => (
                                    <li key={idx} style={{
                                        color: 'var(--color-text-muted)',
                                        marginBottom: '0.75rem',
                                        paddingLeft: '1.5rem',
                                        position: 'relative',
                                        fontSize: '0.95rem',
                                        lineHeight: 1.5
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: 0,
                                            color: 'var(--color-accent-orange)',
                                            fontWeight: 'bold'
                                        }}>•</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Placeholder for presentation template/images */}
                <div style={{
                    padding: '3rem',
                    backgroundColor: 'var(--color-bg-light)',
                    borderRadius: 'var(--radius-lg)',
                    border: '2px dashed var(--color-border)',
                    textAlign: 'center'
                }}>
                    <FaFileDownload style={{ fontSize: '3rem', color: 'var(--color-accent-orange)', marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Presentation Template</h3>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                        Download our official presentation template for a consistent look
                    </p>
                    <button className="btn btn-orange">
                        <FaFileDownload style={{ marginRight: '0.5rem' }} />
                        Download Template (Coming Soon)
                    </button>
                </div>

                {/* Placeholder for guideline images */}
                <div style={{
                    marginTop: '2rem',
                    padding: '3rem',
                    backgroundColor: 'var(--color-white)',
                    borderRadius: 'var(--radius-lg)',
                    border: '2px dashed var(--color-border)',
                    textAlign: 'center'
                }}>
                    <p style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                        Visual presentation guidelines and examples will be displayed here
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PresentationGuidelines;
