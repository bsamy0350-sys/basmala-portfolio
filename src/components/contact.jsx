import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been submitted.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-slate-800/50 border-t border-slate-800 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Contact Details</h3>
            <p className="text-slate-400">Feel free to reach out via phone, WhatsApp, or message form.</p>
            
            <div className="space-y-4 text-slate-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-900 rounded-xl text-cyan-400"><FaPhone /></div>
                <div>
                  <p className="text-xs text-slate-400">Call / Direct Phone</p>
                  <a href="tel:+201234567890" className="hover:text-cyan-400 font-medium">+20 12 3456 7890</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-900 rounded-xl text-green-400"><FaWhatsapp /></div>
                <div>
                  <p className="text-xs text-slate-400">WhatsApp</p>
                  <a 
                    href="https://wa.me/201234567890" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-green-400 font-medium"
                  >
                    Chat on WhatsApp (+20 12 3456 7890)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-900 rounded-xl text-cyan-400"><FaEnvelope /></div>
                <div>
                  <p className="text-xs text-slate-400">Email</p>
                  <a href="mailto:basmala.samy@example.com" className="hover:text-cyan-400 font-medium">basmala.samy@example.com</a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-xl text-slate-300 hover:text-cyan-400 border border-slate-800 transition-all">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-xl text-slate-300 hover:text-cyan-400 border border-slate-800 transition-all">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-xl font-semibold mb-2 text-slate-100">Send Me a Message</h3>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Your Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange} 
                required 
                placeholder="John Doe" 
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Your Email or Phone</label>
              <input 
                type="text" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                required 
                placeholder="email@domain.com or phone" 
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Message</label>
              <textarea 
                name="message" 
                rows="4" 
                value={formData.message} 
                onChange={handleInputChange} 
                required 
                placeholder="Write your message here..." 
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-400 resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}