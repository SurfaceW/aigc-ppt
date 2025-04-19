'use client';

import "@radix-ui/themes/styles.css";
import Script from 'next/script';
import { useEffect, useRef } from 'react';
import {
  BabylonSlide,
  EgyptSlide,
  EuclidSlide,
  HilbertSlide,
  IntroductionSlide,
  ModernApplicationsSlide,
  OverviewSlide,
  ThalesSlide,
  TitleSlide
} from './slides';

interface ImpressAPI {
  init: () => void;
  [key: string]: unknown;
}

declare global {
  interface Window {
    impress: () => ImpressAPI;
  }
}

export default function ImpressDemo() {
  const initialized = useRef(false);

  const initImpress = () => {
    if (typeof window !== 'undefined' && window.impress && !initialized.current) {
      try {
        const impressAPI = window.impress();
        impressAPI.init();
        initialized.current = true;
      } catch (error) {
        console.error('Failed to initialize impress.js:', error);
      }
    }
  };

  useEffect(() => {
    // Try to initialize if the script was already loaded
    initImpress();
  }, []);

  const handleScriptLoad = () => {
    initImpress();
  };

  return (
    <div className="w-full h-screen overflow-hidden bg-grid-pattern">
      <Script 
        src="https://unpkg.com/impress.js@1.1.0/js/impress.js"
        onLoad={handleScriptLoad}
        strategy="afterInteractive"
      />
      
      <div id="impress" className="w-full h-full">
        {/* All slides are now imported as components */}
        <TitleSlide />
        <IntroductionSlide />
        <EgyptSlide />
        <BabylonSlide />
        <ThalesSlide />
        <EuclidSlide />
        <HilbertSlide />
        <ModernApplicationsSlide />
        <OverviewSlide />
      </div>

      {/* Global styles for impress steps */}
      <style jsx global>{`
        body {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
        
        .step:not(.active) {
          opacity: 0.3;
          transition: opacity 0.5s;
        }

        .bg-grid-pattern {
          background-color: rgba(255, 255, 255, 0.9);
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
          backdrop-filter: blur(5px);
        }
      `}</style>
    </div>
  );
} 