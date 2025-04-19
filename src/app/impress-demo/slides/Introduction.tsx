import React from 'react';

export const IntroductionSlide: React.FC = () => {
  return (
    <div className="step slide backdrop-blur-xl bg-white/40 rounded-xl border border-white/30 p-10 w-[1200px] shadow-[0_8px_32px_rgba(0,0,0,0.15)]" 
      style={{
        backdropFilter: 'blur(15px)',
        transform: 'perspective(1000px) rotateY(-5deg)'
      }}
      data-x="1500" data-y="0" data-rotate="0" data-scale="1">
      <h2 className="text-4xl text-slate-800 border-b-2 border-blue-400 pb-2 inline-block mb-4 font-light">SAS 全等原理</h2>
      <div className="flex mt-4">
        <div className="w-[45%] text-left pr-5">
          <p className="text-2xl text-gray-600 leading-relaxed font-light">两个三角形，如果有两边和它们的夹角分别相等，那么这两个三角形全等。</p>
        </div>
        <div className="w-[55%] h-[350px] relative overflow-hidden rounded-xl">
          <div className="absolute inset-0 backdrop-blur-sm bg-white/30 border border-white/40 shadow-lg flex items-center justify-center">
            <div className="w-[250px] h-[250px] bg-gradient-to-br from-blue-400/70 to-blue-600/70" style={{
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              filter: 'drop-shadow(0px 5px 15px rgba(59, 130, 246, 0.3))'
            }}>
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-4xl text-white drop-shadow-lg translate-y-10">∠</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 