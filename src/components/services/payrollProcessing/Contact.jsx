import { useState } from 'react'
import './Contact.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+1',
    phone: '',
    company: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-section">
          <div className="flex gap-4">
            <div className="w-1/2 input-group">
              <label htmlFor="firstName" className="required-field">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="John"
              />
            </div>
            <div className="w-1/2 input-group">
              <label htmlFor="lastName" className="required-field">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="email" className="required-field">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
            />
          </div>
          <div className="flex gap-4">
            <div className="w-1/3 input-group">
              <label htmlFor="countryCode" className="required-field">Country Code</label>
              <select
                id="countryCode"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                required
                className="country-code-select"
              >
                <option value="+1">+1 (US)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+62">+62 (ID)</option>
              </select>
            </div>
            <div className="w-2/3 input-group">
              <label htmlFor="phone" className="required-field">Personal Telephone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="personal-telephone-input"
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="company" className="required-field">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="message">How can we help you?</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Message"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit Enquiry
          </button>
        </form>
        <div className="info-section">
          <svg className="icon-mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <h2>Let us help you with your HR Needs</h2>
          <p>
            Whether you're looking to hire top-notch Indonesian talent, navigate the complexities of local employment laws, or seeking expert HR advice, Recruitindo is your gateway to business success in Indonesia.
          </p>
          <p>
            Don't let legal hurdles or recruiting challenges slow you down. Our comprehensive services are designed to streamline your operations and fuel your growth.
          </p>
          <p><strong>Get Started Today!</strong></p>
          <p>
            Fill out the form and one of our experts will get in touch to discuss how we can tailor our services to your unique business needs.
          </p>
          <p>
          With Recruitindo, your journey to expanding your team and scaling your business in Indonesia begins with just a click.
          </p>
        </div>
      </div>
    </div>
  )
}