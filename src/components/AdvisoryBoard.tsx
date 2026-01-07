import { motion } from 'framer-motion';

interface BoardMember {
    name: string;
    designation: string;
    institution: string;
    country?: string;
    image?: string;
}

const AdvisoryBoard = () => {
    // Placeholder data - will be replaced with actual data
    const internationalBoard: BoardMember[] = [
        {
            name: 'Dr. John Smith',
            designation: 'Professor',
            institution: 'MIT, USA',
            country: 'USA'
        },
        {
            name: 'Dr. Maria Garcia',
            designation: 'Associate Professor',
            institution: 'Oxford University',
            country: 'UK'
        },
        {
            name: 'Dr. Li Wei',
            designation: 'Professor',
            institution: 'Tsinghua University',
            country: 'China'
        }
    ];

    const nationalBoard: BoardMember[] = [
        {
            name: 'Dr. Rajesh Kumar',
            designation: 'Professor',
            institution: 'IIT Bombay',
            country: 'India'
        },
        {
            name: 'Dr. Priya Sharma',
            designation: 'Associate Professor',
            institution: 'IISc Bangalore',
            country: 'India'
        },
        {
            name: 'Dr. Amit Patel',
            designation: 'Professor',
            institution: 'IIT Delhi',
            country: 'India'
        }
    ];

    const renderBoard = (members: BoardMember[], title: string) => (
        <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>
                {title}
            </h3>
            <div className="grid-responsive grid-3-col" style={{ gap: '2rem' }}>
                {members.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        style={{
                            backgroundColor: 'var(--color-white)',
                            padding: '2rem',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid var(--color-border)',
                            boxShadow: 'var(--shadow-sm)',
                            textAlign: 'center',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {/* Placeholder for member image */}
                        <div style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--color-bg-light)',
                            border: '3px solid var(--color-accent-orange)',
                            margin: '0 auto 1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '2rem',
                            color: 'var(--color-accent-orange)',
                            fontWeight: 800
                        }}>
                            {member.name.charAt(0)}
                        </div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                            {member.name}
                        </h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-accent-orange)', fontWeight: 600, marginBottom: '0.5rem' }}>
                            {member.designation}
                        </p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                            {member.institution}
                        </p>
                        {member.country && (
                            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.5rem', fontStyle: 'italic' }}>
                                {member.country}
                            </p>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );

    return (
        <section className="section" style={{ backgroundColor: 'var(--color-bg-light)', padding: '6rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div className="badge">CONFERENCE ADVISORS</div>
                    <h2 style={{ fontSize: '3rem', fontWeight: 800, marginTop: '1rem', marginBottom: '1rem' }}>
                        Advisory <span style={{ color: 'var(--color-accent-orange)' }}>Board</span>
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
                        Distinguished experts guiding the conference towards excellence in AI and sustainable development research.
                    </p>
                </div>

                {renderBoard(internationalBoard, 'International Advisory Board')}
                {renderBoard(nationalBoard, 'National Advisory Board')}
            </div>
        </section>
    );
};

export default AdvisoryBoard;
