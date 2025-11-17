'use client'
import { useState } from 'react';
import { Button, Card, Container, Row, Col, Modal, Badge } from 'react-bootstrap';

function WorkSection(){
    const [filter, setFilter] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            category: "web",
            description: "Modern online shopping platform featuring seamless checkout, real-time inventory management, and responsive design optimized for all devices.",
            fullDescription: "A comprehensive e-commerce solution built with React and Node.js. This platform includes advanced product management, intelligent shopping cart system, secure payment gateway integration with Stripe, real-time order tracking, and a powerful admin dashboard with detailed analytics. The responsive design ensures optimal shopping experience across all devices from mobile to desktop.",
            image: "/images/idwatch.png",
            tags: ["PHP", "Node.js", "MongoDB", "HTML", "CSS"],
            client: "ID Watch Store",
            duration: "1 month",
            link: "https://github.com/itsyuenai/TOKOJAM"
        },
        {
            id: 2,
            title: "Insurance Website",
            category: "design",
            description: "A corporate site with a clean layout, smooth interactions, and SEO-friendly structure to help improve online presence.",
            fullDescription: "A corporate website built using HTML, CSS, and JavaScript. It features an organized layout, responsive pages, service information sections, animated elements, and a user-friendly structure. The design focuses on clarity, accessibility, and a professional look to help showcase insurance services effectively.",
            image: "/images/insurance.png",
            tags: ["HTML", "CSS", "JavaScript"],
            client: "Tech Solutions Inc",
            duration: "1 week",
            link: "https://github.com/itsyuenai/NaInsurance"
        },
        {
            id: 3,
            title: "Portfolio Dashboard",
            category: ["web", "design"],
            description: "Comprehensive portfolio management system with real-time analytics, intuitive drag-and-drop interface, and advanced project tracking capabilities.",
            fullDescription: "An advanced dashboard application designed for professional portfolio management with real-time data visualization powered by Chart.js. Built using React and TypeScript, the system features comprehensive project tracking, intelligent time management tools, detailed client relationship management, automated invoice generation, and extensive reporting capabilities with customizable metrics and export options.",
            image: "/images/porto.png",
            tags: ["React", "TypeScript", "Tailwind CSS"],
            client: "Freelance Collective",
            duration: "1 week",
            link: "https://github.com/itsyuenai/MyPortofolio"
        },
        {
            id: 4,
            title: "FTI News Platform",
            category: "web",
            description: "A dynamic news site with a clean interface, category browsing, and an optimized reading experience for students and staff.",
            fullDescription: "A news platform built for the Faculty of Information Technology. It includes real-time content updates, advanced search, category navigation, and a responsive layout. The interface follows modern UI/UX principles for a smooth reading flow.",
            image: "/images/ftinews.png",
            tags: ["Figma", "UI/UX", "HTML", "CSS", "JavaScript"],
            client: "UAS Pemrograman Web",
            duration: "1.5 months",
            link: "https://github.com/Llorente14/FTI-News"
        },
        {
            id: 5,
            title: "Cultural Heritage Website",
            category: "web",
            description: "An interactive cultural showcase with images, stories, and multimedia content designed to highlight traditional heritage.",
            fullDescription: "A beautifully crafted website dedicated to showcasing Javanese cultural heritage. The platform features interactive galleries, detailed cultural information, multimedia presentations, and engaging storytelling elements. Built with responsive design principles, the site ensures accessibility across all devices while maintaining the visual richness necessary to properly showcase cultural artifacts and traditions.",
            image: "/images/jawa.png",
            tags: ["HTML", "CSS", "JavaScript"],
            client: "High School Project",
            duration: "2 weeks",
            link: "https://github.com/itsyuenai/itsyuenai.github.io"
        },
        {
            id: 6,
            title: "Calculator App Design",
            category: "design",
            description: "Sleek calculator application design with modern aesthetics, intuitive button layout, and smooth animations for enhanced user interaction.",
            fullDescription: "A minimalist yet powerful calculator application design that emphasizes usability and visual appeal. The design features a clean interface with carefully chosen color schemes, intuitive button arrangements, smooth transition animations, and responsive feedback. The project demonstrates expertise in creating functional yet beautiful user interfaces that balance form and function perfectly.",
            image: "/images/calculator.png",
            tags: ["Branding", "Logo Design", "Illustrator", "UI Design"],
            client: "Freelance Client",
            duration: "3 days",
            link: "https://github.com/itsyuenai/calculator"
        }
    ];

    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'web', name: 'Web Development' },
        { id: 'design', name: 'Design' }
    ];

    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.category === filter);

    const handleShowModal = (project: any) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProject(null);
    };

    return(
        <Container>
            <div className="section-header">
                <h2>My Portfolio</h2>
                <p>
                    Explore my recent projects showcasing creativity, technical expertise, and attention to detail
                </p>
            </div>
            
            {/* Filter Buttons - UPDATED */}
            <div className="portfolio-filters text-center mb-5">
                {categories.map((category) => (
                    <Button
                        key={category.id}
                        variant={filter === category.id ? 'dark' : 'outline-light'}
                        className="mx-2 mb-3"
                        onClick={() => setFilter(category.id)}
                    >
                        {category.name}
                    </Button>
                ))}
            </div>

            {/* Projects Grid */}
            <Row className="g-4">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
                        <Col lg={4} md={6} key={project.id}>
                            <Card className="portfolio-card" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="portfolio-card-img">
                                    <img 
                                        src={project.image}
                                        alt={project.title}
                                    />
                                    <div className="portfolio-overlay">
                                        <Button 
                                            variant="light" 
                                            onClick={() => handleShowModal(project)}
                                        >
                                            <i className="bi bi-eye me-2"></i>
                                            View Details
                                        </Button>
                                    </div>
                                </div>
                                <Card.Body>
                                    <div className="mb-2">
                                        <Badge bg="secondary" className="text-uppercase">
                                            {project.category}
                                        </Badge>
                                    </div>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text>
                                        {project.description}
                                    </Card.Text>
                                    <div className="mb-3">
                                        {project.tags.slice(0, 3).map((tag, idx) => (
                                            <span 
                                                key={idx}
                                                className="badge bg-dark me-2 mb-2"
                                                style={{ fontSize: '0.75rem', fontWeight: '500' }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <Col xs={12}>
                        <div className="portfolio-empty">
                            <i className="bi bi-folder-x"></i>
                            <h3>No Projects Found</h3>
                            <p>Try selecting a different filter</p>
                        </div>
                    </Col>
                )}
            </Row>

            {/* Project Detail Modal */}
            <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
                {selectedProject && (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedProject.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img 
                                src={selectedProject.image} 
                                alt={selectedProject.title}
                                className="img-fluid rounded mb-4"
                                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                            />
                            
                            <h5 className="mb-3">Project Overview</h5>
                            <p className="text-muted">{selectedProject.fullDescription}</p>

                            <Row className="mt-4">
                                <Col md={6}>
                                    <h6><i className="bi bi-person-circle me-2"></i>Client</h6>
                                    <p className="text-muted">{selectedProject.client}</p>
                                </Col>
                                <Col md={6}>
                                    <h6><i className="bi bi-clock me-2"></i>Duration</h6>
                                    <p className="text-muted">{selectedProject.duration}</p>
                                </Col>
                            </Row>

                            <h6 className="mt-4 mb-3"><i className="bi bi-stack me-2"></i>Technologies Used</h6>
                            <div>
                                {selectedProject.tags.map((tag: string, idx: number) => (
                                    <Badge key={idx} bg="dark" className="me-2 mb-2 px-3 py-2">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="outline-secondary" onClick={handleCloseModal}>
                                Close
                            </Button>
                            <Button variant="primary" href={selectedProject.link} target="_blank">
                                <i className="bi bi-box-arrow-up-right me-2"></i>
                                Visit Project
                            </Button>
                        </Modal.Footer>
                    </>
                )}
            </Modal>
        </Container>
    )
}

export default WorkSection;