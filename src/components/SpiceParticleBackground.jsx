import React, { useRef, useEffect } from 'react';

export const SpiceParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Respect prefers-reduced-motion media query
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles = [];
    const particleCount = Math.min(40, Math.floor(width / 35));
    
    // Warm spice color theme
    const colors = [
      'rgba(232, 138, 26, 0.45)',  // Saffron Orange
      'rgba(217, 165, 20, 0.45)',  // Turmeric Gold
      'rgba(100, 139, 74, 0.45)',  // Cardamom Green
      'rgba(183, 55, 45, 0.35)',   // Chilli Red
      'rgba(58, 36, 24, 0.2)'      // Cocoa Brown
    ];

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 4 + 1.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = -Math.random() * 0.5 - 0.1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.angle = Math.random() * Math.PI * 2;
        this.spinSpeed = (Math.random() - 0.5) * 0.01;
        this.shape = Math.random() > 0.5 ? 'oval' : 'circle'; // Spice grain vs powder particle
      }

      update(mouseX, mouseY) {
        this.x += this.speedX;
        this.y += this.speedY;
        this.angle += this.spinSpeed;

        // Interaction with cursor
        if (mouseX !== undefined && mouseY !== undefined) {
          const dx = this.x - mouseX;
          const dy = this.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 100) {
            const force = (100 - dist) / 100;
            const angle = Math.atan2(dy, dx);
            this.x += Math.cos(angle) * force * 1.5;
            this.y += Math.sin(angle) * force * 1.5;
          }
        }

        // Loop boundaries
        if (this.y < -10) {
          this.y = height + 10;
          this.x = Math.random() * width;
        }
        if (this.x < -10 || this.x > width + 10) {
          this.speedX *= -1;
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = this.color;
        
        ctx.beginPath();
        if (this.shape === 'oval') {
          // Drawing oval like cumin seed
          ctx.ellipse(0, 0, this.size * 1.8, this.size * 0.8, 0, 0, Math.PI * 2);
        } else {
          ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        }
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let mouseX, mouseY;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = undefined;
      mouseY = undefined;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(mouseX, mouseY);
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-10" 
      style={{ mixBlendMode: 'multiply' }}
    />
  );
};

export default SpiceParticleBackground;
