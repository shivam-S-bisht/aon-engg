import React from 'react';

export const VisionMission = () => {
  const values = [
    {
      title: "Quality Engineering",
      desc: "Delivering installations built strictly to international codes (ASHRAE, ISHRAE, NBC 2005) with zero compromise on equipment lifespan.",
    },
    {
      title: "Integrity & Transparency",
      desc: "Honest estimation, clear equipment specifications, and dependable engineering counsel at every stage of the project.",
    },
    {
      title: "Client-Centric Delivery",
      desc: "Meeting aggressive project timelines through proactive coordination among all architectural, civil, and MEP trades.",
    },
    {
      title: "Life Safety First",
      desc: "Prioritizing human and asset protection through meticulously calculated hydraulic pipe networks, fire hydrants, and smoke extraction.",
    },
  ];

  return (
    <section className="vm" id="values">
      <div className="w">
        <div className="c">
          <span className="sec-tag">Corporate Philosophy</span>
          <h2>Vision</h2>
          <p>
            The preferred Mechanical, Electrical, Plumbing, and Fire Fighting solutions provider as well as Manufacturers of HVAC &amp; Fire safety equipment and related products in India.
          </p>
        </div>
        <div className="c">
          <span className="sec-tag">Our Commitment</span>
          <h2>Mission</h2>
          <p>
            To provide Quality Electro-mechanical services to our Customers by meeting customer requirements in design, time schedule, prompt after-sales service and thereby achieving total Customer loyalty &amp; repeat business.
          </p>
        </div>
      </div>

      <div className="w" style={{ marginTop: '48px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span className="sec-tag">Guiding Principles</span>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--deep)' }}>Our Core Values</h2>
          <p className="mu" style={{ margin: '0 auto' }}>Principles that guide our engineering conduct on every jobsite.</p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
          }}
        >
          {values.map((v, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                padding: '24px',
                borderRadius: '4px',
                border: '1px solid var(--line)',
                boxShadow: '0 2px 8px rgba(28,34,48,0.04)',
              }}
            >
              <h3 style={{ fontSize: '1.1rem', color: 'var(--deep)', marginBottom: '8px' }}>
                {v.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--slate)', margin: 0, lineHeight: '1.55' }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
