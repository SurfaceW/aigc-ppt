import React from 'react';

export const IntroductionSlide: React.FC = () => {
  return (
    <div className="step slide backdrop-blur-md bg-white/50 rounded-xl border border-white/20 p-10 w-[1200px] text-center shadow-[0_8px_32px_rgba(0,0,0,0.1)]" 
      style={{backdropFilter: 'blur(10px)'}}
      data-x="1500" data-y="0" data-rotate="0" data-scale="1">
      <h2 className="text-4xl text-slate-800 border-b-2 border-blue-400 pb-2.5 inline-block mb-8 font-light">SAS 全等原理</h2>
      <div className="flex justify-between mt-8">
        <div className="flex-1 text-left pr-5">
          <p className="text-2xl text-gray-600 leading-relaxed font-light">两个三角形，如果有两边和它们的夹角分别相等，那么这两个三角形全等。</p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-[300px] h-[300px] bg-blue-50/60 backdrop-blur-sm rounded-lg flex items-center justify-center relative shadow-inner border border-white/40">
            <div className="w-[200px] h-[200px] bg-gradient-to-br from-blue-400/80 to-blue-600/80" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-4xl text-white drop-shadow-md">∠</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 