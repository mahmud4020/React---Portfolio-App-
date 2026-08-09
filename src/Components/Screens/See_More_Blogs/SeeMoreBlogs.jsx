import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { allBlogs } from "../../Blog/BlogData";
import "./seeMoreBlogs.css";
import SEO from "../../common/SEO";

const SeeMoreBlogs = () => {
  const [blogs] = useState(allBlogs);
  const { t } = useTranslation();

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
            .map(({ id, image, title, desc, author, date }) => {
              const truncatedDesc =
                desc.length > 100 ? desc.slice(0, 100) + "..." : desc;
              return (
                <article key={id} data-aos="slide-left" className="blog__item">
                  <div className="blog__item__image">
                    <img src={image} alt={title} />
                    <h3 className="blog_title">{title}</h3>
                    <Link to={`/blog-details/${id}`}>
                      <h4 className="view__Details">{t('blog.view_details')}</h4>
                      <div className="blog_sub_info">
                        <span className="blog_author">{author}</span>
                        <span className="blog_date">{date}</span>
                      </div>
                      <p
                        className="blog_desc"
                        dangerouslySetInnerHTML={{ __html: truncatedDesc }}
                      ></p>
                    </Link>
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
