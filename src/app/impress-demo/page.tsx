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

// BlurredSpheres component for background animation
const BlurredSpheres = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Make canvas fullscreen
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    // Create spheres
    const spheres: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      pulse: number;
      pulseSpeed: number;
    }[] = [];
    
    // Define vibrant color palettes
    const colorPalettes = [
      [`hsl(210, 100%, 65%)`, `hsl(220, 100%, 65%)`, `hsl(230, 100%, 70%)`], // Vibrant Blues
      [`hsl(260, 100%, 70%)`, `hsl(270, 100%, 65%)`, `hsl(280, 100%, 70%)`], // Vibrant Purples
      [`hsl(190, 100%, 65%)`, `hsl(200, 100%, 65%)`, `hsl(180, 100%, 70%)`], // Vibrant Teals
    ];
    
    // Create larger, slower moving spheres
    for (let i = 0; i < 10; i++) {
      // Choose a random palette and color from that palette
      const palette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
      const color = palette[Math.floor(Math.random() * palette.length)];
      
      // Even larger sizes
      const size = Math.random() * 400 + 300;
      
      // Very slow speeds
      const speed = (Math.random() - 0.5) * 0.3;
      
      spheres.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: size,
        speedX: speed,
        speedY: speed * (Math.random() > 0.5 ? 1 : -1),
        color: color,
        opacity: Math.random() * 0.25 + 0.15, // Lighter opacity
        pulse: 0,
        pulseSpeed: Math.random() * 0.01 + 0.003
      });
    }
    
    // Animation loop
    const animate = () => {
      // Clear the canvas completely instead of creating trails
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw spheres
      spheres.forEach(sphere => {
        // Update pulse (creates a breathing effect)
        sphere.pulse += sphere.pulseSpeed;
        const pulseFactor = 1 + Math.sin(sphere.pulse) * 0.1;
        
        // Move sphere very slowly
        sphere.x += sphere.speedX;
        sphere.y += sphere.speedY;
        
        // Wrap around edges
        if (sphere.x < -sphere.size) sphere.x = canvas.width + sphere.size;
        if (sphere.x > canvas.width + sphere.size) sphere.x = -sphere.size;
        if (sphere.y < -sphere.size) sphere.y = canvas.height + sphere.size;
        if (sphere.y > canvas.height + sphere.size) sphere.y = -sphere.size;
        
        // Draw sphere with glow effect
        const currentSize = sphere.size * pulseFactor;
        
        // First draw glow
        const glowGradient = ctx.createRadialGradient(
          sphere.x, 
          sphere.y, 
          0, 
          sphere.x, 
          sphere.y, 
          currentSize * 1.5
        );
        
        glowGradient.addColorStop(0, `${sphere.color.replace(')', ', 0.1)')}`); // Lighter glow
        glowGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.globalAlpha = sphere.opacity * 0.7;
        ctx.beginPath();
        ctx.arc(sphere.x, sphere.y, currentSize * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();
        
        // Then draw main sphere
        const gradient = ctx.createRadialGradient(
          sphere.x, 
          sphere.y, 
          0, 
          sphere.x, 
          sphere.y, 
          currentSize
        );
        
        gradient.addColorStop(0, `${sphere.color}`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.globalAlpha = sphere.opacity;
        ctx.beginPath();
        ctx.arc(sphere.x, sphere.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

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
    <div className="w-full h-screen overflow-hidden bg-gradient-radial from-blue-50 via-white to-purple-50">
      {/* Background animated spheres */}
      <BlurredSpheres />
      
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
          perspective: 1000px;
        }
        
        .step:not(.active) {
          opacity: 0.2;
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