import { motion } from 'framer-motion';
import { FaFileAlt, FaClock, FaCalendarCheck, FaUserCheck, FaUsers, FaArrowRight } from 'react-icons/fa';

const HomeDatesSection = () => {
    const dates = [
        {
            label: "Paper Submission",
            date: "15 Aug 2025",
            icon: <FaFileAlt />,
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            shadowColor: "rgba(102, 126, 234, 0.3)"
        },
        {
            label: "Notification",
            date: "15 Sep 2025",
            icon: <FaClock />,
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            shadowColor: "rgba(240, 147, 251, 0.3)"
        },
        {
            label: "Camera Ready",
            date: "30 Sep 2025",
            icon: <FaCalendarCheck />,
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            shadowColor: "rgba(79, 172, 254, 0.3)"
        },
        {
            label: "Registration",
            date: "15 Oct 2025",
            icon: <FaUserCheck />,
            gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            shadowColor: "rgba(250, 112, 154, 0.3)"
        },
        {
            label: "Conference",
            date: "20-21 Dec",
            icon: <FaUsers />,
            gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
            shadowColor: "rgba(168, 237, 234, 0.3)"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <section className="section" style={{ backgroundColor: 'var(--color-bg-light)', padding: '6rem 0' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}
                >
                    <div>
                        <div className="badge">TIMELINE</div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-primary)', marginTop: '0.5rem' }}>Important Dates</h2>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}
                >
                    {dates.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                                boxShadow: `0 25px 50px ${item.shadowColor}`,
                                transition: { duration: 0.3 }
                            }}
                            style={{
                                padding: '2.5rem 1.5rem',
                                background: 'white',
                                borderRadius: '24px',
                                textAlign: 'center',
                                position: 'relative',
                                overflow: 'hidden',
                                border: '1px solid rgba(226, 232, 240, 0.8)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                                cursor: 'pointer'
                            }}
                        >
                            {/* Gradient Background Accent */}
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '5px',
                                    background: item.gradient
                                }}
                            />

                            {/* Glowing Background Effect */}
                            <div style={{
                                position: 'absolute',
                                top: '-50%',
                                left: '-50%',
                                width: '200%',
                                height: '200%',
                                background: item.gradient,
                                opacity: 0.03,
                                pointerEvents: 'none'
                            }} />

                            <motion.div
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    background: item.gradient,
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 1.5rem',
                                    fontSize: '1.5rem',
                                    position: 'relative',
                                    boxShadow: `0 10px 25px ${item.shadowColor}`
                                }}
                            >
                                {item.icon}
                            </motion.div>

                            <h4 style={{
                                fontSize: '1rem',
                                fontWeight: 700,
                                marginBottom: '0.75rem',
                                color: 'var(--color-primary)',
                                position: 'relative'
                            }}>
                                {item.label}
                            </h4>

                            <div style={{
                                fontSize: '1.35rem',
                                fontWeight: 900,
                                background: item.gradient,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                position: 'relative'
                            }}>
                                {item.date}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    style={{ textAlign: 'center', marginTop: '4rem' }}
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(251, 146, 60, 0.25)' }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-outline"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}
                    >
                        Download Full Schedule <FaArrowRight />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default HomeDatesSection;
