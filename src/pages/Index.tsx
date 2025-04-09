
import React, { useState, useEffect } from 'react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [animated, setAnimated] = useState({});

  useEffect(() => {
    // Initialize animations
    setTimeout(() => {
      setAnimated({ hero: true });
      
      // Add scroll event listener for animations
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Check each section and trigger animations when in viewport
        document.querySelectorAll('section').forEach(section => {
          const sectionTop = section.offsetTop - windowHeight * 0.3;
          const sectionId = section.id;
          
          if (scrollPosition >= sectionTop) {
            setAnimated(prev => ({ ...prev, [sectionId]: true }));
            
            // Update active section for navigation
            if (scrollPosition + 100 >= sectionTop) {
              setActiveSection(sectionId);
            }
          }
        });
      };
      
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      
      return () => window.removeEventListener('scroll', handleScroll);
    }, 100);
  }, []);

  // Scroll to section smoothly
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close mobile menu when navigating
      setActiveSection(sectionId);
    }
  };
  
  // Project data
  const projects = [
    {
      id: 1,
      title: "Modern Web Application",
      description: "A responsive web application built with React and Node.js",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      demoLink: "#"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      technologies: ["Next.js", "Stripe", "Firebase", "Tailwind CSS"],
      demoLink: "#"
    },
    {
      id: 3,
      title: "Data Visualization Tool",
      description: "Interactive dashboard for visualizing complex datasets",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      technologies: ["D3.js", "TypeScript", "SVG", "REST API"],
      demoLink: "#"
    },
    {
      id: 4,
      title: "Mobile Application",
      description: "Cross-platform mobile app for productivity tracking",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      technologies: ["React Native", "Redux", "Firebase", "Expo"],
      demoLink: "#"
    }
  ];
  
  // Skills data
  const skills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "UI/UX Design", level: 75 },
    { name: "TypeScript", level: 70 }
  ];

  return (
    <div className="portfolio">
      {/* Custom cursor (optional) */}
      <div className="custom-cursor"></div>
      
      {/* Header/Navigation */}
      <header className={menuOpen ? 'open' : ''}>
        <div className="logo" onClick={() => scrollToSection('home')}>
          <span>Portfolio</span>
        </div>
        
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`hamburger ${menuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <nav className={menuOpen ? 'active' : ''}>
          <ul>
            <li className={activeSection === 'home' ? 'active' : ''}>
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
            </li>
            <li className={activeSection === 'about' ? 'active' : ''}>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
            </li>
            <li className={activeSection === 'skills' ? 'active' : ''}>
              <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
            </li>
            <li className={activeSection === 'projects' ? 'active' : ''}>
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
            </li>
            <li className={activeSection === 'contact' ? 'active' : ''}>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className={`hero-section ${animated.hero ? 'animated' : ''}`}>
          <div className="hero-content">
            <h1>
              <span className="animate-text">Hello, I'm</span>
              <span className="name animate-text">Alex Johnson</span>
              <span className="title animate-text">Creative Developer</span>
            </h1>
            <div className="hero-cta">
              <button className="primary-btn" onClick={() => scrollToSection('projects')}>View My Work</button>
              <button className="secondary-btn" onClick={() => scrollToSection('contact')}>Get In Touch</button>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className={`about-section ${animated.about ? 'animated' : ''}`}>
          <div className="section-title">
            <h2>About Me</h2>
            <div className="underline"></div>
          </div>
          
          <div className="about-content">
            <div className="profile-image">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Profile" />
            </div>
            
            <div className="about-text">
              <p>Hello! I'm Alex, a passionate web developer with a strong background in creating engaging digital experiences. I specialize in building modern, responsive websites and applications that solve real-world problems.</p>
              <p>With over 5 years of experience in the industry, I've worked with various technologies and frameworks to deliver high-quality solutions for clients across different sectors.</p>
              <p>I believe in clean code, intuitive user interfaces, and the power of continuous learning. When I'm not coding, you can find me hiking, reading, or experimenting with new technologies.</p>
              
              <div className="about-details">
                <div className="detail-item">
                  <span className="label">Name:</span>
                  <span className="value">Alex Johnson</span>
                </div>
                <div className="detail-item">
                  <span className="label">Email:</span>
                  <span className="value">alex@example.com</span>
                </div>
                <div className="detail-item">
                  <span className="label">Location:</span>
                  <span className="value">San Francisco, CA</span>
                </div>
                <div className="detail-item">
                  <span className="label">Availability:</span>
                  <span className="value">Freelance/Full-time</span>
                </div>
              </div>
              
              <button className="resume-btn">Download Resume</button>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section id="skills" className={`skills-section ${animated.skills ? 'animated' : ''}`}>
          <div className="section-title">
            <h2>My Skills</h2>
            <div className="underline"></div>
          </div>
          
          <div className="skills-content">
            <div className="skills-text">
              <p>I've worked with various technologies throughout my career. Here are some of my core skills and expertise levels:</p>
            </div>
            
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ 
                        width: animated.skills ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className={`projects-section ${animated.projects ? 'animated' : ''}`}>
          <div className="section-title">
            <h2>Featured Projects</h2>
            <div className="underline"></div>
          </div>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                className="project-card" 
                key={project.id}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <a href={project.demoLink} className="project-link">View Project</a>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span className="tech-tag" key={techIndex}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="projects-cta">
            <button className="more-projects-btn">See More Projects</button>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className={`contact-section ${animated.contact ? 'animated' : ''}`}>
          <div className="section-title">
            <h2>Get In Touch</h2>
            <div className="underline"></div>
          </div>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="icon">📍</div>
                <div className="detail">
                  <h3>Location</h3>
                  <p>San Francisco, CA</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon">✉️</div>
                <div className="detail">
                  <h3>Email</h3>
                  <p>alex@example.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon">📱</div>
                <div className="detail">
                  <h3>Phone</h3>
                  <p>(123) 456-7890</p>
                </div>
              </div>
              
              <div className="social-links">
                <a href="#" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} Alex Johnson. All rights reserved.</p>
      </footer>

      <style jsx>{`
        /* === Base Styles === */
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Lora:wght@400;500&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        :root {
          --primary-color: #2a9d8f;
          --secondary-color: #264653;
          --accent-color: #e76f51;
          --text-color: #333;
          --light-text: #666;
          --lightest-text: #999;
          --bg-color: #fff;
          --section-bg: #f8f9fa;
          --border-color: #e1e4e8;
          --animation-timing: 0.3s;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Lora', serif;
          color: var(--text-color);
          line-height: 1.6;
          overflow-x: hidden;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          line-height: 1.3;
        }
        
        section {
          padding: 100px 0;
          position: relative;
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 50px;
          position: relative;
        }
        
        .section-title h2 {
          font-size: 2.5rem;
          position: relative;
          display: inline-block;
        }
        
        .underline {
          height: 4px;
          width: 60px;
          background-color: var(--primary-color);
          margin: 15px auto 0;
        }
        
        /* === Portfolio Styles === */
        .portfolio {
          position: relative;
        }
        
        /* Header & Navigation */
        header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 20px 50px;
          z-index: 1000;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: background 0.3s;
          background-color: rgba(255, 255, 255, 0.95);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        
        .logo {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.8rem;
          font-weight: 700;
          cursor: pointer;
        }
        
        .logo span {
          background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        nav ul {
          display: flex;
          list-style: none;
        }
        
        nav ul li {
          margin: 0 15px;
        }
        
        nav ul li a {
          text-decoration: none;
          color: var(--text-color);
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          font-weight: 500;
          transition: color 0.3s;
          position: relative;
          padding: 5px 0;
        }
        
        nav ul li a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--primary-color);
          transition: width 0.3s;
        }
        
        nav ul li a:hover {
          color: var(--primary-color);
        }
        
        nav ul li a:hover::after,
        nav ul li.active a::after {
          width: 100%;
        }
        
        nav ul li.active a {
          color: var(--primary-color);
          font-weight: 600;
        }
        
        .menu-toggle {
          display: none;
          cursor: pointer;
        }
        
        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 20px;
        }
        
        .hamburger span {
          width: 100%;
          height: 2px;
          background-color: var(--text-color);
          transition: all 0.3s;
        }
        
        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 6px);
        }
        
        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -6px);
        }
        
        /* Hero Section */
        .hero-section {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: radial-gradient(circle at center, var(--section-bg) 0%, var(--bg-color) 100%);
          overflow: hidden;
        }
        
        .hero-content {
          text-align: center;
          max-width: 800px;
          padding: 0 30px;
          z-index: 1;
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease;
        }
        
        .hero-section.animated .hero-content {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hero-content h1 {
          display: flex;
          flex-direction: column;
          margin-bottom: 40px;
        }
        
        .animate-text {
          overflow: hidden;
          display: block;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.7s ease;
          transition-delay: 0.2s;
        }
        
        .hero-section.animated .animate-text:nth-child(1) {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hero-section.animated .animate-text:nth-child(2) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.4s;
        }
        
        .hero-section.animated .animate-text:nth-child(3) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.6s;
        }
        
        .hero-content h1 .name {
          font-size: 4rem;
          color: var(--primary-color);
          margin: 10px 0;
        }
        
        .hero-content h1 .title {
          font-size: 1.5rem;
          color: var(--light-text);
          font-weight: 400;
          font-family: 'Lora', serif;
        }
        
        .hero-cta {
          margin-top: 40px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease;
          transition-delay: 0.8s;
        }
        
        .hero-section.animated .hero-cta {
          opacity: 1;
          transform: translateY(0);
        }
        
        .primary-btn, .secondary-btn {
          padding: 12px 30px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s;
          margin: 10px;
          outline: none;
        }
        
        .primary-btn {
          background-color: var(--primary-color);
          color: white;
          box-shadow: 0 4px 15px rgba(42, 157, 143, 0.2);
        }
        
        .primary-btn:hover {
          background-color: var(--secondary-color);
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(38, 70, 83, 0.3);
        }
        
        .secondary-btn {
          background-color: transparent;
          color: var(--primary-color);
          border: 2px solid var(--primary-color);
        }
        
        .secondary-btn:hover {
          background-color: var(--primary-color);
          color: white;
          transform: translateY(-3px);
        }
        
        /* About Section */
        .about-section {
          background-color: var(--bg-color);
          padding-top: 120px;
        }
        
        .about-content {
          display: flex;
          align-items: flex-start;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 30px;
          gap: 60px;
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s ease;
        }
        
        .about-section.animated .about-content {
          opacity: 1;
          transform: translateY(0);
        }
        
        .profile-image {
          flex: 1;
          max-width: 400px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .profile-image img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s;
          filter: brightness(0.95);
        }
        
        .profile-image:hover img {
          transform: scale(1.05);
          filter: brightness(1);
        }
        
        .about-text {
          flex: 2;
        }
        
        .about-text p {
          margin-bottom: 20px;
          font-size: 1.05rem;
          color: var(--light-text);
        }
        
        .about-details {
          margin: 30px 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        
        .detail-item {
          display: flex;
        }
        
        .label {
          font-weight: 600;
          color: var(--text-color);
          margin-right: 10px;
          min-width: 100px;
        }
        
        .value {
          color: var(--light-text);
        }
        
        .resume-btn {
          padding: 12px 25px;
          background-color: var(--secondary-color);
          color: white;
          border: none;
          border-radius: 5px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s;
          margin-top: 10px;
          display: inline-flex;
          align-items: center;
        }
        
        .resume-btn:hover {
          background-color: var(--primary-color);
          transform: translateY(-3px);
          box-shadow: 0 4px 15px rgba(42, 157, 143, 0.2);
        }
        
        /* Skills Section */
        .skills-section {
          background-color: var(--section-bg);
        }
        
        .skills-content {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 30px;
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s ease;
        }
        
        .skills-section.animated .skills-content {
          opacity: 1;
          transform: translateY(0);
        }
        
        .skills-text {
          text-align: center;
          margin-bottom: 40px;
        }
        
        .skills-text p {
          font-size: 1.1rem;
          color: var(--light-text);
        }
        
        .skills-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }
        
        .skill-item {
          margin-bottom: 20px;
        }
        
        .skill-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        
        .skill-name {
          font-weight: 600;
          color: var(--text-color);
        }
        
        .skill-percentage {
          color: var(--lightest-text);
        }
        
        .skill-bar {
          height: 8px;
          background-color: var(--border-color);
          border-radius: 4px;
          overflow: hidden;
        }
        
        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
          width: 0;
          transition: width 1.2s ease;
        }
        
        /* Projects Section */
        .projects-section {
          background-color: var(--bg-color);
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 30px;
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s ease;
        }
        
        .projects-section.animated .projects-grid {
          opacity: 1;
          transform: translateY(0);
        }
        
        .project-card {
          background-color: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
          transition: transform 0.4s, box-shadow 0.4s;
          opacity: 0;
          transform: translateY(30px);
        }
        
        .projects-section.animated .project-card {
          animation: fadeInUp 0.6s forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .project-image {
          position: relative;
          overflow: hidden;
          height: 200px;
        }
        
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }
        
        .project-card:hover .project-image img {
          transform: scale(1.1);
        }
        
        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(42, 157, 143, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s;
        }
        
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        
        .project-link {
          color: white;
          text-decoration: none;
          padding: 10px 20px;
          border: 2px solid white;
          border-radius: 30px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          transition: all 0.3s;
        }
        
        .project-link:hover {
          background-color: white;
          color: var(--primary-color);
        }
        
        .project-info {
          padding: 20px;
        }
        
        .project-info h3 {
          margin-bottom: 10px;
          font-size: 1.2rem;
          color: var(--text-color);
        }
        
        .project-info p {
          margin-bottom: 15px;
          color: var(--light-text);
          font-size: 0.95rem;
        }
        
        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .tech-tag {
          background-color: var(--section-bg);
          color: var(--light-text);
          padding: 4px 10px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-family: 'Montserrat', sans-serif;
        }
        
        .projects-cta {
          text-align: center;
          margin-top: 50px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease;
          transition-delay: 0.4s;
        }
        
        .projects-section.animated .projects-cta {
          opacity: 1;
          transform: translateY(0);
        }
        
        .more-projects-btn {
          padding: 12px 30px;
          background-color: transparent;
          color: var(--primary-color);
          border: 2px solid var(--primary-color);
          border-radius: 30px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .more-projects-btn:hover {
          background-color: var(--primary-color);
          color: white;
        }
        
        /* Contact Section */
        .contact-section {
          background-color: var(--section-bg);
          position: relative;
        }
        
        .contact-content {
          display: flex;
          flex-wrap: wrap;
          gap: 50px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 30px;
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s ease;
        }
        
        .contact-section.animated .contact-content {
          opacity: 1;
          transform: translateY(0);
        }
        
        .contact-info {
          flex: 1;
          min-width: 300px;
        }
        
        .contact-form {
          flex: 2;
          min-width: 300px;
        }
        
        .contact-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 30px;
        }
        
        .icon {
          font-size: 1.5rem;
          margin-right: 15px;
          color: var(--primary-color);
          height: 50px;
          width: 50px;
          background-color: rgba(42, 157, 143, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }
        
        .contact-item:hover .icon {
          background-color: var(--primary-color);
          color: white;
          transform: translateY(-3px);
        }
        
        .detail h3 {
          margin-bottom: 5px;
          font-size: 1.1rem;
        }
        
        .detail p {
          color: var(--light-text);
        }
        
        .social-links {
          display: flex;
          gap: 15px;
          margin-top: 30px;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(42, 157, 143, 0.1);
          color: var(--primary-color);
          transition: all 0.3s;
        }
        
        .social-link:hover {
          background-color: var(--primary-color);
          color: white;
          transform: translateY(-3px);
        }
        
        .social-link svg {
          width: 18px;
          height: 18px;
        }
        
        .form-group {
          margin-bottom: 25px;
        }
        
        label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: var(--text-color);
        }
        
        input, textarea {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid var(--border-color);
          border-radius: 5px;
          font-family: 'Lora', serif;
          font-size: 1rem;
          color: var(--text-color);
          transition: border-color 0.3s;
        }
        
        input:focus, textarea:focus {
          outline: none;
          border-color: var(--primary-color);
        }
        
        textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .submit-btn {
          background-color: var(--primary-color);
          color: white;
          padding: 12px 30px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(42, 157, 143, 0.2);
        }
        
        .submit-btn:hover {
          background-color: var(--secondary-color);
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(38, 70, 83, 0.3);
        }
        
        /* Footer */
        footer {
          background-color: var(--secondary-color);
          color: white;
          text-align: center;
          padding: 30px 0;
        }
        
        /* Animation Keyframes */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Media Queries */
        @media screen and (max-width: 992px) {
          .section-title h2 {
            font-size: 2.2rem;
          }
          
          .hero-content h1 .name {
            font-size: 3.5rem;
          }
          
          .about-content {
            flex-direction: column;
          }
          
          .profile-image {
            margin: 0 auto 40px;
            max-width: 300px;
          }
          
          .skills-list {
            grid-template-columns: 1fr;
          }
        }
        
        @media screen and (max-width: 768px) {
          header {
            padding: 15px 20px;
          }
          
          .menu-toggle {
            display: block;
          }
          
          nav {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            background-color: white;
            height: 0;
            overflow: hidden;
            transition: height 0.3s, padding 0.3s;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          }
          
          nav.active {
            height: auto;
            padding: 20px 0;
          }
          
          nav ul {
            flex-direction: column;
            align-items: center;
          }
          
          nav ul li {
            margin: 10px 0;
          }
          
          .section-title h2 {
            font-size: 2rem;
          }
          
          .hero-content h1 .name {
            font-size: 2.8rem;
          }
          
          .hero-content h1 .title {
            font-size: 1.3rem;
          }
          
          section {
            padding: 80px 0;
          }
        }
        
        @media screen and (max-width: 576px) {
          .section-title h2 {
            font-size: 1.8rem;
          }
          
          .hero-content h1 .name {
            font-size: 2.4rem;
          }
          
          .about-details {
            grid-template-columns: 1fr;
          }
          
          .projects-grid {
            padding: 0 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
