import React from 'react';

export const TitleSlide: React.FC = () => {
  return (
    <div className="step slide backdrop-blur-md bg-white/50 rounded-xl border border-white/20 p-10 w-[1200px] text-center shadow-[0_8px_32px_rgba(0,0,0,0.1)]" 
      style={{backdropFilter: 'blur(10px)'}}
      data-x="0" data-y="0" data-scale="1">
      <h1 className="text-6xl text-blue-500 mb-5 font-light">SAS 三角形全等的历史</h1>
      <p className="text-3xl text-gray-600 font-light">从古代文明到现代几何学</p>
    </div>
  );
}; 