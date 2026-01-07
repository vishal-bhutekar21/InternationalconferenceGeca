import { motion } from 'framer-motion';
import { FaCheckCircle, FaClipboardList, FaUsers, FaPencilAlt } from 'react-icons/fa';

const ConferenceTasks = () => {
    const tasks = [
        {
            icon: <FaClipboardList />,
            title: 'Paper Submission',
            description: 'Submit your original research papers through our online submission portal. All submissions undergo rigorous peer review.'
        },
        {
            icon: <FaUsers />,
            title: 'Peer Review Process',
            description: 'Expert reviewers from academia and industry evaluate submissions based on originality, technical quality, and relevance.'
        },
        {
            icon: <FaCheckCircle />,
            title: 'Acceptance Notification',
            description: 'Authors receive detailed feedback and acceptance notifications. Accepted papers must be presented at the conference.'
        },
        {
            icon: <FaPencilAlt />,
            title: 'Camera Ready Submission',
            description: 'Final manuscripts incorporating reviewer feedback must be submitted in the specified format for publication.'
        }
    ];

    return (
        <section className="section" style={{ backgroundColor: 'var(--color-white)', padding: '6rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div className="badge">CONFERENCE WORKFLOW</div>
                    <h2 style={{ fontSize: '3rem', fontWeight: 800, marginTop: '1rem', marginBottom: '1rem' }}>
                        Conference <span style={{ color: 'var(--color-accent-orange)' }}>Tasks</span>
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
                        Follow these steps to participate in ICAISD 2025 and contribute to the advancement of AI and sustainable development.
                    </p>
                </div>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '2.5rem',
                    justifyContent: 'center'
                }} className="tasks-flex-container">
                    {tasks.map((task, index) => (
                        <motion.div
                            key={task.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            style={{
                                backgroundColor: 'var(--color-bg-light)',
                                padding: '2.5rem',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid var(--color-border)',
                                boxShadow: 'var(--shadow-sm)',
                                transition: 'all 0.3s ease',
                                flex: '1 1 350px',
                                maxWidth: '500px'
                            }}
                        >
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '12px',
                                backgroundColor: 'var(--color-orange-soft)',
                                color: 'var(--color-accent-orange)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                marginBottom: '1.5rem'
                            }}>
                                {task.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>
                                {task.title}
                            </h3>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                                {task.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConferenceTasks;
