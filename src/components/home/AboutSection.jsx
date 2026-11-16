import React from 'react';
import { companyData } from '../../data/companyData';

export const AboutSection = () => {
  return (
    <section id="about">
      <div className="w about">
        <div>
          <span className="sec-tag">About AON</span>
          <h2>An engineering firm built around dependable delivery</h2>
          <p className="mu">
            {companyData.name} provides end-to-end electro-mechanical services to industrial,
            commercial, and infrastructure customers—from concept design and statutory compliance through to
            fabrication, site execution, and long-term after-sales support.
          </p>
          <p className="mu">
            Founded by industry veterans {companyData.founders[0].name} and {companyData.founders[1].name},
            our foundational objective is to meet each customer’s exact engineering requirements and strict time schedules,
            while upholding National Building Code (NBC) safety standards.
          </p>
          <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span
              style={{
                fontSize: '0.85rem',
                padding: '4px 10px',
                background: 'var(--tint)',
                color: 'var(--brand)',
                borderRadius: '3px',
                fontWeight: 600,
              }}
            >
              Turnkey MEP Contracting
            </span>
            <span
              style={{
                fontSize: '0.85rem',
                padding: '4px 10px',
                background: 'var(--tint)',
                color: 'var(--brand)',
                borderRadius: '3px',
                fontWeight: 600,
              }}
            >
              Equipment Manufacturing
            </span>
            <span
              style={{
                fontSize: '0.85rem',
                padding: '4px 10px',
                background: 'var(--tint)',
                color: 'var(--brand)',
                borderRadius: '3px',
                fontWeight: 600,
              }}
            >
              D&amp;B Verified Enterprise
            </span>
          </div>
          <div className="cta" style={{ marginTop: '28px' }}>
            <a className="btn g" href="#services">
              What we do
            </a>
            <a className="btn" href="#contact">
              Discuss your site
            </a>
          </div>
        </div>

        <div className="pics">
          <div
            className="a"
            role="img"
            aria-label="Engineered HVAC ducting and site installation"
            style={{
              backgroundImage: "url('/assets/images/photos/purulia-odu.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div
            className="b"
            role="img"
            aria-label="Central AHU and chilled water plant"
            style={{
              backgroundImage: "url('/assets/images/photos/ahu-site.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      </div>
    </section>
  );
};
