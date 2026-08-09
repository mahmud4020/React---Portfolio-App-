import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { BsLightningChargeFill, BsShieldCheck } from 'react-icons/bs';
import { FaCode, FaBrain } from 'react-icons/fa';
import LOGO from '../../Assets/enostation-logo.png';
import './about.css';
import { Link } from 'react-router-dom';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            disable: false,
            startEvent: 'DOMContentLoaded',
            offset: 120,
            easing: 'ease',
            mirror: false,
            anchorPlacement: 'top-bottom',
        });
    }, []);


    const agencyPillars = [
        {
            icon: <FaCode className="about__icon" />,
            title: 'Modern Architecture',
            desc: 'Clean, scalable React, Next.js & Laravel codebase optimized for performance and security.',
        },
        {
            icon: <FaBrain className="about__icon" />,
            title: 'AI Automation Integration',
            desc: 'Custom OpenAI/LLM integrations, AI chatbots, and intelligent workflow automation.',
        },
        {
            icon: <BsLightningChargeFill className="about__icon" />,
            title: 'Rapid Agile Execution',
            desc: 'Accelerated development cycles with transparent weekly sprint demos and updates.',
        },
        {
            icon: <BsShieldCheck className="about__icon" />,
            title: 'Enterprise Guarantee',
            desc: 'Dedicated post-launch maintenance, 99.9% uptime architecture, and 24/7 technical support.',
        },
    ];

    return (
        <section id="about">
            <h5>Why Choose Us</h5>
            <h2>Partner With Enostation Agency</h2>

            <div className="container about__container">
                <div className="about__sahed">
                    <div className="about__sahed__image glass-card">
                        <img data-aos="zoom-in-up" src={LOGO} alt="Enostation Digital Agency" />
                        <div className="sahed-overlay">
                            <h4>Enostation Agency</h4>
                            <p>Engineering Digital Success</p>
                        </div>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__intro_block" data-aos="fade-left">
                        <h3 className="agency-about-heading">
                            We bridge complex engineering with sleek user experiences.
                        </h3>
                        <p className="intro-text">
                            Enostation is a full-service software development agency. We craft high-converting web applications, robust SaaS platforms, cross-platform mobile apps, and custom AI systems tailored to accelerate business growth.
                        </p>
                    </div>

                    <div className="about__pillars_grid">
                        {agencyPillars.map((pillar, idx) => (
                            <div key={idx} data-aos="fade-up" className="pillar-card glass-card">
                                <div className="pillar-icon-box">{pillar.icon}</div>
                                <div>
                                    <h5>{pillar.title}</h5>
                                    <small>{pillar.desc}</small>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="about-actions" data-aos="fade-up">
                        <Link to="/contact" className="btn btn-primary">
                            Discuss Your Project
                        </Link>
                        <Link to="/services" className="btn btn-outline">
                            Our Capabilities
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

