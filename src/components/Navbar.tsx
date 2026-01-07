import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { conferenceConfig, navigationItems } from '../data/conferenceData';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, []);

    const navItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.19, 1, 0.22, 1] as [number, number, number, number]
            }
        })
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1100,
                    backgroundColor: 'rgba(255, 255, 255, 0.98)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderBottom: '1px solid var(--color-border)',
                    padding: '0.5rem 0',
                    transition: 'background-color 0.4s ease',
                    boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.05)' : 'none'
                }}
                className="navbar-main"
            >
                <div className="container" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    maxWidth: 'var(--container-width)',
                    transition: 'none'
                }}>
                    {/* Logo Section */}
                    <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', zIndex: 1001 }}>
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            style={{
                                width: '55px',
                                height: '55px',
                                overflow: 'hidden',
                                borderRadius: '12px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                            }}
                        >
                            <img
                                src={conferenceConfig.logo}
                                alt="GECCS Logo"
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                onError={(e) => { e.currentTarget.style.display = 'none' }}
                            />
                        </motion.div>
                        <motion.div
                            style={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <span style={{
                                fontWeight: 800,
                                fontSize: '1.2rem',
                                color: 'var(--color-primary)',
                                lineHeight: 1.1
                            }}>{conferenceConfig.title}</span>
                            <motion.span
                                style={{
                                    fontSize: '0.55rem',
                                    fontWeight: 700,
                                    color: 'var(--color-text-muted)',
                                    letterSpacing: '0.08em',
                                    marginTop: '2px',
                                    display: 'block'
                                }}
                            >
                                (AURANGABAD) CHHATRAPATI SAMBHAJINAGAR
                            </motion.span>
                        </motion.div>
                    </NavLink>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        style={{
                            display: 'none',
                            background: 'none',
                            border: 'none',
                            fontSize: '1.5rem',
                            color: 'var(--color-primary)',
                            cursor: 'pointer',
                            padding: '0.5rem',
                            zIndex: 1001
                        }}
                        className="mobile-menu-toggle"
                    >
                        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    {/* Desktop Navigation Items */}
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'nowrap' }} className="desktop-nav">
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
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            whiteSpace: 'nowrap'
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
                                            gap: '0.5rem',
                                            whiteSpace: 'nowrap'
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

                                {/* Dropdown Menu */}
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

                        {/* Register Button - Separate from main menu */}
                        <div style={{ marginLeft: '1rem', display: 'flex', alignItems: 'center' }}>
                            <NavLink
                                to="/registration"
                                style={{
                                    backgroundColor: 'var(--color-accent-orange)',
                                    color: 'white',
                                    fontWeight: 800,
                                    fontSize: '0.85rem',
                                    padding: '0.75rem 1.75rem',
                                    borderRadius: '50px',
                                    textDecoration: 'none',
                                    boxShadow: '0 10px 20px rgba(251, 146, 60, 0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    transition: 'all 0.3s ease',
                                    whiteSpace: 'nowrap'
                                }}
                                className="register-btn-nav"
                            >
                                Register Now <FaChevronDown size={8} style={{ transform: 'rotate(-90deg)' }} />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </motion.nav >

            {/* Mobile Menu */}
            <AnimatePresence>
                {
                    mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ duration: 0.3 }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                right: 0,
                                bottom: 0,
                                width: '80%',
                                maxWidth: '400px',
                                backgroundColor: 'white',
                                zIndex: 1000,
                                padding: '6rem 2rem 2rem',
                                overflowY: 'auto',
                                boxShadow: '-10px 0 30px rgba(0,0,0,0.1)'
                            }}
                            className="mobile-menu"
                        >
                            {navigationItems.map((item, index) => (
                                <div key={item.name} style={{ marginBottom: '1rem' }}>
                                    {item.path ? (
                                        <NavLink
                                            to={item.path}
                                            onClick={() => setMobileMenuOpen(false)}
                                            style={{
                                                display: 'block',
                                                padding: '1rem',
                                                textDecoration: 'none',
                                                color: 'var(--color-primary)',
                                                fontWeight: 700,
                                                fontSize: '1.1rem',
                                                borderRadius: '12px',
                                                transition: 'background-color 0.2s'
                                            }}
                                            className="mobile-nav-link"
                                        >
                                            {item.name}
                                        </NavLink>
                                    ) : (
                                        <>
                                            <div style={{
                                                padding: '1rem',
                                                fontWeight: 700,
                                                fontSize: '1.1rem',
                                                color: 'var(--color-primary)'
                                            }}>
                                                {item.name}
                                            </div>
                                            {item.dropdown && item.dropdown.map((subItem) => (
                                                <NavLink
                                                    key={subItem.name}
                                                    to={subItem.path}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    style={{
                                                        display: 'block',
                                                        padding: '0.75rem 1rem 0.75rem 2rem',
                                                        textDecoration: 'none',
                                                        color: 'var(--color-text-muted)',
                                                        fontWeight: 600,
                                                        fontSize: '0.95rem'
                                                    }}
                                                    className="mobile-nav-sublink"
                                                >
                                                    {subItem.name}
                                                </NavLink>
                                            ))}
                                        </>
                                    )}
                                </div>
                            ))}

                            {/* Mobile Registration Button */}
                            <div style={{ marginTop: '2rem', padding: '0 1rem' }}>
                                <NavLink
                                    to="/registration"
                                    onClick={() => setMobileMenuOpen(false)}
                                    style={{
                                        display: 'block',
                                        backgroundColor: 'var(--color-accent-orange)',
                                        color: 'white',
                                        padding: '1.25rem',
                                        borderRadius: '16px',
                                        textAlign: 'center',
                                        textDecoration: 'none',
                                        fontWeight: 800,
                                        fontSize: '1.1rem',
                                        boxShadow: '0 15px 30px rgba(251, 146, 60, 0.25)'
                                    }}
                                >
                                    Register Now
                                </NavLink>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence >

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {
                    mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(0,0,0,0.5)',
                                zIndex: 999
                            }}
                        />
                    )
                }
            </AnimatePresence >

            <style>{`
                .navbar-main .container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                @media (max-width: 1024px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    
                    .mobile-menu-toggle {
                        display: block !important;
                    }
                }

                @media (max-width: 767px) {
                    .navbar-main {
                        position: fixed !important;
                        top: 0 !important;
                        left: 0 !important;
                        right: 0 !important;
                        width: 100% !important;
                        height: auto !important;
                        min-height: 60px !important;
                        padding: 0.5rem 0 !important;
                        z-index: 9999 !important;
                        transform: none !important; /* Prevent Framer Motion from hiding it */
                        background-color: rgba(255, 255, 255, 0.98) !important;
                        backdrop-filter: blur(20px) !important;
                        -webkit-backdrop-filter: blur(20px) !important;
                    }

                    .navbar-main .container {
                        padding: 0 1rem;
                    }
                }

                .mobile-menu {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                
                .nav-dropdown-item:hover {
                    background-color: rgba(251, 146, 60, 0.08);
                    color: var(--color-accent-orange);
                    padding-left: 1.5rem;
                }
                
                .mobile-nav-link:hover,
                .mobile-nav-link:active {
                    background-color: rgba(251, 146, 60, 0.08);
                    padding-left: 1.5rem;
                }
                
                .mobile-nav-sublink:hover {
                    color: var(--color-accent-orange);
                    padding-left: 2.5rem;
                }
                
                /* Prevent body scroll when mobile menu is open */
                body.mobile-menu-open {
                    overflow: hidden;
                }

                .register-btn-nav:hover {
                    box-shadow: 0 15px 30px rgba(251, 146, 60, 0.3) !important;
                    transform: translateY(-2px);
                }
            `}</style>
        </>
    );
};

export default Navbar;
