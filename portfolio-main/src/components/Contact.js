import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser'; // Pehla error fix: emailjs import kiya

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Doosra error fix: 'form' ko 'formState' se replace kiya
    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      to_email: "suryanarayandixit398@gmail.com",
      message: formState.message,
    };

    // EmailJS Dashboard se apni IDs yahan dalein
    emailjs.send(
      'service_x76z6br',
      'template_d6tjvnb',
      templateParams,
      'NQozqap9Tm-eENBxl'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormState({ name: '', email: '', message: '' }); // Form reset
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send message. Please check your EmailJS keys.');
      });
  };

  return (
    <section className="section" id="contact">
      <div className="container contact-container">
        <h2 className="section-title">Get In Touch</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formState.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formState.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formState.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary contact-button flex items-center justify-center gap-2"
          >
            Send Message <FaPaperPlane />
          </button>
        </form>

        <div className="flex justify-center gap-6 mt-8">
          <a href="https://github.com/Suryanarayandixit" className="text-2xl hover:text-blue-500"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/surya-narayan-dixit-931359232/" className="text-2xl hover:text-blue-500"><FaLinkedin /></a>
          <a href="@DixitsuryaN" className="text-2xl hover:text-blue-500"><FaTwitter /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;