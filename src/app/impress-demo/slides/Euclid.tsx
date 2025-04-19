import React, { useState, useRef, useEffect } from 'react';

export const EuclidSlide: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Autoplay the video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(e => {
        console.warn("Autoplay failed:", e);
      });
      setIsPlaying(true);
    }
  }, []);

  const handleVideoClick = () => {
    if (videoRef.current) {
      // Toggle play/pause
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="step slide backdrop-blur-xl bg-white/40 rounded-xl border border-white/30 p-10 w-[1200px] shadow-[0_8px_32px_rgba(0,0,0,0.15)]" 
      style={{
        backdropFilter: 'blur(15px)',
        transform: 'perspective(1000px) rotateY(-5deg)'
      }}
      data-x="-800" data-y="700" data-z="-300" data-rotate="150" data-rotate-y="-10" data-scale="1">
      <h2 className="text-4xl text-slate-800 border-b-2 border-blue-400 pb-2 inline-block mb-4 font-light">欧几里得（公元前325-265年）</h2>
      <div className="flex mt-4">
        <div className="w-[45%] text-left pr-5">
          <p className="text-2xl text-gray-600 leading-relaxed mb-3 font-light">在《几何原本》中首次正式提出并证明了SAS全等定理（第一卷第四命题）。</p>
          <p className="text-2xl text-gray-600 leading-relaxed mb-3 font-light">建立了完整的公理化几何体系，奠定了现代几何学基础。</p>
          <p className="text-2xl text-gray-600 leading-relaxed font-light">《几何原本》被翻译成数十种语言，是除《圣经》外影响最深远的书籍之一。</p>
        </div>
        <div className="w-[55%] flex items-center justify-center">
          <div className="relative w-full aspect-[3/4] max-h-[600px] rounded-xl overflow-hidden">
            <div className="absolute inset-0 backdrop-blur-sm bg-white/30 border border-white/40 shadow-lg cursor-pointer" onClick={handleVideoClick}>
              <video 
                ref={videoRef}
                src="/materials/2025-04-19 17_09_07.mp4" 
                className="w-full h-full object-contain"
                poster="https://p0.itc.cn/q_70/images03/20210604/a6d9d094359f4c1c889da93cae09594d.png"
                loop
                autoPlay
                playsInline
              />
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/70 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] border-l-blue-600 ml-1"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-blue-50/60 p-4 rounded-lg border border-blue-200/50">
        <h3 className="text-2xl text-blue-800 mb-2 font-light">欧几里得的SAS全等公理</h3>
        <ul className="list-disc pl-6">
          <li className="text-xl text-gray-700 mb-1">如果两个三角形有两边相等，且这两边的夹角相等，则这两个三角形全等</li>
          <li className="text-xl text-gray-700 mb-1">记作：边-角-边（SAS）全等</li>
          <li className="text-xl text-gray-700">这一定理成为了几何学中最基本的公理之一</li>
        </ul>
      </div>
    </div>
  );
}; 