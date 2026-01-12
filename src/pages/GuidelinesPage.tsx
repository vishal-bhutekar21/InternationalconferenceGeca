import { motion } from 'framer-motion';
import { FaFileDownload, FaFileWord, FaFilePdf } from 'react-icons/fa';

const GuidelinesPage = () => {
    const authorGuidelines = [
        'Use the Full Paper Template IEEE Two Column Format. Number of Pages Must be 06 only.',
        'Papers must be original work and have been not published/submitted elsewhere.',
        'Plagiarism/Similarity index of the paper must be 10% or less.',
        'Plagiarism level above 10% will attract immediate rejection of the paper.',
        'Indicate the most relevant theme during the paper submission.',
        'Ensure all tables, figures and images have captions and are referenced in the text properly.',
        'If Paper/Research work is funded by any institution or agency, include acknowledgement.',
        'Submit the paper in PDF format for review. CRC version must be in both Word and PDF formats.',
        'Ensure proper grammar, clarity and coherence in English language of the paper.',
        'Upload the full paper through the official conference submission portal.'
    ];

    const submissionSteps = [
        {
            step: 1,
            title: 'Prepare Manuscript',
            description: 'Write your paper following the author guidelines and using the official template.'
        },
        {
            step: 2,
            title: 'Submit Online',
            description: 'Upload your paper through the EasyChair submission portal with all author details.'
        },
        {
            step: 3,
            title: 'Peer Review',
            description: 'Your paper will be reviewed by at least two experts in the field.'
        },
        {
            step: 4,
            title: 'Receive Decision',
            description: 'You will receive acceptance/rejection notification with reviewer comments.'
        },
        {
            step: 5,
            title: 'Camera Ready',
            description: 'If accepted, submit final version incorporating reviewer feedback.'
        },
        {
            step: 6,
            title: 'Register & Present',
            description: 'Complete registration and present your paper at the conference.'
        }
    ];

    return (
        <main style={{ paddingTop: '120px', backgroundColor: 'var(--color-bg-light)', minHeight: '100vh', paddingBottom: '6rem' }}>
            {/* Hero Section */}
            <section className="section" style={{ padding: '4rem 0', backgroundColor: 'var(--color-white)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="badge">SUBMISSION INFORMATION</div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, marginTop: '1rem', marginBottom: '1.5rem' }}>
                        Author & Submission <span style={{ color: 'var(--color-accent-orange)' }}>Guidelines</span>
                    </h1>
                    <p style={{ maxWidth: '750px', margin: '0 auto', color: 'var(--color-text-muted)', fontSize: '1.2rem', lineHeight: 1.6 }}>
                        Complete guide for preparing and submitting your research paper to ICAISG 2026
                    </p>
                </div>
            </section>

            {/* Author Guidelines */}
            <section className="section" style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
                            Author <span style={{ color: 'var(--color-accent-orange)' }}>Guidelines</span>
                        </h2>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '3rem',
                        alignItems: 'start'
                    }} className="guidelines-flex-container">
                        <div style={{ flex: '1 1 400px' }}>
                            <div style={{
                                backgroundColor: 'var(--color-white)',
                                padding: '2.5rem',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid var(--color-border)',
                                boxShadow: 'var(--shadow-md)'
                            }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 700 }}>
                                    Manuscript Requirements
                                </h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {authorGuidelines.map((guideline, idx) => (
                                        <li key={idx} style={{
                                            color: 'var(--color-text-muted)',
                                            marginBottom: '1rem',
                                            paddingLeft: '2rem',
                                            position: 'relative',
                                            lineHeight: 1.6
                                        }}>
                                            <span style={{
                                                position: 'absolute',
                                                left: 0,
                                                top: '0.25rem',
                                                width: '20px',
                                                height: '20px',
                                                borderRadius: '50%',
                                                backgroundColor: 'var(--color-orange-soft)',
                                                color: 'var(--color-accent-orange)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '0.75rem',
                                                fontWeight: 'bold'
                                            }}>✓</span>
                                            {guideline}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div style={{ flex: '1 1 350px' }}>
                            <div style={{
                                backgroundColor: 'var(--color-accent-orange)',
                                color: 'white',
                                padding: '2.5rem',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: 'var(--shadow-lg)',
                                marginBottom: '2rem'
                            }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700, color: 'white' }}>
                                    Download Templates
                                </h3>
                                <p style={{ opacity: 0.9, marginBottom: '2rem', lineHeight: 1.6 }}>
                                    Use our official templates to ensure your manuscript meets all formatting requirements.
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <button style={{
                                        backgroundColor: 'white',
                                        color: 'var(--color-accent-orange)',
                                        padding: '1rem 1.5rem',
                                        borderRadius: '10px',
                                        border: 'none',
                                        fontWeight: 700,
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        justifyContent: 'center'
                                    }}>
                                        <FaFileWord size={20} />
                                        Download Word Template
                                    </button>
                                    <button style={{
                                        backgroundColor: 'rgba(255,255,255,0.2)',
                                        color: 'white',
                                        padding: '1rem 1.5rem',
                                        borderRadius: '10px',
                                        border: '1px solid rgba(255,255,255,0.3)',
                                        fontWeight: 700,
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        justifyContent: 'center'
                                    }}>
                                        <FaFilePdf size={20} />
                                        Download LaTeX Template
                                    </button>
                                </div>
                            </div>

                            <div style={{
                                backgroundColor: 'var(--color-white)',
                                padding: '2rem',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid var(--color-border)',
                                textAlign: 'center'
                            }}>
                                <FaFileDownload style={{ fontSize: '2.5rem', color: 'var(--color-accent-orange)', marginBottom: '1rem' }} />
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Sample Paper</h4>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                    Download a sample paper for reference
                                </p>
                                <button className="btn btn-outline">Download Sample</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Submission Guidelines */}
            <section className="section" style={{ padding: '5rem 0', backgroundColor: 'var(--color-white)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
                            Submission <span style={{ color: 'var(--color-accent-orange)' }}>Process</span>
                        </h2>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
                            Follow these steps to submit your paper to ICAISG 2026
                        </p>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '2rem',
                        justifyContent: 'center'
                    }} className="steps-flex-container">
                        {submissionSteps.map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    backgroundColor: 'var(--color-bg-light)',
                                    padding: '2rem',
                                    borderRadius: 'var(--radius-lg)',
                                    border: '1px solid var(--color-border)',
                                    position: 'relative',
                                    flex: '1 1 280px',
                                    maxWidth: '350px'
                                }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    top: '-15px',
                                    left: '20px',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    backgroundColor: 'var(--color-accent-orange)',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 800,
                                    fontSize: '1.25rem'
                                }}>
                                    {item.step}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginTop: '1rem', marginBottom: '0.75rem', fontWeight: 700 }}>
                                    {item.title}
                                </h3>
                                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Camera Ready Submission */}
            <section className="section" style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div style={{
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        padding: '4rem 3rem',
                        borderRadius: 'var(--radius-lg)',
                        textAlign: 'center'
                    }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', color: 'white' }}>
                            Camera Ready Submission
                        </h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto 2.5rem', opacity: 0.9, fontSize: '1.1rem', lineHeight: 1.6 }}>
                            After your paper is accepted, you must submit the camera-ready version incorporating all reviewer feedback. The final manuscript must be submitted along with the copyright form and registration proof.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '1.5rem 2rem', borderRadius: '10px', minWidth: '200px' }}>
                                <div style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>July 2026</div>
                                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Camera Ready Deadline</div>
                            </div>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '1.5rem 2rem', borderRadius: '10px', minWidth: '200px' }}>
                                <div style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>06 Pages</div>
                                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Maximum Length</div>
                            </div>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '1.5rem 2rem', borderRadius: '10px', minWidth: '200px' }}>
                                <div style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>PDF</div>
                                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Required Format</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default GuidelinesPage;
