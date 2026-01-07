import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaMicrophone } from 'react-icons/fa';

const SchedulePage = () => {
    const days = [
        { id: 1, label: "Day 01", date: "Friday, Dec 19, 2025", active: true },
        { id: 2, label: "Day 02", date: "Saturday, Dec 20, 2025", active: false }
    ];

    const timeline = [
        { time: "08:30 AM", event: "Registration & Breakfast", icon: <FaClock />, sub: "Kit collection at Main Foyer" },
        { time: "09:30 AM", event: "Inauguration Ceremony", icon: <FaMicrophone />, badge: "KEY EVENT", desc: "Traditional lighting of the lamp followed by Director's address.", details: "Hon. Chief Guest | Auditorium" },
        { time: "10:45 AM", event: "Keynote Address: AI for Sustainable Futures", icon: <FaMicrophone />, speaker: "Prof. Elena Rodriguez", title: "Director of AI Research, TechnoInst" },
        { time: "12:00 PM", event: "Networking Lunch", type: "break" },
        {
            time: "01:30 PM", event: "Technical Paper Presentations (Session I)", tracks: [
                { name: "Track A: Machine Learning", room: "Room 101", papers: ["Neural Networks in Agri", "NLP for Regional Lang"] },
                { name: "Track B: IoT & Embedded", room: "Room 102", papers: ["Smart City Sensor N", "Low power VLSI de"] }
            ]
        }
    ];

    return (
        <main style={{ paddingTop: '120px', backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
            <section className="section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="badge">CONFERENCE AGENDA</div>
                    <h1 style={{ fontSize: '4rem', fontWeight: 800, margin: '1rem 0' }}>Program <span style={{ color: 'var(--color-accent-orange)' }}>Schedule</span></h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto 3rem', color: 'var(--color-text-muted)' }}>
                        Explore the timeline of events, keynote sessions, and technical tracks planned for ICAISD 2025 at GECA.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '4rem' }}>
                        <div style={{ padding: '1rem 2rem', backgroundColor: 'white', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <FaCalendarAlt color="var(--color-accent-orange)" />
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>DATES</div>
                                <div style={{ fontWeight: 700 }}>19-20 December 2025</div>
                            </div>
                        </div>
                        <div style={{ padding: '1rem 2rem', backgroundColor: 'white', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <FaMapMarkerAlt color="var(--color-accent-orange)" />
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>VENUE</div>
                                <div style={{ fontWeight: 700 }}>GECA Main Campus</div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
                        {days.map(day => (
                            <div key={day.id} style={{
                                padding: '1.5rem 3rem',
                                backgroundColor: 'white',
                                borderRadius: '16px',
                                border: day.active ? '2px solid var(--color-accent-orange)' : '1px solid var(--color-border)',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}>
                                <div style={{ fontSize: '0.7rem', fontWeight: 800, color: day.active ? 'var(--color-accent-orange)' : 'var(--color-text-muted)', marginBottom: '0.25rem' }}>{day.label}</div>
                                <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>{day.date.split(',')[0]}</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{day.date.split(',')[1]}</div>
                            </div>
                        ))}
                    </div>

                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left', position: 'relative' }}>
                        <div style={{ position: 'absolute', left: '160px', top: 0, bottom: 0, width: '2px', backgroundColor: 'var(--color-border)', zIndex: 0 }} />

                        {timeline.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                style={{ display: 'flex', gap: '4rem', marginBottom: '3rem', position: 'relative', zIndex: 1 }}
                            >
                                <div style={{ width: '120px', textAlign: 'right', fontWeight: 700, paddingTop: '1.5rem' }}>
                                    {item.time}
                                </div>

                                <div style={{ width: '20px', height: '20px', backgroundColor: 'white', border: '4px solid var(--color-accent-orange)', borderRadius: '50%', marginTop: '1.75rem', transform: 'translateX(-11px)' }} />

                                <motion.div
                                    whileHover={{ x: 10, borderColor: 'var(--color-accent-orange)' }}
                                    className="card-glass"
                                    style={{ flex: 1, padding: '2rem', borderLeft: '4px solid transparent', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
                                >
                                    {item.badge && <span className="badge" style={{ float: 'right', fontSize: '0.65rem', backgroundColor: 'var(--color-accent-orange)', color: 'white' }}>{item.badge}</span>}
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.event}</h3>
                                    {item.sub && <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{item.sub}</p>}
                                    {item.speaker && (
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
                                            <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--color-border)', borderRadius: '50%' }} />
                                            <div>
                                                <div style={{ fontWeight: 700 }}>{item.speaker}</div>
                                                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{item.title}</div>
                                            </div>
                                        </div>
                                    )}
                                    {item.tracks && (
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1.5rem' }}>
                                            {item.tracks.map((t, i) => (
                                                <div key={i} style={{ padding: '1rem', backgroundColor: '#F8FAFC', borderRadius: '8px' }}>
                                                    <div style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem' }}>{t.name}</div>
                                                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Room: {t.room}</div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SchedulePage;
