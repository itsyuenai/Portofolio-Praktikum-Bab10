"use client";
import { Container, Row, Col, Image } from 'react-bootstrap';

const SERVICES_DATA = [
    {
        icon: "/images/web-design.png",
        title: "Mobile App Dev",
        description: "Building robust, high-performance mobile applications with intuitive interfaces and seamless cross-platform user experiences."
    },
    {
        icon: "/images/web.png",
        title: "Web Development",
        description: "Engineering high-performance and scalable web applications utilizing cutting-edge technologies like React and Next.js."
    },
    {
        icon: "/images/graphic-design.png",
        title: "UI/UX Design",
        description: "Crafting intuitive, accessible, and visually engaging user interfaces focused on delivering seamless user experiences."
    }
];

function ServiceSection() {
    return (
        <section id="services" className="section-spacing">
            <Container>
                <div className="section-header">
                    <h2>My Services</h2>
                    <p>
                        Comprehensive solutions to bring your digital vision to life with professional expertise.
                    </p>
                </div>

                <Row className="g-4">
                    {SERVICES_DATA.map((service, index) => (
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
        </section>
    );
}

export default ServiceSection;