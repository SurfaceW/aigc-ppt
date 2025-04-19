'use client';

import "@radix-ui/themes/styles.css";
import Script from 'next/script';
import { useEffect, useRef } from 'react';
import BlurredSpheres from '@/components/BlurredSpheres';
import {
  EgyptSlide,
  EuclidSlide,
  HilbertSlide,
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
    
    // Handle keyboard navigation for accessibility
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'Space':
        case 'PageDown':
          // Navigate to next slide
          break;
        case 'ArrowLeft':
        case 'PageUp':
          // Navigate to previous slide
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleScriptLoad = () => {
    initImpress();
  };

  return (
    <div className="w-full h-screen overflow-hidden bg-gradient-radial from-blue-50 via-white to-purple-50">
      {/* Customized background spheres */}
      <BlurredSpheres 
        numSpheres={8} 
        sizeMultiplier={1.2} 
        speedMultiplier={0.8} 
        zIndex={-10}
      />
      
      <Script 
        src="https://unpkg.com/impress.js@1.1.0/js/impress.js"
        onLoad={handleScriptLoad}
        strategy="afterInteractive"
      />
      
      <div id="impress" className="w-full h-full">
        {/* Center point - Title Slide */}
        <TitleSlide />
        
        {/* Historical sequence - arranged in a circular pattern */}
        <EgyptSlide />
        <ThalesSlide />
        <EuclidSlide />
        <HilbertSlide />
      
        
        {/* Overview - zoomed out to show the full picture */}
        <OverviewSlide />
      </div>

      {/* Global styles for impress steps */}
      <style jsx global>{`
        body {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          margin: 0;
          padding: 0;
          overflow: hidden;
          perspective: 1000px;
        }
        
        .step:not(.active) {
          opacity: 0.1;
          transition: opacity 0.8s, transform 0.5s;
          transform: scale(0.95);
        }

        .step.active {
          transition: opacity 0.8s, transform 0.5s;
          transform: scale(1);
        }

        .bg-gradient-radial {
          background-color: rgba(255, 255, 255, 0.7);
          background-image: 
            radial-gradient(circle at center, rgba(239, 246, 255, 0.7) 0%, rgba(255, 255, 255, 0.8) 70%),
            linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
          background-size: 100% 100%, 20px 20px, 20px 20px;
          backdrop-filter: blur(10px);
        }

        .slide {
          transition: all 0.5s ease;
          background-color: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
        }

        .slide:hover {
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
} 