import React from 'react';

export const EgyptSlide: React.FC = () => {
  return (
    <div className="step slide backdrop-blur-xl bg-white/40 rounded-xl border border-white/30 p-10 w-[1200px] shadow-[0_8px_32px_rgba(0,0,0,0.15)]" 
      style={{
        backdropFilter: 'blur(15px)',
        transform: 'perspective(1000px) rotateY(5deg)'
      }}
      data-x="0" data-y="1500" data-z="-100" data-rotate="90" data-rotate-y="5" data-scale="1">
      <h2 className="text-4xl text-slate-800 border-b-2 border-blue-400 pb-2 inline-block mb-4 font-light">古埃及（公元前2700年起）</h2>
      <div className="flex mt-4">
        <div className="w-[45%] text-left pr-5">
          <p className="text-2xl text-gray-600 leading-relaxed mb-3 font-light">古埃及人通过使用特定的三角形（如3-4-5），隐含地理解了SAS原理。</p>
          <p className="text-2xl text-gray-600 leading-relaxed font-light">金字塔建造中应用了几何学的早期原理。</p>
        </div>
        <div className="w-[55%] h-[350px] relative overflow-hidden rounded-xl">
          <div className="absolute inset-0 backdrop-blur-sm bg-white/30 border border-white/40 shadow-lg">
            <img 
              src="https://img.jzda001.com/image/2231616464593525.jpg" 
              alt="古埃及金字塔" 
              className="w-full h-full object-cover transition-all duration-500 hover:scale-105 hover:rotate-1" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 