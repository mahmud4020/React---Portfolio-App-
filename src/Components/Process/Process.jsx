import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FiClipboard, FiLayout, FiCode, FiCheckCircle, FiTruck } from 'react-icons/fi';
import './Process.css';

const DEFAULT_AGENCY_STEPS = [
    { title: '01. Discovery & Strategy', description: 'Deep dive into project scope, user personas, technical requirements, and strategic roadmap.' },
    { title: '02. UI/UX & System Design', description: 'Wireframing, interactive Figma prototypes, database schemas, and API architecture.' },
    { title: '03. Agile Engineering', description: 'High-speed development in 1-2 week sprints with continuous code reviews & live staging.' },
    { title: '04. QA & Performance Testing', description: 'Automated test coverage, security vulnerability scans, and multi-device usability audits.' },
    { title: '05. Launch & Continuous Scale', description: 'Production deployment, cloud server setup, monitoring alerts, and ongoing feature updates.' }
];

const ICONS = [FiClipboard, FiLayout, FiCode, FiCheckCircle, FiTruck];

const Process = () => {
    const { t } = useTranslation();
    const translationSteps = t('process.steps', { returnObjects: true });
    const steps = Array.isArray(translationSteps) && translationSteps.length > 0 ? translationSteps : DEFAULT_AGENCY_STEPS;

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

    return (
        <section id="process" className="process__section">
            <h5>How We Build</h5>
            <h2>Our 5-Step Agency Workflow</h2>

            <div className="container process__container">
                {steps.map((step, index) => {
                    const Icon = ICONS[index % ICONS.length];
                    return (
                        <article
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="process__step glass-card"
                        >
                            <span className="process__step__number">0{index + 1}</span>
                            <div className="process__step__icon">
                                <Icon />
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Process;

