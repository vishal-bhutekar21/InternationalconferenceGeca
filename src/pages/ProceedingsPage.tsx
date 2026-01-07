import { motion } from 'framer-motion';
import { FaSearch, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

const ProceedingsPage = () => {
    const archives = [
        { vol: "Vol. 03", year: "Nov 2024", title: "3rd ICAISD", theme: "Next Gen Computing", papers: 150, image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" },
        { vol: "Vol. 02", year: "Nov 2023", title: "2nd ICAISD", theme: "Sustainable AI Solutions", papers: 120, image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" },
        { vol: "Vol. 01", year: "Dec 2022", title: "1st ICAISD", theme: "AI in Emerging Nations", papers: 90, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" }
    ];

    return (
        <main style={{ paddingTop: '120px', backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div className="badge">CONFERENCE ARCHIVE</div>
                        <h1 style={{ fontSize: '4rem', fontWeight: 800, margin: '1rem 0' }}>Conference <span style={{ color: 'var(--color-accent-orange)' }}>Proceedings</span></h1>
                        <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
                            A complete archive of research contributions and technical papers from the International Conference on Artificial Intelligence and Sustainable Development.
                        </p>
                    </div>

                    <div className="card-glass spotlight-flex" style={{
                        padding: 'clamp(2rem, 5vw, 3.5rem)',
                        marginBottom: '5rem',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '4rem',
                        alignItems: 'center'
                    }}>
                        <div style={{ flex: '1 1 450px' }}>
                            <div className="badge" style={{ marginBottom: '1rem' }}>SUBMISSIONS OPEN</div>
                            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem' }}>ICAISD 2026</h2>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                                The 4th edition will be held at GECCS. Accepted papers will be published in the prestigious <strong>Springer "LNEE" series</strong> and submitted for indexing in Scopus and IEEE Xplore.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <button className="btn btn-orange">Submit Manuscript</button>
                                <button className="btn btn-outline">Submission Guidelines</button>
                            </div>
                        </div>
                        <div style={{
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-lg)',
                            flex: '1 1 350px'
                        }}>
                            <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Code" style={{ width: '100%', display: 'block' }} />
                        </div>
                    </div>

                    <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem', borderLeft: '4px solid var(--color-accent-orange)', paddingLeft: '1.5rem' }}>Archives <span style={{ fontSize: '1rem', color: 'var(--color-text-muted)', fontWeight: 400 }}>(3 Editions)</span></h2>

                    <div className="archives-flex" style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '2.5rem',
                        marginBottom: '5rem',
                        justifyContent: 'center'
                    }}>
                        {archives.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="card-glass"
                                style={{
                                    overflow: 'hidden',
                                    padding: 0,
                                    flex: '1 1 300px',
                                    maxWidth: '400px'
                                }}
                            >
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '2rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                        <span className="badge" style={{ fontSize: '0.6rem' }}>{item.year}</span>
                                        <span style={{ fontWeight: 800, color: 'var(--color-accent-orange)' }}>{item.vol}</span>
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                                        Focused on "{item.theme}". Published in Springer AISC Series. Over {item.papers} delegates attended.
                                    </p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            <div style={{ padding: '0.4rem', borderRadius: '4px', backgroundColor: '#F1F5F9', color: '#64748B' }}><FaDownload size={12} /></div>
                                            <div style={{ padding: '0.4rem', borderRadius: '4px', backgroundColor: '#F1F5F9', color: '#64748B' }}><FaExternalLinkAlt size={12} /></div>
                                        </div>
                                        <button className="btn btn-text" style={{ padding: 0, fontSize: '0.85rem', color: 'var(--color-accent-orange)', fontWeight: 700 }}>Browse Volume →</button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="card-glass" style={{ padding: '3rem', textAlign: 'center' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Looking for a specific paper?</h3>
                        <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
                            <FaSearch style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                            <input
                                type="text"
                                placeholder="Search by author, title, volume..."
                                style={{ width: '100%', padding: '1rem 1.5rem 1rem 3.5rem', borderRadius: '50px', border: '1px solid var(--color-border)', fontSize: '1rem' }}
                            />
                            <button className="btn btn-primary" style={{ position: 'absolute', right: '0.5rem', top: '0.5rem', bottom: '0.5rem', padding: '0 2rem', borderRadius: '40px' }}>Search</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProceedingsPage;
