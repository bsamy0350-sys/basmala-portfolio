import React from 'react';

export default function Navbar() {
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: 'rgba(10, 15, 29, 0.9)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(56, 189, 248, 0.15)', zIndex: 1000, padding: '15px 5%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <a href="#home" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 700, fontSize: '18px' }}>&lt;BS/&gt;</a>
        <div style={{ display: 'flex', gap: '22px', fontSize: '14px', fontWeight: 500, flexWrap: 'wrap' }}>
          <a href="#home" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Home</a>
          <a href="#about" style={{ color: '#e2e8f0', textDecoration: 'none' }}>About</a>
          <a href="#skills" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Skills</a>
          <a href="#experience" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Experience</a>
          <a href="#contact" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Get in Touch</a>
        </div>
      </div>
    </nav>
  );
}