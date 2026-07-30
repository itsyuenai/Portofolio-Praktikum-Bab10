'use client'
import { useState } from 'react';
import { Button, Card, Container, Row, Col, Modal, Badge } from 'react-bootstrap';

const PORTFOLIO_CATEGORIES = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile App Dev' },
];

const PORTFOLIO_PROJECTS = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "web",
        description: "Modern online shopping platform featuring real-time inventory management and a responsive interface.",
        fullDescription: "A comprehensive e-commerce solution engineered with React and Node.js. It features advanced product management, intelligent shopping cart systems, secure payment integration, and a powerful admin dashboard.",
        image: "/images/idwatch.png",
        tags: ["PHP", "Node.js", "MySQL", "HTML", "CSS"],
        client: "ID Watch Store",
        duration: "On Progress",
        link: "https://github.com/itsyuenai/TOKOJAM"
    },
    {
        id: 2,
        title: "ScanIn Attendance App",
        category: "web",
        description: "An efficient attendance tracking application developed for students and academic staff.",
        fullDescription: "A dedicated attendance management frontend application designed to streamline the check-in process for academic environments. It features a user-friendly interface optimized for both students and lecturers, ensuring accurate and real-time attendance recording.",
        image: "/images/scanin.png",
        tags: ["HTML", "CSS", "JavaScript"],
        client: "Academic Project",
        duration: "1 month",
        link: "https://github.com/Einnyboi/ScanIn-Frontend"
    },
    {
        id: 3,
        title: "Ide Connect Hub",
        category: "mobile",
        description: "A mobile application designed to assist field technicians in managing and executing on-site tasks efficiently.",
        fullDescription: "A dedicated mobile application engineered specifically for field technicians. The platform streamlines on-site task assignments, enables real-time progress tracking, and facilitates seamless reporting directly from the field to ensure optimal operational efficiency.",
        image: "/images/ideconnect.png",
        tags: ["Flutter", "Firebase", "Mobile UI/Figma"],
        client: "Freelance Collective",
        duration: "6 month",
        link: "https://play.google.com/store/apps/details?id=com.idenigma.ideconnect_hub"
    },
    {
        id: 4,
        title: "FTI News Platform",
        category: "web",
        description: "A dynamic news portal featuring category browsing and an optimized reading experience.",
        fullDescription: "A modern news platform built for the Faculty of Information Technology. It includes real-time content updates, advanced search functionality, and a responsive layout following modern UI/UX principles.",
        image: "/images/ftinews.png",
        tags: ["Figma", "UI/UX", "HTML", "CSS", "JavaScript"],
        client: "Academic Project",
        duration: "1.5 months",
        link: "https://github.com/Llorente14/FTI-News"
    },
    {
        id: 5,
        title: "Cultural Heritage Website",
        category: "web",
        description: "An interactive cultural showcase highlighting traditional heritage through multimedia content.",
        fullDescription: "A beautifully crafted platform dedicated to Javanese cultural heritage. It features interactive galleries, engaging storytelling elements, and responsive design principles ensuring accessibility across devices.",
        image: "/images/jawa.png",
        tags: ["HTML", "CSS", "JavaScript"],
        client: "Academic Project",
        duration: "2 weeks",
        link: "https://github.com/itsyuenai/itsyuenai.github.io"
    },
    {
        id: 6,
        title: "Ide HRIS Mobile App",
        category: "mobile",
        description: "A comprehensive Human Resources Information System mobile app focused on employee attendance tracking.",
        fullDescription: "An intuitive mobile HRIS application specifically developed to optimize employee attendance management. The platform offers seamless check-in capabilities, synchronized data processing, and a streamlined interface designed for maximum employee usability.",
        image: "/images/idehris.png",
        tags: ["Flutter", "Firebase", "Mobile Dev"],
        client: "Freelance Client",
        duration: "On Progress",
        link: "https://github.com/faizalfebriyanto886/Ide-hris"
    }
];

function WorkSection() {
    const [filter, setFilter] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const filteredProjects = filter === 'all'
        ? PORTFOLIO_PROJECTS
        : PORTFOLIO_PROJECTS.filter(project => project.category.includes(filter));

    const handleShowModal = (project: any) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProject(null);
    };

    return (
        <section id="portfolio" className="portfolio-section section-spacing">
            <Container>
                <div className="section-header">
                    <h2>My Portfolio</h2>
                    <p>
                        Explore my recent projects showcasing technical expertise, creativity, and attention to detail.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="portfolio-filters text-center mb-5">
                    {PORTFOLIO_CATEGORIES.map((category) => (
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
                                            style={
                                                project.category === 'mobile'
                                                    ? { objectFit: 'contain', backgroundColor: '#f8f9fa', padding: '1rem' }
                                                    : {}
                                            }
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
                                <p>Try selecting a different filter.</p>
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
                                    className="img-fluid rounded mb-4 w-100"
                                    style={{
                                        height: '350px',
                                        objectFit: selectedProject.category === 'mobile' ? 'contain' : 'cover',
                                        backgroundColor: selectedProject.category === 'mobile' ? '#f8f9fa' : 'transparent',
                                        padding: selectedProject.category === 'mobile' ? '1rem' : '0'
                                    }}
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
        </section>
    );
}

export default WorkSection;