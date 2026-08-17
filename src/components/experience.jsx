import React from 'react';

const experiences = [
  {
    title: '.NET Back-End Trainee',
    company: 'Instant Software Solutions',
    period: 'May 2026 - Present',
    type: 'Internship',
    location: 'Cairo, Egypt',
    description: 'Built hands-on experience with .NET back-end development and modern web application architecture.',
  },
  {
    title: 'Full Stack Web Development Trainee',
    company: 'NTI',
    period: 'Jul 2026 - Aug 2026',
    type: 'Internship',
    location: 'Cairo, Egypt',
    description: 'Strengthened front-end and back-end skills using React, modern JavaScript, and full-stack development practices.',
  },
  {
    title: '.NET Back-End Developer',
    company: 'DSC',
    period: 'Nov 2024 - Aug 2026',
    type: 'Part-time',
    location: 'Cairo, Egypt',
    description: 'Contributed to development work while improving backend problem-solving, collaboration, and delivery quality.',
  },
  {
    title: 'HR Member',
    company: 'GDG on Campus – CIC',
    period: 'May 2026 - Present',
    type: 'Part-time',
    location: 'Cairo, Egypt',
    description: 'Developed communication, coordination, and teamwork skills through student and community activities.',
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '80px 5%', backgroundColor: '#0f172a', borderTop: '1px solid rgba(56, 189, 248, 0.08)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '32px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0284c7, #38bdf8)', color: '#fff', fontSize: '22px' }}>
            💼
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: '28px', color: '#fff' }}>Experience</h2>
            <p style={{ margin: '4px 0 0', color: '#94a3b8' }}>Professional growth, internships, and community involvement.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '16px' }}>
          {experiences.map((item, index) => (
            <div key={index} style={{ backgroundColor: '#111827', border: '1px solid rgba(56, 189, 248, 0.12)', borderRadius: '16px', padding: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.25)' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px', marginBottom: '10px' }}>
                <div>
                  <h3 style={{ margin: 0, color: '#fff', fontSize: '20px' }}>{item.title}</h3>
                  <p style={{ margin: '6px 0 0', color: '#38bdf8', fontWeight: 600 }}>{item.company}</p>
                </div>
                <div style={{ textAlign: 'right', color: '#94a3b8', fontSize: '13px' }}>
                  <div>{item.period}</div>
                  <div style={{ marginTop: '4px' }}>{item.type}</div>
                </div>
              </div>
              <p style={{ margin: '6px 0 0', color: '#cbd5e1', lineHeight: 1.7 }}>{item.description}</p>
              <p style={{ margin: '10px 0 0', color: '#64748b', fontSize: '14px' }}>📍 {item.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
