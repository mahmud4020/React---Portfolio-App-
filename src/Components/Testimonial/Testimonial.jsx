import React, { useState, useEffect } from 'react';
import './Testimonial.css';
import TestimonialsData from './TestimonialsData';
import ReviewModal from './ReviewModal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [Data] = useState(TestimonialsData);
    const [reviewOpen, setReviewOpen] = useState(false);


    return (
        <section id="testimonials">
            <h5 data-aos="fade-up">Client Proof & Reviews</h5>
            <h2 data-aos="fade-up" data-aos-delay="100">What Founders & Executives Say</h2>

            <Swiper
                className="container testimonials__container"
                modules={[Pagination, Autoplay]}
                spaceBetween={40}
                slidesPerView={1}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
            >
                {Data.map(({ id, name, company, avatar, review }) => (
                    <SwiperSlide key={id} className="testimonial glass-card">
                        <div className="client__avatar">
                            <img src={avatar} alt={name} />
                        </div>

                        <div className="client-rating-stars">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="star-icon-filled" />
                            ))}
                        </div>

                        <h5 className="client__name">{name}</h5>
                        {company && <small className="client__company">{company}</small>}

                        <div className="quote__icon">
                            <FaQuoteLeft
                                style={{
                                    color: 'var(--color-primary)',
                                    marginTop: '0.8rem',
                                    opacity: 0.5,
                                }}
                            />
                        </div>

                        <p className="client__review">"{review}"</p>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="testimonial__review-btn-wrap" data-aos="fade-up">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setReviewOpen(true)}
                >
                    Leave a Review
                </button>
            </div>

            <ReviewModal open={reviewOpen} onClose={() => setReviewOpen(false)} />
        </section>
    );
};

export default Testimonial;

