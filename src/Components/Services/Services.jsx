import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { BiCheck } from "react-icons/bi";
import { FiLayout, FiServer, FiCpu, FiSmartphone, FiCloud, FiShield, FiArrowRight } from "react-icons/fi";
import "./services.css";
import Process from '../Process/Process';
import BrochureDownload from '../common/BrochureDownload';
import { Link } from 'react-router-dom';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: false,
      startEvent: "DOMContentLoaded",
      offset: 120,
      easing: "ease",
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);


  const agencyServices = [
    {
      icon: <FiLayout />,
      title: "Web & SaaS Development",
      badge: "Popular",
      description: "High-performance web applications & enterprise SaaS platforms built with Next.js, React, and Laravel.",
      features: [
        "Custom SaaS Platform Architecture",
        "React / Next.js Speed Optimization",
        "RESTful & GraphQL API Integration",
        "Responsive Pixel-Perfect UI/UX",
        "Payment Gateway Integration (Stripe, PayPal)"
      ]
    },
    {
      icon: <FiCpu />,
      title: "AI Automation & LLMs",
      badge: "Trending",
      description: "Intelligent AI workflows, custom OpenAI integrations, fine-tuned LLMs, and autonomous AI agents.",
      features: [
        "Custom OpenAI & Claude API Workflows",
        "AI Customer Support Chatbots",
        "Document & Data Intelligence Extraction",
        "Automated Lead Generation Pipelines",
        "Custom LLM Fine-Tuning & Embeddings"
      ]
    },
    {
      icon: <FiSmartphone />,
      title: "Mobile App Development",
      badge: "iOS & Android",
      description: "Native-like mobile experiences built for iOS and Android with seamless backend synchronizations.",
      features: [
        "React Native Cross-Platform Apps",
        "Biometric Authentication & Security",
        "Push Notifications & Real-Time Sync",
        "App Store & Google Play Deployment",
        "Offline-First Data Storage"
      ]
    },
    {
      icon: <FiServer />,
      title: "Backend & Database Engineering",
      badge: "Scalable",
      description: "Robust backend infrastructure built with Laravel, Node.js, PostgreSQL, MySQL, and Supabase.",
      features: [
        "High-Concurrency Microservices",
        "Database Optimization & Migration",
        "Role-Based Security & OAuth 2.0",
        "Real-Time WebSockets Architecture",
        "Automated Automated Backup Systems"
      ]
    },
    {
      icon: <FiCloud />,
      title: "Cloud & DevOps Architecture",
      badge: "Cloud Ready",
      description: "Cloud deployment, containerization, and continuous delivery pipelines for max reliability.",
      features: [
        "AWS / Vercel / Netlify Setup",
        "Docker Containerization",
        "CI/CD Pipeline Automation",
        "Server Monitoring & Alert Systems",
        "Load Balancing & SSL Configuration"
      ]
    },
    {
      icon: <FiShield />,
      title: "UI/UX & Design Systems",
      badge: "Design",
      description: "Human-centered UI/UX designs, wireframes, and design systems crafted to elevate brand conversion.",
      features: [
        "Figma Interactive Prototypes",
        "User Journey Mapping & Wireframes",
        "Design System & Style Guides",
        "Conversion-Focused Landing Pages",
        "Accessibility & Usability Audits"
      ]
    }
  ];

  return (
    <>
      <section id="services">
        <h5>Our Capabilities</h5>
        <h2>Digital Solutions & Services</h2>

        <div className="container services__container">
          {agencyServices.map((service, index) => (
            <article key={index} data-aos="fade-up" className="service-card glass-card">
              <div className="service-card-top">
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <span className="service-badge-pill">{service.badge}</span>
              </div>

              <h3>{service.title}</h3>
              <p className="service-desc">{service.description}</p>

              <ul className="service-features-list">
                {service.features.map((feat, idx) => (
                  <li key={idx}>
                    <BiCheck className="feature-check-icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="service-card-footer">
                <Link to="/contact" className="service-cta-link">
                  Get Project Estimate <FiArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="brochure-cta" style={{ textAlign: 'center', marginTop: '4rem' }}>
          <BrochureDownload />
        </div>
      </section>

      <Process />
    </>
  );
};

export default Services;

