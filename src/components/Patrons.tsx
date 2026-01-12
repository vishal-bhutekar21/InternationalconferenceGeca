import { motion } from 'framer-motion';

const Patrons = () => {
    const leadership = [
        {
            name: "Shri B. Venugopal Reddy, IAS",
            role: "Patron",
            org: "Add. Chief Secretary, H&TE, Mantralaya, Mumbai",
            image: null
        },
        {
            name: "Dr. Sanjay Deshmukh",
            role: "Patron",
            org: "Chairman, BOG, GEC Chh. Sambhajinagar",
            image: null
        },
        {
            name: "Dr. Vinod Mohitkar",
            role: "Patron",
            org: "DTE, Mumbai",
            image: null
        },
        {
            name: "Shri Prashant Deshpande",
            role: "Patron",
            org: "CEO, MediAstra Tech Pvt Ltd",
            image: null
        }
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
                        Distinguished <span style={{ color: 'var(--color-accent-orange)' }}>Patrons</span>
                    </h2>
                    <p style={{ maxWidth: '650px', margin: '1.25rem auto 0', color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                        Guided by visionary leadership in technology and academic excellence.
                    </p>
                </motion.div>

                {/* Leadership Grid */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '3rem',
                    justifyContent: 'center',
                    marginBottom: '4rem'
                }}>
                    {leadership.map((leader, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover={{ y: -15, boxShadow: '0 40px 80px rgba(0,0,0,0.12)' }}
                            style={{
                                padding: '3rem',
                                textAlign: 'center',
                                maxWidth: '380px',
                                width: '100%',
                                backgroundColor: 'white',
                                borderRadius: '40px',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
                                border: '1px solid rgba(251, 146, 60, 0.1)',
                                position: 'relative',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            {/* Decorative background element */}
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'linear-gradient(90deg, var(--color-accent-orange), #EA580C)' }} />

                            <div style={{ position: 'relative', display: 'inline-block', marginBottom: '2rem' }}>
                                {leader.image ? (
                                    <>
                                        <img
                                            src={leader.image}
                                            alt={leader.name}
                                            style={{
                                                width: '150px',
                                                height: '150px',
                                                borderRadius: '50%',
                                                objectFit: 'cover',
                                                border: '5px solid white',
                                                boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                                            }}
                                        />
                                        <div style={{ position: 'absolute', bottom: '5px', right: '5px', backgroundColor: 'var(--color-accent-orange)', width: '32px', height: '32px', borderRadius: '50%', border: '4px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'white' }} />
                                        </div>
                                    </>
                                ) : (
                                    <div style={{
                                        width: '150px',
                                        height: '150px',
                                        borderRadius: '50%',
                                        backgroundColor: 'var(--color-bg-light)',
                                        border: '5px solid white',
                                        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '3rem',
                                        color: 'var(--color-accent-orange)',
                                        fontWeight: 800
                                    }}>
                                        {leader.name.charAt(0)}
                                    </div>
                                )}
                            </div>

                            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--color-primary)', marginBottom: '0.75rem', lineHeight: 1.2 }}>{leader.name}</h3>
                            <div style={{
                                fontSize: '0.85rem',
                                color: 'white',
                                fontWeight: 800,
                                backgroundColor: 'var(--color-accent-orange)',
                                padding: '0.4rem 1.25rem',
                                borderRadius: '50px',
                                display: 'inline-block',
                                marginBottom: '1.25rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>{leader.role}</div>
                            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', fontWeight: 600, lineHeight: 1.5 }}>{leader.org}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Patrons;
