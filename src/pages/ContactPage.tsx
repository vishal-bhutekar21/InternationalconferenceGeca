import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';


const ContactPage = () => {
    return (
        <main style={{ paddingTop: '120px', backgroundColor: 'var(--color-bg-soft-orange)', minHeight: '100vh' }}>
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div className="badge">SUPPORT & INQUIRIES</div>
                        <h1 style={{ fontSize: '4rem', fontWeight: 800, margin: '1rem 0' }}>Get in <span style={{ color: 'var(--color-accent-orange)' }}>Touch</span></h1>
                        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
                            We are here to assist you with any questions regarding paper submission, registration, or sponsorship for the ICAISDG 26 conference.
                        </p>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '3rem'
                    }} className="contact-flex-container">
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2rem',
                            flex: '1 1 350px'
                        }}>
                            <div className="card-glass" style={{ padding: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{ backgroundColor: 'var(--color-accent-orange-light)', padding: '1rem', borderRadius: '12px', color: 'var(--color-accent-orange)' }}>
                                        <FaMapMarkerAlt size={24} />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Conference Venue</h3>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                                            Government College of Engineering,<br />
                                            Station Road, Osmanpura, (Aurangabad) Chhatrapati Sambhajinagar - 431005
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
                                            General: info.caisdg@geca.ac.in<br />
                                            Technical: tech.caisdg@geca.ac.in
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

                        <div className="card-glass" style={{ padding: '3rem', flex: '1 1 500px' }}>
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Send us a Message</h2>
                            <form style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                                <div style={{ flex: '1 1 200px' }}>
                                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>FULL NAME</label>
                                    <input type="text" placeholder="Dr. John Doe" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--color-border)', backgroundColor: '#F8FAFC' }} />
                                </div>
                                <div style={{ flex: '1 1 200px' }}>
                                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>EMAIL ADDRESS</label>
                                    <input type="email" placeholder="john@university.edu" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--color-border)', backgroundColor: '#F8FAFC' }} />
                                </div>
                                <div style={{ width: '100%' }}>
                                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>SUBJECT</label>
                                    <input type="text" placeholder="Brief summary of your query" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--color-border)', backgroundColor: '#F8FAFC' }} />
                                </div>
                                <div style={{ width: '100%' }}>
                                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>MESSAGE</label>
                                    <textarea rows={5} placeholder="How can we help you?" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--color-border)', backgroundColor: '#F8FAFC', resize: 'none' }}></textarea>
                                </div>
                                <div style={{ width: '100%' }}>
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

                    {/* Venue & Map Section - Consolidated */}
                    <div style={{ marginTop: '5rem' }}>
                        <div className="badge" style={{ marginBottom: '1rem', textAlign: 'center' }}>LOCATION</div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem' }}>Conference <span style={{ color: 'var(--color-accent-orange)' }}>Venue</span></h2>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1.5fr',
                            gap: '2rem',
                            backgroundColor: 'white',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-lg)'
                        }} className="venue-grid">
                            <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2rem' }}>
                                    <FaMapMarkerAlt size={24} color="var(--color-accent-orange)" style={{ marginTop: '0.25rem' }} />
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Government College of Engineering</h3>
                                        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                                            Station Road, Osmanpura,<br />
                                            Chhatrapati Sambhajinagar (Aurangabad) - 431005,<br />
                                            Maharashtra, India
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href="https://maps.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-orange"
                                    style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                                >
                                    Get Directions <FaPaperPlane style={{ fontSize: '0.8rem' }} />
                                </a>
                            </div>
                            <div style={{ minHeight: '400px', background: '#f1f5f9' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.4087834578133!2d75.32104087522497!3d19.864998981507743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9866228186ef%3A0x676ee560f64c676!2sGovernment%20College%20of%20Engineering%2C%20Aurangabad!5e0!3m2!1sen!2sin!4v1704705500123!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="GECCS Map"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Accommodation / Hostels Section */}
                    <div style={{ marginTop: '5rem' }}>
                        <div className="badge" style={{ marginBottom: '1rem', textAlign: 'center' }}>STAY</div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem' }}>Accommodation & <span style={{ color: 'var(--color-accent-orange)' }}>Hostels</span></h2>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                            {/* GECCS Hostels */}
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="card-glass"
                                style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                            >
                                <div style={{ height: '200px', backgroundColor: '#e2e8f0', position: 'relative' }}>
                                    <img
                                        src="/images/geca-building.jpg" // Placeholder if specific hostel image unknown
                                        alt="GECCS Hostel"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400?text=College+Hostel' }}
                                    />
                                    <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'var(--color-primary)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700 }}>On Campus</div>
                                </div>
                                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>GECCS Hostels</h3>
                                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: 1.6, flex: 1 }}>
                                        Secure and affordable accommodation within the college campus. Separate wings for male and female students/research scholars.
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <FaCheckCircle color="var(--color-accent-orange)" size={14} /> Basic Amenities
                                        </li>
                                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <FaCheckCircle color="var(--color-accent-orange)" size={14} /> Walking Distance to Venue
                                        </li>
                                    </ul>
                                    <button className="btn btn-outline" style={{ width: '100%' }} disabled>
                                        Contact Admin for Booking
                                    </button>
                                </div>
                            </motion.div>

                            {/* Lemon Tree Hotel */}
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="card-glass"
                                style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                            >
                                <div style={{ height: '200px', backgroundColor: '#e2e8f0' }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Lemon Tree Hotel"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400?text=Lemon+Tree+Hotel' }}
                                    />
                                </div>
                                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Lemon Tree Hotel</h3>
                                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: 1.6, flex: 1 }}>
                                        Refreshing business hotel located near the airport and industrial hubs. Offers modern amenities and efficient service.
                                    </p>
                                    <div style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                                        <strong>Distance:</strong> ~4.5 km from venue
                                    </div>
                                    <a
                                        href="https://www.lemontreehotels.com/lemon-tree-hotel/aurangabad/hotel-aurangabad"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-orange"
                                        style={{ width: '100%', textAlign: 'center', display: 'block', textDecoration: 'none' }}
                                    >
                                        Book Now
                                    </a>
                                </div>
                            </motion.div>

                            {/* Ginger Hotel */}
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="card-glass"
                                style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                            >
                                <div style={{ height: '200px', backgroundColor: '#e2e8f0' }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Ginger Hotel"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400?text=Ginger+Hotel' }}
                                    />
                                </div>
                                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Ginger Hotel</h3>
                                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: 1.6, flex: 1 }}>
                                        Leane luxe hotel offering a vibrant and contemporary stay experience. Great for budget-conscious business travelers.
                                    </p>
                                    <div style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                                        <strong>Distance:</strong> ~2.0 km from venue
                                    </div>
                                    <a
                                        href="https://www.gingerhotels.com/ginger-aurangabad"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-orange"
                                        style={{ width: '100%', textAlign: 'center', display: 'block', textDecoration: 'none' }}
                                    >
                                        Book Now
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <style>{`
                        @media (max-width: 768px) {
                            .venue-grid {
                                grid-template-columns: 1fr !important;
                            }
                        }
                    `}</style>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;
