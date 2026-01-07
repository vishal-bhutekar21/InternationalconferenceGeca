import { motion } from 'framer-motion';
import { latestNews } from '../data/conferenceData';
import { FaBullhorn } from 'react-icons/fa';

const NewsTicker = () => {
    return (
        <div style={{
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            padding: '0.65rem 0',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 10,
            fontSize: '0.85rem',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            marginTop: '30px'
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <div style={{
                    backgroundColor: 'var(--color-accent-orange)',
                    padding: '0.2rem 0.75rem',
                    borderRadius: '4px',
                    fontWeight: 700,
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <FaBullhorn /> Latest News
                </div>

                <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
                    <motion.div
                        animate={{ x: ['100%', '-100%'] }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            display: 'flex',
                            gap: '4rem',
                            whiteSpace: 'nowrap',
                            width: 'fit-content'
                        }}
                    >
                        {latestNews.map((news) => (
                            <span key={news.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                {news.isUrgent && <span style={{ color: 'var(--color-accent-orange)', fontWeight: 800 }}>●</span>}
                                {news.text}
                                {news.link && (
                                    <a href={news.link} style={{ color: 'var(--color-accent-orange-light)', textDecoration: 'underline', marginLeft: '0.5rem' }}>
                                        Read More
                                    </a>
                                )}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default NewsTicker;
