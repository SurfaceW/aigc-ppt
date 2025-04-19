import React from 'react';

export const BabylonSlide: React.FC = () => {
  return (
    <div className="step slide" data-x="-1500" data-y="0" data-rotate="180" data-scale="1">
      <h2>古巴比伦（公元前1900年起）</h2>
      <div className="content-box">
        <div className="text-content">
          <p>通过对毕达哥拉斯三元组的了解和几何问题的解决，古巴比伦人隐含地理解了SAS原理。</p>
          <p>泥板中记载了复杂的几何计算。</p>
        </div>
        <div className="image-content babylon-image">
          <div className="clay-tablet">
            <div className="tablet-content">
              <div className="cuneiform">𒀭𒂍</div>
              <div className="triangle-symbol">△</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 