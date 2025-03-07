import React, { useRef, useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null); // Correct reference name
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return; // Use 'form' instead of 'formRef'

    setStatus('sending');
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current, // Use 'form' instead of 'formRef'
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus('success');
        if (form.current)
          form.current.reset(); // Use 'form' instead of 'formRef'
        setTimeout(() => setStatus('idle'), 3000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      });
  };

  return (
    <section className="min-h-screen bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Contact Me</h2>
        
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="text-green-600 text-center">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <div className="flex justify-center gap-8 mb-12">
            <a href="#home" className="text-blue-600 hover:text-blue-800">Home</a>
            <a href="#about" className="text-blue-600 hover:text-blue-800">About</a>
            <a href="#skills" className="text-blue-600 hover:text-blue-800">Skills</a>
            <a href="#projects" className="text-blue-600 hover:text-blue-800">Projects</a>
            <a href="#contact" className="text-blue-600 hover:text-blue-800">Contact</a>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
          <div className="flex items-center justify-center gap-2">
            <Phone size={16} />
            <span>+919953120067</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail size={16} />
            <span>krishnatest52@gmail.com</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin size={16} />
            <span>New Delhi,India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
