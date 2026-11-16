import React, { useState } from 'react';
import { companyData } from '../../data/companyData';

export const ContactQuoteSection = ({ onToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'HVAC',
    msg: '',
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.msg) {
      onToast('Please fill in all required fields (Name, Email, Project Details).', 'error');
      return;
    }

    setSubmitting(true);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const endpoint = 'https://formsubmit.co/ajax/e09efab6b4cf9230feaf17a39eb5e4e6';

      const response = await fetch(endpoint, {
        method: 'POST',
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          Name: formData.name,
          Company: formData.company || 'Not specified',
          Email: formData.email,
          Phone: formData.phone || 'Not specified',
          Service: formData.service,
          'Project Details': formData.msg,
          _subject: `New MEP Project Enquiry: ${formData.service} - ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      clearTimeout(timeoutId);

      const data = await response.json();

      const phoneList = companyData.contacts.phones.map((p) => p.display).join(' / ');

      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        onToast(
          `Thank you, ${formData.name}! Your enquiry for ${formData.service} has been sent successfully. Our engineering team will review it and get in touch with you shortly. If you don't hear from us in 1 day, please call us at any of the given numbers (${phoneList}).`,
          'success'
        );
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          service: 'HVAC',
          msg: '',
        });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (error) {
      clearTimeout(timeoutId);
      console.error('FormSubmit Error:', error);
      if (error.name === 'AbortError') {
        onToast(
          'The submission timed out. Please check your internet connection or email us directly at sales@aon-engg.in.',
          'error'
        );
      } else {
        onToast(
          'Unable to send enquiry automatically. Please email us directly at sales@aon-engg.in or call +91 99581 88070.',
          'error'
        );
      }
    } finally {
      setSubmitting(false);
    }
  };

  const officeAddress = companyData.contacts.addresses.correspondence.formatted;

  return (
    <section className="soft" id="contact">
      <div className="w cg">
        <div>
          <h2>Request a quote</h2>
          <p className="mu">
            Tell us about the site and the work required. We will reply as soon as we have reviewed it.
          </p>

          <dl>
            <dt>Phone</dt>
            <dd>
              {companyData.contacts.phones.map((phone, idx) => (
                <div key={idx} style={{ whiteSpace: 'nowrap', marginBottom: '2px' }}>
                  <a href={phone.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {phone.display}
                  </a>
                </div>
              ))}
            </dd>

            <dt>Email</dt>
            <dd>
              {companyData.contacts.emails.map((email, idx) => (
                <div key={idx} style={{ marginBottom: '2px' }}>
                  <a href={email.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {email.display}
                  </a>
                </div>
              ))}
            </dd>

            <dt>Address</dt>
            <dd>{officeAddress}</dd>
          </dl>

          <div className="contact-map">
            <iframe
              src={companyData.contacts.googleMapsEmbedUrl}
              width="100%"
              height="240"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="AON Engineers and Consultants Office Location - V.V. Shopping Plaza"
            />
          </div>
        </div>

        <div className="fm">
          <form
            action="https://formsubmit.co/e09efab6b4cf9230feaf17a39eb5e4e6"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="r2">
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Company
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="r2">
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Phone
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </label>
            </div>

            <label>
              Service
              <select name="service" value={formData.service} onChange={handleChange}>
                <option value="HVAC">HVAC</option>
                <option value="Electrical">Electrical</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Fire fighting">Fire fighting</option>
                <option value="Fire safety equipment">Fire safety equipment</option>
                <option value="Full MEP package">Full MEP package</option>
              </select>
            </label>

            <label>
              Project details
              <textarea
                name="msg"
                value={formData.msg}
                onChange={handleChange}
                required
              />
            </label>

            <button
              className="btn"
              type="submit"
              disabled={submitting}
              style={{
                justifySelf: 'start',
                opacity: submitting ? 0.8 : 1,
                cursor: submitting ? 'wait' : 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              {submitting && (
                <svg
                  className="spinner"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  aria-hidden="true"
                  style={{ animation: 'spin 0.8s linear infinite' }}
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.25"
                  />
                  <path
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
              )}
              {submitting ? 'Sending enquiry...' : 'Send enquiry'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
