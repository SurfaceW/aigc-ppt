import React from 'react';

export const EgyptSlide: React.FC = () => {
  return (
    <div className="step slide backdrop-blur-md bg-white/50 rounded-xl border border-white/20 p-10 w-[1200px] text-center shadow-[0_8px_32px_rgba(0,0,0,0.1)]" 
      style={{backdropFilter: 'blur(10px)'}}
      data-x="0" data-y="1500" data-rotate="90" data-scale="1">
      <h2 className="text-4xl text-slate-800 border-b-2 border-blue-400 pb-2.5 inline-block mb-8 font-light">古埃及（公元前2700年起）</h2>
      <div className="flex justify-between mt-8">
        <div className="flex-1 text-left pr-5">
          <p className="text-2xl text-gray-600 leading-relaxed mb-4 font-light">古埃及人通过使用特定的三角形（如3-4-5），隐含地理解了SAS原理。</p>
          <p className="text-2xl text-gray-600 leading-relaxed font-light">金字塔建造中应用了几何学的早期原理。</p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="p-2 backdrop-blur-sm bg-white/30 rounded-xl border border-white/40 shadow-lg overflow-hidden">
            <img 
              src="https://img.jzda001.com/image/2231616464593525.jpg" 
              alt="古埃及金字塔" 
              className="max-w-full max-h-[300px] rounded transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 