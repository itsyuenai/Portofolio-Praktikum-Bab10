'use client'
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NAV_ITEMS = [
    { id: '#home', label: 'Home', section: 'home' },
    { id: '#about', label: 'About', section: 'about' },
    { id: '#portfolio', label: 'Portfolio', section: 'portfolio' },
    { id: '#services', label: 'Services', section: 'services' },
    { id: '#contact', label: 'Contact', section: 'contact' }
];

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

            const scrollPosition = window.scrollY + 100;

            for (const item of NAV_ITEMS) {
                const element = document.getElementById(item.section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveLink(item.id);
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
                    Naisya Yuen Ra'af
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="ms-auto">
                        {NAV_ITEMS.map((item) => (
                            <Nav.Link
                                key={item.id}
                                href={item.id}
                                className={activeLink === item.id ? 'active' : ''}
                                onClick={() => handleNavClick(item.id)}
                            >
                                {item.label}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default ModernNavbar;