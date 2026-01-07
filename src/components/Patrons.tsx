import { motion } from 'framer-motion';

const Patrons = () => {
    const chiefPatron = {
        name: "Dr. Sanjay S. Dambhare",
        role: "Principal & Chief Patron",
        org: "GECA, Aurangabad",
        image: "/images/principal.jpg"
    };

    const committee = [
        { name: "Dr. S. K. Hiremath", role: "Organizing Chair", org: "Dept. of AI & DS", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
        { name: "Dr. V. N. Nair", role: "Technical Chair", org: "GCOE Amravati", image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
        { name: "Dr. R. S. Patil", role: "Publication Chair", org: "GCOE Amravati", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
        { name: "Dr. P. M. Joshi", role: "Finance Chair", org: "GCOE Amravati", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
    ];

    const organizing = [
        "Dr. A. J. Shah", "Dr. B. K. Gupta", "Prof. C. D. Mane", "Prof. E. F. Kulkarni", "Prof. G. H. Deshmukh"
    ];

    return (
        <section className="section" style={{ backgroundColor: '#FFFFFF', padding: '6rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div className="badge">COMMITTEE</div>
                    <h2 style={{ fontSize: '3rem', fontWeight: 800, marginTop: '1rem' }}>Our <span style={{ color: 'var(--color-accent-orange)' }}>Patrons</span></h2>
                </div>

                {/* Top Row - Chief Patron & Senior Patrons */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="card-glass"
                        style={{ padding: '2rem', textAlign: 'center', maxWidth: '300px', backgroundColor: 'white', borderTop: '4px solid var(--color-accent-orange)' }}
                    >
                        <img src={chiefPatron.image} alt={chiefPatron.name} style={{ width: '120px', height: '120px', borderRadius: '50%', marginBottom: '1.5rem', border: '3px solid #FFF7ED' }} />
                        <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-primary)' }}>{chiefPatron.name}</h4>
                        <div style={{ fontSize: '0.9rem', color: 'var(--color-accent-orange)', fontWeight: 700, margin: '0.5rem 0' }}>{chiefPatron.role}</div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{chiefPatron.org}</p>
                    </motion.div>
                </div>

                {/* Second Row - Committee Chairs */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                    {committee.map((p, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="card-glass"
                            style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'white' }}
                        >
                            <img src={p.image} alt={p.name} style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '1rem', border: '2px solid #F1F5F9' }} />
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{p.name}</h4>
                            <div style={{ fontSize: '0.85rem', color: 'var(--color-accent-orange)', fontWeight: 600 }}>{p.role}</div>
                            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{p.org}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Organizing Committee - Names Grid */}
                <div style={{ textAlign: 'center', backgroundColor: '#F8FAFC', padding: '3rem', borderRadius: '24px' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem', color: 'var(--color-primary)' }}>Organizing Committee</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                        {organizing.map((name, i) => (
                            <div key={i} style={{ backgroundColor: 'white', padding: '0.75rem 1.5rem', borderRadius: '50px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', fontWeight: 600, color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                                {name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Patrons;
