import React from 'react';
import { FiArrowRight, FiBriefcase } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ScrollReveal from '../common/ScrollReveal';

const CTA = () => {
    return (
        <ScrollReveal delay={0.3} className="cta agency-cta">
            <Link to="/contact" className="btn btn-primary">
                Start a Project <FiArrowRight />
            </Link>
            <Link to="/portfolio" className="btn btn-outline">
                <FiBriefcase /> View Case Studies
            </Link>
        </ScrollReveal>
    );
};

export default CTA;
