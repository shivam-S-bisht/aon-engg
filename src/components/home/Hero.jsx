import React from 'react';

export const Hero = () => {
  return (
    <div className="hero">
      <div className="t">
        <h1>Mechanical, electrical, plumbing and fire protection, delivered as one contract.</h1>
        <p>
          We design, install and service electro-mechanical systems, and manufacture HVAC and fire safety
          equipment, for industrial, commercial and residential clients across India.
        </p>
        <div className="cta">
          <a className="btn" href="#contact">
            Request a quote
          </a>
          <a className="btn g" href="#services">
            Explore our services
          </a>
        </div>
      </div>
      <div
        className="ph"
        role="img"
        aria-label="HVAC outdoor units installed on a rooftop beside an electrical substation"
        style={{
          backgroundImage: "url('/assets/images/photos/purulia-odu.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="tag">
          <b>Rooftop HVAC installation</b>
          Turnkey VRV/VRF outdoor units installed with vibration isolators and structural mounting
        </div>
      </div>
    </div>
  );
};
