import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaRoute } from 'react-icons/fa';

const Venue = () => {
    return (
        <section id="venue" className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '6rem 0' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <div className="badge" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}>LOCATE US</div>
                        <h2 style={{ fontSize: '3rem', fontWeight: 800, margin: '1rem 0 2rem', color: 'white' }}>Conference <span style={{ color: 'var(--color-accent-orange)' }}>Venue</span></h2>
                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', marginBottom: '2rem' }}>
                            <div style={{ color: 'var(--color-accent-orange)', fontSize: '1.5rem', marginTop: '0.25rem' }}>
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'white' }}>Government College of Engineering, Amravati</h4>
                                <p style={{ opacity: 0.8, lineHeight: 1.6 }}>
                                    Kathora Naka, Amravati,<br />
                                    Maharashtra 444604, India
                                </p>
                            </div>
                        </div>
                        <button className="btn btn-orange" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
                            <FaRoute /> Get Directions on Google Maps
                        </button>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        style={{
                            height: '400px',
                            backgroundColor: 'white',
                            borderRadius: '32px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                            position: 'relative'
                        }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                            alt="Conference Venue Map"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(0,0,0,0.2)'
                        }}>
                            <div style={{ backgroundColor: 'white', color: 'var(--color-primary)', padding: '1rem 2rem', borderRadius: '50px', fontWeight: 800, boxShadow: 'var(--shadow-lg)' }}>
                                Interactive Map Coming Soon
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Venue;
