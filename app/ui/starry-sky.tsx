"use client";
import React, { useRef, useEffect } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  twinkleSpeed: number;
};

const STAR_COUNT = 120;

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export default function StarrySky() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<Star[]>([]);

  // Resize canvas to fill parent
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    }
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Generate stars and animate
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Generate stars if not already
    if (stars.current.length === 0) {
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.current.push({
          x: Math.random(),
          y: Math.random(),
          radius: randomBetween(0.5, 2.2),
          alpha: randomBetween(0.5, 1),
          twinkleSpeed:
            randomBetween(0.005, 0.025) * (Math.random() > 0.5 ? 1 : -1),
        });
      }
    }

    let animationId: number;
    function draw() {
      if (!canvas || !ctx) return;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      for (const star of stars.current) {
        // Flicker
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 1) {
          star.alpha = 1;
          star.twinkleSpeed *= -1;
        }
        if (star.alpha < 0.3) {
          star.alpha = 0.3;
          star.twinkleSpeed *= -1;
        }

        ctx.save();
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(
          star.x * w,
          star.y * h,
          star.radius * window.devicePixelRatio,
          0,
          2 * Math.PI
        );
        ctx.fillStyle = "white";
        ctx.shadowColor = "white";
        ctx.shadowBlur = 8 * star.radius;
        ctx.fill();
        ctx.restore();
      }

      animationId = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
