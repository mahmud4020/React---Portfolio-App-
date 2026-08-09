import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Typical from 'react-typical';
import LOGO from '../../Assets/enostation-logo.png';
import CTA from './CTA';
import './header.css';
import { FiCpu, FiGlobe } from 'react-icons/fi';

const Header = () => {
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


    const agencyStats = [
        { number: '50+', label: 'Delivered Projects' },
        { number: '99%', label: 'Client Satisfaction' },
        { number: '15+', label: 'Global Clients' },
        { number: '24/7', label: 'Dedicated Support' },
    ];

    const techPills = ['React', 'Next.js', 'Laravel', 'Node.js', 'Python AI', 'Tailwind', 'Supabase'];

    return (
        <header id="header" className="agency-hero-section">
            <div className="container agency-hero-container">
                <div className="hero-content-wrapper">
                    <div data-aos="fade-down" className="agency-badge">
                        <span className="badge-dot"></span>
                        <span>Full-Service Digital & AI Agency</span>
                    </div>

                    <h1 data-aos="fade-right" className="agency-hero-title">
                        Building Next-Gen <br />
                        <span className="gradient-text">Web, Mobile & AI Solutions</span>
                    </h1>

                    <div data-aos="fade-up" className="agency-hero-sub">
                        <Typical
                            steps={[
                                'Custom Web & SaaS Engineering',
                                2500,
                                'AI Automation & Custom LLMs',
                                2500,
                                'Mobile Application Development',
                                2500,
                                'Enterprise Cloud Architecture',
                                2500,
                            ]}
                            loop={Infinity}
                            wrapper="div"
                            className="typical-wrapper"
                        />
                    </div>

                    <p data-aos="fade-up" className="agency-hero-description">
                        Enostation transforms ambitious ideas into scalable digital products. We partner with startups and enterprises to design, engineer, and deploy high-performance web applications and intelligent AI software.
                    </p>

                    <CTA />

                    {/* Tech Stack Pills */}
                    <div data-aos="fade-up" className="hero-tech-pills">
                        <span className="tech-pill-label">Core Technologies:</span>
                        <div className="pills-list">
                            {techPills.map((tech, idx) => (
                                <span key={idx} className="tech-pill-item">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in" className="hero-visual-wrapper">
                    <div className="visual-card-glass">
                        <div className="visual-brand-circle">
                            <img id="pic" src={LOGO} alt="Enostation Digital Agency" />
                        </div>
                        <div className="floating-badge badge-top-right">
                            <FiCpu className="badge-icon" />
                            <div>
                                <strong style={{ display: 'block' }}>AI Driven</strong>
                                <small style={{ color: 'var(--color-light)' }}>Automation Ready</small>
                            </div>
                        </div>
                        <div className="floating-badge badge-bottom-left">
                            <FiGlobe className="badge-icon" />
                            <div>
                                <strong style={{ display: 'block' }}>Global Scale</strong>
                                <small style={{ color: 'var(--color-light)' }}>Enterprise Grade</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Live Agency Metrics Banner */}
            <div data-aos="fade-up" className="agency-stats-banner">
                <div className="container stats-banner-grid">
                    {agencyStats.map((stat, index) => (
                        <div key={index} className="stat-banner-item">
                            <h3 className="stat-banner-number">{stat.number}</h3>
                            <p className="stat-banner-label">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;

