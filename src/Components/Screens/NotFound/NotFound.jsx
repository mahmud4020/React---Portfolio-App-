import React from 'react';
import { Link } from 'react-router-dom';
import { FiAlertTriangle } from 'react-icons/fi';
import SEO from '../../common/SEO';

const NotFound = () => {
    return (
        <section id="not-found" style={{ textAlign: 'center', padding: '6rem 0' }}>
            <SEO
                title="Page Not Found"
                description="The page you are looking for does not exist. Return to the homepage of Enostation."
                url="https://enostation.netlify.app/404"
            />

            <FiAlertTriangle size={64} style={{ color: 'var(--color-primary)' }} />
            <h1 style={{ fontSize: '4rem', margin: '1rem 0' }}>404</h1>
            <h2>Oops! Page Not Found</h2>
            <p className="text-light" style={{ margin: '1rem 0 2rem' }}>
                The page you are looking for might have been removed or never existed.
            </p>

            <Link to="/" className="btn btn-primary">
                Back to Home
            </Link>
        </section>
    );
};

export default NotFound;
