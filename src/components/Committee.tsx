import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { committeeMembers } from '../data/conferenceData';
import { FaSearch, FaUserTie, FaUsers, FaGraduationCap, FaUserGraduate, FaLaptopCode, FaCogs, FaGlobe, FaFlag } from 'react-icons/fa';

const Committee = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const categories = [
        { name: "Patrons", icon: <FaUserTie /> },
        { name: "International Advisory Committee", icon: <FaGlobe /> },
        { name: "National Advisory Committee", icon: <FaFlag /> },
        { name: "Organizing Committee", icon: <FaCogs /> }
    ];

    const filteredMembers = committeeMembers.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getMembersByCategory = (categoryName: string) => {
        return filteredMembers.filter(m => m.category === categoryName);
    };

    return (
        <section id="committee" className="section" style={{ backgroundColor: 'var(--color-bg-soft-slate)', paddingTop: '4rem' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div className="badge">MANAGEMENT TEAM</div>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginTop: '1rem' }}>
                        Advisory <span style={{ color: 'var(--color-accent-orange)' }}>Committee</span>
                    </h2>
                    <p style={{ maxWidth: '700px', margin: '1rem auto', color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
                        The successful completion of ICAISG 2026 is guided by these dedicated professionals and advisory members.
                    </p>
                </div>

                {/* Search Bar */}
                <div style={{
                    maxWidth: '600px',
                    margin: '0 auto 5rem',
                    position: 'relative'
                }}>
                    <div style={{
                        position: 'absolute',
                        left: '1.25rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: 'var(--color-accent-orange)',
                        zIndex: 1
                    }}>
                        <FaSearch />
                    </div>
                    <input
                        type="text"
                        placeholder="Search for a member or role..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '1.25rem 1.25rem 1.25rem 3.5rem',
                            borderRadius: '50px',
                            border: '1px solid var(--color-border)',
                            fontSize: '1rem',
                            outline: 'none',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--color-accent-orange)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                    />
                </div>

                {categories.map((category) => {
                    const members = getMembersByCategory(category.name);
                    if (members.length === 0) return null;

                    const sectionId = category.name.toLowerCase()
                        .replace(/\s+/g, '-')
                        .replace('international-advisory-committee', 'international')
                        .replace('national-advisory-committee', 'national')
                        .replace('organizing-committee', 'organizing');

                    return (
                        <div key={category.name} id={sectionId} style={{ marginBottom: '6rem', scrollMarginTop: '100px' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                marginBottom: '2.5rem',
                                borderBottom: '2px solid rgba(251, 146, 60, 0.1)',
                                paddingBottom: '1rem'
                            }}>
                                <div style={{
                                    backgroundColor: 'rgba(251, 146, 60, 0.1)',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--color-accent-orange)'
                                }}>
                                    {category.icon}
                                </div>
                                <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800 }}>{category.name}</h3>
                            </div>

                            <div className="flex-container" style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '2rem',
                                justifyContent: 'center'
                            }}>
                                <AnimatePresence>
                                    {members.map((member, index) => (
                                        <motion.div
                                            key={member.id}
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.4, delay: index * 0.05 }}
                                            style={{
                                                padding: '2.5rem 1.5rem',
                                                textAlign: 'center',
                                                backgroundColor: 'white',
                                                borderRadius: '32px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                border: '2px solid var(--color-border)',
                                                boxShadow: 'var(--shadow-md)',
                                                flex: '1 1 280px',
                                                maxWidth: '350px',
                                                minHeight: '320px',
                                                position: 'relative',
                                                zIndex: 1
                                            }}
                                            whileHover="hover"
                                        >
                                            <motion.div
                                                variants={{
                                                    hover: {
                                                        scale: 1.15,
                                                        y: -10,
                                                        boxShadow: "0 20px 40px rgba(249, 115, 22, 0.25)",
                                                        borderColor: 'var(--color-accent-orange)'
                                                    }
                                                }}
                                                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                                                style={{
                                                    width: '120px',
                                                    height: '120px',
                                                    borderRadius: '50%',
                                                    backgroundColor: '#F8FAFC',
                                                    marginBottom: '1.5rem',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: 'var(--color-accent-orange)',
                                                    border: '4px solid white',
                                                    boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                                                    overflow: 'hidden',
                                                    position: 'relative',
                                                    zIndex: 10
                                                }}
                                            >
                                                {(!member.image || member.image === 'placeholder') ? (
                                                    <div style={{ 
                                                        fontSize: '2.5rem', 
                                                        opacity: 0.3, 
                                                        display: 'flex', 
                                                        alignItems: 'center', 
                                                        justifyContent: 'center', 
                                                        width: '100%', 
                                                        height: '100%',
                                                        color: 'var(--color-accent-orange)'
                                                    }}>
                                                        <FaUserTie />
                                                    </div>
                                                ) : (
                                                    <img 
                                                        src={member.image} 
                                                        alt={member.name} 
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                        onError={(e) => {
                                                            const target = e.target as HTMLImageElement;
                                                            target.style.display = 'none';
                                                            const parent = target.parentElement;
                                                            if (parent) {
                                                                const placeholder = document.createElement('div');
                                                                placeholder.style.cssText = 'font-size: 2.5rem; opacity: 0.3; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; color: var(--color-accent-orange);';
                                                                placeholder.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
                                                                parent.appendChild(placeholder);
                                                            }
                                                        }} 
                                                    />
                                                )}
                                            </motion.div>
                                            <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--color-primary)', lineHeight: 1.2 }}>{member.name}</h4>
                                            {member.designation && (
                                                <div style={{
                                                    color: 'var(--color-accent-orange)',
                                                    fontWeight: 800,
                                                    fontSize: '0.75rem',
                                                    marginBottom: '0.75rem',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.05em',
                                                    backgroundColor: 'var(--color-orange-soft)',
                                                    padding: '0.3rem 0.8rem',
                                                    borderRadius: '50px',
                                                    display: 'inline-block'
                                                }}>
                                                    {member.designation}
                                                </div>
                                            )}
                                            {member.institution && (
                                                <p style={{ 
                                                    color: 'var(--color-text-muted)', 
                                                    fontSize: '0.85rem', 
                                                    lineHeight: 1.5, 
                                                    fontWeight: 500,
                                                    wordWrap: 'break-word',
                                                    overflowWrap: 'break-word',
                                                    hyphens: 'auto'
                                                }}>
                                                    {member.institution}
                                                </p>
                                            )}
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                    );
                })}

                {filteredMembers.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--color-text-muted)' }}>
                        <FaUsers size={60} style={{ opacity: 0.2, marginBottom: '1.5rem' }} />
                        <h3>No members found matching "{searchTerm}"</h3>
                        <p>Try searching with another term.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Committee;
