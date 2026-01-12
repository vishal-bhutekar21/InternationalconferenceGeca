import { motion } from 'framer-motion';
import { FaBook, FaSearch, FaCheckCircle, FaFileAlt } from 'react-icons/fa';

const PublishIndexingPage = () => {
    const indexingPartners = [
        { name: "Scopus", description: "The largest abstract and citation database of peer-reviewed literature.", status: "Under Process" },
        { name: "Google Scholar", description: "Provides a broad way to search for scholarly literature.", status: "Confirmed" },
        { name: "Crossref", description: "Makes research outputs easy to find, cite, link, and assess.", status: "Confirmed" },
        { name: "DOAJ", description: "Directory of Open Access Journals.", status: "Confirmed" }
    ];

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-bg-light)' }}>
            <div className="container" style={{ paddingBottom: '5rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <div className="badge" style={{ marginBottom: '1rem' }}>PUBLICATION DETAILS</div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: 'var(--color-primary)' }}>Publish and <span style={{ color: 'var(--color-accent-orange)' }}>Indexing</span></h1>
                    <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '1rem auto' }}>
                        All accepted and registered papers will be published in high-quality conference proceedings and submitted for indexing.
                    </p>
                </motion.div>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '3rem',
                    marginBottom: '5rem',
                    justifyContent: 'center'
                }} className="publish-flex-container">
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
                            <div style={{ fontSize: '2.5rem', color: 'var(--color-accent-orange)' }}><FaBook /></div>
                            <div>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Conference Proceedings</h2>
                                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                                    All presented papers will be published in the ICAISG 2026 Conference Proceedings. We ensure the highest academic standards through a rigorous double-blind peer-review process.
                                </p>
                            </div>
                        </div>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                "Digital Object Identifier (DOI) for every paper",
                                "E-Proceedings with ISBN",
                                "Submission to major indexing databases",
                                "Open Access options available"
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                                    <FaCheckCircle color="var(--color-accent-orange)" /> {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{
                            backgroundColor: 'var(--color-primary)',
                            padding: '3rem',
                            borderRadius: '32px',
                            color: 'white',
                            boxShadow: 'var(--shadow-lg)',
                            flex: '1 1 450px',
                            maxWidth: '600px'
                        }}
                    >
                        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                            <div style={{ fontSize: '2.5rem', color: 'var(--color-accent-orange)' }}><FaFileAlt /></div>
                            <div>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', marginBottom: '0.5rem' }}>Special Issues</h2>
                                <p style={{ opacity: 0.8, lineHeight: 1.6 }}>
                                    Select high-quality papers will be invited for extension and publication in reputed SCI/Scopus indexed journals.
                                </p>
                            </div>
                        </div>
                        <div style={{ padding: '2rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Key Journal Partners:</div>
                            <div style={{ fontSize: '0.9rem', opacity: 0.7, fontStyle: 'italic' }}>
                                Partners will be announced soon after the technical committee review.
                            </div>
                        </div>
                    </motion.div>
                </div>

                <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '3rem', textAlign: 'center' }}>Proposed <span style={{ color: 'var(--color-accent-orange)' }}>Indexing</span></h2>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    justifyContent: 'center'
                }} className="indexing-partners-flex">
                    {indexingPartners.map((partner, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            style={{
                                backgroundColor: 'white',
                                padding: '2rem',
                                borderRadius: '24px',
                                border: '1px solid rgba(0,0,0,0.05)',
                                boxShadow: 'var(--shadow-sm)',
                                flex: '1 1 250px',
                                maxWidth: '300px'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <div style={{ fontWeight: 800, color: 'var(--color-primary)', fontSize: '1.25rem' }}>{partner.name}</div>
                                <div style={{
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '50px',
                                    fontSize: '0.7rem',
                                    fontWeight: 800,
                                    backgroundColor: partner.status === 'Confirmed' ? 'var(--color-orange-soft)' : '#f1f5f9',
                                    color: partner.status === 'Confirmed' ? 'var(--color-accent-orange)' : 'var(--color-text-muted)'
                                }}>
                                    {partner.status}
                                </div>
                            </div>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{partner.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PublishIndexingPage;
