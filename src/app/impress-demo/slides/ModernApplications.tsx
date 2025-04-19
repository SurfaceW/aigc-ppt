import React from 'react';

export const ModernApplicationsSlide: React.FC = () => {
  return (
    <div className="step slide backdrop-blur-md bg-white/50 rounded-xl border border-white/20 p-10 w-[1200px] text-center shadow-[0_8px_32px_rgba(0,0,0,0.1)]" 
      style={{backdropFilter: 'blur(10px)'}}
      data-x="-3000" data-y="0" data-rotate="0" data-z="-1000" data-scale="1">
      <h2 className="text-4xl text-slate-800 border-b-2 border-blue-400 pb-2.5 inline-block mb-8 font-light">现代应用（彩蛋）</h2>
      <div className="flex justify-between mt-8">
        <div className="flex-1 text-left pr-5">
          <p className="text-2xl text-gray-600 leading-relaxed mb-4 font-light">SAS原理在现代有广泛应用：</p>
          <ul className="text-xl text-gray-600 leading-relaxed list-disc pl-6 font-light">
            <li className="mb-2">GPS定位系统中的三角测量</li>
            <li className="mb-2">建筑结构的稳定性分析</li>
            <li className="mb-2">计算机图形学中的3D建模</li>
            <li>机器人运动学中的位置确定</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-between items-center">
          <div className="w-[100px] h-[100px] bg-blue-500/70 backdrop-blur-sm rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex items-center justify-center text-white font-light border border-blue-300/30 relative">
            GPS
          </div>
          <div className="w-[100px] h-[100px] bg-red-500/70 backdrop-blur-sm rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex items-center justify-center text-white font-light border border-red-300/30 relative">
            建筑
          </div>
          <div className="w-[100px] h-[100px] bg-green-500/70 backdrop-blur-sm rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex items-center justify-center text-white font-light border border-green-300/30 relative">
            3D
          </div>
        </div>
      </div>
    </div>
  );
}; 