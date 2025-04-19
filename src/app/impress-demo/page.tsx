'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import {
  TitleSlide,
  IntroductionSlide,
  EgyptSlide,
  BabylonSlide,
  ThalesSlide,
  EuclidSlide,
  HilbertSlide,
  ModernApplicationsSlide,
  OverviewSlide
} from './slides';
import { ImpressStyles } from './styles';

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
    <div className="impress-demo">
      <Script 
        src="https://unpkg.com/impress.js@1.1.0/js/impress.js"
        onLoad={handleScriptLoad}
        strategy="afterInteractive"
      />
      
      <div id="impress">
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

      <ImpressStyles />
    </div>
  );
} 