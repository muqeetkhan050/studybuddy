import React, { useState, useEffect, useRef } from 'react';
import { Rocket, Sparkles } from 'lucide-react';

const AustraliaMap = () => {
  const [hoveredState, setHoveredState] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw subtle grid
    ctx.strokeStyle = 'rgba(52, 211, 153, 0.03)';
    ctx.lineWidth = 1;
    for (let i = 0; i < width; i += 50) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, height);
      ctx.stroke();
    }
    for (let i = 0; i < height; i += 50) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(width, i);
      ctx.stroke();
    }

    // Draw some random dots for stars effect
    ctx.fillStyle = 'rgba(52, 211, 153, 0.1)';
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const radius = Math.random() * 1.5;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }, []);

  // Load and display the map image
  const mapImageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Australia_location_map_blank.svg/1200px-Australia_location_map_blank.svg.png";

  return (
    <div className="relative w-full h-screen bg-gray-950 overflow-hidden">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full"
      />

      {/* Australia Map Image with boundaries only */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <img 
          src={mapImageUrl}
          alt="Australia Map"
          className="max-w-4xl w-full h-auto"
          style={{
            filter: 'invert(1) brightness(0.3) sepia(1) hue-rotate(120deg) saturate(3)',
            mixBlendMode: 'screen'
          }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-16 opacity-90">
          <Rocket className="w-8 h-8 text-teal-400" />
          <h1 className="text-xl font-bold text-white tracking-wide">
            Aussie Startups
          </h1>
        </div>

        {/* Main Heading */}
        <div className="max-w-5xl">
          <h2 className="text-7xl font-bold text-white mb-4 leading-tight">
            Discover Australia's
          </h2>
          <h2 className="text-7xl font-bold bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-500 bg-clip-text text-transparent mb-8">
            Startup Ecosystem
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Zoom into Brisbane to explore the thriving tech hub with innovative startups
            shaping the future
          </p>
        </div>

        {/* CTA Button */}
        <button className="mt-16 px-8 py-4 bg-teal-400 hover:bg-teal-300 text-gray-900 font-semibold rounded-lg shadow-lg hover:shadow-teal-400/50 transition-all duration-300 flex items-center gap-2 group">
          <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          Explore Brisbane
        </button>

        {/* Interactive Map Label */}
        <div className="absolute top-8 right-8 flex items-center gap-2 text-teal-400 opacity-70">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Interactive Map</span>
        </div>
      </div>

      {/* Decorative ambient lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
    </div>
  );
};

export default AustraliaMap;