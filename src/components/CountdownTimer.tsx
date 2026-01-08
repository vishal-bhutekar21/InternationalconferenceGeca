import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
    const targetDate = new Date('2026-08-27T09:00:00').getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const timeUnits = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds }
    ];

    return (
        <section className="section" style={{ backgroundColor: 'var(--color-white)', padding: '5rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <div className="badge">CONFERENCE COUNTDOWN</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>August 27-28, 2026</div>
                    <h2 style={{ fontSize: '3rem', fontWeight: 800, marginTop: '1rem', marginBottom: '1rem' }}>
                        Time Until <span style={{ color: 'var(--color-accent-orange)' }}>ICAISG2026</span>
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
                        August 27-28, 2026 | GECCS (Aurangabad) Chhatrapati Sambhajinagar
                    </p>
                </div>

                <div className="countdown-timer" style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {timeUnits.map((unit, index) => (
                        <motion.div
                            key={unit.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="countdown-item"
                            style={{
                                backgroundColor: 'var(--color-bg-light)',
                                padding: 'clamp(1rem, 3vw, 2rem) clamp(0.75rem, 2vw, 1.5rem)',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: 'var(--shadow-md)',
                                border: '1px solid var(--color-border)',
                                flex: '1 1 auto'
                            }}
                        >
                            <motion.div
                                key={unit.value}
                                initial={{ scale: 1.2, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="countdown-value"
                            >
                                {String(unit.value).padStart(2, '0')}
                            </motion.div>
                            <div className="countdown-label">{unit.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CountdownTimer;
