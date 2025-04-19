import React from 'react';

export const TitleSlide: React.FC = () => {
  return (
    <div className="step slide flex flex-col items-center justify-center backdrop-blur-xl bg-white/40 rounded-xl border border-white/30 p-10 w-[1200px] shadow-[0_8px_32px_rgba(0,0,0,0.15)] h-[360px]" 
      style={{
        backdropFilter: 'blur(15px)',
        transform: 'perspective(1000px) rotateX(10deg)'
      }}
      data-x="0" data-y="0" data-z="0" data-rotate="0" data-scale="1">
      <h1 className="text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4 font-light border-b-2 border-blue-400 pb-2 inline-block w-full text-center">SAS 三角形全等的历史</h1>
      <div className="flex mt-4">
        <div className="w-full text-center">
          <p className="text-3xl text-gray-700 font-light mt-5">从古代文明到现代几何学</p>
        </div>
      </div>
    </div>
  );
}; 