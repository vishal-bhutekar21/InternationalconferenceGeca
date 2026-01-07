import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const ContactPage = () => {
    return (
        <main style={{ paddingTop: '120px', backgroundColor: 'var(--color-bg-light)', minHeight: '100vh' }}>
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div className="badge">SUPPORT & INQUIRIES</div>
                        <h1 style={{ fontSize: '4rem', fontWeight: 800, margin: '1rem 0' }}>Get in <span style={{ color: 'var(--color-accent-orange)' }}>Touch</span></h1>
                        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
                            We are here to assist you with any questions regarding paper submission, registration, or sponsorship for the ICAISD 2025 conference.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div className="card-glass" style={{ padding: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{ backgroundColor: 'var(--color-accent-orange-light)', padding: '1rem', borderRadius: '12px', color: 'var(--color-accent-orange)' }}>
                                        <FaMapMarkerAlt size={24} />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Conference Venue</h3>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                                            Government College of Engineering,<br />
                                            Station Road, Osmanpura, Aurangabad - 431005
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="card-glass" style={{ padding: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{ backgroundColor: 'var(--color-accent-orange-light)', padding: '1rem', borderRadius: '12px', color: 'var(--color-accent-orange)' }}>
                                        <FaEnvelope size={24} />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Email Support</h3>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                                            General: info@icaisd2025.geca.ac.in<br />
                                            Technical: tech@icaisd2025.geca.ac.in
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="card-glass" style={{ padding: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{ backgroundColor: 'var(--color-accent-orange-light)', padding: '1rem', borderRadius: '12px', color: 'var(--color-accent-orange)' }}>
                                        <FaPhoneAlt size={24} />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Phone Lines</h3>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                                            +91 240 2366101 (Office)<br />
                                            Mon-Fri, 09:00 - 17:00 IST
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-glass" style={{ padding: '3rem' }}>
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Send us a Message</h2>
                            <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div style={{ gridColumn: 'span 1' }}>
                                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>FULL NAME</label>
                                    <input type="text" placeholder="Dr. John Doe" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--color-border)', backgroundColor: '#F8FAFC' }} />
                                </div>
                                <div style={{ gridColumn: 'span 1' }}>
                                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>EMAIL ADDRESS</label>
                                    <input type="email" placeholder="john@university.edu" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--color-border)', backgroundColor: '#F8FAFC' }} />
                                </div>
                                <div style={{ gridColumn: 'span 2' }}>
                                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>SUBJECT</label>
                                    <input type="text" placeholder="Brief summary of your query" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--color-border)', backgroundColor: '#F8FAFC' }} />
                                </div>
                                <div style={{ gridColumn: 'span 2' }}>
                                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>MESSAGE</label>
                                    <textarea rows={5} placeholder="How can we help you?" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--color-border)', backgroundColor: '#F8FAFC', resize: 'none' }}></textarea>
                                </div>
                                <div style={{ gridColumn: 'span 2' }}>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="button"
                                        className="btn btn-orange"
                                        style={{ width: '100%', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}
                                    >
                                        Send Message <FaPaperPlane />
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div style={{ marginTop: '5rem', borderRadius: '24px', overflow: 'hidden', height: '400px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-lg)' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.417382601247!2d75.31885447598858!3d19.864585326759884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9834e95457ef%3A0xe968846f481a5327!2sGovernment%20College%20of%20Engineering%2C%20Aurangabad!5e0!3m2!1sen!2sin!4v1704625000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;
