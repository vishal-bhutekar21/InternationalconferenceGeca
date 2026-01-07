import { useEffect, useState, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

interface AnimatedCounterProps {
    from: number;
    to: number;
    duration?: number;
    suffix?: string;
    className?: string;
}

const AnimatedCounter = ({ from, to, duration = 2, suffix = "", className = "" }: AnimatedCounterProps) => {
    const [count, setCount] = useState(from);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (isInView) {
            const controls = animate(from, to, {
                duration: duration,
                onUpdate: (value) => setCount(Math.floor(value)),
                ease: "easeOut"
            });
            return () => controls.stop();
        }
    }, [isInView, from, to, duration]);

    return (
        <span ref={ref} className={className}>
            {count}{suffix}
        </span>
    );
};

export default AnimatedCounter;
