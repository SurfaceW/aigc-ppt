import React from 'react';

export const EuclidSlide: React.FC = () => {
  return (
    <div className="step slide backdrop-blur-xl bg-white/40 rounded-xl border border-white/30 p-10 w-[1200px] shadow-[0_8px_32px_rgba(0,0,0,0.15)]" 
      style={{
        backdropFilter: 'blur(15px)',
        transform: 'perspective(1000px) rotateY(-5deg)'
      }}
      data-x="3000" data-y="0" data-rotate="0" data-z="-1000" data-scale="1">
      <h2 className="text-4xl text-slate-800 border-b-2 border-blue-400 pb-2 inline-block mb-4 font-light">欧几里得（公元前300年左右）</h2>
      <div className="flex mt-4">
        <div className="w-[45%] text-left pr-5">
          <p className="text-2xl text-gray-600 leading-relaxed mb-3 font-light">在《几何原本》第一卷命题4中，欧几里得形式化了一个等同于SAS的陈述。</p>
          <p className="text-2xl text-gray-600 leading-relaxed font-light">这成为系统化几何学的基础。</p>
        </div>
        <div className="w-[55%] h-[350px] relative overflow-hidden rounded-xl">
          <div className="absolute inset-0 backdrop-blur-sm bg-white/30 border border-white/40 shadow-lg">
            <img 
              src="https://pica.zhimg.com/v2-31de2e340e4eff1ce2bdf1a5db44a80c_1440w.jpg" 
              alt="几何原本" 
              className="w-full h-full object-cover transition-all duration-500 hover:scale-105 hover:rotate-1" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 