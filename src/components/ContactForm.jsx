import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const { name, email, phone, message } = formData;
    const newErrors = {};

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{12,}$/;

    if (!name) newErrors.name = 'Full name is required';
    if (!email) {
      newErrors.email = 'Email address is required';
    } else if (!emailPattern.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!phonePattern.test(phone)) {
      newErrors.phone = 'Please enter a valid phone number with at least 12 digits';
    }

    if (!message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccessMessage('Success submitted');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
      setTimeout(() => setSuccessMessage(''), 3000); // Hide success message after 3 seconds
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-lg-8 col-xl-7">
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              id="name"
              type="text"
              placeholder="Enter your name..."
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name">Full name</label>
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
          <div className="form-floating mb-3">
            <input
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email address</label>
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="form-floating mb-3">
            <input
              className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
              id="phone"
              type="tel"
              placeholder="(123) 456-7890"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <label htmlFor="phone">Phone number</label>
            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
          </div>
          <div className="form-floating mb-3">
            <textarea
              className={`form-control ${errors.message ? 'is-invalid' : ''}`}
              id="message"
              placeholder="Enter your message here..."
              style={{ height: '10rem' }}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <label htmlFor="message">Message</label>
            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
          </div>
          <div className="d-grid">
            <button className="btn btn-primary btn-lg" id="submitButton" type="submit">
              Send Message
            </button>
          </div>
          {successMessage && (
            <div id="successMessage" className="alert alert-success mt-3">
              {successMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
