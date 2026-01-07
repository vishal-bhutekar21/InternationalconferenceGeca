import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Partners = () => {
    const partners = [
        { name: "Springer", logo: "/logos/springer.png" },
        { name: "IEEE", logo: "/logos/ieee.png" },
        { name: "Scopus", logo: "/logos/scopus.png" },
        { name: "Elsevier", logo: "/logos/elsevier.png" },
        { name: "Taylor & Francis", logo: "/logos/taylor.png" },
        { name: "xAI", logo: "/logos/xai.png" },
        { name: "Scholar", logo: "/logos/scholar.png" },
        { name: "ACM", logo: "/logos/acm.png" }
    ];

    return (
        <section className="section" style={{ backgroundColor: '#F8FAFC' }}>
            <div className="container">
                <div className="section-title-wrapper">
                    <h2 className="section-title">Publishing <span style={{ borderBottom: '4px solid var(--color-accent-orange)' }}>Partners</span></h2>
                    <p className="section-subtitle" style={{ marginTop: '1.5rem' }}>
                        We are proud to collaborate with leading academic publishers and industry innovators to bring high-quality research to the global community.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="card-glass"
                    style={{ padding: '4rem', backgroundColor: 'white' }}
                >
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '3rem',
                        alignItems: 'center',
                        justifyItems: 'center'
                    }}>
                        {partners.map((p, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                style={{
                                    width: '100%',
                                    height: '80px',
                                    backgroundColor: '#F3F4F6',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '1rem',
                                    fontSize: '1.25rem',
                                    fontWeight: 700,
                                    color: '#9CA3AF',
                                    border: '1px solid #E5E7EB'
                                }}
                            >
                                {/* Placeholder for real logos */}
                                {p.name === 'xAI' ? <span style={{ color: 'var(--color-text-main)' }}>xAI</span> : p.name}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <p style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--color-text-muted)' }}>
                    Interested in becoming a partner? <a href="#contact" style={{ fontWeight: 600 }}>Contact our committee <FaArrowRight size={12} /></a>
                </p>
            </div>
        </section>
    );
};

export default Partners;
