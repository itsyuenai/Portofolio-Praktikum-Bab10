"use client"
import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

function ContactSection(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setShowSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setShowSuccess(false), 5000);
    };

    return(
        <Container>
            <Row className="justify-content-center">
                <Col lg={8} md={10}>
                    <div className="contact-card">
                        <div className="text-center mb-4">
                            <h2>Get In Touch</h2>
                            <p>
                                Have a project in mind? Let's discuss how we can work together to bring your vision to life.
                            </p>
                        </div>

                        {showSuccess && (
                            <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                                <strong>Thank you!</strong> Your message has been sent successfully. I'll get back to you soon.
                            </Alert>
                        )}

                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="form-group">
                                        <Form.Label>Full Name *</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Your name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="form-group">
                                        <Form.Label>Email Address *</Form.Label>
                                        <Form.Control 
                                            type="email" 
                                            placeholder="your@email.com"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            
                            <Form.Group className="form-group">
                                <Form.Label>Your Message *</Form.Label>
                                <Form.Control 
                                    as="textarea"
                                    rows={5}
                                    placeholder="Tell me about your project..."
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            
                            <div className="text-center mt-4">
                                <Button 
                                    variant="primary" 
                                    type="submit"
                                    size="lg"
                                >
                                    Send Message
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactSection;