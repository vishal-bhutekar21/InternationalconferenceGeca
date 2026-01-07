import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGlobe, FaSearch, FaChevronDown } from 'react-icons/fa';

const SpeakersPage = () => {
    const [search, setSearch] = useState('');

    const keynotes = [
        {
            name: "Dr. James Anderson",
            university: "STANFORD UNIVERSITY",
            bio: "Renowned for his pioneering work in Neural Network architectures and their application in...",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
        },
        {
            name: "Prof. Elena Rodriguez",
            university: "MIT MEDIA LAB",
            bio: "Director of the Future Interfaces Group, focusing on human-computer interaction and affectiv...",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
        },
        {
            name: "Dr. Rajesh Kumar",
            university: "IIT BOMBAY",
            bio: "Expert in Large Language Models and their deployment in resource-constrained environments.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
        },
        {
            name: "Dr. Sarah Chen",
            university: "NATIONAL UNIV. OF SINGAPORE",
            bio: "Leading research in sustainable AI and green computing technologies for next-gen data centers.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
        }
    ];

    const chairs = [
        { name: "Dr. M. Patil", org: "COEP, Pune", track: "IoT", image: "https://i.pravatar.cc/150?u=1" },
        { name: "Prof. A. Singh", org: "NIT Trichy", track: "ML", image: "https://i.pravatar.cc/150?u=2" },
        { name: "Dr. K. Rao", org: "IIIT Hyderabad", track: "Data", image: "https://i.pravatar.cc/150?u=3" },
        { name: "Prof. L. Das", org: "Jadavpur Univ.", track: "AI", image: "https://i.pravatar.cc/150?u=4" }
    ];

    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--color-bg-light)', minHeight: '100vh', paddingBottom: '6rem' }}>
            {/* Header */}
            <section style={{ padding: '6rem 0 4rem', backgroundColor: 'var(--color-white)', borderBottom: '1px solid var(--color-border)' }}>
                <div className="container">
                    <div style={{ display: 'inline-block', backgroundColor: 'var(--color-orange-soft)', color: 'var(--color-accent-orange)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 800, marginBottom: '1.5rem' }}>
                        Conference 2025
                    </div>
                    <h1 style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                        Distinguished Speakers
                    </h1>
                    <p style={{ maxWidth: '600px', color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                        Meet the visionaries, researchers, and industry leaders shaping the future of Intelligent Systems and Digital Transformation.
                    </p>
                </div>
            </section>

            {/* Filters */}
            <section style={{ padding: '2rem 0', borderTop: '1px solid #F1F5F9', backgroundColor: '#F8FAFC' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '1.5rem' }}>
                        <div style={{ position: 'relative' }}>
                            <FaSearch style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                            <input
                                type="text"
                                placeholder="Search speakers by name, topic, or university..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                style={{ width: '100%', padding: '1rem 1rem 1rem 3.5rem', borderRadius: '12px', border: '1px solid #E2E8F0', fontSize: '0.95rem' }}
                            />
                        </div>
                        <div style={{ position: 'relative' }}>
                            <select style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #E2E8F0', appearance: 'none', backgroundColor: 'white', fontWeight: 600, color: 'var(--color-primary)' }}>
                                <option>Filter by Track</option>
                            </select>
                            <FaChevronDown style={{ position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8', pointerEvents: 'none' }} />
                        </div>
                        <div style={{ position: 'relative' }}>
                            <select style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #E2E8F0', appearance: 'none', backgroundColor: 'white', fontWeight: 600, color: 'var(--color-primary)' }}>
                                <option>Filter by Day</option>
                            </select>
                            <FaChevronDown style={{ position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8', pointerEvents: 'none' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Keynotes */}
            <section style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '4rem' }}>
                        <div style={{ width: '6px', height: '35px', backgroundColor: '#F97316', borderRadius: '10px' }} />
                        <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Keynote Speakers</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
                        {keynotes.map((s, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                style={{ backgroundColor: 'white', padding: '3.5rem 2rem', borderRadius: '32px', textAlign: 'center', border: '1px solid #F1F5F9', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}
                            >
                                <img src={s.image} alt={s.name} style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 2rem', border: '4px solid #FFF7ED' }} />
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{s.name}</h3>
                                <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#F97316', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>{s.university}</div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '2.5rem', minHeight: '4.8em' }}>{s.bio}</p>

                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', borderTop: '1px solid #F1F5F9', paddingTop: '1.5rem' }}>
                                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                                        <FaLinkedin style={{ color: '#94A3B8', cursor: 'pointer' }} />
                                        <FaGlobe style={{ color: '#94A3B8', cursor: 'pointer' }} />
                                    </div>
                                    <button style={{ marginLeft: 'auto', backgroundColor: '#F97316', color: 'white', padding: '0.6rem 1.5rem', borderRadius: '50px', border: 'none', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' }}>
                                        Read More
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Session Chairs */}
            <section style={{ padding: '2rem 0 6rem' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '4rem' }}>
                        <div style={{ width: '6px', height: '35px', backgroundColor: '#F97316', borderRadius: '10px' }} />
                        <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Session Chairs</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
                        {chairs.map((c, i) => (
                            <div key={i} style={{ backgroundColor: 'white', padding: '1.5rem 2rem', borderRadius: '20px', border: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <img src={c.image} alt={c.name} style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary)' }}>{c.name}</h4>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>{c.org}</p>
                                    <div style={{ backgroundColor: '#FFF7ED', color: '#F97316', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 800, display: 'inline-block' }}>Track: {c.track}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <button style={{ backgroundColor: 'white', border: '1px solid #E2E8F0', padding: '1rem 2.5rem', borderRadius: '50px', fontWeight: 700, color: 'var(--color-primary)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            Load More Speakers <FaChevronDown size={12} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Bottom CTA Overlay in Footer-like Style */}
            <section style={{ padding: '4rem 0', borderTop: '1px solid #F1F5F9' }}>
                {/* This mimics the footer area shown in the image */}
            </section>
        </main>
    );
};

export default SpeakersPage;
