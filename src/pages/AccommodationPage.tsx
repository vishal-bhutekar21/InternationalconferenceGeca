import AccordionHotel from '../components/AccordionHotel';
import AdvisoryBoard from '../components/AdvisoryBoard';

const AccommodationPage = () => {
    const hotels = [
        {
            name: "Vivanta (Aurangabad) Chhatrapati Sambhajinagar",
            rating: 5,
            pricePerDay: 8000,
            distance: "3.5 km from GECCS",
            images: ['placeholder1', 'placeholder2', 'placeholder3'],
            amenities: ["Free WiFi", "Breakfast", "Pool", "Parking"],
            description: "Luxury 5-star hotel offering world-class amenities and exceptional service. Perfect for international delegates seeking premium accommodation during ICAISG 2026.",
            website: "https://www.vivantahotels.com"
        },
        {
            name: "Welcomhotel by ITC",
            rating: 5,
            pricePerDay: 7500,
            distance: "4.2 km from GECCS",
            images: ['placeholder1', 'placeholder2', 'placeholder3'],
            amenities: ["Free WiFi", "Breakfast", "Pool", "Parking"],
            description: "Premium hotel with modern facilities and excellent conference amenities. Features spacious rooms and state-of-the-art business center.",
            website: "https://www.itchotels.com"
        },
        {
            name: "Hotel Rama International",
            rating: 4,
            pricePerDay: 6000,
            distance: "3.8 km from GECCS",
            images: ['placeholder1', 'placeholder2'],
            amenities: ["Free WiFi", "Breakfast", "Parking"],
            description: "Comfortable 4-star accommodation with excellent connectivity to the conference venue. Ideal for academic delegates.",
            website: "https://www.hotelrama.com"
        },
        {
            name: "Lemon Tree Hotel",
            rating: 4,
            pricePerDay: 5000,
            distance: "5.0 km from GECCS",
            images: ['placeholder1', 'placeholder2'],
            amenities: ["Free WiFi", "Breakfast", "Parking"],
            description: "Modern hotel chain offering consistent quality and comfort. Great value for money with complimentary airport shuttle service.",
            website: "https://www.lemontreehotels.com"
        },
        {
            name: "Hotel Green Olive",
            rating: 3,
            pricePerDay: 3500,
            distance: "1.5 km from GECCS",
            images: ['placeholder1'],
            amenities: ["Free WiFi", "Breakfast"],
            description: "Budget-friendly option closest to the conference venue. Clean, comfortable rooms with essential amenities for delegates.",
            website: "https://www.hotelgreenolive.com"
        }
    ];

    return (
        <main style={{ paddingTop: '120px', backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div className="badge">STAY & COMFORT</div>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, margin: '1rem 0' }}>
                            Accommodation <span style={{ color: 'var(--color-accent-orange)' }}>Guide</span>
                        </h1>
                        <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
                            (Aurangabad) Chhatrapati Sambhajinagar offers a wide range of stay options from luxury 5-star hotels to budget-friendly accommodations near the conference venue.
                        </p>
                    </div>

                    {/* Hotel Accordions */}
                    <div style={{ marginBottom: '6rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>
                            Recommended <span style={{ color: 'var(--color-accent-orange)' }}>Hotels</span>
                        </h2>
                        {hotels.map((hotel, index) => (
                            <AccordionHotel key={index} hotel={hotel} index={index} />
                        ))}
                    </div>

                    {/* Special Rates Card */}
                    <div style={{
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        padding: 'clamp(2rem, 5vw, 4rem)',
                        borderRadius: 'var(--radius-lg)',
                        textAlign: 'center',
                        marginBottom: '6rem'
                    }}>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '1.5rem', color: 'white' }}>
                            Special Rates for Delegates
                        </h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem auto', opacity: 0.8, lineHeight: 1.6 }}>
                            We have partnered with several hotels to provide discounted rates for ICAISG 2026 delegates. Mention your Registration ID when booking to avail special conference rates.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                            <div style={{ textAlign: 'center', minWidth: '150px' }}>
                                <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: 'var(--color-accent-orange)', marginBottom: '0.5rem' }}>
                                    15-20%
                                </div>
                                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Discount on Room Rates</div>
                            </div>
                            <div style={{ textAlign: 'center', minWidth: '150px' }}>
                                <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: 'var(--color-accent-orange)', marginBottom: '0.5rem' }}>
                                    Free
                                </div>
                                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Breakfast Included</div>
                            </div>
                            <div style={{ textAlign: 'center', minWidth: '150px' }}>
                                <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: 'var(--color-accent-orange)', marginBottom: '0.5rem' }}>
                                    24/7
                                </div>
                                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Concierge Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advisory Board */}
            <AdvisoryBoard />
        </main>
    );
};

export default AccommodationPage;
