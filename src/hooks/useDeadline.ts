import { useState, useEffect } from 'react';

export const useDeadline = (dateString: string) => {
    const [isExpired, setIsExpired] = useState(false);
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(dateString) - +new Date();

            if (difference > 0) {
                setIsExpired(false);
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                setTimeLeft(`${days} days left`);
            } else {
                setIsExpired(true);
                setTimeLeft('Closed');
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 60000); // Update every minute

        return () => clearInterval(timer);
    }, [dateString]);

    return { isExpired, timeLeft };
};
