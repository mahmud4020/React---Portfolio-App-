import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://enostation.netlify.app';
const DEFAULT_IMAGE = 'https://enostation.netlify.app/enostation-logo.png';

const DEFAULT_TITLE = 'Enostation - Web Development Agency';
const DEFAULT_DESCRIPTION =
    'Enostation is a web development agency specializing in modern web applications, mobile apps, and AI-powered solutions using React, Next.js, Laravel and more.';

const SEO = ({ title, description, image, url, type = 'website', jsonLd }) => {
    const pageTitle = title ? `${title} | Enostation` : DEFAULT_TITLE;
    const pageDescription = description || DEFAULT_DESCRIPTION;
    const pageImage = image || DEFAULT_IMAGE;
    const pageUrl = url || SITE_URL;

    return (
        <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <link rel="canonical" href={pageUrl} />

            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:image" content={pageImage} />
            <meta property="og:site_name" content="Enostation - Web Development Agency" />

            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={pageImage} />
            <meta name="twitter:card" content="summary_large_image" />

            {jsonLd && (
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            )}
        </Helmet>
    );
};

export default SEO;
