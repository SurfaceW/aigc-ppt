import React from 'react';

export const ThalesSlide: React.FC = () => {
  return (
    <div className="step slide backdrop-blur-md bg-white/50 rounded-xl border border-white/20 p-10 w-[1200px] text-center shadow-[0_8px_32px_rgba(0,0,0,0.1)]" 
      style={{backdropFilter: 'blur(10px)'}}
      data-x="0" data-y="-1500" data-rotate="270" data-scale="1">
      <h2 className="text-4xl text-slate-800 border-b-2 border-blue-400 pb-2.5 inline-block mb-8 font-light">泰勒斯（公元前6世纪）</h2>
      <div className="flex justify-between mt-8">
        <div className="flex-1 text-left pr-5">
          <p className="text-2xl text-gray-600 leading-relaxed mb-4 font-light">泰勒斯可能在测量中早期实际应用了SAS原理。</p>
          <p className="text-2xl text-gray-600 leading-relaxed font-light">被认为是第一个尝试形式化证明几何定理的希腊数学家。</p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="p-2 backdrop-blur-sm bg-white/30 rounded-xl border border-white/40 shadow-lg overflow-hidden">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Illustrerad_Verldshistoria_band_I_Ill_107.jpg/640px-Illustrerad_Verldshistoria_band_I_Ill_107.jpg" 
              alt="泰勒斯" 
              className="max-w-full max-h-[300px] rounded transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 