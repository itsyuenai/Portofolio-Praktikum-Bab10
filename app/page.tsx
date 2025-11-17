'use client'
import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";
import WorkSection from "../components/worksection";
import ServiceSection from "../components/servicesection";
import ContactSection from "../components/contactsection";
import Footer from "../components/footer";
 
import { Container, Row, Col, Button, ProgressBar, Card } from "react-bootstrap";
import Image from "next/image";
 
export default function Home(){
  const aboutImages = [
    "/images/profile.jpg",
    "/images/profile1.jpg",
    "/images/images.jpg",
    "/images/profile2.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === aboutImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [aboutImages.length]);

  // Skills data
  const skills = {
    technical: [
      { name: "React / Next.js", level: 90 },
      { name: "JavaScript / TypeScript", level: 90 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Node.js", level: 85 },
      { name: "MongoDB / SQL", level: 80 },
      { name: "Git / GitHub", level: 90 }
    ],
    design: [
      { name: "UI/UX Design", level: 90 },
      { name: "Figma / Adobe XD", level: 85 },
      { name: "Responsive Design", level: 95 },
      { name: "Photoshop", level: 80 },
      { name: "Illustrator", level: 75 },
      { name: "Wireframing", level: 85 }
    ]
  };

  // Stats data
  const stats = [
    { number: "50+", label: "Projects Completed", icon: "bi-check-circle-fill" },
    { number: "30+", label: "Happy Clients", icon: "bi-people-fill" },
    { number: "2+", label: "Years Experience", icon: "bi-award-fill" },
    { number: "100%", label: "Client Satisfaction", icon: "bi-star-fill" }
  ];

  // UPDATED: Fungsi Download CV
  const handleDownloadCV = () => {
    // Method 1: Jika CV sudah ada di folder public
    const link = document.createElement('a');
    link.href = '/cv/Naisya_Yuen_CV.pdf'; // Sesuaikan path file CV Anda
    link.download = 'Naisya_Yuen_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Method 2: Jika ingin buka di tab baru
    // window.open('/cv/Naisya_Yuen_CV.pdf', '_blank');
    
    // Method 3: Jika CV di Google Drive atau link eksternal
    // window.open('https://drive.google.com/file/d/YOUR_FILE_ID/view', '_blank');
  };

  return(
    <div>
      <Navbar/>
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <section id="about" className="section-spacing">
          <Container>
            <Row className="align-items-center g-5">
              <Col lg={6} className="order-lg-1 order-2 animate-on-scroll">
                <div className="about-content">
                  <h2>About Me</h2>
                  <h5 className="mb-4">Passionate Developer & Designer</h5>
                  <p className="lead">
                    Hello! I'm Naisya Yuen, a dedicated web developer and designer with a passion for creating beautiful, functional digital experiences.
                  </p>
                  <p>
                    I specialize in modern web technologies including React, Next.js, and responsive design. My goal is to build websites that not only look amazing but also provide exceptional user experiences.
                  </p>
                  <p>
                    With every project, I bring creativity, technical expertise, and attention to detail. I believe in clean code, elegant design, and solutions that make a real impact.
                  </p>
                  
                  {/* Stats Row */}
                  <Row className="mt-4 mb-4">
                    {stats.slice(0, 2).map((stat, index) => (
                      <Col xs={6} key={index} className="text-center mb-3">
                        <div className="stat-box">
                          <i className={`bi ${stat.icon} stat-icon`}></i>
                          <h3 className="stat-number">{stat.number}</h3>
                          <p className="stat-label">{stat.label}</p>
                        </div>
                      </Col>
                    ))}
                  </Row>

                  <div className="d-flex gap-3 flex-wrap">
                    <Button variant="primary" size="lg" href="#contact">
                      <i className="bi bi-envelope-fill me-2"></i>
                      Hire Me
                    </Button>
                    <Button variant="outline-primary" size="lg" onClick={handleDownloadCV}>
                      <i className="bi bi-download me-2"></i>
                      Download CV
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg={6} className="order-lg-2 order-1 animate-on-scroll">
                <div className="about-image-gallery">
                  {aboutImages.map((img, index) => (
                    <div
                      key={index}
                      className={`about-image-item ${index === currentImageIndex ? 'active' : ''}`}
                    >
                      <Image 
                        src={img} 
                        alt={`About Naisya Yuen ${index + 1}`} 
                        width={600} 
                        height={600}
                        className="img-fluid"
                      />
                    </div>
                  ))}
                  <div className="image-indicators">
                    {aboutImages.map((_, index) => (
                      <button
                        key={index}
                        className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`View image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-spacing bg-light">
          <Container>
            <div className="section-header animate-on-scroll">
              <h2>My Skills</h2>
              <p>
                Expertise in modern technologies and tools to bring your projects to life
              </p>
            </div>

            <Row className="g-4">
              <Col lg={6} className="animate-on-scroll">
                <Card className="skills-card h-100">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center mb-4">
                      <div className="skill-category-icon me-3">
                        <i className="bi bi-code-slash"></i>
                      </div>
                      <h3 className="mb-0">Technical Skills</h3>
                    </div>
                    {skills.technical.map((skill, index) => (
                      <div key={index} className="mb-4">
                        <div className="d-flex justify-content-between mb-2">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <ProgressBar 
                          now={skill.level} 
                          className="skill-progress"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        />
                      </div>
                    ))}
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={6} className="animate-on-scroll">
                <Card className="skills-card h-100">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center mb-4">
                      <div className="skill-category-icon me-3">
                        <i className="bi bi-palette-fill"></i>
                      </div>
                      <h3 className="mb-0">Design Skills</h3>
                    </div>
                    {skills.design.map((skill, index) => (
                      <div key={index} className="mb-4">
                        <div className="d-flex justify-content-between mb-2">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <ProgressBar 
                          now={skill.level} 
                          className="skill-progress"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        />
                      </div>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Additional Stats */}
            <Row className="mt-5 g-4">
              {stats.map((stat, index) => (
                <Col lg={3} md={6} key={index} className="animate-on-scroll">
                  <Card className="stats-card text-center h-100">
                    <Card.Body className="p-4">
                      <i className={`bi ${stat.icon} stats-card-icon`}></i>
                      <h2 className="stats-card-number">{stat.number}</h2>
                      <p className="stats-card-label">{stat.label}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="portfolio-section section-spacing">
          <WorkSection />
        </section>

        {/* Services Section */}
        <section id="services" className="section-spacing">
          <ServiceSection />
        </section>

        {/* Hire Me CTA Section */}
        <section className="hire-me-section">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center animate-on-scroll">
                <div className="hire-me-content">
                  <i className="bi bi-briefcase-fill hire-me-icon"></i>
                  <h2 className="mb-4">Ready to Start Your Project?</h2>
                  <p className="lead mb-4">
                    Let's work together to bring your vision to life. I'm available for freelance projects and full-time opportunities.
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

        {/* Contact Section */}
        <section id="contact" className="contact-section section-spacing">
          <ContactSection />
        </section>

        {/* Footer */}
        <Footer />
      </main>

      {/* Scroll to Top Button */}
      <button 
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <i className="bi bi-arrow-up"></i>
      </button>
    </div>
  )
}