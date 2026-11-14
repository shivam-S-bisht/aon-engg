import React, { useState, useEffect } from 'react';
import { LogoIcon, ExternalLinkIcon } from '../common/Icons';
import { companyData } from '../../data/companyData';

const SECTIONS = ['about', 'services', 'process', 'work', 'careers', 'contact'];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 10);

      // Check for bottom of page
      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
        return;
      }

      const scrollOffset = scrollY + 120;
      let current = '';

      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollOffset >= top && scrollOffset < top + height) {
            current = id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header id="hd" className={scrolled ? 's' : ''}>
      <div className="w bar">
        <a className="logo" href="#top" onClick={closeMobileMenu}>
          <LogoIcon />
          <span>
            AON Engineers and
            <br />
            Consultants Pvt. Ltd.
          </span>
        </a>

        <button
          className="tg"
          aria-expanded={mobileMenuOpen}
          aria-controls="nv"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? 'Close' : 'Menu'}
        </button>

        <nav
          id="nv"
          className={mobileMenuOpen ? 'open' : ''}
          aria-label="Main navigation"
          onClick={(e) => {
            if (e.target.tagName === 'A') {
              closeMobileMenu();
            }
          }}
        >
          <a
            href="#about"
            className={activeSection === 'about' ? 'active' : ''}
          >
            About
          </a>
          <a
            href="#services"
            className={activeSection === 'services' ? 'active' : ''}
          >
            Services
          </a>
          <a
            href="#process"
            className={activeSection === 'process' ? 'active' : ''}
          >
            How We Work
          </a>
          <a
            href="#work"
            className={activeSection === 'work' ? 'active' : ''}
          >
            Credentials
          </a>
          <a
            href="#careers"
            className={activeSection === 'careers' ? 'active' : ''}
          >
            Careers
          </a>
          <a
            href="#contact"
            className={activeSection === 'contact' ? 'active' : ''}
          >
            Contact
          </a>
          <a
            href={companyData.credentials.companyProfileDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Download verified AON Company Profile from Google Drive"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
          >
            Profile <ExternalLinkIcon className="icon-xs" />
          </a>
          <a className="btn" href="#contact">
            Request a quote
          </a>
        </nav>
      </div>
    </header>
  );
};
