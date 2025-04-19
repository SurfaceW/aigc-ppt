import React from 'react';

export const ModernApplicationsSlide: React.FC = () => {
  return (
    <div className="step slide" data-x="-3000" data-y="0" data-rotate="0" data-z="-1000" data-scale="1">
      <h2>现代应用（彩蛋）</h2>
      <div className="content-box">
        <div className="text-content">
          <p>SAS原理在现代有广泛应用：</p>
          <ul>
            <li>GPS定位系统中的三角测量</li>
            <li>建筑结构的稳定性分析</li>
            <li>计算机图形学中的3D建模</li>
            <li>机器人运动学中的位置确定</li>
          </ul>
        </div>
        <div className="image-content modern-apps">
          <div className="app-image gps"></div>
          <div className="app-image building"></div>
          <div className="app-image graphics"></div>
        </div>
      </div>
    </div>
  );
}; 