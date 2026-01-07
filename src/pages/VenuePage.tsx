import { FaPlane, FaTrain, FaCar, FaMapMarkedAlt, FaCompass } from 'react-icons/fa';

const VenuePage = () => {
    const transport = [
        { icon: <FaPlane />, type: "By Air", desc: "Aurangabad Airport (IXU) connects directly to major cities like Delhi, Mumbai, and Hyderabad.", details: "20 min taxi ride | Prepaid taxis available" },
        { icon: <FaTrain />, type: "By Train", desc: "Aurangabad Railway Station (AWB) is a major hub on the South Central Railway zone.", details: "2.5km from venue | Auto-rickshaws available" },
        { icon: <FaCar />, type: "By Road", desc: "Aurangabad is accessible via excellent road networks from Pune (4.5 hrs) and Mumbai.", details: "Central Bus Stand nearby | NH-52 connectivity" }
    ];

    const hotels = [
        { name: "Grand Mercure", rating: "5 Star", distance: "3.5km from venue", price: "$$$", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" },
        { name: "Lemon Tree Hotel", rating: "4 Star", distance: "4.0km from venue", price: "$$", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" },
        { name: "Hotel Green Olive", rating: "3 Star", distance: "1.5km from venue", price: "$", image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" }
    ];

    return (
        <main style={{ paddingTop: '120px', backgroundColor: 'var(--color-bg-light)', minHeight: '100vh', paddingBottom: '6rem' }}>
            workshops            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div className="badge">CONFERENCE LOCATION</div>
                        <h1 style={{ fontSize: '4rem', fontWeight: 800, margin: '1rem 0' }}>Venue & <span style={{ color: 'var(--color-accent-orange)' }}>Travel</span> Info</h1>
                        <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
                            Join us at the historic city of Aurangabad for ICAISD 2025. Find directions, accommodation details, and local insights below.
                        </p>
                    </div>

                    <div className="card-glass" style={{ padding: 0, overflow: 'hidden', marginBottom: '5rem', display: 'grid', gridTemplateColumns: '1.2fr 1fr' }}>
                        <div style={{ padding: '4rem' }}>
                            <div style={{ backgroundColor: 'var(--color-accent-orange-light)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent-orange)', marginBottom: '1.5rem' }}>
                                <FaMapMarkedAlt size={24} />
                            </div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>The Venue</h2>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Government College of Engineering</h3>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                                Station Road, Osmanpura, Aurangabad (MS). The campus is strategically located in the heart of the city, easily accessible from the railway station and bus stand.
                            </p>
                            <button className="btn btn-orange">Get Directions On Maps</button>
                        </div>
                        <div style={{ backgroundColor: '#EDF2F7', backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    </div>

                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div className="badge">ARRIVAL</div>
                        <h2 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>How to Reach</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-accent-orange)', margin: '1.5rem auto', borderRadius: '10px' }}></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem', marginBottom: '6rem' }}>
                        {transport.map((item, i) => (
                            <div key={i} className="card-glass" style={{ padding: '2.5rem' }}>
                                <div style={{ color: 'var(--color-accent-orange)', marginBottom: '1.5rem' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{item.type}</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>{item.desc}</p>
                                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-accent-orange)' }}>{item.details}</div>
                            </div>
                        ))}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
                        <div>
                            <div className="badge">ACCOMMODATION</div>
                            <h2 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Suggested Stays</h2>
                        </div>
                        <button className="btn btn-text" style={{ color: 'var(--color-accent-orange)', fontWeight: 700 }}>View All Hotels →</button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '6rem' }}>
                        {hotels.map((hotel, i) => (
                            <div key={i} className="card-glass" style={{ padding: 0, overflow: 'hidden' }}>
                                <div style={{ height: '200px', position: 'relative' }}>
                                    <img src={hotel.image} alt={hotel.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'white', padding: '0.2rem 0.75rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 700 }}>{hotel.rating}</div>
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{hotel.name}</h3>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>{hotel.distance}</div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontWeight: 800 }}>{hotel.price}</span>
                                        <button className="btn btn-primary" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="card-glass" style={{ padding: '4rem', backgroundColor: 'var(--color-primary)', color: 'white', display: 'flex', gap: '4rem', alignItems: 'center' }}>
                        <div style={{ flex: 1 }}>
                            <div className="badge" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}>EXPLORE</div>
                            <h2 style={{ fontSize: '2.5rem', margin: '1.5rem 0' }}>Discover Aurangabad</h2>
                            <p style={{ opacity: 0.8, lineHeight: 1.8, marginBottom: '2rem' }}>
                                Aurangabad is a historic city in Maharashtra, known as the "City of Gates". While attending ICAISD 2025, take the opportunity to visit UNESCO World Heritage Sites located nearby.
                            </p>
                            <div style={{ display: 'flex', gap: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <FaCompass /> <span>Ajanta Caves</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <FaCompass /> <span>Ellora Caves</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: '400px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
                            <img src="https://images.unsplash.com/photo-1600100373024-54f3a38d6f51?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Ajanta" style={{ width: '100%' }} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default VenuePage;
