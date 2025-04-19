import React from 'react';

export const IntroductionSlide: React.FC = () => {
  return (
    <div className="step slide" data-x="1500" data-y="0" data-rotate="0" data-scale="1">
      <h2>SAS 全等原理</h2>
      <div className="content-box">
        <div className="text-content">
          <p>两个三角形，如果有两边和它们的夹角分别相等，那么这两个三角形全等。</p>
        </div>
        <div className="image-content">
          <div className="sas-diagram">
            <div className="triangle">
              <div className="angle">∠</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 