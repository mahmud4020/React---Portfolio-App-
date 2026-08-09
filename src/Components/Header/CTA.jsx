import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { FiArrowRight, FiBriefcase } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CTA = () => {
    useEffect(() => {
        AOS.init({ duration: 400 });
    }, []);


    return (
        <div className="cta agency-cta">
            <Link data-aos="fade-right" to="/contact" className="btn btn-primary">
                Start a Project <FiArrowRight />
            </Link>
            <Link data-aos="fade-left" to="/portfolio" className="btn btn-outline">
                <FiBriefcase /> View Case Studies
            </Link>
        </div>
    );
};

export default CTA;

