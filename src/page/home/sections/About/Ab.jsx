// Ab.js
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const Ab = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true, // Animation will trigger only once
        threshold: 0.1, // Trigger when 10% of the element is visible
    });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    return { ref, isVisible };
};

export default Ab;
