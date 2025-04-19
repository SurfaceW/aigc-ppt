import { useEffect, useRef } from 'react';

interface BlurredSpheresProps {
  /** Number of spheres to render (default: 10) */
  numSpheres?: number;
  /** Base size multiplier for spheres (default: 1) */
  sizeMultiplier?: number;
  /** Speed multiplier for animation (default: 1) */
  speedMultiplier?: number;
  /** Z-index for the canvas element (default: -10) */
  zIndex?: number;
  /** Custom color palettes */
  colorPalettes?: string[][];
}

// BlurredSpheres component for background animation
const BlurredSpheres = ({
  numSpheres = 10,
  sizeMultiplier = 1,
  speedMultiplier = 1,
  zIndex = -10,
  colorPalettes,
}: BlurredSpheresProps = {}) => {
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
    
    // Define vibrant color palettes if not provided
    const defaultColorPalettes = [
      [`hsl(210, 100%, 65%)`, `hsl(220, 100%, 65%)`, `hsl(230, 100%, 70%)`], // Vibrant Blues
      [`hsl(260, 100%, 70%)`, `hsl(270, 100%, 65%)`, `hsl(280, 100%, 70%)`], // Vibrant Purples
      [`hsl(190, 100%, 65%)`, `hsl(200, 100%, 65%)`, `hsl(180, 100%, 70%)`], // Vibrant Teals
    ];
    
    const activePalettes = colorPalettes || defaultColorPalettes;
    
    // Create larger, slower moving spheres
    for (let i = 0; i < numSpheres; i++) {
      // Choose a random palette and color from that palette
      const palette = activePalettes[Math.floor(Math.random() * activePalettes.length)];
      const color = palette[Math.floor(Math.random() * palette.length)];
      
      // Even larger sizes, adjusted by the multiplier
      const size = (Math.random() * 400 + 300) * sizeMultiplier;
      
      // Very slow speeds, adjusted by the multiplier
      const speed = (Math.random() - 0.5) * 0.3 * speedMultiplier;
      
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
  }, [numSpheres, sizeMultiplier, speedMultiplier, colorPalettes]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed top-0 left-0 w-full h-full`}
      style={{ zIndex }}
    />
  );
};

export default BlurredSpheres; 