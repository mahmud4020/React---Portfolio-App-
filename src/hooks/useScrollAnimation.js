import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AOS_CONFIG = {
    duration: 750,
    easing: 'ease-out-cubic',
    once: true,
    offset: 80,
    delay: 0,
    mirror: false,
    anchorPlacement: 'top-bottom',
};

let aosInitialized = false;

export default function useScrollAnimation() {
    const { pathname } = useLocation();

    useEffect(() => {
        if (!aosInitialized) {
            AOS.init(AOS_CONFIG);
            aosInitialized = true;
        } else {
            AOS.refreshHard();
        }
    }, [pathname]);
}
