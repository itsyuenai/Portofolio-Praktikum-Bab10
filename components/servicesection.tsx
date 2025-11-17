"use client";
import { Container, Row, Col, Image } from 'react-bootstrap';

function ServiceSection(){
    const services = [
        {
            icon: "/images/web-design.png",
            title: "Web Design",
            description: "Creating modern, responsive, and user-friendly web designs that captivate your audience and enhance user experience."
        },
        {
            icon: "/images/web.png",
            title: "Web Development",
            description: "Building high-performance web applications using cutting-edge technologies like React, Next.js, and modern JavaScript."
        },
        {
            icon: "/images/graphic-design.png",
            title: "UI/UX Design",
            description: "Improving your website's visibility in search engines with proven SEO strategies and technical optimization."
        }
    ];

    return(
        <Container>
            <div className="section-header">
                <h2>My Services</h2>
                <p>
                    Comprehensive solutions to bring your digital vision to life with professional expertise
                </p>
            </div>
            
            <Row className="g-4">
                {services.map((service, index) => (
                    <Col lg={4} md={6} key={index}>
                        <div className="service-box">
                            <div className="service-icon">
                                <Image 
                                    src={service.icon} 
                                    alt={service.title}
                                    fluid
                                />
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ServiceSection;