import React, { useState } from 'react';
import { workGalleryData } from '../../data/workGalleryData';
import { companyData } from '../../data/companyData';
import { ExternalLinkIcon, DocumentIcon, ShieldIcon, AwardIcon } from '../common/Icons';

export const WorkGallery = ({ onSelectImage }) => {
  const [showAll, setShowAll] = useState(false);

  const featuredItems = workGalleryData.slice(0, 3);
  const remainingItems = workGalleryData.slice(3, 6);

  return (
    <section className="soft" id="work">
      <div className="w">
        <div className="sec-h">
          <span className="sec-tag">Project Credentials</span>
          <h2>Selected Work &amp; Site Installations</h2>
          <p className="mu">Site photographs from our turnkey HVAC, electrical, and central plant room installations.</p>
        </div>

        {/* Primary Featured Gallery - Editorial Layout identical to index-g-professional-v2.html */}
        <div className="work">
          {featuredItems.map((item) => (
            <figure
              key={item.id}
              style={{
                backgroundImage: `url('${item.image}')`,
                cursor: 'pointer',
              }}
              onClick={() => onSelectImage(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onSelectImage(item);
                }
              }}
              aria-label={`View full photo of ${item.title}`}
            >
              <figcaption>
                <b>{item.title}</b>
                {item.location}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Secondary Gallery (Revealed on View All) */}
        {showAll && (
          <div className="work work-secondary" style={{ marginTop: '18px' }}>
            {remainingItems.map((item) => (
              <figure
                key={item.id}
                style={{
                  backgroundImage: `url('${item.image}')`,
                  cursor: 'pointer',
                }}
                onClick={() => onSelectImage(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onSelectImage(item);
                  }
                }}
                aria-label={`View full photo of ${item.title}`}
              >
                <figcaption>
                  <b>{item.title}</b>
                  {item.location}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        {/* Toggle Button */}
        <div className="work-toggle-row">
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Featured (3 Installations)' : 'View All Installations (6 Sites)'}
          </button>
        </div>

        {/* Corporate Credentials & Statutory Documentation */}
        <div className="credentials-box">
          <div className="sec-h" style={{ marginTop: '56px', marginBottom: '28px' }}>
            <span className="sec-tag">Corporate Credentials</span>
            <h2>Verified Documentation &amp; Statutory Licenses</h2>
            <p className="mu">Official company registration, statutory certificates, and comprehensive project profile.</p>
          </div>

          <div className="cred-grid">
            <a
              href={companyData.credentials.profileDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card cred-card"
            >
              <div className="ic">
                <DocumentIcon />
              </div>
              <span className="cred-tag">Official PDF &middot; Direct Drive</span>
              <h3>Company Profile &amp; Project Track Record</h3>
              <p>Comprehensive turnkey MEP portfolio, plant machinery inventory, safety certifications, and audited client references.</p>
              <span className="cred-btn-link">
                Download Profile (PDF) <ExternalLinkIcon className="icon-xs" />
              </span>
            </a>

            <a
              href={companyData.credentials.certificateDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card cred-card"
            >
              <div className="ic">
                <ShieldIcon />
              </div>
              <span className="cred-tag">Govt. of India &middot; MCA</span>
              <h3>Certificate of Incorporation</h3>
              <p>Registered private limited engineering contractor under the Companies Act, 2013 (CIN: U74140UP2016PTC085188).</p>
              <span className="cred-btn-link">
                View Certificate <ExternalLinkIcon className="icon-xs" />
              </span>
            </a>

            <a
              href={companyData.credentials.dnbSealUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card cred-card"
            >
              <div className="ic">
                <AwardIcon />
              </div>
              <span className="cred-tag">D-U-N-S Registered Firm</span>
              <h3>Dun &amp; Bradstreet Verification</h3>
              <p>Internationally authenticated enterprise credential confirming legal standing, operational compliance, and financial credibility.</p>
              <span className="cred-btn-link">
                Verify D&amp;B Status <ExternalLinkIcon className="icon-xs" />
              </span>
            </a>
          </div>

          <p className="mu" style={{ marginTop: '24px' }}>
            Full project dossiers, consultant approvals, and tender pre-qualification packs are available upon request.{' '}
            <a href="#contact" style={{ color: 'var(--brand)', fontWeight: 500, textDecoration: 'none' }}>
              Contact commercial desk &rarr;
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
