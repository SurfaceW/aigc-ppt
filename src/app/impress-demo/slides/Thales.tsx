import React from 'react';

export const ThalesSlide: React.FC = () => {
  return (
    <div className="step slide" data-x="0" data-y="-1500" data-rotate="270" data-scale="1">
      <h2>泰勒斯（公元前6世纪）</h2>
      <div className="content-box">
        <div className="text-content">
          <p>泰勒斯可能在测量中早期实际应用了SAS原理。</p>
          <p>被认为是第一个尝试形式化证明几何定理的希腊数学家。</p>
        </div>
        <div className="image-content">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Illustrerad_Verldshistoria_band_I_Ill_107.jpg/640px-Illustrerad_Verldshistoria_band_I_Ill_107.jpg" alt="泰勒斯" className="historical-image" />
        </div>
      </div>
    </div>
  );
}; 