import React, { useState } from 'react';
import "../styles/contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Skicka formulärdata här till en server eller API.
    console.log(formData);
    alert("Tack för att du kontaktade mig!");
  };

return (
  <section id="contact" className="contact">
    <div className="contact-content">
      <h2 className="contact-title">Let's Connect!</h2>
      <p className="contact-description">
        Jag skulle gärna höra från dig! Fyll i formuläret nedan så återkommer jag så snart jag kan.
      </p>
      <form onSubmit={handleSubmit} className="contact-form">
        <input 
          type="text" 
          name="name" 
          placeholder="Ditt namn" 
          value={formData.name} 
          onChange={handleChange} 
          required
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Din e-post" 
          value={formData.email} 
          onChange={handleChange} 
          required
        />
        <textarea 
          name="message" 
          placeholder="Ditt meddelande" 
          value={formData.message} 
          onChange={handleChange} 
          required
        />
        <button type="submit" className="cta-button primary">
          Skicka meddelande
        </button>
      </form>
    </div>
  </section>
);
}

export default Contact
