import { motion } from 'framer-motion';
import { FaFileAlt, FaClock, FaCalendarCheck, FaUserCheck, FaUsers, FaArrowRight } from 'react-icons/fa';

const HomeDatesSection = () => {
    const dates = [
        {
            label: "Paper Submission",
            startDate: "01 May 2026",
            endDate: "15 Aug 2026",
            details: "Submission of full length papers for technical review and feedback.",
            icon: <FaFileAlt />,
            gradient: "#5D7285", // Muted Slate Blue
            shadowColor: "rgba(93, 114, 133, 0.4)"
        },
        {
            label: "Acceptance Notification",
            startDate: "16 Aug 2026",
            endDate: "15 Sep 2026",
            details: "Communication of review outcomes and acceptance decisions to authors.",
            icon: <FaClock />,
            gradient: "#9A5B5B", // Muted Red
            shadowColor: "rgba(154, 91, 91, 0.4)"
        },
        {
            label: "Camera Ready",
            startDate: "16 Sep 2026",
            endDate: "30 Sep 2026",
            details: "Final manuscript submission and copyright form completion.",
            icon: <FaCalendarCheck />,
            gradient: "#4F8A83", // Muted Teal
            shadowColor: "rgba(79, 138, 131, 0.4)"
        },
        {
            label: "Registration",
            startDate: "01 Oct 2026",
            endDate: "15 Oct 2026",
            details: "Deadline for conference registration and fee payment.",
            icon: <FaUserCheck />,
            gradient: "#A67C52", // Muted Bronze
            shadowColor: "rgba(166, 124, 82, 0.4)"
        },
        {
            label: "Main Event",
            startDate: "20 Dec 2026",
            endDate: "21 Dec 2026",
            details: "Technical sessions, keynotes, and sustainable networking at GECCS.",
            icon: <FaUsers />,
            gradient: "#5C7C6D", // Muted Sage
            shadowColor: "rgba(92, 124, 109, 0.4)"
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
                type: "spring" as const,
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
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '4rem', flexDirection: 'column', textAlign: 'center' }}
                >
                    <div className="badge">TIMELINE</div>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-primary)', marginTop: '0.5rem' }}>Important Dates</h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '2rem',
                        justifyContent: 'center'
                    }}
                >
                    {dates.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                boxShadow: `0 25px 50px ${item.shadowColor}`,
                                transition: { duration: 0.3 }
                            }}
                            style={{
                                padding: '2.5rem 2rem',
                                background: item.gradient,
                                borderRadius: '32px',
                                textAlign: 'left',
                                position: 'relative',
                                overflow: 'hidden',
                                border: 'none',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                cursor: 'default',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.25rem',
                                flex: '1 1 300px',
                                maxWidth: '380px',
                                color: 'white'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '16px',
                                    background: 'rgba(255, 255, 255, 0.2)',
                                    backdropFilter: 'blur(10px)',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.25rem',
                                    border: '1px solid rgba(255, 255, 255, 0.3)'
                                }}>
                                    {item.icon}
                                </div>
                                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase', letterSpacing: '0.05em', background: 'rgba(0,0,0,0.1)', padding: '0.25rem 0.75rem', borderRadius: '20px' }}>
                                    Schedule
                                </div>
                            </div>

                            <div>
                                <h4 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 800,
                                    marginBottom: '0.5rem',
                                    color: 'white',
                                    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                }}>
                                    {item.label}
                                </h4>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '1rem' }}>
                                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white' }}>
                                        {item.startDate} — {item.endDate}
                                    </div>
                                </div>

                                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, fontWeight: 500 }}>
                                    {item.details}
                                </p>
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
