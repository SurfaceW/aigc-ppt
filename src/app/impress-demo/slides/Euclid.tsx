import React from 'react';

export const EuclidSlide: React.FC = () => {
  return (
    <div className="step slide backdrop-blur-md bg-white/50 rounded-xl border border-white/20 p-10 w-[1200px] text-center shadow-[0_8px_32px_rgba(0,0,0,0.1)]" 
      style={{backdropFilter: 'blur(10px)'}}
      data-x="3000" data-y="0" data-rotate="0" data-z="-1000" data-scale="1">
      <h2 className="text-4xl text-slate-800 border-b-2 border-blue-400 pb-2.5 inline-block mb-8 font-light">欧几里得（公元前300年左右）</h2>
      <div className="flex justify-between mt-8">
        <div className="flex-1 text-left pr-5">
          <p className="text-2xl text-gray-600 leading-relaxed mb-4 font-light">在《几何原本》第一卷命题4中，欧几里得形式化了一个等同于SAS的陈述。</p>
          <p className="text-2xl text-gray-600 leading-relaxed font-light">这成为系统化几何学的基础。</p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <div className="p-2 backdrop-blur-sm bg-white/30 rounded-xl border border-white/40 shadow-lg overflow-hidden">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt-_lqZKhRYJxxCzuKIhyW0Rs4fEUaEWFMTg&s" 
              alt="欧几里得" 
              className="max-w-full max-h-[140px] rounded transition-transform duration-300 hover:scale-105" 
            />
          </div>
          <div className="p-2 backdrop-blur-sm bg-white/30 rounded-xl border border-white/40 shadow-lg overflow-hidden">
            <img 
              src="https://pica.zhimg.com/v2-31de2e340e4eff1ce2bdf1a5db44a80c_1440w.jpg" 
              alt="几何原本" 
              className="max-w-full max-h-[140px] rounded transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 