import React from 'react';
import { servicesData } from '../../data/servicesData';
import { ServiceIconMap, ChevronIcon } from '../common/Icons';

export const ServicesSection = ({ onSelectService }) => {
  return (
    <section className="soft" id="services">
      <div className="w">
        <div className="sec-h">
          <span className="sec-tag">Services</span>
          <h2>Electro-Mechanical Engineering Capabilities</h2>
          <p className="mu">
            Each service can be commissioned separately or combined into a single turnkey MEP package under one coordinated engineering team.
          </p>
        </div>

        <div className="sg">
          {servicesData.map((service) => {
            const IconComponent = ServiceIconMap[service.icon] || ServiceIconMap.hvac;
            const items = service.highlights || service.technicalDetails?.scope || [];

            return (
              <article className="card" key={service.id}>
                <div className="ic">
                  <IconComponent />
                </div>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <ul>
                  {items.slice(0, 3).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="card-spec-btn"
                  onClick={() => onSelectService(service)}
                  aria-label={`View technical engineering standards for ${service.title}`}
                >
                  <span>Technical Standards &amp; Codes</span>
                  <ChevronIcon direction="right" />
                </button>
              </article>
            );
          })}

          <article className="card cta">
            <h3>Have a project in mind?</h3>
            <p>
              Send us the site layout, tender drawings, or BOQ and we will tell you what the work involves and provide an itemized quote.
            </p>
            <a className="btn w2" href="#contact" style={{ alignSelf: 'flex-start', marginTop: 'auto' }}>
              Request a quote
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};
