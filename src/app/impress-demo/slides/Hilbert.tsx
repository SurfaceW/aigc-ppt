import React from 'react';

export const HilbertSlide: React.FC = () => {
  return (
    <div className="step slide" data-x="0" data-y="3000" data-rotate="0" data-z="-1000" data-scale="1">
      <h2>大卫·希尔伯特（1899年）</h2>
      <div className="content-box">
        <div className="text-content">
          <p>在其欧几里得几何学的严格公理体系中，希尔伯特将SAS作为一条公设。</p>
          <p>《几何基础》为现代数学奠定了基础。</p>
        </div>
        <div className="image-content">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/David_Hilbert%2C_1907.jpg" alt="大卫·希尔伯特" className="historical-image" />
        </div>
      </div>
    </div>
  );
}; 