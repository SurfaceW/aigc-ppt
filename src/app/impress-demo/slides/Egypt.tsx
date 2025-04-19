import React from 'react';

export const EgyptSlide: React.FC = () => {
  return (
    <div className="step slide backdrop-blur-xl bg-white/40 rounded-xl border border-white/30 p-10 w-[1200px] shadow-[0_8px_32px_rgba(0,0,0,0.15)]" 
      style={{
        backdropFilter: 'blur(15px)',
        transform: 'perspective(1000px) rotateY(5deg)'
      }}
      data-x="800" data-y="700" data-z="-300" data-rotate="30" data-rotate-y="5" data-scale="1">
      <h2 className="text-4xl text-slate-800 border-b-2 border-blue-400 pb-2 inline-block mb-4 font-light">古埃及与SAS（公元前2700年起）</h2>
      <div className="flex mt-4">
        <div className="w-[45%] text-left pr-5">
          <p className="text-2xl text-gray-600 leading-relaxed mb-3 font-light">古埃及人利用特定的三角形（如3-4-5直角三角形）实际应用了SAS全等原理。</p>
          <p className="text-2xl text-gray-600 leading-relaxed mb-3 font-light">在金字塔建造中，他们使用绳索形成三角形，通过固定两边和一个夹角（SAS原理）来确保四个基础角都是直角。</p>
          <p className="text-2xl text-gray-600 leading-relaxed font-light">这种精确的几何测量确保了金字塔的对称和稳定性，展示了早期SAS原理的实际应用。</p>
        </div>
        <div className="w-[55%] h-[350px] relative overflow-hidden rounded-xl">
          <div className="absolute inset-0 backdrop-blur-sm bg-white/30 border border-white/40 shadow-lg">
            <img 
              src="https://chromaticspiral.wordpress.com/wp-content/uploads/2014/09/rope-stretchers.png" 
              alt="古埃及金字塔" 
              className="w-full h-full object-cover transition-all duration-500 hover:scale-105 hover:rotate-1" 
            />
          </div>
        </div>
      </div>
      <div className="mt-6 bg-blue-50/60 p-4 rounded-lg border border-blue-200/50">
        <h3 className="text-2xl text-blue-800 mb-2 font-light">SAS在金字塔建造中的应用</h3>
        <ul className="list-disc pl-6">
          <li className="text-xl text-gray-700 mb-1">测量工具：绳结三角形技术（Rope Stretchers）</li>
          <li className="text-xl text-gray-700 mb-1">确保基座的直角：利用两边一角构建特定的三角形</li>
          <li className="text-xl text-gray-700">保证四面相等：通过SAS原理确保四个三角形面全等</li>
        </ul>
      </div>
    </div>
  );
}; 