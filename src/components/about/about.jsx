import React from 'react';
import './about.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-card about-card">
        <div className="section-title">
          <div className="title-icon">👤</div>
          <div>
            <h2>About Me</h2>
            <span></span>
          </div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate web developer focused on building responsive, modern applications with strong user experience and clean architecture.
            </p>

            <p>
              My experience includes working with <strong>C#, ASP.NET, Angular, React, MySQL, and SQL Server</strong> to create reliable digital solutions.
            </p>

            <p>
              I enjoy turning ideas into practical products, collaborating with teams, and continuously expanding my technical knowledge in the software industry.
            </p>
          </div>

          <div className="about-highlight">
            <div className="quote-icon">“</div>
            <h3>I build thoughtful solutions that are both functional and meaningful.</h3>
            <div className="highlight-line"></div>
            <div className="contact-item">
              <span>📍</span>
              Cairo, Egypt
            </div>
            <div className="contact-item">
              <span>💻</span>
              Full-Stack Developer
            </div>
            <div className="contact-item">
              <span>⚡</span>
              .NET Back-End Developer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;