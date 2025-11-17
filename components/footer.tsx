"use client"
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <footer className='modern-footer'>
            <Container>
                <Row className="g-4">
                    {/* About Column */}
                    <Col lg={4} md={6}>
                        <h3>Naisya Yuen</h3>
                        <p>
                            A passionate web developer and designer creating beautiful digital experiences. 
                            Based in Bogor, Indonesia.
                        </p>
                        <div className="social-links d-flex gap-2 mt-3">
                            <a href="mailto:naisyayr09@gmail.com" aria-label="Gmail">
                                <i className='bi bi-envelope'></i>
                            </a>
                            <a href="https://instagram.com/naisayayuen" aria-label="Instagram">
                                <i className='bi bi-instagram'></i>
                            </a>
                            <a href="https://www.linkedin.com/in/naisyayuenr/" aria-label="LinkedIn">
                                <i className='bi bi-linkedin'></i>
                            </a>
                            <a href="https://github.com/itsyuenai" aria-label="GitHub">
                                <i className='bi bi-github'></i>
                            </a>
                        </div>
                    </Col>
                    
                    {/* Quick Links */}
                    <Col lg={2} md={6}>
                        <h3>Quick Links</h3>
                        <ul className='list-unstyled'>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </Col>

                    {/* Services */}
                    <Col lg={3} md={6}>
                        <h3>Services</h3>
                        <ul className='list-unstyled'>
                            <li><i className="bi bi-check2 me-2"></i>Web Design</li>
                            <li><i className="bi bi-check2 me-2"></i>Web Development</li>
                            <li><i className="bi bi-check2 me-2"></i>UI/UX Design</li>
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
    )
}