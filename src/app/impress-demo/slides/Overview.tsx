import React from 'react';

export const OverviewSlide: React.FC = () => {
  return (
    <div className="step" 
      style={{
        backdropFilter: 'blur(15px)',
      }}
      data-x="0" data-y="0" data-z="-1500" data-rotate-x="20" data-scale="5">
      <h1 className="text-[100px] w-[100vw] text-center text-blue-500/90 drop-shadow-xl font-light py-8 inline-block">SAS的历史全貌</h1>
    </div>
  );
}; 