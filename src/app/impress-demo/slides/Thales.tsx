import React from 'react';

export const ThalesSlide: React.FC = () => {
  return (
    <div className="step slide backdrop-blur-xl bg-white/80 rounded-xl border border-white/30 p-10 w-[1200px] shadow-[0_8px_32px_rgba(0,0,0,0.15)]" 
      style={{
        backdropFilter: 'blur(15px)',
        transform: 'perspective(1000px) rotateY(5deg)'
      }}
      data-x="-300" data-y="1000" data-z="-400" data-rotate="120" data-rotate-y="10" data-scale="1">
      <h2 className="text-4xl text-slate-800 border-b-2 border-blue-400 pb-2 inline-block mb-4 font-light">泰勒斯与SAS（公元前624-546年）</h2>
      <div className="flex mt-4">
        <div className="w-[55%] text-left pr-5">
          <p className="text-2xl text-gray-600 leading-relaxed mb-3 font-light">泰勒斯被认为最早将SAS原理用于实际几何问题的解决，将数学从实用提升到了理论层面。</p>
          <p className="text-2xl text-gray-600 leading-relaxed mb-3 font-light">他使用SAS全等原理证明了多个几何定理，包括等腰三角形底角相等和直径上的半圆所对的角为直角。</p>
          <p className="text-2xl text-gray-600 leading-relaxed font-light">据传他通过相似三角形和影子测量了金字塔的高度，展现了他对SAS原理的深刻理解。</p>
        </div>
        <div className="w-[45%] h-[350px] relative overflow-hidden rounded-xl">
          <div className="absolute inset-0 backdrop-blur-sm bg-white/30 border border-white/40 shadow-lg">
            <img 
              src="https://n.sinaimg.cn/sinakd20240831s/242/w600h442/20240831/0464-d6640288a0207e337a847a69504523bb.jpg" 
              alt="泰勒斯测量金字塔高度" 
              className="w-full h-full object-cover transition-all duration-500 hover:scale-105 hover:rotate-1" 
            />
          </div>
        </div>
      </div>
      <div className="mt-6 bg-blue-50/60 p-4 rounded-lg border border-blue-200/50">
        <h3 className="text-2xl text-blue-800 mb-2 font-light">泰勒斯的SAS贡献</h3>
        <ul className="list-disc pl-6">
          <li className="text-xl text-gray-700 mb-1">几何定理：首次通过逻辑推理证明了等腰三角形底角相等</li>
          <li className="text-xl text-gray-700 mb-1">实际应用：利用SAS原理测量了不可直接丈量的高度（如金字塔）</li>
          <li className="text-xl text-gray-700">方法创新：引入了通过比例关系和SAS原理解决实际测量问题的技术</li>
        </ul>
      </div>
    </div>
  );
}; 