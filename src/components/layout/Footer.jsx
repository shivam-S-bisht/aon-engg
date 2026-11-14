import React from 'react';
import { companyData } from '../../data/companyData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const addr = companyData.contacts.addresses.correspondence;

  return (
    <footer>
      <div className="w">
        <div className="fg">
          <div>
            <h3>{companyData.name}</h3>
            <p>
              {addr.addressLine1},<br />
              {addr.locality}, {addr.city} &ndash; {addr.postalCode}, {addr.state}
            </p>
            <p style={{ marginTop: '10px', fontSize: '0.84rem', color: '#8b92a4' }}>
              {companyData.credentials.cinGstNotice}
            </p>
          </div>

          <div>
            <h3>Pages</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#work">Credentials</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <ul>
              {companyData.contacts.phones.map((phone, idx) => (
                <li key={idx}>
                  <a href={phone.link}>{phone.display}</a>
                </li>
              ))}
              {companyData.contacts.emails.map((email, idx) => (
                <li key={idx}>
                  <a href={email.link}>{email.display}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="lg">
          &copy; {currentYear} {companyData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
