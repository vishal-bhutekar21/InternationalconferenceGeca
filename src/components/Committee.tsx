import { useState } from 'react';
import { motion } from 'framer-motion';
import { committeeMembers } from '../data/conferenceData';
import { FaSearch, FaUserTie } from 'react-icons/fa';

const Committee = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredMembers = committeeMembers.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section id="committee" className="section" style={{ backgroundColor: '#F8FAFC' }}>
            <div className="container">
                <div className="section-title-wrapper">
                    <div className="badge">Our Leadership</div>
                    <h2 className="section-title">Committee Members</h2>
                    <p className="section-subtitle">
                        Meet the dedicated team of academicians and experts guiding the success of ICAISD 2025.
                    </p>
                </div>

                <div style={{
                    maxWidth: '600px',
                    margin: '0 auto 4rem',
                    position: 'relative'
                }}>
                    <div style={{
                        position: 'absolute',
                        left: '1.25rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: 'var(--color-accent-orange)'
                    }}>
                        <FaSearch />
                    </div>
                    <input
                        type="text"
                        placeholder="Search by name, designation, or institution..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '1rem 1rem 1rem 3rem',
                            borderRadius: 'var(--radius-full)',
                            border: '1px solid var(--color-border)',
                            fontSize: '1rem',
                            outline: 'none',
                            boxShadow: 'var(--shadow-sm)',
                            transition: 'all 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--color-accent-orange)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                    />
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {filteredMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="card-glass"
                            style={{
                                padding: '2rem',
                                textAlign: 'center',
                                backgroundColor: 'white'
                            }}
                        >
                            <div style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--color-bg-alt)',
                                margin: '0 auto 1.5rem',
                                overflow: 'hidden',
                                border: '4px solid white',
                                boxShadow: 'var(--shadow-md)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--color-accent-orange)'
                            }}>
                                <FaUserTie size={60} />
                            </div>
                            <span style={{
                                fontSize: '0.7rem',
                                fontWeight: 800,
                                color: 'var(--color-accent-orange)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>{member.category}</span>
                            <h3 style={{ fontSize: '1.25rem', marginTop: '0.5rem', marginBottom: '0.25rem' }}>{member.name}</h3>
                            <p style={{ fontWeight: 600, color: 'var(--color-text-main)', fontSize: '0.9rem' }}>{member.designation}</p>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>{member.institution}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Committee;
