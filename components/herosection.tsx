"use client"
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';

interface Slide {
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
    cta?: string;
    ctaLink?: string;
}

const HERO_SLIDES: Slide[] = [
    {
        title: "E-Commerce Platform",
        subtitle: "Modern Online Shopping Experience",
        description: "A full-stack e-commerce solution featuring secure payment integration and a comprehensive admin dashboard.",
        imageUrl: "/images/idwatch.png",
        cta: "View Project",
        ctaLink: "https://github.com/itsyuenai/TOKOJAM"
    },
    {
        title: "ScanIn Attendance System",
        subtitle: "Academic Attendance Management",
        description: "A streamlined attendance tracking platform tailored for seamless interaction between university students and lecturers.",
        imageUrl: "/images/scanin.png",
        cta: "View Project",
        ctaLink: "https://github.com/Einnyboi/ScanIn-Frontend"
    },
    {
        title: "IdeConnect Hub",
        subtitle: "Field Technician Management",
        description: "A dedicated mobile application designed to assist field technicians in managing and executing on-site tasks efficiently.",
        imageUrl: "/images/ideconnect.png",
        cta: "View App",
        ctaLink: "https://play.google.com/store/apps/details?id=com.idenigma.ideconnect_hub"
    },
];

const HeroSection = () => {
    return (
        <Carousel fade interval={6000} className="hero-carousel" id="home" controls indicators>
            {HERO_SLIDES.map((slide, index) => (
                <Carousel.Item key={index}>
                    <div
                        style={{
                            backgroundImage: `url(${slide.imageUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            left: 0
                        }}
                    />
                    <Carousel.Caption>
                        <div className="container">
                            <div className="hero-content">
                                <span className="hero-label">Featured Project</span>
                                <h1 className="display-3 fw-bold mb-3">{slide.title}</h1>
                                <h2 className="h4 mb-3" style={{ fontWeight: 400 }}>{slide.subtitle}</h2>
                                <p className="lead mb-4">{slide.description}</p>
                                {slide.cta && slide.ctaLink && (
                                    <Button
                                        variant="light"
                                        size="lg"
                                        href={slide.ctaLink}
                                        className="hero-cta-btn"
                                        target={slide.ctaLink.includes('play.google.com') ? "_blank" : "_self"}
                                    >
                                        {slide.cta} <i className="bi bi-arrow-right ms-2"></i>
                                    </Button>
                                )}
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default HeroSection;