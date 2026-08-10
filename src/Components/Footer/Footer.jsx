import React from 'react';
import { FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import LOGO from '../../Assets/enostation.jpeg';
import ScrollReveal from '../common/ScrollReveal';
import './footer.css';

const Footer = () => {
    return (
        <>
            <ScrollReveal>
                <section className="footer-cta-banner">
                    <div className="container footer-cta-inner">
                        <div className="footer-cta-text">
                            <h2>Ready to Build Something Extraordinary?</h2>
                            <p>Let's turn your vision into a high-performing digital product. Schedule a free strategy call today.</p>
                        </div>
                        <Link to="/contact" className="btn btn-primary footer-cta-btn">
                            Start a Project <FiArrowRight />
                        </Link>
                    </div>
                </section>
            </ScrollReveal>

            <footer className="agency-footer">
                <div className="container agency-footer-container">
                    <div className="footer-brand-col">
                        <Link to="/" className="agency-footer-logo">
                            <img src={LOGO} alt="Enostation Digital Agency" />
                            <div className="agency-footer-title">
                                <span>ENOSTATION</span>
                                <small>DIGITAL AGENCY</small>
                            </div>
                        </Link>
                        <p className="footer-tagline">
                            Full-service software engineering & AI agency building scalable digital products for global businesses.
                        </p>
                    </div>

                    <div className="footer-links-col">
                        <h4>Navigation</h4>
                        <ul className="permalinks">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/portfolio">Case Studies</Link></li>
                            <li><Link to="/pricing">Pricing</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-services-col">
                        <h4>Services</h4>
                        <ul className="permalinks">
                            <li><Link to="/services">Web & SaaS Development</Link></li>
                            <li><Link to="/services">AI Automation & LLMs</Link></li>
                            <li><Link to="/services">Mobile App Development</Link></li>
                            <li><Link to="/services">Cloud DevOps</Link></li>
                            <li><Link to="/services">UI/UX Design Systems</Link></li>
                        </ul>
                    </div>

                    <div className="footer-social-col">
                        <h4>Connect With Us</h4>
                        <div className="footer__socials">
                            <a href="https://www.linkedin.com/in/sahedstar" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/sahedalways" target="_blank" rel="noopener noreferrer" title="GitHub">
                                <FaGithub />
                            </a>
                            <a href="https://www.facebook.com/sahedstar" target="_blank" rel="noopener noreferrer" title="Facebook">
                                <FaFacebookSquare />
                            </a>
                        </div>

                        <div className="footer-newsletter">
                            <p className="newsletter-label">Stay Updated</p>
                            <div className="newsletter-input-wrap">
                                <FiMail className="newsletter-icon" />
                                <input type="email" placeholder="Your email address" className="newsletter-input" />
                                <button type="button" className="newsletter-btn">
                                    <FiArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer__copyright">
                    <div className="container copyright-flex">
                        <p>&copy; {new Date().getFullYear()} Enostation Digital Agency. All rights reserved.</p>
                        <p className="footer-sub-text">Crafted with precision for web, mobile & AI.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
