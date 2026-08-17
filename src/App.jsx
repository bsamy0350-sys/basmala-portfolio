import React, { useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPaperPlane as FaSend
} from 'react-icons/fa';

import profileImg from './assets/profile.jpg';
import Navbar from './components/navbar';
import About from './components/about/about';
import Skills from './components/skills';
import Experience from './components/experience';

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div style={{
      backgroundColor: '#0a0f1d',
      color: '#e2e8f0',
      minHeight: '100vh',
      fontFamily: "'Segoe UI', Roboto, sans-serif",
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    }}>

      <Navbar />

      {/* Hero Section */}
      <section id="home" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 5% 60px 5%',
        boxSizing: 'border-box'
      }}>
        <div style={{
          maxWidth: '1100px',
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px'
        }}>
          <div style={{ flex: '1 1 500px', maxWidth: '600px' }}>
            <h1 style={{
              fontSize: '48px',
              fontWeight: '800',
              margin: '0 0 10px 0',
              color: '#ffffff',
              lineHeight: '1.2'
            }}>
              Basmala Samy
            </h1>

            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#38bdf8',
              margin: '0 0 20px 0'
            }}>
              Full-Stack Web Developer
            </h2>

            <p style={{
              fontSize: '15px',
              lineHeight: '1.7',
              color: '#94a3b8',
              margin: '0 0 30px 0'
            }}>
              Frontend & Backend Developer with experience building high-performance web applications with clean architecture, beautiful UI, and scalable solutions.
            </p>

            <div style={{ display: 'flex', gap: '15px', marginBottom: '35px', flexWrap: 'wrap' }}>
              <a
                href="/cv.pdf"
                download="cv.pdf"
                style={{
                  backgroundColor: '#0284c7',
                  color: '#ffffff',
                  padding: '12px 26px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '14px',
                  boxShadow: '0 4px 20px rgba(2, 132, 199, 0.4)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                Download CV <FaSend size={12} />
              </a>

              <a href="#about" style={{
                backgroundColor: 'transparent',
                color: '#38bdf8',
                border: '1px solid #0284c7',
                padding: '12px 26px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '14px'
              }}>
                More Info &rarr;
              </a>
            </div>

            <div style={{ display: 'flex', gap: '15px' }}>
              {[
                { icon: <FaLinkedin size={16} />, href: 'https://www.linkedin.com/in/basmala-samy-a9b7a3349/', label: 'LinkedIn' },
                { icon: <FaGithub size={16} />, href: 'https://github.com/bsamy0350-sys', label: 'GitHub' },
                { icon: <FaEnvelope size={16} />, href: 'mailto:bsamy0350@gmail.com', label: 'Email' }
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: '#1e293b',
                  border: '1px solid rgba(56, 189, 248, 0.2)',
                  color: '#38bdf8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none'
                }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div style={{
            flex: '0 0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              position: 'relative',
              width: '320px',
              height: '320px',
              padding: '8px',
              background: 'transparent'
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '18px',
                overflow: 'hidden',
                backgroundColor: '#0f172a',
                position: 'relative',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                boxShadow: '0 16px 36px rgba(2, 15, 30, 0.28)'
              }}>
                <img
                  src={profileImg}
                  alt="Basmala Samy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 16%',
                    transform: 'none',
                    transition: 'none',
                    display: 'block'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Experience />

      {/* Contact Section */}
      <section id="contact" style={{ padding: '80px 5%' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '28px',
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            Get In <span style={{ color: '#38bdf8' }}>Touch</span>
          </h2>

          <div style={{ marginBottom: '24px', display: 'grid', gap: '10px' }}>
            <a href="mailto:bsamy0350@gmail.com" style={{ color: '#e2e8f0', textDecoration: 'none' }}><strong>Email:</strong> bsamy0350@gmail.com</a>
            <a href="tel:01032424179" style={{ color: '#e2e8f0', textDecoration: 'none' }}><strong>Phone:</strong> 01032424179</a>
            <a href="https://www.linkedin.com/in/basmala-samy-a9b7a3349/" target="_blank" rel="noopener noreferrer" style={{ color: '#e2e8f0', textDecoration: 'none' }}><strong>LinkedIn</strong></a>
            <a href="https://github.com/bsamy0350-sys" target="_blank" rel="noopener noreferrer" style={{ color: '#e2e8f0', textDecoration: 'none' }}><strong>GitHub</strong></a>
            <a
              href="/cv.pdf"
              download="cv.pdf"
              style={{
                marginTop: '6px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 'fit-content',
                padding: '10px 16px',
                borderRadius: '8px',
                backgroundColor: '#0284c7',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              Download My CV
            </a>
          </div>

          <form onSubmit={handleSubmit} style={{
            backgroundColor: '#1e293b',
            padding: '30px',
            borderRadius: '16px',
            border: '1px solid rgba(56, 189, 248, 0.15)'
          }}>
            {isSubmitted && (
              <div style={{
                padding: '12px',
                backgroundColor: 'rgba(34, 197, 94, 0.2)',
                color: '#4ade80',
                borderRadius: '8px',
                marginBottom: '15px',
                fontSize: '14px'
              }}>
                ✓ Message sent successfully!
              </div>
            )}

            <div style={{ marginBottom: '15px' }}>
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  backgroundColor: '#0f172a',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#fff',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  backgroundColor: '#0f172a',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#fff',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <textarea 
                name="message" 
                rows="4" 
                placeholder="Your Message" 
                value={formData.message}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  backgroundColor: '#0f172a',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#fff',
                  boxSizing: 'border-box',
                  resize: 'none'
                }}
              ></textarea>
            </div>

            <button type="submit" style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#0284c7',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '25px',
        backgroundColor: '#0f172a',
        borderTop: '1px solid rgba(56, 189, 248, 0.1)',
        color: '#64748b',
        fontSize: '13px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '8px' }}>
          <a href="mailto:bsamy0350@gmail.com" style={{ color: '#38bdf8', textDecoration: 'none' }}>Email</a>
          <a href="tel:01032424179" style={{ color: '#38bdf8', textDecoration: 'none' }}>Phone</a>
          <a href="https://www.linkedin.com/in/basmala-samy-a9b7a3349/" target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', textDecoration: 'none' }}>LinkedIn</a>
          <a href="https://github.com/bsamy0350-sys" target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', textDecoration: 'none' }}>GitHub</a>
        </div>
        © {new Date().getFullYear()} Basmala Samy
      </footer>

    </div>
  );
}
<a
  href="/cv.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  View CV
</a>