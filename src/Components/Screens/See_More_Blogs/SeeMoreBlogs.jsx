import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { FiArrowRight, FiClock, FiCalendar } from 'react-icons/fi';
import { allBlogs } from "../../Blog/BlogData";
import "../../Blog/blog.css";
import "./seeMoreBlogs.css";
import SEO from "../../common/SEO";

const SeeMoreBlogs = () => {
  const [blogs] = useState(allBlogs);
  const { t } = useTranslation();

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <>
      <section id="blog">
        <SEO
          title="All Blogs"
          description="Browse all technical blogs by Enostation on web development, React, Next.js, Laravel and software engineering."
          url="https://enostation.netlify.app/blogs"
        />
        <h2>{t('blog.all_blogs')}</h2>

        <div className="container blog__container">
          {blogs
            .slice()
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map(({ id, image, title, desc, author, date, tag, readTime }) => {
              const truncatedDesc =
                desc.length > 120 ? desc.slice(0, 120) + "..." : desc;
              return (
                <article key={id} data-aos="slide-left" className="blog__item">
                  <div className="blog__item__image">
                    <div className="blog__img__wrapper">
                      {image && <img src={image} alt={title} loading="lazy" />}
                      <div className="blog__img__overlay" />
                      {tag && <span className="blog__tag">{tag}</span>}
                      <span className="blog__date-badge">
                        <FiCalendar />
                        {date}
                      </span>
                    </div>
                  </div>

                  <div className="blog__item__content">
                    <h3 className="blog__title">{title}</h3>

                    <div className="blog__author-row">
                      <div className="blog__author-avatar">
                        <span>{getInitials(author)}</span>
                      </div>
                      <span className="blog__author">{author}</span>
                      <span className="blog__dot">·</span>
                      <span className="blog__read-time">
                        <FiClock />
                        {readTime}
                      </span>
                    </div>

                    <p
                      className="blog__desc"
                      dangerouslySetInnerHTML={{ __html: truncatedDesc }}
                    />

                    <div className="blog__footer">
                      <Link to={`/blog-details/${id}`} className="blog__read-more">
                        Read More <FiArrowRight className="blog__arrow-icon" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default SeeMoreBlogs;