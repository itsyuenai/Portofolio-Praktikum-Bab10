'use client'
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ModernNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            
            // Show/hide scroll to top button
            const scrollToTopBtn = document.querySelector('.scroll-to-top');
            if (scrollToTopBtn) {
                if (window.scrollY > 300) {
                    scrollToTopBtn.classList.add('visible');
                } else {
                    scrollToTopBtn.classList.remove('visible');
                }
            }
            
            const sections = ['home', 'about', 'skills', 'portfolio', 'services', 'contact'];
            const scrollPosition = window.scrollY + 100;
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;
                    
                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveLink(`#${section}`);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (link: string) => {
        setActiveLink(link);
    };

    return (
        <Navbar 
            expand="lg" 
            className={`modern-navbar fixed-top ${scrolled ? 'scrolled' : ''}`}
        >
            <Container>
                <Navbar.Brand href="#home" onClick={() => handleNavClick('#home')}>
                    Naisya Yuen
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="ms-auto">
                        <Nav.Link 
                            href="#home" 
                            className={activeLink === '#home' ? 'active' : ''}
                            onClick={() => handleNavClick('#home')}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link 
                            href="#about" 
                            className={activeLink === '#about' ? 'active' : ''}
                            onClick={() => handleNavClick('#about')}
                        >
                            About
                        </Nav.Link>
                        <Nav.Link 
                            href="#portfolio" 
                            className={activeLink === '#portfolio' ? 'active' : ''}
                            onClick={() => handleNavClick('#portfolio')}
                        >
                            Portfolio
                        </Nav.Link>
                        <Nav.Link 
                            href="#services" 
                            className={activeLink === '#services' ? 'active' : ''}
                            onClick={() => handleNavClick('#services')}
                        >
                            Services
                        </Nav.Link>
                        <Nav.Link 
                            href="#contact" 
                            className={activeLink === '#contact' ? 'active' : ''}
                            onClick={() => handleNavClick('#contact')}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default ModernNavbar;