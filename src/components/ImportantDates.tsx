import { motion } from 'framer-motion';
import { importantDates } from '../data/conferenceData';
import { FaFileAlt, FaUserCheck, FaCamera, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

const ImportantDates = () => {
    const getIcon = (label: string) => {
        if (label.includes("Paper")) return <FaFileAlt />;
        if (label.includes("Registration")) return <FaUserCheck />;
        if (label.includes("Camera")) return <FaCamera />;
        return <FaCalendarAlt />;
    };

    const gradients = [
        {
            bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            shadow: "rgba(102, 126, 234, 0.25)"
        },
        {
            bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            shadow: "rgba(240, 147, 251, 0.25)"
        },
        {
            bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            shadow: "rgba(79, 172, 254, 0.25)"
        },
        {
            bg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            shadow: "rgba(250, 112, 154, 0.25)"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 40,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <section id="dates-horizontal" className="section" style={{ backgroundColor: 'var(--color-bg-light)', padding: '6rem 0' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title-wrapper"
                >
                    <div className="badge">Conference Timeline</div>
                    <h2 className="section-title">Important Dates</h2>
                    <p className="section-subtitle">
                        Stay on track with the ICAISD 2025 schedule. Please note the following deadlines for submissions and registration.
                    </p>
                </motion.div>

                <div style={{ position: 'relative', marginTop: '6rem' }}>
                    {/* Animated Connecting Line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        style={{
                            position: 'absolute',
                            top: '120px',
                            left: '50px',
                            right: '50px',
                            height: '3px',
                            background: 'linear-gradient(90deg, #667eea, #f093fb, #4facfe, #fa709a)',
                            zIndex: 0,
                            transformOrigin: 'left'
                        }}
                    />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '2rem',
                            position: 'relative',
                            zIndex: 1
                        }}
                    >
                        {importantDates.map((date, index) => {
                            const gradient = gradients[index % gradients.length];
                            return (
                                <div key={date.id} style={{ textAlign: 'center' }}>
                                    {/* Animated Circle on line */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15, type: "spring", stiffness: 200 }}
                                        style={{
                                            width: '24px',
                                            height: '24px',
                                            borderRadius: '50%',
                                            background: gradient.bg,
                                            margin: '0 auto 60px',
                                            position: 'relative',
                                            border: '4px solid white',
                                            boxShadow: `0 0 0 2px ${gradient.shadow}, 0 5px 15px ${gradient.shadow}`
                                        }}
                                    />

                                    <motion.div
                                        variants={cardVariants}
                                        whileHover={{
                                            y: -10,
                                            scale: 1.05,
                                            boxShadow: `0 25px 50px ${gradient.shadow}`,
                                            transition: { duration: 0.3 }
                                        }}
                                        style={{
                                            padding: '2rem 1.5rem',
                                            background: 'white',
                                            borderRadius: '24px',
                                            textAlign: 'left',
                                            minHeight: '220px',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            border: `1px solid rgba(226, 232, 240, 0.8)`,
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {/* Gradient Background Accent */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: '100%',
                                            background: gradient.bg,
                                            opacity: 0.03,
                                            pointerEvents: 'none'
                                        }} />

                                        <motion.div
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                            style={{
                                                width: '55px',
                                                height: '55px',
                                                borderRadius: '50%',
                                                background: gradient.bg,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginBottom: '1.25rem',
                                                color: 'white',
                                                fontSize: '1.4rem',
                                                position: 'relative',
                                                boxShadow: `0 10px 25px ${gradient.shadow}`
                                            }}
                                        >
                                            {getIcon(date.label)}
                                        </motion.div>

                                        <h4 style={{
                                            fontSize: '1.15rem',
                                            marginBottom: '0.75rem',
                                            fontWeight: 800,
                                            color: 'var(--color-primary)',
                                            position: 'relative'
                                        }}>
                                            {date.label}
                                        </h4>

                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            marginBottom: '1rem',
                                            position: 'relative'
                                        }}>
                                            <FaCheckCircle style={{
                                                color: date.status === 'Open' ? '#22C55E' : '#94A3B8',
                                                fontSize: '0.9rem'
                                            }} />
                                            <span style={{
                                                fontSize: '0.75rem',
                                                fontWeight: 700,
                                                color: date.status === 'Open' ? '#22C55E' : '#94A3B8',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em'
                                            }}>
                                                {date.status === 'Open' ? 'Active' : date.status}
                                            </span>
                                        </div>

                                        <div style={{
                                            fontSize: '1.1rem',
                                            fontWeight: 900,
                                            background: gradient.bg,
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                            position: 'relative'
                                        }}>
                                            {date.date}
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    style={{ textAlign: 'center', marginTop: '6rem' }}
                >
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', maxWidth: '600px', margin: '0 auto' }}>
                        Government College of Engineering, Aurangabad<br />
                        © 2025 ICAISD. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ImportantDates;
