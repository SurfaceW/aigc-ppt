import React from 'react';

export const HilbertSlide: React.FC = () => {
  return (
    <div className="step slide backdrop-blur-md bg-white/50 rounded-xl border border-white/20 p-10 w-[1200px] text-center shadow-[0_8px_32px_rgba(0,0,0,0.1)]" 
      style={{backdropFilter: 'blur(10px)'}}
      data-x="0" data-y="3000" data-rotate="0" data-z="-1000" data-scale="1">
      <h2 className="text-4xl text-slate-800 border-b-2 border-blue-400 pb-2.5 inline-block mb-8 font-light">大卫·希尔伯特（1899年）</h2>
      <div className="flex justify-between mt-8">
        <div className="flex-1 text-left pr-5">
          <p className="text-2xl text-gray-600 leading-relaxed mb-4 font-light">在其欧几里得几何学的严格公理体系中，希尔伯特将SAS作为一条公设。</p>
          <p className="text-2xl text-gray-600 leading-relaxed font-light">《几何基础》为现代数学奠定了基础。</p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="p-2 backdrop-blur-sm bg-white/30 rounded-xl border border-white/40 shadow-lg overflow-hidden">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/6/6e/David_Hilbert%2C_1907.jpg" 
              alt="大卫·希尔伯特" 
              className="max-w-full max-h-[300px] rounded transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 