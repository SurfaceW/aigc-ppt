import React from 'react';

export const BabylonSlide: React.FC = () => {
  return (
    <div className="step slide backdrop-blur-md bg-white/50 rounded-xl border border-white/20 p-10 w-[1200px] text-center shadow-[0_8px_32px_rgba(0,0,0,0.1)]" 
      style={{backdropFilter: 'blur(10px)'}}
      data-x="-1500" data-y="0" data-rotate="180" data-scale="1">
      <h2 className="text-4xl text-slate-800 border-b-2 border-blue-400 pb-2.5 inline-block mb-8 font-light">古巴比伦（公元前1900年起）</h2>
      <div className="flex justify-between mt-8">
        <div className="flex-1 text-left pr-5">
          <p className="text-2xl text-gray-600 leading-relaxed mb-4 font-light">通过对毕达哥拉斯三元组的了解和几何问题的解决，古巴比伦人隐含地理解了SAS原理。</p>
          <p className="text-2xl text-gray-600 leading-relaxed font-light">泥板中记载了复杂的几何计算。</p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-[300px] h-[200px] backdrop-blur-sm bg-amber-700/60 rounded-xl border border-amber-500/30 flex items-center justify-center shadow-inner">
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