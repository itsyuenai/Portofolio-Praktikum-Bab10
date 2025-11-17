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

const HeroSection = () => {
    const slides: Slide[] = [
        {
            title: "E-Commerce Platform",
            subtitle: "Modern Online Shopping Experience",
            description: "Full-stack e-commerce solution with payment integration and admin dashboard",
            imageUrl: "/images/idwatch.png",
            cta: "View Project",
            ctaLink: "https://github.com/itsyuenai/TOKOJAM"
        },
        {
            title: "Insurance Website",
            subtitle: "Business Website for Insurance Services",
            description: "A professional company site with informative pages, clean layout, and SEO support.",
            imageUrl: "/images/insurance.png",
            cta: "View Project",
            ctaLink: "https://github.com/itsyuenai/NaInsurance"
        },
        {
            title: "Portfolio Dashboard",
            subtitle: "Dashboard for Data Monitoring and Insights",
            description: "An interactive dashboard with live data, visual reports, and easy to read analytics.",
            imageUrl: "/images/porto.png",
            cta: "View Project",
            ctaLink: "https://github.com/itsyuenai/MyPortofolio"
        },
    ];

    return (
        <Carousel fade interval={6000} className="hero-carousel" id="home" controls indicators>
            {slides.map((slide, index) => (
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
                                {slide.cta && (
                                    <Button 
                                        variant="light" 
                                        size="lg" 
                                        href={slide.ctaLink}
                                        className="hero-cta-btn"
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