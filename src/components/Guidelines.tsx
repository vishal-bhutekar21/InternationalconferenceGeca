import { motion } from 'framer-motion';
import { FaFilePdf, FaExternalLinkAlt, FaChevronRight } from 'react-icons/fa';

const Guidelines = () => {
    const points = [
        "Full papers must be submitted in PDF format.",
        "Maximum page limit for full paper is 6-8 pages.",
        "Ensure all figures and tables are of high quality.",
        "Plagiarism should be less than 15% for acceptance.",
        "The decision of the technical committee will be final."
    ];

    return (
        <section className="section" style={{ backgroundColor: 'var(--color-bg-soft-slate)', padding: '6rem 0' }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '5rem',
                    justifyContent: 'space-between'
                }} className="guidelines-flex-container">
                    <div style={{ flex: '1 1 500px' }}>
                        <div className="badge">SUBMISSION</div>
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 800, margin: '1rem 0 2rem' }}>Author <span style={{ color: 'var(--color-accent-orange)' }}>Guidelines</span></h2>

                        <div style={{ marginBottom: '3rem' }}>
                            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Template & Format</h4>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                                All submissions should follow the standard conference template. Papers not adhering to the format may be rejected.
                            </p>
                            <button className="btn btn-orange" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
                                <FaFilePdf /> Download Paper Template
                            </button>
                        </div>

                        <div>
                            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>Submission Process</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {points.map((p, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                        <div style={{ marginTop: '0.35rem', color: 'var(--color-accent-orange)' }}>
                                            <FaChevronRight size={12} />
                                        </div>
                                        <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)' }}>{p}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div style={{ flex: '1 1 400px' }}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="card-glass"
                            style={{ padding: 'clamp(1.5rem, 5vw, 3rem)', backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: '32px' }}
                        >
                            <h3 style={{ fontSize: '1.75rem', color: 'white', marginBottom: '1.5rem' }}>Ready to Submit?</h3>
                            <p style={{ opacity: 0.8, marginBottom: '2rem', lineHeight: 1.8 }}>
                                Authors can submit their papers through the Microsoft CMT portal. Ensure you select the correct track while submitting.
                            </p>
                            <a href="https://cmt3.research.microsoft.com/" target="_blank" rel="noreferrer" className="btn btn-orange" style={{ width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: 'white', color: 'var(--color-primary)' }}>
                                Go to Submission Portal <FaExternalLinkAlt size={12} />
                            </a>
                            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.85rem', opacity: 0.6 }}>
                                Need help? Contact us at <span style={{ color: 'var(--color-accent-orange)', fontWeight: 700 }}>info.icaisg26@geca.ac.in</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <style>{`
                    @media (max-width: 1024px) {
                        .guidelines-flex-container {
                            flex-direction: column !important;
                            gap: 3rem !important;
                        }
                        .guidelines-flex-container > div {
                            flex: 1 1 auto !important;
                            width: 100%;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
};

export default Guidelines;
