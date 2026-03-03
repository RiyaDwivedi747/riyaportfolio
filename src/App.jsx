import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Briefcase, User, Send, ChevronRight } from 'lucide-react';
import profileImg from './assets/y.jpg';

// --- Sub-components (Internal to avoid file sprawl) ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`nav-container ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="logo text-gradient"
        >
          RD
        </motion.div>

        {/* Desktop Nav */}
        <div className="nav-links desktop-only">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="nav-link"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-toggle">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-nav glass-card"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-nav-link"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="hero-section section-padding">
    <div className="hero-content">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="hero-profile-container">
          <div className="profile-frame-glow"></div>
          <div className="profile-frame-outer"></div>
          <img src={profileImg} alt="Riya Dwivedi" className="hero-profile-img" />
        </div>
        <span className="welcome-badge">Welcome to my portfolio</span>
        <h1 className="hero-title">
          Hi, I'm <span className="name-highlight">Riya Dwivedi</span>
        </h1>
        <p className="hero-subtitle">
          Motivated and detail-oriented <span className="text-white">Fresh Data Analyst</span> with a strong foundation in SQL, Python, and Data Visualization.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => {
  const highlights = [
    { icon: <Briefcase color="#22d3ee" />, title: "Passionate", text: "Eager to learn and implement new technologies." },
    { icon: <User color="#8b5cf6" />, title: "Collaborative", text: "Believe in the power of teamwork and communication." },
    { icon: <Code color="#22d3ee" />, title: "Pragmatic", text: "Focused on solving real-world problems through code." }
  ];

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="about-container-centered"
        >
          <div className="section-header centered-header">
            <h2 className="section-title">About Me</h2>
            <div className="title-underline"></div>
          </div>

          <div className="about-content-minimal">
            <p className="about-main-text">
              I am a detail-oriented Data Analyst currently pursuing B.Tech (CS&E) at Invertis University. I specialize in turning complex data into actionable insights using tools like Python, Power BI, and SQL.
            </p>
            <p className="about-sub-text">
              With a CGPA of 8.0 and hands-on experience in various data-driven projects, I thrive on solving real-world challenges through statistical analysis and exploratory data research.
            </p>

            <div className="social-icons centered">
              <a href="https://www.linkedin.com/in/riya-dwivedi-70697539a" target="_blank" rel="noopener noreferrer"><Linkedin className="social-icon" /></a>
              <a href="mailto:riyadwivedi9044@gmail.com"><Mail className="social-icon" /></a>
              <a href="https://github.com/RiyaDwivedi747" target="_blank" rel="noopener noreferrer"><Github className="social-icon" /></a>
            </div>
          </div>

          <div className="highlights-minimal">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="minimal-highlight-card"
              >
                <div className="minimal-icon">{item.icon}</div>
                <h3 className="minimal-highlight-title">{item.title}</h3>
                <p className="minimal-highlight-text">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analysis",
      skills: ["SQL", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "EDA", "Data Modelling"]
    },
    {
      title: "Visualization & Tools",
      skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Advanced Excel", "GitHub", "Jupyter"]
    },
    {
      title: "Programming",
      skills: ["Python", "HTML/CSS", "JavaScript", "Java (Basic)", "MySQL", "MongoDB", "PostgreSQL"]
    }
  ];

  return (
    <section id="skills" className="skills-section section-padding alt-bg">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Skills</h2>
          <div className="title-underline"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="skill-category glass-card"
            >
              <h3 className="category-title text-gradient">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Student Performance Analysis",
      desc: "Analyzed student marks data to find factors affecting performance using Python and Pandas.",
      tags: ["Python", "Pandas", "Statistics", "Data Analysis"],
      icon: <Code color="#22d3ee" />
    },
    {
      title: "IoT-Based Street Light System",
      desc: "An intelligent street lighting system optimized for energy consumption based on ambient light.",
      tags: ["IoT", "Sensors", "Automation"],
      icon: <ExternalLink color="#8b5cf6" />
    }
  ];

  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-underline"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="project-card glass-card group"
            >
              <div className="project-preview">
                {React.cloneElement(project.icon, { size: 64, className: "preview-icon" })}
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <a href="#" className="project-link">
                  View Case Study <ChevronRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const expData = [
    {
      role: "Data Analyst Trainee",
      company: "Deloitte (Remote)",
      period: "January 2026",
      desc: "Completed a Deloitte job simulation involving data analysis and forensic technology. Used Excel to classify data and draw business conclusions."
    },
    {
      role: "Graphic Design Intern",
      company: "Remote",
      period: "June 2024 - August 2024",
      desc: "Focused on real-world creative projects and brand development. Collaborated with teams to design visual graphics and social media creatives."
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <div className="title-underline"></div>
        </div>
        <div className="experience-list">
          {expData.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="experience-card"
            >
              <span className="exp-period">{exp.period}</span>
              <h3 className="exp-role">{exp.role}</h3>
              <p className="exp-company">{exp.company}</p>
              <p className="exp-desc text-secondary">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Certifications = () => {
  const certifications = [
    {
      title: "Python For Data Science",
      org: "IBM",
      date: "Verified Professional",
      icon: <Code size={32} color="#22d3ee" />
    },
    {
      title: "Technology Job Simulation",
      org: "Deloitte",
      date: "January 2026",
      icon: <Briefcase size={32} color="#8b5cf6" />
    },
    {
      title: "SQL Course",
      org: "Skill Course (Self Learning)",
      date: "Professional Development",
      icon: <ExternalLink size={32} color="#22d3ee" />
    }
  ];

  return (
    <section id="certifications" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <div className="title-underline"></div>
        </div>
        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="cert-card glass-card cert-card-glow"
            >
              <div className="cert-icon-wrapper">{cert.icon}</div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-org">{cert.org}</p>
              <p className="cert-date">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  const eduData = [
    {
      degree: "B.Tech (CS&E)",
      school: "Invertis University",
      year: "2023 - 2027",
      details: "Currently pursuing with a CGPA of 8.0. Focused on data analysis, machine learning, and software engineering."
    },
    {
      degree: "Senior Secondary (12th)",
      school: "Dr. Sudama Prasad Vidyasthali",
      year: "Completed 2023",
      details: "Achieved a score of 64.5%."
    },
    {
      degree: "Higher Secondary (10th)",
      school: "Dr. Sudama Prasad Vidyasthali",
      year: "Completed 2021",
      details: "Achieved a score of 75%."
    }
  ];

  return (
    <section id="education" className="education-section section-padding alt-bg">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <div className="title-underline"></div>
        </div>

        <div className="timeline">
          {eduData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-card">
                <span className="edu-year">{item.year}</span>
                <h3 className="edu-degree">{item.degree}</h3>
                <p className="edu-school">{item.school}</p>
                <p className="edu-details">{item.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Prepare template parameters explicitly
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'riyadwivedi9044@gmail.com',
    };

    try {
      console.log('Sending email with params:', templateParams);
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      console.log('EmailJS Success:', result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error Details:', {
        status: error.status,
        text: error.text,
        error: error
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <section id="contact" className="contact-section section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card success-message"
          >
            <div className="flex justify-center mb-6">
              <Send className="success-icon" />
            </div>
            <h2 className="section-title">Message Sent!</h2>
            <p className="contact-subtext mb-8">
              Thank you for reaching out. I'll get back to you as soon as possible.
            </p>
            <button
              onClick={() => setSubmitStatus(null)}
              className="btn-primary"
            >
              Send Another Message
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
        </div>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <h3 className="contact-heading">Let's talk about everything!</h3>
            <p className="contact-subtext">
              Don't like forms? Send me an email. 👋
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon glass-card"><Mail size={24} color="#22d3ee" /></div>
                <div>
                  <p className="method-label">Email me at</p>
                  <p className="method-value">riyadwivedi9044@gmail.com</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon glass-card"><Phone size={24} color="#8b5cf6" /></div>
                <div>
                  <p className="method-label">Call me at</p>
                  <p className="method-value">+91 63064 45503</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon glass-card"><MapPin size={24} color="#22d3ee" /></div>
                <div>
                  <p className="method-label">Location</p>
                  <p className="method-value">Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-form glass-card"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'input-error' : ''}
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="alex@example.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="How can I help you?"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'input-error' : ''}
              ></textarea>
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            {submitStatus === 'error' && (
              <div className="form-error mb-4">
                Something went wrong. Please try again or email me directly.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn-primary form-submit ${isSubmitting ? 'btn-loading' : ''}`}
            >
              {isSubmitting ? (
                <>
                  Sending <div className="loading-spinner"></div>
                </>
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer-container">
    <div className="container">
      <div className="logo text-gradient mb-4">RD</div>
      <p className="footer-text">Building the next generation of digital experiences.</p>
      <div className="footer-socials">
        <a href="https://github.com/RiyaDwivedi747" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
        <a href="https://www.linkedin.com/in/riya-dwivedi-70697539a" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
        <a href="mailto:riyadwivedi9044@gmail.com"><Mail size={20} /></a>
      </div>
      <p className="copyright">
        &copy; {new Date().getFullYear()} Riya Dwivedi. All rights reserved.
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="app-wrapper">
      {/* Background blobs */}
      <div className="blob-container">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
