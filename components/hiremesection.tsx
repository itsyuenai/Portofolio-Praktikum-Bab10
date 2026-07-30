'use client'
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function HireMeSection() {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/CV.pdf';
        link.download = 'CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="hire-me-section">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8} className="text-center animate-on-scroll">
                        <div className="hire-me-content">
                            <i className="bi bi-briefcase-fill hire-me-icon"></i>
                            <h2 className="mb-4">Ready to Start Your Project?</h2>
                            <p className="lead mb-4">
                                Let's collaborate to bring your vision to life. I am available for freelance projects and full-time professional opportunities.
                            </p>
                            <div className="d-flex gap-3 justify-content-center flex-wrap">
                                <Button variant="light" size="lg" href="#contact">
                                    <i className="bi bi-chat-dots-fill me-2"></i>
                                    Let's Talk
                                </Button>
                                <Button variant="outline-light" size="lg" onClick={handleDownloadCV}>
                                    <i className="bi bi-file-earmark-arrow-down me-2"></i>
                                    Download Resume
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}