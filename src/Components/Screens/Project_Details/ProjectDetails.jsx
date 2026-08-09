import React, { useEffect, useRef } from 'react';
import { BsFileCodeFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { useParams } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { useTranslation } from 'react-i18next';

import './ProjectDetails.css';
import { usePortfolioProject } from '../../../hooks/usePortfolioProject';
import SEO from '../../common/SEO';

const ProjectDetails = () => {
    const { id } = useParams();
    const descRef = useRef(null);
    const { t } = useTranslation();

    const processSteps = t('process.steps', { returnObjects: true });

    const { data: projects = [], isLoading } = usePortfolioProject();

    const item = projects.find((p) => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        if (descRef.current) {
            descRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [item]);

    return (
        <>
            {item ? (
                <>
                    {isLoading ? (
                        <HashLoader
                            color="#7EC834"
                            loading={isLoading}
                            className="override"
                            size={100}
                        />
                    ) : (
                        <>
                            <SEO
                                title={item.title}
                                description={typeof item.desc === 'string' ? item.desc.replace(/<[^>]*>/g, '').slice(0, 160) : `Project ${item.title} by Enostation`}
                                image={item.image}
                                url={`https://enostation.netlify.app/project-details/${id}`}
                                type="article"
                            />

                            <section id="project__view">
                                <div className="container project__container">
                                    <div className="project__sahed__wrapper">
                                        <div className="project__img__wrapper">
                                            <img
                                                data-aos="zoom-in-up"
                                                src={item.image}
                                                alt={item.title}
                                            />
                                        </div>
                                    </div>

                                    <div className="project__content">
                                        <h5 className="project__subtitle">{t('project_details.subtitle')}</h5>
                                        <h2 className="project__title">{item.title}</h2>

                                        <div className="project__cards">
                                            <article
                                                data-aos="fade-right"
                                                className="project__card"
                                            >
                                                <CgProfile className="project__icon" />
                                                <h5>{t('project_details.author')}</h5>
                                                <small>{item.authorName}</small>
                                            </article>

                                            <article data-aos="fade-left" className="project__card">
                                                <BsFileCodeFill className="project__icon" />
                                                <h5>{t('project_details.technologies')}</h5>
                                                <small>{item.use}</small>
                                            </article>
                                        </div>

                                        <div dangerouslySetInnerHTML={{ __html: item.desc }} />

                                        <div className="project__btn">
                                            <a
                                                href={item.github}
                                                className="btn"
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                {t('project_details.github')}
                                            </a>
                                            <a
                                                href={item.demo}
                                                className="btn btn-primary"
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                {t('project_details.live_demo')}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* =========================
                                CASE STUDY / DELIVERY PROCESS
                            ========================= */}
                            <section id="case-study" className="case-study">
                                <h5>{t('case_study.subtitle')}</h5>
                                <h2>{t('case_study.title')}</h2>

                                <div className="container case-study__container">
                                    {processSteps.map((step, index) => (
                                        <article key={index} className="case-study__step">
                                            <span className="case-study__step__number">
                                                0{index + 1}
                                            </span>
                                            <h3>{step.title}</h3>
                                            <p>{step.description}</p>
                                        </article>
                                    ))}
                                </div>
                            </section>
                        </>
                    )}
                </>
            ) : (
                <h1>{t('project_details.not_found')}</h1>
            )}
        </>
    );
};

export default ProjectDetails;
