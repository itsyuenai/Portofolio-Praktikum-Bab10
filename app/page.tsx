import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";
import AboutSection from "../components/aboutsection";
import SkillsSection from "../components/skillssection";
import WorkSection from "../components/worksection";
import ServiceSection from "../components/servicesection";
import HireMeSection from "../components/hiremesection";
import ContactSection from "../components/contactsection";
import Footer from "../components/footer";
import ScrollToTop from "../components/scrolltotop";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />

        <section id="portfolio" className="portfolio-section section-spacing">
          <WorkSection />
        </section>

        <ServiceSection />
        <HireMeSection />

        <section id="contact" className="contact-section section-spacing">
          <ContactSection />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}