import React from 'react';

export const ModernApplicationsSlide: React.FC = () => {
  return (
    <div className="step slide backdrop-blur-xl bg-white/40 rounded-xl border border-white/30 p-10 w-[1200px] shadow-[0_8px_32px_rgba(0,0,0,0.15)]" 
      style={{
        backdropFilter: 'blur(15px)',
        transform: 'perspective(1000px) rotateY(-5deg)'
      }}
      data-x="-3000" data-y="0" data-rotate="0" data-z="-1200" data-scale="1">
      <h2 className="text-4xl text-slate-800 border-b-2 border-blue-400 pb-2 inline-block mb-4 font-light">现代应用（彩蛋）</h2>
      <div className="flex mt-4">
        <div className="w-[45%] text-left pr-5">
          <p className="text-2xl text-gray-600 leading-relaxed mb-3 font-light">SAS原理在现代有广泛应用：</p>
          <ul className="text-xl text-gray-600 leading-relaxed list-disc pl-6 font-light">
            <li className="mb-2">GPS定位系统中的三角测量</li>
            <li className="mb-2">建筑结构的稳定性分析</li>
            <li className="mb-2">计算机图形学中的3D建模</li>
            <li>机器人运动学中的位置确定</li>
          </ul>
        </div>
        <div className="w-[55%] h-[350px] relative overflow-hidden rounded-xl">
          <div className="absolute inset-0 backdrop-blur-sm bg-white/30 border border-white/40 shadow-lg flex items-center justify-center">
            <div className="flex justify-around items-center w-full h-full">
              <div className="w-[120px] h-[120px] bg-blue-500/70 backdrop-blur-sm rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.2)] flex items-center justify-center text-white font-light border border-blue-300/50 relative transform hover:scale-110 transition-all duration-500" style={{ transform: 'translateZ(20px)' }}>
                GPS
              </div>
              <div className="w-[120px] h-[120px] bg-red-500/70 backdrop-blur-sm rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.2)] flex items-center justify-center text-white font-light border border-red-300/50 relative transform hover:scale-110 transition-all duration-500" style={{ transform: 'translateZ(40px)' }}>
                建筑
              </div>
              <div className="w-[120px] h-[120px] bg-green-500/70 backdrop-blur-sm rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.2)] flex items-center justify-center text-white font-light border border-green-300/50 relative transform hover:scale-110 transition-all duration-500" style={{ transform: 'translateZ(60px)' }}>
                3D
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 