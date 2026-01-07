import { motion } from 'framer-motion';
import { timelineMilestones } from '../data/conferenceData';
import { FaCheckCircle, FaClock, FaCalendarAlt } from 'react-icons/fa';

const Timeline = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: -50,
            scale: 0.9
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

    const gradients = [
        "linear-gradient(135deg, #F97316 0%, #FB923C 100%)",
        "linear-gradient(135deg, #FB923C 0%, #F97316 100%)",
        "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
        "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
        "linear-gradient(135deg, #F97316 0%, #FB923C 100%)"
    ];

    const getIcon = (index: number) => {
        if (index === 0) return <FaCalendarAlt />;
        if (index === timelineMilestones.length - 1) return <FaCheckCircle />;
        return <FaClock />;
    };

    return (
        <section
            id="timeline"
            style={{
                background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',
                padding: '8rem 0',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Animated Background Elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    opacity: [0.03, 0.05, 0.03]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    position: 'absolute',
                    top: '10%',
                    right: '5%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(251, 146, 60, 0.15) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    pointerEvents: 'none'
                }}
            />

            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [90, 0, 90],
                    opacity: [0.05, 0.03, 0.05]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '5%',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    pointerEvents: 'none'
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '6rem' }}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        style={{
                            display: 'inline-block',
                            padding: '0.5rem 1.5rem',
                            borderRadius: '50px',
                            background: 'rgba(251, 146, 60, 0.1)',
                            border: '1px solid rgba(251, 146, 60, 0.3)',
                            marginBottom: '1.5rem'
                        }}
                    >
                        <span style={{
                            fontSize: '0.75rem',
                            fontWeight: 800,
                            color: 'var(--color-accent-orange)',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase'
                        }}>
                            Conference Journey
                        </span>
                    </motion.div>

                    <h2 style={{
                        fontSize: '3.5rem',
                        fontWeight: 900,
                        color: 'white',
                        marginBottom: '1rem',
                        lineHeight: 1.2
                    }}>
                        Event <span style={{
                            background: 'linear-gradient(135deg, #FB923C, #F97316)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>Timeline</span>
                    </h2>

                    <p style={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '1.1rem',
                        maxWidth: '700px',
                        margin: '0 auto'
                    }}>
                        Follow the key milestones leading up to ICAISD 2026
                    </p>
                </motion.div>

                <div style={{
                    position: 'relative',
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    {/* Vertical Animated Line */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        style={{
                            position: 'absolute',
                            left: '50%',
                            top: '0',
                            bottom: '0',
                            width: '3px',
                            background: 'rgba(251, 146, 60, 0.3)',
                            transformOrigin: 'top',
                            transform: 'translateX(-50%)'
                        }}
                    />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        style={{ position: 'relative' }}
                    >
                        {timelineMilestones.map((milestone, index) => {
                            const isLeft = index % 2 === 0;
                            const gradient = gradients[index % gradients.length];

                            return (
                                <motion.div
                                    key={milestone.id}
                                    variants={itemVariants}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '2rem',
                                        marginBottom: index === timelineMilestones.length - 1 ? '0' : '4rem',
                                        alignItems: 'center',
                                        position: 'relative'
                                    }}
                                    className="timeline-item-flex"
                                >
                                    {/* Content Card */}
                                    <motion.div
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: `0 20px 60px rgba(251, 146, 60, 0.2)`
                                        }}
                                        style={{
                                            padding: '2.5rem',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            backdropFilter: 'blur(20px)',
                                            WebkitBackdropFilter: 'blur(20px)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            borderRadius: '24px',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            width: '100%',
                                            maxWidth: '450px',
                                            alignSelf: isLeft ? 'flex-start' : 'flex-end',
                                            marginLeft: isLeft ? '0' : 'auto',
                                            marginRight: isLeft ? 'auto' : '0'
                                        }}
                                    >
                                        {/* Gradient Top Border */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: '4px',
                                            background: gradient
                                        }} />

                                        {/* Subtle Glow Background */}
                                        <div style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: gradient,
                                            opacity: 0.03,
                                            pointerEvents: 'none'
                                        }} />

                                        <div style={{ position: 'relative', zIndex: 1 }}>
                                            <div style={{
                                                fontSize: '0.75rem',
                                                fontWeight: 700,
                                                color: 'var(--color-accent-orange)',
                                                marginBottom: '0.75rem',
                                                letterSpacing: '0.1em',
                                                textTransform: 'uppercase'
                                            }}>
                                                {milestone.status}
                                            </div>

                                            <h3 style={{
                                                fontSize: '1.5rem',
                                                fontWeight: 800,
                                                color: 'white',
                                                marginBottom: '0.75rem'
                                            }}>
                                                {milestone.label}
                                            </h3>

                                            <div style={{
                                                fontSize: '1.1rem',
                                                fontWeight: 600,
                                                background: gradient,
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text',
                                                marginBottom: '1rem'
                                            }}>
                                                {milestone.date}
                                            </div>

                                            {milestone.description && (
                                                <p style={{
                                                    color: 'rgba(255, 255, 255, 0.7)',
                                                    fontSize: '0.95rem',
                                                    lineHeight: 1.6
                                                }}>
                                                    {milestone.description}
                                                </p>
                                            )}
                                        </div>
                                    </motion.div>

                                    {/* Center Icon */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: index * 0.2 + 0.5,
                                            type: "spring",
                                            stiffness: 200
                                        }}
                                        whileHover={{
                                            rotate: 360,
                                            scale: 1.2
                                        }}
                                        style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            background: gradient,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontSize: '1.5rem',
                                            boxShadow: `0 0 0 8px rgba(15, 23, 42, 1), 0 0 0 12px rgba(251, 146, 60, 0.2)`,
                                            position: 'absolute',
                                            left: '50%',
                                            top: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            zIndex: 2,
                                            cursor: 'pointer'
                                        }}
                                        className="timeline-center-icon"
                                    >
                                        {getIcon(index)}
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
