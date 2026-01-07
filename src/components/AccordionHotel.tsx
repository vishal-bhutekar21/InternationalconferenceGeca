import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaExternalLinkAlt, FaWifi, FaParking, FaCoffee, FaSwimmingPool } from 'react-icons/fa';

interface HotelData {
    name: string;
    rating: number;
    pricePerDay: number;
    distance: string;
    images: string[];
    amenities: string[];
    description: string;
    website: string;
}

interface AccordionHotelProps {
    hotel: HotelData;
    index: number;
}

const AccordionHotel: React.FC<AccordionHotelProps> = ({ hotel, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    const twoDayPrice = hotel.pricePerDay * 2;

    const amenityIcons: { [key: string]: React.ReactElement } = {
        'Free WiFi': <FaWifi />,
        'Parking': <FaParking />,
        'Breakfast': <FaCoffee />,
        'Pool': <FaSwimmingPool />
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="accordion-item"
            style={{ marginBottom: '1.5rem' }}
        >
            <button
                className="accordion-header"
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    backgroundColor: isOpen ? 'var(--color-orange-soft)' : 'transparent'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
                    <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem', textAlign: 'left' }}>
                            {hotel.name}
                        </h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                            <span>{'⭐'.repeat(hotel.rating)} Star</span>
                            <span>•</span>
                            <span>{hotel.distance}</span>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>From</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-accent-orange)' }}>
                            ₹{hotel.pricePerDay.toLocaleString()}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>per night</div>
                    </div>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ color: 'var(--color-accent-orange)' }}
                    >
                        <FaChevronDown size={20} />
                    </motion.div>
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div className="accordion-content" style={{ paddingTop: '1.5rem' }}>
                            {/* Hotel Images Placeholder */}
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '1rem',
                                marginBottom: '2rem'
                            }} className="hotel-images-flex">
                                {hotel.images.map((img, idx) => (
                                    <div key={idx} style={{
                                        height: '150px',
                                        borderRadius: '10px',
                                        overflow: 'hidden',
                                        backgroundColor: 'var(--color-bg-light)',
                                        border: '2px dashed var(--color-border)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flex: '1 1 200px'
                                    }}>
                                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', fontStyle: 'italic' }}>
                                            Hotel Image {idx + 1}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Pricing Details */}
                            <div style={{
                                backgroundColor: 'var(--color-orange-soft)',
                                padding: '1.5rem',
                                borderRadius: '10px',
                                marginBottom: '2rem'
                            }}>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>Pricing Details</h4>
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '1rem'
                                }} className="pricing-flex">
                                    <div style={{ flex: '1 1 150px' }}>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>
                                            Per Night
                                        </div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-accent-orange)' }}>
                                            ₹{hotel.pricePerDay.toLocaleString()}
                                        </div>
                                    </div>
                                    <div style={{ flex: '1 1 150px' }}>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>
                                            2-Day Conference Stay
                                        </div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-accent-orange)' }}>
                                            ₹{twoDayPrice.toLocaleString()}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hotel Details */}
                            <div style={{ marginBottom: '2rem' }}>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>About This Hotel</h4>
                                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                    {hotel.description}
                                </p>

                                {/* Amenities */}
                                <h5 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem' }}>Amenities</h5>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                    {hotel.amenities.map((amenity, idx) => (
                                        <div key={idx} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            backgroundColor: 'var(--color-bg-light)',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '20px',
                                            fontSize: '0.9rem'
                                        }}>
                                            <span style={{ color: 'var(--color-accent-orange)' }}>
                                                {amenityIcons[amenity] || '✓'}
                                            </span>
                                            {amenity}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Visit Website Button */}
                            <a
                                href={hotel.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                            >
                                <button className="btn btn-orange" style={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.75rem'
                                }}>
                                    <FaExternalLinkAlt />
                                    Visit Hotel Website
                                </button>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default AccordionHotel;
