import React, { useState, useEffect } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser, AiFillProject, AiOutlineThunderbolt } from "react-icons/ai";
import { MdMedicalServices } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { BsTag } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import LOGO from "../../Assets/enostation-logo.png";


const Nav = () => {
  const [activeNav, setActiveNav] = useState("/");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActiveNav(location.pathname);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Agency Fixed Header */}
      <header className={`agency-header ${scrolled ? "scrolled" : ""}`}>
        <div className="agency-header-container">
          <Link to="/" className="agency-logo-brand" onClick={() => setActiveNav("/")}>
            <img src={LOGO} alt="Enostation Agency Logo" className="agency-logo-img" />
            <div className="agency-brand-text">
              <span className="agency-name">ENOSTATION</span>
              <span className="agency-tag">DIGITAL AGENCY</span>
            </div>
          </Link>

          <nav className="agency-desktop-nav">
            <Link to="/" className={activeNav === "/" ? "active" : ""}>Home</Link>
            <Link to="/about" className={activeNav === "/about" ? "active" : ""}>About</Link>
            <Link to="/services" className={activeNav === "/services" ? "active" : ""}>Services</Link>
            <Link to="/portfolio" className={activeNav === "/portfolio" ? "active" : ""}>Work</Link>
            <Link to="/pricing" className={activeNav === "/pricing" ? "active" : ""}>Pricing</Link>
            <Link to="/testimonial" className={activeNav === "/testimonial" ? "active" : ""}>Reviews</Link>
            <Link to="/contact" className={activeNav === "/contact" ? "active" : ""}>Contact</Link>
          </nav>

          <div className="agency-header-actions">
            <Link to="/contact" className="btn btn-primary header-cta-btn">
              <AiOutlineThunderbolt /> Get a Quote
            </Link>
          </div>
        </div>
      </header>

      {/* Floating Bottom Quick Nav for Mobile */}
      <nav className="agency-mobile-floating-nav">
        <Link to="/" onClick={() => setActiveNav("/")} className={activeNav === "/" ? "active" : ""} title="Home">
          <AiOutlineHome />
        </Link>
        <Link to="/about" onClick={() => setActiveNav("/about")} className={activeNav === "/about" ? "active" : ""} title="About">
          <AiOutlineUser />
        </Link>
        <Link to="/services" onClick={() => setActiveNav("/services")} className={activeNav === "/services" ? "active" : ""} title="Services">
          <MdMedicalServices />
        </Link>
        <Link to="/portfolio" onClick={() => setActiveNav("/portfolio")} className={activeNav === "/portfolio" ? "active" : ""} title="Work">
          <AiFillProject />
        </Link>
        <Link to="/pricing" onClick={() => setActiveNav("/pricing")} className={activeNav === "/pricing" ? "active" : ""} title="Pricing">
          <BsTag />
        </Link>
        <Link to="/contact" onClick={() => setActiveNav("/contact")} className={activeNav === "/contact" ? "active" : ""} title="Contact">
          <RiContactsFill />
        </Link>
      </nav>
    </>
  );
};

export default Nav;

