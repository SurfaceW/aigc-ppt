import React from 'react';

export const EgyptSlide: React.FC = () => {
  return (
    <div className="step slide" data-x="0" data-y="1500" data-rotate="90" data-scale="1">
      <h2>古埃及（公元前2700年起）</h2>
      <div className="content-box">
        <div className="text-content">
          <p>古埃及人通过使用特定的三角形（如3-4-5），隐含地理解了SAS原理。</p>
          <p>金字塔建造中应用了几何学的早期原理。</p>
        </div>
        <div className="image-content egypt-image">
          <img src="https://img.jzda001.com/image/2231616464593525.jpg" alt="古埃及金字塔" className="historical-image" />
        </div>
      </div>
    </div>
  );
}; 