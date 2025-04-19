import React from 'react';

export const BabylonSlide: React.FC = () => {
  return (
    <div className="step slide backdrop-blur-xl bg-white/40 rounded-xl border border-white/30 p-10 w-[1200px] shadow-[0_8px_32px_rgba(0,0,0,0.15)]" 
      style={{
        backdropFilter: 'blur(15px)',
        transform: 'perspective(1000px) rotateY(5deg)'
      }}
      data-x="-1500" data-y="0" data-rotate="180" data-scale="1">
      <h2 className="text-4xl text-slate-800 border-b-2 border-blue-400 pb-2 inline-block mb-4 font-light">古巴比伦（公元前1900年起）</h2>
      <div className="flex mt-4">
        <div className="w-[45%] text-left pr-5">
          <p className="text-2xl text-gray-600 leading-relaxed mb-3 font-light">通过对毕达哥拉斯三元组的了解和几何问题的解决，古巴比伦人隐含地理解了SAS原理。</p>
          <p className="text-2xl text-gray-600 leading-relaxed font-light">泥板中记载了复杂的几何计算。</p>
        </div>
        <div className="w-[55%] h-[350px] relative overflow-hidden rounded-xl">
          <div className="absolute inset-0 backdrop-blur-sm bg-amber-700/60 border border-amber-500/30 shadow-lg flex items-center justify-center">
            <div className="flex flex-col items-center backdrop-blur-sm p-6 rounded-lg bg-amber-600/40">
              <div className="text-5xl mb-5 text-amber-100">𒀭𒂍</div>
              <div className="text-4xl text-amber-100">△</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 