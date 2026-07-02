import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useLayoutEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const timer = setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
            return () => clearTimeout(timer);
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
    }, [pathname, hash]);

    return null;
}

export default ScrollToTop;