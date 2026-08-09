import React from 'react';
import { FiCheck, FiZap, FiTarget, FiBriefcase } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../common/SEO';
import FAQ from '../common/FAQ';
import Process from '../Process/Process';
import './Pricing.css';

const DEFAULT_AGENCY_PLANS = [
    {
        name: "Startup MVP Package",
        description: "Ideal for founders & early-stage startups needing a fast, high-converting product launch.",
        price: "$2,499",
        priceNote: "One-time investment (3-4 week sprint)",
        featured: false,
        icon: <FiZap />,
        features: [
            "Custom React / Next.js Web App",
            "Responsive Mobile UI Design",
            "Backend API & Database Setup",
            "Payment Gateway & Auth Integration",
            "SEO Optimization & Analytics",
            "30 Days Free Maintenance"
        ],
        cta: "Launch MVP"
    },
    {
        name: "Growth Scale Package",
        description: "Comprehensive software engineering & AI automation suite for growing businesses.",
        price: "$4,999",
        priceNote: "Fixed project or monthly retainer",
        featured: true,
        icon: <FiTarget />,
        features: [
            "Everything in Startup MVP",
            "Custom AI Workflows & LLM Chatbots",
            "Full SaaS Platform Architecture",
            "High-Speed Cloud DevOps Setup",
            "Automated Testing & Security Audits",
            "Dedicated Slack/Discord Channel",
            "90 Days Free Maintenance"
        ],
        cta: "Scale Your Product"
    },
    {
        name: "Enterprise Dedicated Team",
        description: "Full-stack engineering squad & custom software development tailored to complex enterprise scale.",
        price: "Custom",
        priceNote: "Flexible monthly retainer",
        featured: false,
        icon: <FiBriefcase />,
        features: [
            "Dedicated Full-Stack Developers & PM",
            "Custom AI Agents & Cloud Infrastructure",
            "Microservices & High Concurrency",
            "SLA & 99.9% Uptime Guarantee",
            "24/7 Priority Emergency Support",
            "Continuous CI/CD Delivery"
        ],
        cta: "Contact Enterprise"
    }
];

const Pricing = () => {
    const { t } = useTranslation();
    const translationPlans = t('pricing.plans', { returnObjects: true });
    const plans = Array.isArray(translationPlans) && translationPlans.length > 0 ? translationPlans : DEFAULT_AGENCY_PLANS;

    return (
        <>
            <section id="pricing" className="pricing__section">
                <SEO
                    title="Agency Pricing & Engagement Models"
                    description="Transparent agency pricing packages for Web, Mobile, and AI Engineering by Enostation."
                    url="https://enostation.netlify.app/pricing"
                />

                <h5 data-aos="fade-up">Transparent Investment</h5>
                <h2 data-aos="fade-up" data-aos-delay="100">
                    Agency Engagement Models
                </h2>

                <div className="container pricing__container">
                    {plans.map((plan, index) => (
                        <article
                            key={plan.name || index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className={`pricing__card glass-card ${
                                plan.featured ? 'pricing__card--featured' : ''
                            }`}
                        >
                            {plan.featured && (
                                <span className="pricing__badge">Most Popular Choice</span>
                            )}
                            <h3 className="pricing__name">{plan.name}</h3>
                            <p className="pricing__desc">{plan.description}</p>

                            <div className="pricing__price">
                                {plan.price && <span className="pricing__amount">{plan.price}</span>}
                                {plan.priceNote && (
                                    <span className="pricing__note">{plan.priceNote}</span>
                                )}
                            </div>

                            <ul className="pricing__features">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <FiCheck className="pricing__check" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link to="/contact" className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'} pricing__cta`}>
                                {plan.cta || 'Get Started'}
                            </Link>
                        </article>
                    ))}
                </div>
            </section>

            <Process />
            <FAQ />
        </>
    );
};

export default Pricing;

