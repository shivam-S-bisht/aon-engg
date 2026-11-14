import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { TrustStrip } from './components/home/TrustStrip';
import { AboutSection } from './components/home/AboutSection';
import { ServicesSection } from './components/home/ServicesSection';
import { ProcessSection } from './components/home/ProcessSection';
import { WorkGallery } from './components/home/WorkGallery';
import { VisionMission } from './components/home/VisionMission';
import { CareersSection } from './components/home/CareersSection';
import { ContactQuoteSection } from './components/home/ContactQuoteSection';
import { Modal } from './components/common/Modal';
import { Toast } from './components/common/Toast';
import { CheckIcon } from './components/common/Icons';

export const App = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [toast, setToast] = useState(null);

  const handleShowToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const handleCloseToast = () => {
    setToast(null);
  };

  return (
    <>
      <Header />

      <main id="top">
        <Hero />
        <TrustStrip />
        <AboutSection />
        <ServicesSection onSelectService={setSelectedService} />
        <ProcessSection />
        <WorkGallery onSelectImage={setSelectedImage} />
        <VisionMission />
        <CareersSection />
        <ContactQuoteSection onToast={handleShowToast} />
      </main>

      <Footer />

      {/* Service Technical Standards Modal */}
      <Modal
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title}
        subtitle="Engineering Standards, Statutory Codes & Scope of Execution"
        maxWidth="760px"
      >
        {selectedService && (
          <div>
            <p style={{ fontSize: '1rem', color: 'var(--ink)', marginBottom: '16px', lineHeight: '1.6' }}>
              {selectedService.technicalDetails?.overview || selectedService.summary}
            </p>

            {selectedService.technicalDetails?.methodology && (
              <p style={{ fontSize: '0.94rem', color: 'var(--slate)', marginBottom: '20px', lineHeight: '1.6' }}>
                <strong>Design Methodology:</strong> {selectedService.technicalDetails.methodology}
              </p>
            )}

            {selectedService.technicalDetails?.complianceStandards && (
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--deep)', marginBottom: '10px' }}>
                  Governing Codes &amp; Design Standards
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {selectedService.technicalDetails.complianceStandards.map((std, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.88rem',
                        color: 'var(--brand)',
                        background: 'var(--tint)',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        fontWeight: 500,
                      }}
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {selectedService.technicalDetails?.scope && (
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--deep)', marginBottom: '12px' }}>
                  Key Scope of Work &amp; Engineering Deliverables
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '8px' }}>
                  {selectedService.technicalDetails.scope.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        fontSize: '0.94rem',
                        color: 'var(--slate)',
                      }}
                    >
                      <span style={{ color: 'var(--brand)', marginTop: '2px', flexShrink: 0, width: '16px', height: '16px' }}>
                        <CheckIcon />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div
              style={{
                borderTop: '1px solid var(--line)',
                paddingTop: '18px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <span style={{ fontSize: '0.88rem', color: 'var(--slate)' }}>
                Need full engineering tender specs or itemized BOQ for this discipline?
              </span>
              <a
                className="btn"
                href="#contact"
                onClick={() => setSelectedService(null)}
                style={{ padding: '9px 18px', fontSize: '0.88rem' }}
              >
                Request BOQ / Quote
              </a>
            </div>
          </div>
        )}
      </Modal>

      {/* Work Gallery Lightbox Modal */}
      <Modal
        isOpen={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
        title={selectedImage?.title}
        subtitle={selectedImage?.location}
        maxWidth="840px"
      >
        {selectedImage && (
          <div>
            <div
              style={{
                width: '100%',
                maxHeight: '480px',
                borderRadius: '4px',
                overflow: 'hidden',
                background: '#0e081c',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                style={{ maxWidth: '100%', maxHeight: '480px', objectFit: 'contain' }}
                onError={(e) => {
                  if (selectedImage.fallback && e.target.src !== selectedImage.fallback) {
                    e.target.src = selectedImage.fallback;
                  }
                }}
              />
            </div>
            <div style={{ marginTop: '16px' }}>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.82rem',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  color: 'var(--brand)',
                  background: 'var(--tint)',
                  padding: '3px 8px',
                  borderRadius: '3px',
                  marginBottom: '8px',
                }}
              >
                {selectedImage.category}
              </span>
              <p style={{ fontSize: '0.95rem', color: 'var(--slate)', lineHeight: '1.6' }}>
                {selectedImage.description}
              </p>
            </div>
          </div>
        )}
      </Modal>

      {/* Floating Interactive Toast */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={handleCloseToast}
        />
      )}
    </>
  );
};
