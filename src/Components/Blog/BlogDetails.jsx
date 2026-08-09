import React, { useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaCalendarAlt } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { useTranslation } from 'react-i18next';
import { allBlogs } from './BlogData';
import './blogDetails.css';
import SEO from '../common/SEO';

const BlogDetails = () => {
    const { id } = useParams();
    const { t } = useTranslation();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const item = allBlogs.find((item) => item.id === parseInt(id));
        window.scrollTo(0, 0);
        if (item) {
            setItem(item);
        }
    }, [id]);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {item ? (
                <>
                    {loading ? (
                        <HashLoader
                            color="#7EC834"
                            loading={loading}
                            className="override"
                            size={100}
                        />
                    ) : (
                        <>
                            <SEO
                                title={item.title}
                                description={typeof item.desc === 'string' ? item.desc.replace(/<[^>]*>/g, '').slice(0, 160) : `Blog by Enostation`}
                                image={item.image}
                                url={`https://enostation.netlify.app/blog-details/${id}`}
                                type="article"
                            />

                            <section id="blog__view">
                                <div className="container blog__container__details">
                                    <div className="blog__sahed__wrapper__details">
                                        <div
                                            className="blog__img__wrapper"
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            {item.image ? (
                                                <img
                                                    data-aos="zoom-in-up"
                                                    src={item.image}
                                                    alt={item.title}
                                                    style={{
                                                        width: '100%',
                                                        height: 'auto',
                                                        maxHeight: '400px',
                                                        objectFit: 'contain',
                                                    }}
                                                />
                                            ) : item.video ? (
                                                <div
                                                    data-aos="zoom-in-up"
                                                    dangerouslySetInnerHTML={{ __html: item.video }}
                                                    style={{
                                                        width: '100%',
                                                        maxHeight: '400px',
                                                        overflow: 'auto',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}
                                                />
                                            ) : null}
                                        </div>
                                    </div>

                                    <div className="blog__content">
                                        <h5 className="blog__subtitle">{t('blog_details.subtitle')}</h5>
                                        <h2 className="blog__title">{item.title}</h2>

                                        <div className="blog__cards">
                                            <article data-aos="fade-right" className="blog__card">
                                                <CgProfile className="blog__icon" />
                                                <h5>{t('blog_details.author')}</h5>
                                                <small>{item.author}</small>
                                            </article>

                                            <article data-aos="fade-left" className="blog__card">
                                                <FaCalendarAlt className="blog__icon" />
                                                <h5>{t('blog_details.publish_date')}</h5>
                                                <small>{item.date}</small>
                                            </article>
                                        </div>

                                        <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                                    </div>
                                </div>
                            </section>
                        </>
                    )}
                </>
            ) : (
                <h1>{t('blog_details.not_found')}</h1>
            )}
        </>
    );
};
export default BlogDetails;
