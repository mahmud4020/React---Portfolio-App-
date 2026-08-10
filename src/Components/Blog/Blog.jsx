import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { FiArrowRight } from 'react-icons/fi';
import { allBlogs } from "./BlogData";
import ScrollReveal from "../common/ScrollReveal";
import "./blog.css";

const Blog = () => {
  const [blogs] = useState(allBlogs);
  const { t } = useTranslation();

  return (
    <section id="blog">
      <ScrollReveal>
        <h5>{t('blog.subtitle')}</h5>
        <h2>{t('blog.title')}</h2>
      </ScrollReveal>

      <div className="container blog__container">
        {blogs
          .slice()
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 6)
          .map(({ id, image, title, desc, author, date, tag, readTime }, index) => {
            const truncatedDesc =
              desc.length > 120 ? desc.slice(0, 120) + "..." : desc;
            return (
              <ScrollReveal key={id} delay={index * 0.08} direction="left">
                <article className="blog__item">
                  <div className="blog__item__image">
                    <div className="blog__img__wrapper">
                      {image && <img src={image} alt={title} />}
                      {tag && <span className="blog__tag">{tag}</span>}
                    </div>
                  </div>

                  <div className="blog__item__content">
                    <h3 className="blog__title">{title}</h3>

                    <div className="blog__author-row">
                      <div className="blog__author-avatar">
                        <span>S</span>
                      </div>
                      <span className="blog__author">{author}</span>
                      <span className="blog__dot">·</span>
                      <span className="blog__date">{date}</span>
                    </div>

                    <p
                      className="blog__desc"
                      dangerouslySetInnerHTML={{ __html: truncatedDesc }}
                    />

                    <div className="blog__footer">
                      <span className="blog__read-time">{readTime}</span>
                      <Link to={`blog-details/${id}`} className="blog__read-more">
                        Read More <FiArrowRight />
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
      </div>

      <ScrollReveal delay={0.2}>
        <div className="seeMore__btn">
          <Link to="/blogs" className="btn" rel="noreferrer" target="_blank">
            {t('blog.see_more')}
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Blog;
