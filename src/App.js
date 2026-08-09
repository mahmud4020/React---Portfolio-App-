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
import TranslationLauncher from './Components/common/TranslationLauncher';

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
        console.log('Opening chat...');
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
            <BackToTop />

            <ChatLauncher onClick={handleOpenChat} />

            <Router>
                <div style={{ overflow: 'hidden' }}>
                    <Navbar />

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

                    <Footer />
                </div>
            </Router>

            {showChat && !isChatAllowed && (
                <div
                    style={{
                        position: 'fixed',
                        bottom: '1.5rem',
                        right: '1.5rem',
                        width: '320px',
                        height: '450px',
                        borderRadius: '12px',
                        zIndex: 2000,
                        backgroundColor: 'white',
                        boxShadow:
                            '0 10px 15px -3px rgba(0,0,0,0.3), 0 4px 6px -4px rgba(0,0,0,0.2)',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                    }}
                >
                    <div
                        style={{
                            padding: '12px',
                            background: '#7ec834',
                            color: 'white',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <span>AI Assistant</span>

                        <button
                            onClick={() => setShowChat(false)}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: 'white',
                                fontSize: '18px',
                                cursor: 'pointer',
                                lineHeight: 1,
                            }}
                            aria-label="Close Chat"
                        >
                            ✕
                        </button>
                    </div>

                    <div style={{ padding: '20px', flex: 1 }}>
                        <h3 style={{ marginBottom: '10px', color: 'black' }}>
                            Enter your email to start chat
                        </h3>

                        <input
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '6px',
                                marginBottom: '10px',
                            }}
                        />

                        <button
                            onClick={handleStartChat}
                            style={{
                                width: '100%',
                                padding: '10px',
                                backgroundColor: '#7ec834',
                                color: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer',
                            }}
                        >
                            Start Chat
                        </button>
                    </div>
                </div>
            )}
            {showChat && isChatAllowed && (
                <div className="fixed bottom-20 right-6 w-80 max-w-full z-50 shadow-lg">
                    <ChatContainer isOpen={showChat} setIsOpen={setShowChat} email={email} />
                </div>
            )}
        </>
    );
};

export default App;
