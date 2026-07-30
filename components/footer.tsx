"use client"
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SOCIAL_LINKS = [
    { href: "mailto:naisyayr09@gmail.com", label: "Gmail", icon: "bi-envelope" },
    { href: "https://instagram.com/naisayayuen", label: "Instagram", icon: "bi-instagram" },
    { href: "https://www.linkedin.com/in/naisyayuenr/", label: "LinkedIn", icon: "bi-linkedin" },
    { href: "https://github.com/itsyuenai", label: "GitHub", icon: "bi-github" }
];

const QUICK_LINKS = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" }
];

const SERVICES_LIST = [
    "Web Design",
    "Web Development",
    "UI/UX Design"
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='modern-footer'>
            <Container>
                <Row className="g-4">
                    {/* About Column */}
                    <Col lg={4} md={6}>
                        <h3>Naisya Yuen</h3>
                        <p>
                            A dedicated web developer and UI designer creating beautiful, scalable digital experiences.
                            Based in Bogor, Indonesia.
                        </p>
                        <div className="social-links d-flex gap-2 mt-3">
                            {SOCIAL_LINKS.map((link, idx) => (
                                <a key={idx} href={link.href} aria-label={link.label}>
                                    <i className={`bi ${link.icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </Col>

                    {/* Quick Links */}
                    <Col lg={2} md={6}>
                        <h3>Quick Links</h3>
                        <ul className='list-unstyled'>
                            {QUICK_LINKS.map((link, idx) => (
                                <li key={idx}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </Col>

                    {/* Services */}
                    <Col lg={3} md={6}>
                        <h3>Services</h3>
                        <ul className='list-unstyled'>
                            {SERVICES_LIST.map((service, idx) => (
                                <li key={idx}>
                                    <i className="bi bi-check2 me-2"></i>{service}
                                </li>
                            ))}
                        </ul>
                    </Col>

                    {/* Contact Info */}
                    <Col lg={3} md={6}>
                        <h3>Contact</h3>
                        <ul className='list-unstyled'>
                            <li className='mb-2'>
                                <i className="bi bi-envelope me-2"></i>
                                <a href="mailto:hello@naisya.com">naisyayr09@gmail.com</a>
                            </li>
                            <li className='mb-2'>
                                <i className="bi bi-geo-alt me-2"></i>
                                Bogor, Indonesia
                            </li>
                            <li className='mb-2'>
                                <i className="bi bi-phone me-2"></i>
                                <a href="tel:+62123456789">+62821 2263 7844</a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                {/* Copyright */}
                <div className="footer-bottom">
                    <Row>
                        <Col className="text-center">
                            <p className="mb-0">
                                &copy; {currentYear} Naisya Yuen. All Rights Reserved.
                            </p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </footer>
    );
}