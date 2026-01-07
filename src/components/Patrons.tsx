import { motion } from 'framer-motion';

const Patrons = () => {
    const chiefPatron = {
        name: "Dr. Sanjay S. Dambhare",
        role: "Principal & Chief Patron",
        org: "GECCS, (Aurangabad) Chhatrapati Sambhajinagar",
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

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.8,
                component: "spring",
                stiffness: 100
            }
        })
    };

    return (
        <section className="section" style={{ backgroundColor: 'var(--color-bg-soft-slate)', padding: '8rem 0' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '6rem' }}
                >
                    <div className="badge" style={{ marginBottom: '1.5rem' }}>LEADERSHIP</div>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--color-primary)', letterSpacing: '-0.02em' }}>
                        Our Distinguished <span style={{ color: 'var(--color-accent-orange)' }}>Patrons</span>
                    </h2>
                    <p style={{ maxWidth: '650px', margin: '1.25rem auto 0', color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                        Guided by visionary leadership in technology and academic excellence.
                    </p>
                </motion.div>

                {/* Chief Patron - Hero Card */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '5rem' }}>
                    <motion.div
                        custom={0}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ y: -15, boxShadow: '0 40px 80px rgba(0,0,0,0.12)' }}
                        style={{
                            padding: '3rem',
                            textAlign: 'center',
                            maxWidth: '450px',
                            width: '100%',
                            backgroundColor: 'white',
                            borderRadius: '40px',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
                            border: '1px solid rgba(251, 146, 60, 0.1)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Decorative background element */}
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'linear-gradient(90deg, var(--color-accent-orange), #EA580C)' }} />

                        <div style={{ position: 'relative', display: 'inline-block', marginBottom: '2rem' }}>
                            <img src={chiefPatron.image} alt={chiefPatron.name} style={{ width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover', border: '5px solid white', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }} />
                            <div style={{ position: 'absolute', bottom: '5px', right: '5px', backgroundColor: 'var(--color-accent-orange)', width: '32px', height: '32px', borderRadius: '50%', border: '4px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'white' }} />
                            </div>
                        </div>

                        <h3 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-primary)', marginBottom: '0.75rem' }}>{chiefPatron.name}</h3>
                        <div style={{
                            fontSize: '0.9rem',
                            color: 'white',
                            fontWeight: 800,
                            backgroundColor: 'var(--color-accent-orange)',
                            padding: '0.4rem 1.25rem',
                            borderRadius: '50px',
                            display: 'inline-block',
                            marginBottom: '1.25rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}>{chiefPatron.role}</div>
                        <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', fontWeight: 600, lineHeight: 1.5 }}>{chiefPatron.org}</p>
                    </motion.div>
                </div>

                {/* Committee Chairs Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2.5rem',
                    marginBottom: '6rem',
                    justifyContent: 'center'
                }}>
                    {committee.map((p, i) => (
                        <motion.div
                            key={i}
                            custom={i + 1}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(0,0,0,0.08)' }}
                            style={{
                                padding: '2.5rem',
                                textAlign: 'center',
                                backgroundColor: 'white',
                                borderRadius: '32px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                                border: '1px solid rgba(226, 232, 240, 0.6)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <img src={p.image} alt={p.name} style={{ width: '110px', height: '110px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1.5rem', border: '3px solid var(--color-orange-soft)', padding: '4px' }} />
                            <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{p.name}</h4>
                            <div style={{ fontSize: '0.8rem', color: 'var(--color-accent-orange)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>{p.role}</div>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>{p.org}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Organizing Committee - Minimalist Glass Panel */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{
                        textAlign: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.6)',
                        backdropFilter: 'blur(10px)',
                        padding: '4rem 2rem',
                        borderRadius: '40px',
                        border: '1px solid rgba(255, 255, 255, 0.5)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.03)'
                    }}
                >
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '2.5rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Organizing Committee</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.25rem' }}>
                        {organizing.map((name, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05, backgroundColor: 'var(--color-accent-orange)', color: 'white' }}
                                style={{
                                    backgroundColor: 'white',
                                    padding: '0.8rem 1.75rem',
                                    borderRadius: '50px',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.04)',
                                    fontWeight: 700,
                                    color: 'var(--color-text-muted)',
                                    fontSize: '0.95rem',
                                    border: '1px solid rgba(226, 232, 240, 0.8)',
                                    cursor: 'default',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {name}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Patrons;
