import React, { useState } from 'react';
import './contact.css'; // Import the CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Enter your name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Enter email address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            required
          />
        </div>
        <div>
          <label htmlFor="subject">Enter Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter Subject"
            required
          />
        </div>
        <div>
          <label htmlFor="message">Enter Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
          />
        </div>
        <button type="submit">SEND</button>
      </form>
      <p className="contact-info"></p>
      <div className="contact-info">
        <p>Buttonwood, California.</p>
        <br></br>
        <p>Rosemead, CA 91770</p>
        <p>+1 253 565 2365</p>
        <br></br>
        <p>Mon to Fri 9am to 6pm</p>
        <p>support@colorlib.com</p>
      </div>
    </div>
  );
};

export default ContactForm;
