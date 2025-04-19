import React from 'react';

export const HilbertSlide: React.FC = () => {
  return (
    <div className="step slide backdrop-blur-xl bg-white/40 rounded-xl border border-white/30 p-10 w-[1200px] shadow-[0_8px_32px_rgba(0,0,0,0.15)]" 
      style={{
        backdropFilter: 'blur(15px)',
        transform: 'perspective(1000px) rotateY(5deg)'
      }}
      data-x="-1200" data-y="0" data-z="-200" data-rotate="180" data-rotate-y="15" data-scale="1">
      <h2 className="text-4xl text-slate-800 border-b-2 border-blue-400 pb-2 inline-block mb-4 font-light">希尔伯特（1862-1943）</h2>
      <div className="flex mt-4">
        <div className="w-[45%] text-left pr-5">
          <p className="text-2xl text-gray-600 leading-relaxed mb-3 font-light">在《几何基础》中重新构建了欧几里得公理系统，使SAS等定理在现代数学基础上更加严谨。</p>
          <p className="text-2xl text-gray-600 leading-relaxed mb-3 font-light">对传统几何学进行公理化的重新诠释。</p>
          <p className="text-2xl text-gray-600 leading-relaxed font-light">希尔伯特的工作是现代几何公理系统的基础，也是现代数学逻辑发展的里程碑。</p>
        </div>
        <div className="w-[55%] h-[350px] relative overflow-hidden rounded-xl">
          <div className="absolute inset-0 backdrop-blur-sm bg-white/30 border border-white/40 shadow-lg">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9S_TUnZtSn5LOdSEyLQamS739RyCZWzKifA&s" 
              alt="大卫·希尔伯特" 
              className="w-full h-full object-cover transition-all duration-500 hover:scale-105 hover:rotate-1" 
            />
          </div>
        </div>
      </div>
      <div className="mt-6 bg-blue-50/60 p-4 rounded-lg border border-blue-200/50">
        <h3 className="text-2xl text-blue-800 mb-2 font-light">希尔伯特对SAS全等原理的贡献</h3>
        <ul className="list-disc pl-6">
          <li className="text-xl text-gray-700 mb-1">公理化处理：将SAS从定理提升为几何系统的公理之一</li>
          <li className="text-xl text-gray-700 mb-1">数学严谨性：消除了直觉和视觉依赖，建立在纯逻辑基础上</li>
          <li className="text-xl text-gray-700">应用扩展：SAS原理在希尔伯特体系中成为证明其他定理的关键工具</li>
        </ul>
      </div>
    </div>
  );
}; 