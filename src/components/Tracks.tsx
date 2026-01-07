import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const Tracks = () => {
    const allTracks = [
        "Artificial Intelligence", "Machine Learning", "Deep Learning",
        "Data Mining", "Big Data Analytics", "Cloud Computing",
        "Internet of Things (IoT)", "Smart Systems", "Robotics & Automation",
        "Cyber Security", "Networking", "Software Engineering",
        "Image Processing", "Computer Vision", "Natural Language Processing",
        "Sustainable Development", "Green Computing", "Blockchain Technology"
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: -30,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <section id="tracks" className="section" style={{ backgroundColor: 'var(--color-bg-soft-orange)', padding: '6rem 0' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <div className="badge">TOPICS</div>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginTop: '1rem' }}>
                        Conference <span style={{ color: 'var(--color-accent-orange)' }}>Tracks</span>
                    </h2>
                    <p style={{ maxWidth: '750px', margin: '1rem auto', color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
                        We invite researchers to submit their original work in the following technical tracks.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '1.25rem',
                        marginBottom: '4rem',
                        justifyContent: 'center'
                    }}
                    className="tracks-flex-container"
                >
                    {allTracks.map((track, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{
                                x: 10,
                                backgroundColor: '#FFF7ED',
                                scale: 1.02,
                                boxShadow: '0 10px 25px rgba(251, 146, 60, 0.1)',
                                transition: { duration: 0.2 }
                            }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1.5rem 2rem',
                                borderRadius: '16px',
                                border: '1px solid #E2E8F0',
                                backgroundColor: 'white',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden',
                                flex: '1 1 300px',
                                maxWidth: '350px'
                            }}
                        >
                            {/* Animated gradient background on hover */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    bottom: 0,
                                    width: '4px',
                                    background: 'linear-gradient(180deg, var(--color-accent-orange), var(--color-accent-orange-dark))',
                                    transformOrigin: 'left'
                                }}
                            />

                            <motion.div
                                whileHover={{ rotate: 360, scale: 1.2 }}
                                transition={{ duration: 0.5 }}
                            >
                                <FaCheckCircle color="var(--color-accent-orange)" size={18} />
                            </motion.div>

                            <span style={{
                                fontWeight: 600,
                                color: 'var(--color-primary)',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                {track}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    style={{ textAlign: 'center' }}
                >
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 10px 30px rgba(251, 146, 60, 0.25)'
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-outline"
                        style={{
                            padding: '1rem 3rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                        }}
                    >
                        View All Technical Topics <FaArrowRight />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Tracks;
