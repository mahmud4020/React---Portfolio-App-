import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './portfolio.css';
import { usePortfolioProject } from '../../hooks/usePortfolioProject';
import Skeleton from '../common/Skeleton';
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi';

const AGENCY_CATEGORIES = [
    { id: 'all', label: 'All Projects' },
    { id: 'webApp', label: 'Web Applications' },
    { id: 'reactFullApp', label: 'SaaS Platforms' },
    { id: 'mernApp', label: 'AI & Full Stack' },
    { id: 'mobileApp', label: 'Mobile Apps' },
];

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const { data: projects = [], isLoading } = usePortfolioProject();
    const [filteredProjects, setFilteredProjects] = useState([]);


    useEffect(() => {
        if (projects.length > 0) {
            if (selectedCategory === 'all') {
                setFilteredProjects(projects);
            } else {
                setFilteredProjects(projects.filter((item) => item.category === selectedCategory));
            }
        }
    }, [projects, selectedCategory]);

    const handleCategoryFilter = (catId) => {
        setSelectedCategory(catId);
    };

    return (
        <section id="portfolio">
            <h5>Case Studies & Client Work</h5>
            <h2>Featured Client Projects</h2>

            <div className="portfolio-filter-tabs">
                {AGENCY_CATEGORIES.map((cat) => (
                    <button
                        key={cat.id}
                        className={`agency-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                        onClick={() => handleCategoryFilter(cat.id)}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {isLoading ? (
                <div className="container portfolio__container">
                    {[...Array(6)].map((_, i) => (
                        <article key={i} className="portfolio__item glass-card">
                            <Skeleton height="200px" style={{ borderRadius: '12px' }} />
                            <Skeleton height="24px" style={{ marginTop: '16px' }} />
                            <Skeleton height="40px" style={{ marginTop: '16px' }} />
                        </article>
                    ))}
                </div>
            ) : filteredProjects.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--color-light)' }}>
                    <p>No featured projects found in this category.</p>
                </div>
            ) : (
                <div className="container portfolio__container">
                    {filteredProjects.slice(0, 9).map(({ id, image, title, github, demo, category }) => {
                        return (
                            <article key={id} data-aos="fade-up" className="portfolio__item glass-card">
                                <div className="portfolio-card-media">
                                    <img src={image} alt={title} className="portfolio-img" />
                                    <div className="portfolio-overlay">
                                        <Link to={`/project-details/${id}`} className="view-case-study-btn">
                                            Case Study <FiArrowUpRight />
                                        </Link>
                                    </div>
                                    <span className="case-study-badge">{category || 'Client Work'}</span>
                                </div>

                                <div className="portfolio-card-content">
                                    <h3 className="portfolio-title">{title}</h3>
                                    <p className="portfolio-subtitle">Full-stack web application optimized for reliability and user conversion.</p>
                                    
                                    <div className="portfolio-card-actions">
                                        {demo && (
                                            <a href={demo} className="btn btn-primary btn-sm" rel="noreferrer" target="_blank">
                                                Live Preview <FiExternalLink />
                                            </a>
                                        )}
                                        {github && (
                                            <a href={github} className="btn btn-outline btn-sm" rel="noreferrer" target="_blank">
                                                Code <FiGithub />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            )}

            <div className="seeMore__btn">
                <Link to="/projects" className="btn btn-outline">
                    Explore All Case Studies <FiArrowUpRight />
                </Link>
            </div>
        </section>
    );
};

export default Portfolio;

