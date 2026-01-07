import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaStar, FaCoffee, FaBus } from 'react-icons/fa';

const AccommodationPage = () => {
    const hotels = [
        {
            name: "Vivanta Aurangabad",
            rating: 5,
            price: "₹8,000+",
            distance: "3.5 km from GECA",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            amenities: ["Free WiFi", "Breakfast", "Pool", "Gym"]
        },
        {
            name: "Welcomhotel by ITC",
            rating: 5,
            price: "₹7,500+",
            distance: "4.2 km from GECA",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4df85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            amenities: ["Free WiFi", "Breakfast", "Spa", "Lounge"]
        },
        {
            name: "Hotel Rama International",
            rating: 4,
            price: "₹6,000+",
            distance: "3.8 km from GECA",
            image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            amenities: ["Free WiFi", "Breakfast", "Garden", "Parking"]
        },
        {
            name: "Lemon Tree Hotel",
            rating: 4,
            price: "₹5,000+",
            distance: "5.0 km from GECA",
            image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            amenities: ["Free WiFi", "Breakfast", "Airport Shuttle"]
        }
    ];

    return (
        <main style={{ paddingTop: '120px', backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div className="badge">STAY & COMFORT</div>
                        <h1 style={{ fontSize: '4rem', fontWeight: 800, margin: '1rem 0' }}>Accommodation <span style={{ color: 'var(--color-accent-orange)' }}>Guide</span></h1>
                        <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
                            Aurangabad offers a wide range of stay options from luxury 5-star hotels to budget-friendly accommodations near the conference venue.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem', marginBottom: '6rem' }}>
                        {hotels.map((hotel, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="card-glass"
                                style={{ padding: 0, overflow: 'hidden', backgroundColor: 'white' }}
                            >
                                <div style={{ height: '240px', position: 'relative' }}>
                                    <img src={hotel.image} alt={hotel.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'var(--color-accent-orange)', color: 'white', padding: '0.4rem 1rem', borderRadius: '50px', fontWeight: 800, fontSize: '0.8rem' }}>
                                        {hotel.price} / night
                                    </div>
                                </div>
                                <div style={{ padding: '2rem' }}>
                                    <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '0.5rem' }}>
                                        {[...Array(hotel.rating)].map((_, j) => <FaStar key={j} color="#FBBF24" size={14} />)}
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{hotel.name}</h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                                        <FaMapMarkerAlt size={14} />
                                        <span>{hotel.distance}</span>
                                    </div>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
                                        {hotel.amenities.map((amenity, j) => (
                                            <span key={j} style={{ backgroundColor: '#F1F5F9', color: '#475569', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700 }}>
                                                {amenity}
                                            </span>
                                        ))}
                                    </div>

                                    <button className="btn btn-outline" style={{ width: '100%' }}>Book Accommodation →</button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="card-glass" style={{ padding: '4rem', backgroundColor: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Special Rates for Delegates</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem auto', opacity: 0.8 }}>
                            We have partnered with several hotels to provide discounted rates for ICAISD 2025 delegates. Mention your Registration ID when booking.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                            <div style={{ textAlign: 'center' }}>
                                <FaBus size={40} color="var(--color-accent-orange)" style={{ marginBottom: '1rem' }} />
                                <div style={{ fontWeight: 700 }}>Complimentary Shuttle</div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>Between hotels & GECA</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <FaCoffee size={40} color="var(--color-accent-orange)" style={{ marginBottom: '1rem' }} />
                                <div style={{ fontWeight: 700 }}>Delegates Breakfast</div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>Included in partner hotels</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AccommodationPage;
