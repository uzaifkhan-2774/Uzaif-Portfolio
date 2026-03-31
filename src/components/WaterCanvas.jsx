import { useEffect, useRef } from 'react';

export default function WaterCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext('2d');
    let W, H, drops = [], ripples = [];
    let animId;

    function resize() {
      W = c.width = window.innerWidth;
      H = c.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Drop {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W;
        this.y = -10;
        this.r = Math.random() * 1.2 + 0.4;
        this.speed = Math.random() * 1.8 + 0.6;
        this.op = Math.random() * 0.35 + 0.08;
        this.life = 0;
        this.maxLife = Math.random() * 120 + 60;
      }
      update() {
        this.y += this.speed;
        this.life++;
        if (this.y > H || this.life > this.maxLife) this.reset();
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.op * (1 - this.life / this.maxLife);
        ctx.fillStyle = '#00ffe0';
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.r * 0.6, this.r * 1.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    class Ripple {
      constructor(x, y) {
        this.x = x; this.y = y;
        this.r = 0;
        this.max = 60 + Math.random() * 70;
        this.op = 0.4;
        this.spd = 1.2 + Math.random();
      }
      update() { this.r += this.spd; this.op -= 0.007; }
      draw() {
        if (this.op <= 0) return;
        ctx.save();
        ctx.globalAlpha = this.op;
        ctx.strokeStyle = '#00ffe0';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.r, this.r * 0.3, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
      done() { return this.op <= 0; }
    }

    for (let i = 0; i < 70; i++) {
      const d = new Drop();
      d.y = Math.random() * H;
      drops.push(d);
    }

    let rippleTimer;
    function spawnR() {
      ripples.push(new Ripple(Math.random() * W, Math.random() * H * 0.7 + H * 0.1));
      rippleTimer = setTimeout(spawnR, 500 + Math.random() * 1000);
    }
    spawnR();

    function loop() {
      ctx.clearRect(0, 0, W, H);
      drops.forEach(d => { d.update(); d.draw(); });
      ripples = ripples.filter(r => !r.done());
      ripples.forEach(r => { r.update(); r.draw(); });
      animId = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
      clearTimeout(rippleTimer);
    };
  }, []);

  return <canvas id="wc" ref={canvasRef} />;
}
