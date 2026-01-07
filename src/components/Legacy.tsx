import { motion } from 'framer-motion';

const Legacy = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--color-bg-light)', padding: '6rem 0' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '4rem' }}>
                    <div className="badge">Our History</div>
                    <h2 style={{ fontSize: '3rem', fontWeight: 800, marginTop: '1rem' }}>
                        Legacy of the 1st International Conference<br />
                        <span style={{ color: 'var(--color-accent-orange)' }}>ICAESD-24</span>
                    </h2>
                    <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-accent-orange)', margin: '1.5rem auto', borderRadius: '4px' }} />
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{
                        position: 'relative',
                        maxWidth: '1000px',
                        margin: '0 auto',
                        borderRadius: '32px',
                        overflow: 'hidden',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                        marginBottom: '4rem'
                    }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1540575861501-7ad058c639fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                        alt="ICAESD-2024 Session"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                        onError={(e) => { e.currentTarget.src = 'https://placehold.co/1200x600?text=Conference+Session+2024' }}
                    />
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.6) 100%)'
                    }} />
                    <div style={{ position: 'absolute', bottom: '30px', left: '40px', textAlign: 'left', color: 'white' }}>
                        <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'white' }}>Inaugural Session - ICAESD 2024</h4>
                        <p style={{ opacity: 0.9 }}>A milestone event for Sustainable Engineering and Innovation.</p>
                    </div>
                </motion.div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '4rem',
                    backgroundColor: 'white',
                    padding: '3rem',
                    borderRadius: '24px',
                    maxWidth: '800px',
                    margin: '0 auto',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                }}>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src="https://www.mic.gov.in/assets/img/logos/iic_logo.png"
                            alt="Institution's Innovation Council"
                            style={{ height: '80px', marginBottom: '1rem' }}
                            onError={(e) => { e.currentTarget.src = 'https://placehold.co/150x80?text=IIC+Logo' }}
                        />
                        <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-primary)' }}>Institution's Innovation Council</p>
                    </div>
                    <div style={{ width: '2px', height: '100px', backgroundColor: '#E2E8F0' }} />
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src="https://www.mic.gov.in/assets/img/logos/nisp_logo.png"
                            alt="NISP"
                            style={{ height: '80px', marginBottom: '1rem' }}
                            onError={(e) => { e.currentTarget.src = 'https://placehold.co/150x80?text=NISP+Logo' }}
                        />
                        <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-primary)' }}>NISP Ministry of Education</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Legacy;
