import { motion } from 'framer-motion';
import { FaBook, FaDatabase, FaGraduationCap } from 'react-icons/fa';

const PublishedIndexing = () => {
    const publishers = [
        {
            name: 'Springer',
            series: 'Lecture Notes in Electrical Engineering (LNEE)',
            description: 'All accepted and presented papers will be published in Springer LNEE series.',
            icon: <FaBook />
        },
        {
            name: 'Scopus',
            description: 'Conference proceedings will be submitted for indexing in Scopus database.',
            icon: <FaDatabase />
        },
        {
            name: 'IEEE Xplore',
            description: 'Selected papers may be recommended for publication in IEEE Xplore Digital Library.',
            icon: <FaGraduationCap />
        }
    ];

    return (
        <section className="section" style={{ backgroundColor: 'var(--color-bg-light)', padding: '6rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div className="badge">PUBLICATION PARTNERS</div>
                    <h2 style={{ fontSize: '3rem', fontWeight: 800, marginTop: '1rem', marginBottom: '1rem' }}>
                        Published & <span style={{ color: 'var(--color-accent-orange)' }}>Indexing</span>
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
                        Your research will reach a global audience through our prestigious publication partners and indexing databases.
                    </p>
                </div>

                <div className="grid-responsive grid-3-col" style={{ gap: '2rem' }}>
                    {publishers.map((pub, index) => (
                        <motion.div
                            key={pub.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ scale: 1.05 }}
                            style={{
                                backgroundColor: 'var(--color-white)',
                                padding: '2.5rem',
                                borderRadius: 'var(--radius-lg)',
                                textAlign: 'center',
                                border: '1px solid var(--color-border)',
                                boxShadow: 'var(--shadow-md)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--color-orange-soft)',
                                color: 'var(--color-accent-orange)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem',
                                margin: '0 auto 1.5rem'
                            }}>
                                {pub.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 700 }}>
                                {pub.name}
                            </h3>
                            {pub.series && (
                                <div style={{
                                    fontSize: '0.85rem',
                                    color: 'var(--color-accent-orange)',
                                    fontWeight: 600,
                                    marginBottom: '1rem'
                                }}>
                                    {pub.series}
                                </div>
                            )}
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                                {pub.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Placeholder for publisher logos */}
                <div style={{
                    marginTop: '4rem',
                    padding: '3rem',
                    backgroundColor: 'var(--color-white)',
                    borderRadius: 'var(--radius-lg)',
                    border: '2px dashed var(--color-border)',
                    textAlign: 'center'
                }}>
                    <p style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                        Publisher logos will be displayed here
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PublishedIndexing;
