import { motion } from 'framer-motion';
import { FaClock, FaDoorOpen, FaMicrophone } from 'react-icons/fa';

const PresentationSchedule = () => {
    const sessions = [
        {
            time: "10:30 AM - 12:30 PM",
            track: "Track 1: AI Foundations",
            room: "Seminar Hall A",
            chair: "Dr. R.K. Sharma",
            papers: [
                { id: "P201", title: "Evolutionary Algorithms in Climate Prediction", author: "Sarah Jenkins et al." },
                { id: "P205", title: "Neural Architecture Search for Solar Efficiency", author: "M. Abdul et al." }
            ]
        },
        {
            time: "01:30 PM - 03:30 PM",
            track: "Track 2: Sustainable Systems",
            room: "Conference Center",
            chair: "Prof. Anjali Gupta",
            papers: [
                { id: "P312", title: "Smart Grid Optimization using Multi-Agent Systems", author: "P. David et al." },
                { id: "P315", title: "Blockchain for Green Supply Chains", author: "L. Wang et al." }
            ]
        }
    ];

    return (
        <main style={{ paddingTop: '120px', backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div className="badge">TECHNICAL PROGRAM</div>
                        <h1 style={{ fontSize: '4rem', fontWeight: 800, margin: '1rem 0' }}>Presentation <span style={{ color: 'var(--color-accent-orange)' }}>Schedule</span></h1>
                        <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
                            Detailed schedule of technical paper presentations across various tracks and rooms.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {sessions.map((session, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="card-glass"
                                style={{ padding: 0, overflow: 'hidden', backgroundColor: 'white' }}
                                whileHover={{ borderColor: 'var(--color-accent-orange)' }}
                            >
                                <div style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '1.5rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <FaClock color="var(--color-accent-orange)" />
                                        <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>{session.time}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <FaDoorOpen color="var(--color-accent-orange)" />
                                            <span style={{ fontWeight: 700 }}>{session.room}</span>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ padding: '3rem' }}>
                                    <div style={{ marginBottom: '2rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{session.track}</h3>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <FaMicrophone color="var(--color-accent-orange)" />
                                            <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Chair: {session.chair}</span>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        {session.papers.map((paper, j) => (
                                            <motion.div
                                                key={j}
                                                whileHover={{ x: 10 }}
                                                style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem', backgroundColor: '#F8FAFC', borderRadius: '12px', borderLeft: '4px solid var(--color-accent-orange)' }}
                                            >
                                                <div style={{ backgroundColor: 'white', padding: '0.5rem 1rem', borderRadius: '8px', fontWeight: 800, fontSize: '0.8rem', color: 'var(--color-primary)', border: '1px solid var(--color-border)' }}>
                                                    {paper.id}
                                                </div>
                                                <div>
                                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>{paper.title}</h4>
                                                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                        <FaMicrophone size={12} /> {paper.author}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PresentationSchedule;
