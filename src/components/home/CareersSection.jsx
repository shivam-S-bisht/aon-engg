import React from 'react';
import { careersData } from '../../data/careersData';

export const CareersSection = () => {
  return (
    <div className="band" id="careers">
      <div className="w">
        <div>
          <h2>Careers at AON</h2>
          <p className="mu">
            We are looking for engineers, supervisors and technicians who care about getting the work right.
          </p>
        </div>
        <a
          className="btn"
          href={`mailto:${careersData.cvEmail}?subject=Application for Engineering Role at AON Engineers`}
        >
          Send your CV
        </a>
      </div>
    </div>
  );
};
