import React from "react";
import About from "../../About/About";
import Blog from "../../Blog/Blog";
import Contact from "../../Contact/Contact";
import Experience from "../../Experience/Experience";
import Header from "../../Header/Header";
import Portfolio from "../../Portfolio/Portfolio";
import Services from "../../Services/Services";
import Testimonial from "../../Testimonial/Testimonial";
import SEO from "../../common/SEO";

const Home = () => {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Enostation",
    "description":
      "Web development agency specializing in modern web applications, mobile apps, and AI-powered solutions.",
    "url": "https://enostation.netlify.app",
    "email": "mailto:hello.enostation@gmail.com",
    "telephone": "+8809638616438",
    "sameAs": [
      "https://github.com/sahedalways",
      "https://www.linkedin.com/in/sahedstar/",
      "https://www.facebook.com/sahedstar"
    ]
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Enostation - Web Development Agency",
    "url": "https://enostation.netlify.app"
  };

  return (
    <>
      <SEO
        title="Home"
        description="Enostation is a web development agency building modern web, mobile & SaaS applications using React, Next.js, Laravel and more."
        url="https://enostation.netlify.app"
        jsonLd={[organizationJsonLd, websiteJsonLd]}
      />

      <Header />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Blog />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Home;
