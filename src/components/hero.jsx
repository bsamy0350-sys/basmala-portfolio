import React, { useState } from 'react';
import { 
  FaLinkedinIn, 
  FaGithub, 
  FaFacebookF, 
  FaEnvelope, 
  FaPaperPlane,
  FaBriefcase,
  FaGraduationCap,
  FaCheckCircle,
  FaLaptopCode,
  FaUsers
} from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
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

  // أكونتات التواصل الإجتماعي المباشرة
  const socialLinks = [
    { icon: <FaLinkedinIn size={18} />, href: 'https://www.linkedin.com/in/basmala-samy-a9b7a3349', label: 'LinkedIn' },
    { icon: <FaGithub size={18} />, href: 'https://github.com/bsamy0350-sys', label: 'GitHub' },
    { icon: <FaFacebookF size={18} />, href: 'https://www.facebook.com/share/1CkriRmQsp/?mibextid=wwXIfr', label: 'Facebook' },
    { icon: <FaEnvelope size={18} />, href: 'mailto:Bsamy0350@gmail.com', label: 'Email' }
  ];

  // المهارات التقنية مع نسب التقييم للرسوم البيانية (Progress Bars)
  const skillsData = [
    { name: 'Full-Stack Development', level: 90 },
    { name: '.NET Framework & ASP.NET', level: 88 },
    { name: 'C# Programming', level: 85 },
    { name: 'React.js & Front-End', level: 85 },
    { name: 'Angular', level: 78 },
    { name: 'SQL Server & MySQL', level: 82 }
  ];

  // الخبرات العملية والأنشطة بناءً على الصور المرفقة
  const experiences = [
    {
      title: '.NET Back-End Trainee',
      company: 'Instant Software Solutions',
      type: 'Internship',
      period: 'May 2026 - Present',
      location: 'Cairo, Egypt',
      description: 'Completed a comprehensive .NET Back-End training program, building server-side logic and database structures.'
    },
    {
      title: 'Full Stack Web Development Trainee & Front-End | React.js',
      company: 'National Telecommunications Institute (NTI)',
      type: 'Internship',
      period: 'Jul 2026 - Aug 2026',
      location: 'Cairo, Egypt',
      description: 'Strengthened end-to-end web development skills with strong focus on React.js and modern web architectures.'
    },
    {
      title: '.NET Back-End Developer',
      company: 'DSC (Developer Student Club)',
      type: 'Part-time / Community',
      period: 'Nov 2024 - Aug 2026',
      location: 'Cairo, Egypt',
      description: 'Worked on backend infrastructure and collaborative student projects using C# and .NET.'
    },
    {
      title: 'HR Member',
      company: 'GDG on Campus – CIC',
      type: 'Student Activity',
      period: 'Active Member',
      location: 'Cairo, Egypt',
      description: 'Developed interpersonal, communication, team management, and organizational skills.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#0b1329', color: '#e2e8f0', fontFamily: "'Segoe UI', Roboto, sans-serif" }}>

      {/* Hero Section */}
      <section id="home" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 5% 60px 5%',
        boxSizing: 'border-box'
      }}>
        <div style={{
          maxWidth: '1100px',
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '50px'
        }}>

          {/* النص والروابط */}
          <div style={{ flex: '1 1 500px', maxWidth: '600px' }}>
            <h1 style={{
              fontSize: '52px',
              fontWeight: '800',
              margin: '0 0 10px 0',
              color: '#ffffff',
              lineHeight: '1.15'
            }}>
              Basmala Samy
            </h1>

            <h2 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#38bdf8',
              margin: '0 0 20px 0'
            }}>
              Full-Stack Web Developer
            </h2>

            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#94a3b8',
              margin: '0 0 32px 0'
            }}>
              Passionate software developer building secure, user-friendly, and efficient web applications with strong foundation in .NET, React, and Angular.
            </p>

            {/* الأزرار */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '32px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="#contact" style={{
                backgroundColor: '#0284c7',
                color: '#ffffff',
                padding: '12px 28px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '15px',
                boxShadow: '0 4px 20px rgba(2, 132, 199, 0.4)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                Hire Me <FaPaperPlane size={13} />
              </a>

              <a href="#about" style={{
                backgroundColor: 'transparent',
                color: '#38bdf8',
                border: '1px solid #0284c7',
                padding: '12px 28px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '15px'
              }}>
                More Info &rarr;
              </a>
            </div>

            {/* أيقونات التواصل الاجتماعي */}
            <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
              {socialLinks.map((s, i) => (
                <a 
                  key={i} 
                  href={s.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title={s.label}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: '#1e293b',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    color: '#38bdf8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* الصورة الشخصية متمركزة في المنتصف تماماً */}
          <div style={{
            flex: '0 0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto'
          }}>
            <div style={{
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              padding: '5px',
              background: 'linear-gradient(135deg, #0284c7, #38bdf8, #0f172a)',
              boxShadow: '0 0 35px rgba(56, 189, 248, 0.3)'
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor: '#0f172a'
              }}>
                <img 
                  src={profileImg} 
                  alt="Basmala Samy" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 30%',
                    display: 'block'
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About Me Section - مطابقة للبيانات المرفقة بالسيرة الذاتية */}
      <section id="about" style={{
        padding: '90px 5%',
        backgroundColor: '#0f172a',
        borderTop: '1px solid rgba(56, 189, 248, 0.15)',
        borderBottom: '1px solid rgba(56, 189, 248, 0.15)'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: '10px',
            fontWeight: '800'
          }}>
            About <span style={{ color: '#38bdf8' }}>Me</span>
          </h2>
          <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '40px', fontSize: '15px' }}>
            Get to know my journey and core passion
          </p>

          <div style={{
            backgroundColor: '#1e293b',
            borderRadius: '16px',
            padding: '40px',
            border: '1px solid rgba(56, 189, 248, 0.15)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            lineHeight: '1.8'
          }}>
            <p style={{ fontSize: '16px', color: '#e2e8f0', marginTop: 0, marginBottom: '20px' }}>
              I have a strong passion for software development and building modern web applications. I enjoy learning new technologies and applying them in real-world and academic projects to create secure, user-friendly, and efficient solutions.
            </p>

            <p style={{ fontSize: '15px', color: '#94a3b8', marginBottom: '20px' }}>
              I have hands-on experience developing web applications using <b>C#, ASP.NET, Angular, React, MySQL,</b> and <b>SQL Server</b>. I also completed a Full Stack Web Development program at the <b>National Telecommunications Institute (NTI)</b>, strengthening my skills across both front-end and back-end development. Additionally, I hold a <b>Microsoft Office Certification</b>.
            </p>

            <p style={{ fontSize: '15px', color: '#94a3b8', margin: 0 }}>
              Beyond technical skills, I am deeply involved in student activities and teamwork. I worked as a <b>.NET Back-End Member at DSC</b> and served as an <b>HR Member at GDG on Campus – CIC</b>, where I developed strong communication, collaboration, and organizational skills.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section - برسم بياني أشرطة التقدم (Progress Bars) */}
      <section id="skills" style={{ padding: '90px 5%' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: '10px',
            fontWeight: '800'
          }}>
            Technical <span style={{ color: '#38bdf8' }}>Skills</span>
          </h2>
          <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '50px', fontSize: '15px' }}>
            Proficiency Levels & Core Competencies
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '30px'
          }}>
            {skillsData.map((skill, index) => (
              <div key={index} style={{
                backgroundColor: '#1e293b',
                padding: '20px 25px',
                borderRadius: '12px',
                border: '1px solid rgba(56, 189, 248, 0.1)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontWeight: '600', color: '#ffffff', fontSize: '15px' }}>{skill.name}</span>
                  <span style={{ color: '#38bdf8', fontWeight: '700', fontSize: '14px' }}>{skill.level}%</span>
                </div>
                <div style={{
                  width: '100%',
                  height: '8px',
                  backgroundColor: '#0f172a',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${skill.level}%`,
                    height: '100%',
                    backgroundColor: '#0284c7',
                    borderRadius: '4px'
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - عرض الخبرات والأنشطة في كروت شجرية */}
      <section id="experience" style={{
        padding: '90px 5%',
        backgroundColor: '#0f172a',
        borderTop: '1px solid rgba(56, 189, 248, 0.15)'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: '10px',
            fontWeight: '800'
          }}>
            Work & <span style={{ color: '#38bdf8' }}>Experience</span>
          </h2>
          <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '50px', fontSize: '15px' }}>
            Internships, Roles & Student Leadership
          </p>

          <div style={{ display: 'grid', gap: '24px' }}>
            {experiences.map((exp, idx) => (
              <div key={idx} style={{
                backgroundColor: '#1e293b',
                borderRadius: '14px',
                padding: '28px',
                border: '1px solid rgba(56, 189, 248, 0.15)',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  backgroundColor: '#0284c7',
                  color: '#fff',
                  padding: '12px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <FaBriefcase size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                    <h3 style={{ margin: 0, color: '#ffffff', fontSize: '19px', fontWeight: '700' }}>{exp.title}</h3>
                    <span style={{ color: '#38bdf8', fontSize: '13px', fontWeight: '600', backgroundColor: '#0f172a', padding: '4px 12px', borderRadius: '20px' }}>{exp.period}</span>
                  </div>
                  <p style={{ color: '#38bdf8', margin: '5px 0 10px 0', fontSize: '14px', fontWeight: '500' }}>
                    {exp.company} &bull; <span style={{ color: '#94a3b8' }}>{exp.type}</span>
                  </p>
                  <p style={{ color: '#94a3b8', margin: 0, fontSize: '14px', lineHeight: '1.6' }}>
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '90px 5%' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: '10px',
            fontWeight: '800'
          }}>
            Get In <span style={{ color: '#38bdf8' }}>Touch</span>
          </h2>
          <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '40px', fontSize: '15px' }}>
            Send a message or reach out for collaboration!
          </p>

          <form onSubmit={handleSubmit} style={{
            backgroundColor: '#1e293b',
            padding: '35px',
            borderRadius: '16px',
            border: '1px solid rgba(56, 189, 248, 0.15)'
          }}>
            {isSubmitted && (
              <div style={{
                padding: '12px',
                backgroundColor: 'rgba(34, 197, 94, 0.2)',
                color: '#4ade80',
                borderRadius: '8px',
                marginBottom: '20px',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <FaCheckCircle /> Message sent successfully!
              </div>
            )}

            <div style={{ marginBottom: '18px' }}>
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: '#0f172a',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#fff',
                  boxSizing: 'border-box',
                  fontSize: '14px'
                }}
              />
            </div>

            <div style={{ marginBottom: '18px' }}>
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: '#0f172a',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#fff',
                  boxSizing: 'border-box',
                  fontSize: '14px'
                }}
              />
            </div>

            <div style={{ marginBottom: '22px' }}>
              <textarea 
                name="message" 
                rows="4" 
                placeholder="Your Message" 
                value={formData.message}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: '#0f172a',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#fff',
                  boxSizing: 'border-box',
                  resize: 'none',
                  fontSize: '14px'
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
              cursor: 'pointer',
              fontSize: '15px'
            }}>
              Send Message
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}