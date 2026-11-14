import React from 'react';
import { ToolIcon, ExtIcon, RulerIcon, ClockIcon } from '../common/Icons';

export const TrustStrip = () => {
  return (
    <div className="strip">
      <div className="w">
        <ul>
          <li>
            <ToolIcon />
            <div>
              <b>MEP contractors</b>
              <span>Mechanical, electrical, plumbing, fire fighting</span>
            </div>
          </li>
          <li>
            <ExtIcon />
            <div>
              <b>Equipment manufacturers</b>
              <span>HVAC and fire safety products</span>
            </div>
          </li>
          <li>
            <RulerIcon />
            <div>
              <b>Design led</b>
              <span>Built around your requirements &amp; NBC codes</span>
            </div>
          </li>
          <li>
            <ClockIcon />
            <div>
              <b>On schedule</b>
              <span>With prompt after-sales support &amp; AMC</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
