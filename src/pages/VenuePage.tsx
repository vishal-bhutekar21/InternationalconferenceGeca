import { FaPlane, FaTrain, FaBus, FaMapMarkedAlt, FaCompass, FaCarSide, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const VenuePage = () => {
    const transport = [
        {
            icon: <FaPlane />,
            type: "By Air",
            title: "(Aurangabad) Chhatrapati Sambhajinagar Airport (IXU)",
            desc: "The airport is well-connected to major Indian cities like Mumbai, Delhi, Hyderabad, and Bangalore with regular flights.",
            distance: "10 km from GECCS",
            arrival_info: "Prepaid taxis and app-based cabs (Uber/Ola) are available at the airport. The journey takes approximately 20-30 minutes."
        },
        {
            icon: <FaTrain />,
            type: "By Train",
            title: "(Aurangabad) Chhatrapati Sambhajinagar Railway Station (AWB)",
            desc: "(Aurangabad) Chhatrapati Sambhajinagar is a major railway station on the South Central Railway and is well-connected to Mumbai, Delhi, Pune, and Nagpur.",
            distance: "2.5 km from GECCS",
            arrival_info: "Auto-rickshaws and taxis are available 24/7. It takes about 10-15 minutes to reach the college campus."
        },
        {
            icon: <FaBus />,
            type: "By Bus",
            title: "Central Bus Stand (CBS)",
            desc: "Regular MSRTC and private luxury buses operate from major cities like Mumbai, Pune, Nagpur, and Nashik.",
            distance: "2 km from GECCS",
            arrival_info: "Frequent auto-rickshaws are available from the bus stand. The college is a short 10-minute ride away."
        }
    ];

    const localTravel = [
        { icon: <FaCarSide />, title: "App-based Cabs", desc: "Uber and Ola operate throughout (Aurangabad) Chhatrapati Sambhajinagar city for convenient travel." },
        { icon: <FaClock />, title: "Auto Rickshaws", desc: "The most common mode of local transport. Available 24/7 with standard fares." }
    ];

    return (
        <main style={{ paddingTop: '120px', backgroundColor: 'var(--color-bg-soft-slate)', minHeight: '100vh', paddingBottom: '6rem' }}>
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div className="badge">CONFERENCE LOCATION</div>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, margin: '1rem 0' }}>
                            Venue & <span style={{ color: 'var(--color-accent-orange)' }}>Travel</span> Info
                        </h1>
                        <p style={{ maxWidth: '750px', margin: '0 auto', color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                            The conference will be held at the prestigious Government College of Engineering, (Aurangabad) Chhatrapati Sambhajinagar. Located in the heart of the historic "City of Gates", the venue is easily accessible by all modes of transport.
                        </p>
                    </div>

                    {/* Venue Details Section */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '3rem',
                        marginBottom: '6rem',
                        alignItems: 'stretch'
                    }} className="venue-details-flex">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="card-glass"
                            style={{
                                padding: 'clamp(2rem, 5vw, 4rem)',
                                display: 'flex',
                                flexDirection: 'column',
                                flex: '1 1 500px'
                            }}
                        >
                            <div style={{ backgroundColor: 'rgba(251, 146, 60, 0.1)', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent-orange)', marginBottom: '2rem' }}>
                                <FaMapMarkedAlt size={28} />
                            </div>
                            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', marginBottom: '1.5rem', fontWeight: 800 }}>The Conference Venue</h2>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)', fontWeight: 700 }}>Government College of Engineering (GECCS)</h3>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '1.05rem' }}>
                                Station Road, Osmanpura, (Aurangabad) Chhatrapati Sambhajinagar, Maharashtra 431005, India.<br /><br />
                                The campus features state-of-the-art auditoriums, smart classrooms, and research facilities that provide an ideal environment for intellectual exchange and networking.
                            </p>
                            <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <a
                                    href="https://maps.app.goo.gl/YourActualGoogleMapsLink"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-orange"
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}
                                >
                                    <FaMapMarkedAlt /> Get Map Location
                                </a>
                                <a
                                    href="https://www.google.com/maps/dir//Government+College+of+Engineering,+Station+Rd,+Osmanpura,+Chhatrapati+Sambhajinagar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline"
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}
                                >
                                    Get Directions
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                                boxShadow: 'var(--shadow-lg)',
                                minHeight: '400px',
                                position: 'relative',
                                flex: '1 1 450px'
                            }}
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.41725714041!2d75.32185207593672!3d19.86461932675952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9866228186ef%3A0x676ee560f64c676!2sGovernment%20College%20of%20Engineering%2C%20Aurangabad!5e0!3m2!1sen!2sin!4v1703666579043!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </motion.div>
                    </div>

                    {/* How to Reach Section */}
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div className="badge">HOW TO REACH</div>
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginTop: '1rem' }}>Travel <span style={{ color: 'var(--color-accent-orange)' }}>Information</span></h2>
                        <p style={{ maxWidth: '600px', margin: '1rem auto', color: 'var(--color-text-muted)' }}>
                            Convenient travel options to reach (Aurangabad) Chhatrapati Sambhajinagar from anywhere in India and abroad.
                        </p>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '2rem',
                        marginBottom: '6rem',
                        justifyContent: 'center'
                    }} className="transport-flex">
                        {transport.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="card-glass"
                                style={{
                                    padding: '2.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flex: '1 1 300px',
                                    maxWidth: '400px'
                                }}
                            >
                                <div style={{ color: 'var(--color-accent-orange)', marginBottom: '1.5rem', fontSize: '2rem' }}>{item.icon}</div>
                                <h4 style={{ color: 'var(--color-accent-orange)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{item.type}</h4>
                                <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem', fontWeight: 800 }}>{item.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{item.desc}</p>

                                <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                        <div style={{ color: 'var(--color-accent-orange)', fontSize: '0.9rem' }}><FaMapMarkedAlt /></div>
                                        <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>{item.distance}</span>
                                    </div>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>{item.arrival_info}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Local Travel Section */}
                    <div style={{
                        backgroundColor: 'var(--color-primary)',
                        borderRadius: 'var(--radius-lg)',
                        padding: 'clamp(2rem, 5vw, 4rem)',
                        color: 'white',
                        marginBottom: '6rem'
                    }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem' }}>Local Transportation</h2>
                            <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>Moving around the city is easy with multiple options available at all hours.</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
                            {localTravel.map((item, i) => (
                                <div key={i} style={{ textAlign: 'center', flex: '1', minWidth: '250px' }}>
                                    <div style={{ fontSize: '2.5rem', color: 'var(--color-accent-orange)', marginBottom: '1rem' }}>{item.icon}</div>
                                    <h4 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '0.75rem' }}>{item.title}</h4>
                                    <p style={{ opacity: 0.7, fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Discovery Section */}
                    <div className="card-glass" style={{ padding: '4rem', overflow: 'hidden', position: 'relative', display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1, minWidth: '300px' }}>
                            <div className="badge">EXPLORE</div>
                            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', margin: '1.5rem 0', fontWeight: 800 }}>Visit Historic (Aurangabad) Chhatrapati Sambhajinagar</h2>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                                (Aurangabad) Chhatrapati Sambhajinagar is the "Tourism Capital of Maharashtra". It is the gateway to the world-famous Ajanta and Ellora caves, both UNESCO World Heritage sites.
                            </p>
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '1.5rem'
                            }} className="discovery-flex-grid">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 700, flex: '1 1 150px' }}>
                                    <FaCompass className="text-orange" /> Ajanta Caves
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 700, flex: '1 1 150px' }}>
                                    <FaCompass className="text-orange" /> Ellora Caves
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 700, flex: '1 1 150px' }}>
                                    <FaCompass className="text-orange" /> Bibi Ka Maqbara
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 700, flex: '1 1 150px' }}>
                                    <FaCompass className="text-orange" /> Daulatabad Fort
                                </div>
                            </div>
                        </div>
                        <div style={{ flex: 1, minWidth: '300px', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                            <img
                                src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2070&auto=format&fit=crop"
                                alt="Ellora Caves - Kailasa Temple"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default VenuePage;
