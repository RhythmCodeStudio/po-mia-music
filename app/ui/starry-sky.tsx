"use client";
import React, { useRef, useEffect } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  twinkleSpeed: number;
};

const STAR_COUNT = 180;

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export default function StarrySky() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<Star[]>([]);

  // Resize canvas to fill parent using ResizeObserver
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function resize() {
      if (!canvas) return;
      const parent = canvas.parentElement;
      if (!parent) return;
      const { width, height } = parent.getBoundingClientRect();
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
    }

    resize();

    // Use ResizeObserver for more reliable resizing
    const observer = new window.ResizeObserver(resize);
    if (canvas.parentElement) {
      observer.observe(canvas.parentElement);
    }

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
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
          radius: randomBetween(0.5, 4.2),
          alpha: randomBetween(0.5, 0.1),
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
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}


// "use client";
// import React, { useRef, useEffect } from "react";

// type Star = {
//   x: number;
//   y: number;
//   radius: number;
//   alpha: number;
//   twinkleSpeed: number;
//   translucent: boolean;
// };

// const STAR_COUNT = 240; // More stars

// function randomBetween(a: number, b: number) {
//   return a + Math.random() * (b - a);
// }

// export default function StarrySky() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const stars = useRef<Star[]>([]);

//   // Resize canvas to fill parent
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     function resize() {
//       if (!canvas) return;
//       canvas.width = canvas.offsetWidth * window.devicePixelRatio;
//       canvas.height = canvas.offsetHeight * window.devicePixelRatio;
//     }
//     resize();
//     window.addEventListener("resize", resize);
//     return () => window.removeEventListener("resize", resize);
//   }, []);

//   // Generate stars and animate
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     // Generate stars if not already
//     if (stars.current.length === 0) {
//       for (let i = 0; i < STAR_COUNT; i++) {
//         const isBig = Math.random() < 0.18; // ~18% are big stars
//         stars.current.push({
//           x: Math.random(),
//           y: Math.random(),
//           radius: isBig ? randomBetween(3, 6) : randomBetween(0.5, 2.2),
//           alpha: isBig
//             ? randomBetween(0.15, 0.35)
//             : randomBetween(0.5, 1),
//           twinkleSpeed:
//             randomBetween(0.005, 0.025) * (Math.random() > 0.5 ? 1 : -1),
//           translucent: isBig,
//         });
//       }
//     }

//     let animationId: number;
//     function draw() {
//       if (!canvas || !ctx) return;
//       const w = canvas.width;
//       const h = canvas.height;
//       ctx.clearRect(0, 0, w, h);

//       for (const star of stars.current) {
//         // Flicker
//         star.alpha += star.twinkleSpeed;
//         if (star.translucent) {
//           if (star.alpha > 0.35) {
//             star.alpha = 0.35;
//             star.twinkleSpeed *= -1;
//           }
//           if (star.alpha < 0.12) {
//             star.alpha = 0.12;
//             star.twinkleSpeed *= -1;
//           }
//         } else {
//           if (star.alpha > 1) {
//             star.alpha = 1;
//             star.twinkleSpeed *= -1;
//           }
//           if (star.alpha < 0.3) {
//             star.alpha = 0.3;
//             star.twinkleSpeed *= -1;
//           }
//         }

//         ctx.save();
//         ctx.globalAlpha = star.alpha;
//         ctx.beginPath();
//         ctx.arc(
//           star.x * w,
//           star.y * h,
//           star.radius * window.devicePixelRatio,
//           0,
//           2 * Math.PI
//         );
//         ctx.fillStyle = "white";
//         ctx.shadowColor = "white";
//         ctx.shadowBlur = star.translucent ? 16 * star.radius : 8 * star.radius;
//         ctx.fill();
//         ctx.restore();
//       }

//       animationId = requestAnimationFrame(draw);
//     }

//     draw();
//     return () => cancelAnimationFrame(animationId);
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute inset-0 w-full h-full pointer-events-none"
//       style={{ zIndex: 0 }}
//       aria-hidden="true"
//     />
//   );
// }


// "use client";
// import React, { useRef, useEffect } from "react";

// type Star = {
//   x: number;
//   y: number;
//   radius: number;
//   alpha: number;
//   twinkleSpeed: number;
//   translucent: boolean;
// };

// const STAR_COUNT = 240; // More stars

// function randomBetween(a: number, b: number) {
//   return a + Math.random() * (b - a);
// }

// export default function StarrySky() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const stars = useRef<Star[]>([]);

//   // Resize canvas to fill parent
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     function resize() {
//       if (!canvas) return;
//       canvas.width = canvas.offsetWidth * window.devicePixelRatio;
//       canvas.height = canvas.offsetHeight * window.devicePixelRatio;
//     }
//     resize();
//     window.addEventListener("resize", resize);
//     return () => window.removeEventListener("resize", resize);
//   }, []);

//   // Generate stars and animate
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     // Generate stars if not already
//     if (stars.current.length === 0) {
//       for (let i = 0; i < STAR_COUNT; i++) {
//         const isBig = Math.random() < 0.18; // ~18% are big stars
//         const isTranslucent = Math.random() < 0.25; // ~25% are translucent
//         stars.current.push({
//           x: Math.random(),
//           y: Math.random(),
//           radius: isBig ? randomBetween(3, 6) : randomBetween(0.5, 2.2),
//           alpha: isTranslucent
//             ? randomBetween(0.15, 0.35)
//             : randomBetween(0.7, 1), // More opaque stars
//           twinkleSpeed:
//             randomBetween(0.001, 0.008) * (Math.random() > 0.5 ? 1 : -1), // Slower sparkle
//           translucent: isTranslucent,
//         });
//       }
//     }

//     let animationId: number;
//     function draw() {
//       if (!canvas || !ctx) return;
//       const w = canvas.width;
//       const h = canvas.height;
//       ctx.clearRect(0, 0, w, h);

//       for (const star of stars.current) {
//         // Flicker
//         star.alpha += star.twinkleSpeed;
//         if (star.translucent) {
//           if (star.alpha > 0.35) {
//             star.alpha = 0.35;
//             star.twinkleSpeed *= -1;
//           }
//           if (star.alpha < 0.12) {
//             star.alpha = 0.12;
//             star.twinkleSpeed *= -1;
//           }
//         } else {
//           if (star.alpha > 1) {
//             star.alpha = 1;
//             star.twinkleSpeed *= -1;
//           }
//           if (star.alpha < 0.7) {
//             star.alpha = 0.7;
//             star.twinkleSpeed *= -1;
//           }
//         }

//         ctx.save();
//         ctx.globalAlpha = star.alpha;
//         ctx.beginPath();
//         ctx.arc(
//           star.x * w,
//           star.y * h,
//           star.radius * window.devicePixelRatio,
//           0,
//           2 * Math.PI
//         );
//         ctx.fillStyle = "white";
//         ctx.shadowColor = "white";
//         ctx.shadowBlur = star.translucent ? 16 * star.radius : 8 * star.radius;
//         ctx.fill();
//         ctx.restore();
//       }

//       animationId = requestAnimationFrame(draw);
//     }

//     draw();
//     return () => cancelAnimationFrame(animationId);
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute inset-0 w-full h-full pointer-events-none"
//       style={{ zIndex: 0 }}
//       aria-hidden="true"
//     />
//   );
// }