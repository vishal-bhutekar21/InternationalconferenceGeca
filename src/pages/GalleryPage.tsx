import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GalleryPage = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'ICAISD 2026', 'Legacy ICAISD-24', 'Keynote Speakers', 'Networking'];

    const items = [
        { id: 1, category: 'Keynote Speakers', image: 'https://images.unsplash.com/photo-1475721027185-404ebc7743f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', title: 'Session Highlights' },
        { id: 2, category: 'Networking', image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', title: 'Break Conversations' },
        { id: 3, category: 'ICAISD 2026', image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', title: 'GECCS Campus' },
        { id: 4, category: 'Legacy ICAISD-24', image: 'https://images.unsplash.com/photo-1540575861501-7ce058a877c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', title: 'Inauguration 2024' },
        { id: 5, category: 'Networking', image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', title: 'Global Delegates' },
        { id: 6, category: 'Keynote Speakers', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', title: 'Expert Panels' },
        { id: 7, category: 'ICAISD 2026', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', title: 'Auditorium' },
        { id: 8, category: 'Networking', image: 'https://images.unsplash.com/photo-1528605248644-14dd04cb2201?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', title: 'Collaborations' }
    ];

    const filteredItems = filter === 'All' ? items : items.filter(i => i.category === filter);

    return (
        <main style={{ paddingTop: '120px', backgroundColor: 'var(--color-bg-light)', minHeight: '100vh' }}>
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div className="badge">VISUAL ARCHIVE</div>
                        <h1 style={{ fontSize: '4rem', fontWeight: 800, margin: '1rem 0' }}>Gallery & <span style={{ color: 'var(--color-accent-orange)' }}>Highlights</span></h1>
                        <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
                            Capturing moments of innovation at Government College of Engineering, (Aurangabad) Chhatrapati Sambhajinagar. Explore our visual archive from past and present events.
                        </p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                style={{
                                    padding: '0.6rem 1.5rem',
                                    borderRadius: '50px',
                                    border: 'none',
                                    backgroundColor: filter === cat ? 'var(--color-accent-orange)' : '#E2E8F0',
                                    color: filter === cat ? 'white' : 'var(--color-text-muted)',
                                    fontWeight: 700,
                                    fontSize: '0.85rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <motion.div
                        layout
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '2rem',
                            justifyContent: 'center'
                        }}
                        className="gallery-flex-container"
                    >
                        <AnimatePresence>
                            {filteredItems.map(item => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="card-glass"
                                    style={{
                                        padding: 0,
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        flex: '1 1 300px',
                                        maxWidth: '400px'
                                    }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div style={{ height: '250px', position: 'relative' }}>
                                        <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        <div style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            padding: '1.5rem',
                                            background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                                            color: 'white'
                                        }}>
                                            <div style={{ fontSize: '0.7rem', fontWeight: 700, opacity: 0.8, textTransform: 'uppercase' }}>{item.category}</div>
                                            <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{item.title}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <button className="btn btn-outline" style={{ padding: '1rem 3rem' }}>Load More Photos</button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default GalleryPage;
