import React from 'react';

export const HilbertSlide: React.FC = () => {
  return (
    <div className="step slide backdrop-blur-xl bg-white/40 rounded-xl border border-white/30 p-10 w-[1200px] shadow-[0_8px_32px_rgba(0,0,0,0.15)]" 
      style={{
        backdropFilter: 'blur(15px)',
        transform: 'perspective(1000px) rotateY(5deg)'
      }}
      data-x="0" data-y="3000" data-rotate="0" data-z="-1000" data-scale="1">
      <h2 className="text-4xl text-slate-800 border-b-2 border-blue-400 pb-2 inline-block mb-4 font-light">大卫·希尔伯特（1899年）</h2>
      <div className="flex mt-4">
        <div className="w-[45%] text-left pr-5">
          <p className="text-2xl text-gray-600 leading-relaxed mb-3 font-light">在其欧几里得几何学的严格公理体系中，希尔伯特将SAS作为一条公设。</p>
          <p className="text-2xl text-gray-600 leading-relaxed font-light">《几何基础》为现代数学奠定了基础。</p>
        </div>
        <div className="w-[55%] h-[350px] relative overflow-hidden rounded-xl">
          <div className="absolute inset-0 backdrop-blur-sm bg-white/30 border border-white/40 shadow-lg">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/6/6e/David_Hilbert%2C_1907.jpg" 
              alt="大卫·希尔伯特" 
              className="w-full h-full object-cover transition-all duration-500 hover:scale-105 hover:rotate-1" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 