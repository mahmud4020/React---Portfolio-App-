import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import About from './Components/About/About';
import BlogDetails from './Components/Blog/BlogDetails';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Nav';
import Portfolio from './Components/Portfolio/Portfolio';
import Pricing from './Components/Pricing/Pricing';
import Home from './Components/Screens/Home/Home';
import NotFound from './Components/Screens/NotFound/NotFound';
import ProjectDetails from './Components/Screens/Project_Details/ProjectDetails';
import SeeMore from './Components/Screens/See_More/SeeMore';
import SeeMoreBlogs from './Components/Screens/See_More_Blogs/SeeMoreBlogs';
import Services from './Components/Services/Services';
import Testimonial from './Components/Testimonial/Testimonial';

import BackToTop from './Components/common/BackToTop';
import ChatLauncher from './Components/common/ChatLauncher';
import ChatContainer from './Components/common/ChatContainer';
import Page from './Components/common/Page';
import ScrollProgress from './Components/common/ScrollProgress';
import TranslationLauncher from './Components/common/TranslationLauncher';
import useScrollAnimation from './hooks/useScrollAnimation';

const AppRoutes = () => {
    useScrollAnimation();

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="/about"
                element={
                    <Page
                        title="About Enostation"
                        description="Learn more about Enostation, a web development agency building modern web & mobile applications with React, Next.js, Laravel and more."
                        url="https://enostation.netlify.app/about"
                    >
                        <About />
                    </Page>
                }
            />
            <Route
                path="/experience"
                element={
                    <Page
                        title="Technologies & Skills"
                        description="Technologies used by Enostation: Frontend (React, Next.js, JavaScript, Tailwind) and Backend (PHP, Laravel, MySQL, Node.js) development."
                        url="https://enostation.netlify.app/experience"
                    >
                        <Experience />
                    </Page>
                }
            />
            <Route
                path="/services"
                element={
                    <Page
                        title="Services"
                        description="Services by Enostation: Frontend development with React & Next.js, Backend development with PHP & Laravel, and AI Automation systems."
                        url="https://enostation.netlify.app/services"
                    >
                        <Services />
                    </Page>
                }
            />
            <Route
                path="/portfolio"
                element={
                    <Page
                        title="Portfolio & Projects"
                        description="Explore projects by Enostation: web applications, mobile apps, React apps, MERN apps, PHP apps and more."
                        url="https://enostation.netlify.app/portfolio"
                    >
                        <Portfolio />
                    </Page>
                }
            />
            <Route path="/pricing" element={<Pricing />} />
            <Route
                path="/testimonial"
                element={
                    <Page
                        title="Testimonials"
                        description="Read reviews from clients who have worked with Enostation on web & mobile app development projects."
                        url="https://enostation.netlify.app/testimonial"
                    >
                        <Testimonial />
                    </Page>
                }
            />
            <Route
                path="/contact"
                element={
                    <Page
                        title="Contact"
                        description="Get in touch with Enostation for web & mobile app development. Email, WhatsApp, Messenger or use the contact form to discuss your project."
                        url="https://enostation.netlify.app/contact"
                    >
                        <Contact />
                    </Page>
                }
            />
            <Route path="/projects" element={<SeeMore />} />
            <Route path="/blogs" element={<SeeMoreBlogs />} />
            <Route path="/blog-details/:id" element={<BlogDetails />} />
            <Route path="/project-details/:id" element={<ProjectDetails />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

const App = () => {
    const [showChat, setShowChat] = useState(false);
    const [email, setEmail] = useState('');
    const [isChatAllowed, setIsChatAllowed] = useState(false);

    const handleStartChat = () => {
        if (!email || !email.includes('@')) {
            alert('Valid email required');
            return;
        }

        localStorage.setItem('chat_email', email);
        setIsChatAllowed(true);
    };

    const handleOpenChat = () => {
        const savedEmail = localStorage.getItem('chat_email');

        if (savedEmail) {
            setEmail(savedEmail);
            setIsChatAllowed(true);
        } else {
            setIsChatAllowed(false);
        }

        setShowChat(true);
    };

    return (
        <>
            <TranslationLauncher />
            <ScrollProgress />
            <BackToTop />

            <ChatLauncher onClick={handleOpenChat} />

            <Router>
                <div className="app-shell">
                    <Navbar />
                    <AppRoutes />
                    <Footer />
                </div>
            </Router>

            {showChat && !isChatAllowed && (
                <div className="chat-gate-modal">
                    <div className="chat-gate-header">
                        <span>AI Assistant</span>
                        <button
                            onClick={() => setShowChat(false)}
                            className="chat-gate-close"
                            aria-label="Close Chat"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="chat-gate-body">
                        <h3>Enter your email to start chat</h3>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="chat-gate-input"
                        />
                        <button onClick={handleStartChat} className="chat-gate-submit">
                            Start Chat
                        </button>
                    </div>
                </div>
            )}
            {showChat && isChatAllowed && (
                <div className="chat-container-wrap">
                    <ChatContainer isOpen={showChat} setIsOpen={setShowChat} email={email} />
                </div>
            )}
        </>
    );
};

export default App;
