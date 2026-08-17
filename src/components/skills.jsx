import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Angular'],
    },
    {
      category: 'Backend',
      skills: ['C#', '.NET', 'ASP.NET', 'Node.js'],
    },
    {
      category: 'Database',
      skills: ['MySQL', 'SQL Server'],
    },
    {
      category: 'Full Stack',
      skills: ['Full-Stack Development', 'Web Applications'],
    },
  ];

  return (
    <section id="skills" style={{ padding: '80px 5%', backgroundColor: '#0f172a', borderTop: '1px solid rgba(56, 189, 248, 0.08)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '32px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0284c7, #38bdf8)', color: '#fff', fontSize: '22px' }}>
            ⚙️
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: '28px', color: '#fff' }}>Skills</h2>
            <p style={{ margin: '4px 0 0', color: '#94a3b8' }}>Core technologies and tools I work with.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {skillCategories.map((category, idx) => (
            <div key={idx} style={{ backgroundColor: '#111827', border: '1px solid rgba(56, 189, 248, 0.12)', borderRadius: '16px', padding: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.25)' }}>
              <h3 style={{ margin: '0 0 12px', color: '#38bdf8', fontSize: '18px' }}>{category.category}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {category.skills.map((skill, index) => (
                  <span key={index} style={{ padding: '8px 12px', borderRadius: '999px', backgroundColor: 'rgba(2, 132, 199, 0.15)', color: '#bae6fd', border: '1px solid rgba(56, 189, 248, 0.2)', fontSize: '13px' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}