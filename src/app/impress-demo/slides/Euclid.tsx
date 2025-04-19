import React from 'react';

export const EuclidSlide: React.FC = () => {
  return (
    <div className="step slide" data-x="3000" data-y="0" data-rotate="0" data-z="-1000" data-scale="1">
      <h2>欧几里得（公元前300年左右）</h2>
      <div className="content-box">
        <div className="text-content">
          <p>在《几何原本》第一卷命题4中，欧几里得形式化了一个等同于SAS的陈述。</p>
          <p>这成为系统化几何学的基础。</p>
        </div>
        <div className="image-content double-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt-_lqZKhRYJxxCzuKIhyW0Rs4fEUaEWFMTg&s" alt="欧几里得" className="historical-image" />
          <img src="https://pica.zhimg.com/v2-31de2e340e4eff1ce2bdf1a5db44a80c_1440w.jpg" alt="几何原本" className="historical-image" />
        </div>
      </div>
    </div>
  );
}; 