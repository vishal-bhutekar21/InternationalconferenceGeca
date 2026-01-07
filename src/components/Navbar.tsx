import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { conferenceConfig, navigationItems } from '../data/conferenceData';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.19, 1, 0.22, 1]
            }
        })
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            style={{
                position: 'fixed',
                top: scrolled ? '10px' : '36px',
                left: scrolled ? '20px' : '0',
                right: scrolled ? '20px' : '0',
                zIndex: 1000,
                backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: scrolled ? '1px solid rgba(226, 232, 240, 0.5)' : 'none',
                borderBottom: scrolled ? 'none' : '1px solid var(--color-border)',
                padding: scrolled ? '0.75rem 2rem' : '0.75rem 0',
                borderRadius: scrolled ? '24px' : '0',
                transition: 'all 0.6s cubic-bezier(0.19, 1, 0.22, 1)',
                boxShadow: scrolled ? '0 20px 60px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255,255,255,0.5) inset' : 'none'
            }}
        >
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: scrolled ? '1150px' : 'var(--container-width)',
                transition: 'max-width 0.6s cubic-bezier(0.19, 1, 0.22, 1)'
            }}>
                {/* Logo Section - Restored Original */}
                <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        style={{
                            width: '40px',
                            height: '40px',
                            overflow: 'hidden',
                            borderRadius: '10px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}
                    >
                        <img
                            src={conferenceConfig.logo}
                            alt="GECA Logo"
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                            onError={(e) => { e.currentTarget.style.display = 'none' }}
                        />
                    </motion.div>
                    <motion.div
                        style={{ display: 'flex', flexDirection: 'column' }}
                        animate={{ scale: scrolled ? 0.95 : 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <span style={{
                            fontWeight: 800,
                            fontSize: scrolled ? '1.05rem' : '1.2rem',
                            color: 'var(--color-primary)',
                            lineHeight: 1.1,
                            transition: 'font-size 0.4s ease'
                        }}>{conferenceConfig.title}</span>
                        <AnimatePresence>
                            {!scrolled && (
                                <motion.span
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    style={{
                                        fontSize: '0.65rem',
                                        fontWeight: 700,
                                        color: 'var(--color-text-muted)',
                                        letterSpacing: '0.08em',
                                        marginTop: '2px'
                                    }}
                                >
                                    GECA, AURANGABAD
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </NavLink>

                {/* Navigation Items */}
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    {navigationItems.map((item, index) => (
                        <motion.div
                            key={item.name}
                            custom={index}
                            initial="hidden"
                            animate="visible"
                            variants={navItemVariants}
                            style={{ position: 'relative' }}
                            onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            {item.path ? (
                                <NavLink
                                    to={item.path}
                                    style={({ isActive }) => ({
                                        textDecoration: 'none',
                                        color: isActive ? 'var(--color-accent-orange)' : 'var(--color-primary)',
                                        fontWeight: 700,
                                        fontSize: '0.85rem',
                                        padding: '0.65rem 1.25rem',
                                        borderRadius: '12px',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.4rem',
                                        position: 'relative',
                                        backgroundColor: isActive ? 'rgba(251, 146, 60, 0.08)' : 'transparent',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                    })}
                                    className="nav-link"
                                >
                                    {item.name}
                                </NavLink>
                            ) : (
                                <motion.div
                                    whileHover={{
                                        backgroundColor: 'rgba(0,0,0,0.04)',
                                        scale: 1.02
                                    }}
                                    transition={{ duration: 0.2 }}
                                    style={{
                                        cursor: 'pointer',
                                        color: activeDropdown === item.name ? 'var(--color-accent-orange)' : 'var(--color-primary)',
                                        fontWeight: 700,
                                        fontSize: '0.85rem',
                                        padding: '0.65rem 1.25rem',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}
                                >
                                    {item.name}
                                    <motion.div
                                        animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                    >
                                        <FaChevronDown size={9} style={{ opacity: 0.6 }} />
                                    </motion.div>
                                </motion.div>
                            )}

                            {/* Dropdown Menu with Enhanced Animation */}
                            <AnimatePresence>
                                {item.dropdown && activeDropdown === item.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                        transition={{
                                            duration: 0.25,
                                            ease: [0.4, 0, 0.2, 1]
                                        }}
                                        style={{
                                            position: 'absolute',
                                            top: '100%',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            minWidth: '220px',
                                            backgroundColor: 'rgba(255, 255, 255, 0.98)',
                                            backdropFilter: 'blur(24px)',
                                            WebkitBackdropFilter: 'blur(24px)',
                                            borderRadius: '20px',
                                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(0,0,0,0.04)',
                                            border: '1px solid rgba(226, 232, 240, 0.6)',
                                            padding: '0.75rem',
                                            marginTop: '0.75rem',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        {item.dropdown.map((subItem, subIndex) => (
                                            <motion.div
                                                key={subItem.name}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: subIndex * 0.05 }}
                                            >
                                                <NavLink
                                                    to={subItem.path}
                                                    style={{
                                                        display: 'block',
                                                        padding: '0.75rem 1.25rem',
                                                        textDecoration: 'none',
                                                        color: 'var(--color-primary)',
                                                        fontSize: '0.85rem',
                                                        fontWeight: 600,
                                                        borderRadius: '12px',
                                                        transition: 'all 0.2s ease'
                                                    }}
                                                    className="nav-dropdown-item"
                                                >
                                                    {subItem.name}
                                                </NavLink>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}

                    {/* Register Button with Glow Effect */}
                    <NavLink to="/registration" style={{ textDecoration: 'none' }}>
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 15px 35px rgba(251, 146, 60, 0.35)'
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            style={{
                                padding: '0.65rem 1.75rem',
                                marginLeft: '0.75rem',
                                backgroundColor: 'var(--color-accent-orange)',
                                color: 'white',
                                borderRadius: '14px',
                                border: 'none',
                                fontWeight: 800,
                                fontSize: '0.85rem',
                                boxShadow: '0 10px 25px rgba(251, 146, 60, 0.25)',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.5, 0.3]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut'
                                }}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
                                    pointerEvents: 'none'
                                }}
                            />
                            <span style={{ position: 'relative', zIndex: 1 }}>Register Now</span>
                        </motion.button>
                    </NavLink>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
