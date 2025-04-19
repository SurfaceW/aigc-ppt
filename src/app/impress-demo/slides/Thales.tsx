import React from 'react';

export const ThalesSlide: React.FC = () => {
  return (
    <div className="step slide backdrop-blur-xl bg-white/40 rounded-xl border border-white/30 p-10 w-[1200px] shadow-[0_8px_32px_rgba(0,0,0,0.15)]" 
      style={{
        backdropFilter: 'blur(15px)',
        transform: 'perspective(1000px) rotateY(-5deg)'
      }}
      data-x="0" data-y="-1500" data-rotate="270" data-scale="1">
      <h2 className="text-4xl text-slate-800 border-b-2 border-blue-400 pb-2 inline-block mb-4 font-light">泰勒斯（公元前6世纪）</h2>
      <div className="flex mt-4">
        <div className="w-[45%] text-left pr-5">
          <p className="text-2xl text-gray-600 leading-relaxed mb-3 font-light">泰勒斯可能在测量中早期实际应用了SAS原理。</p>
          <p className="text-2xl text-gray-600 leading-relaxed font-light">被认为是第一个尝试形式化证明几何定理的希腊数学家。</p>
        </div>
        <div className="w-[55%] h-[350px] relative overflow-hidden rounded-xl">
          <div className="absolute inset-0 backdrop-blur-sm bg-white/30 border border-white/40 shadow-lg">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Illustrerad_Verldshistoria_band_I_Ill_107.jpg/640px-Illustrerad_Verldshistoria_band_I_Ill_107.jpg" 
              alt="泰勒斯" 
              className="w-full h-full object-cover transition-all duration-500 hover:scale-105 hover:rotate-1" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 