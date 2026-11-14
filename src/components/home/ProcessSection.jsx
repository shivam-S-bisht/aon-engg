import React from 'react';
import { processSteps } from '../../data/processData';

export const ProcessSection = () => {
  return (
    <section id="process">
      <div className="w">
        <div className="sec-h">
          <span className="sec-tag">How We Work</span>
          <h2>Our Execution Commitments</h2>
          <p className="mu">The same four commitments on every project, large or small.</p>
        </div>

        <ol className="steps">
          {processSteps.map((step) => (
            <li key={step.step}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
