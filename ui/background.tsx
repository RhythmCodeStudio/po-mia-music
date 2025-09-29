// write a react compound that renders a background of sparkling rainbow stars
// import React from 'react';

// const Star = ({ size, color, style }: { size: number; color: string; style: React.CSSProperties }) => (
//   <div
//     style={{
//       width: size,
//       height: size,
//       backgroundColor: color,
//       borderRadius: '50%',
//       boxShadow: `0 0 ${size / 2}px ${color}`,
//       position: 'absolute',
//       ...style,
//     }}
//   />
// );

// const Background = () => {
//   const stars = Array.from({ length: 100 }).map((_, i) => (
//     <Star
//       key={i}
//       size={Math.random() * 5 + 2}
//       color={`hsl(${Math.random() * 360}, 100%, 50%)`}
//       style={{
//         top: `${Math.random() * 100}vh`,
//         left: `${Math.random() * 100}vw`,
//         animation: `sparkle ${Math.random() * 2 + 1}s infinite`,
//       }}
//     />
//   ));

//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100vw',
//         height: '100vh',
//         overflow: 'hidden',
//         pointerEvents: 'none',
//         zIndex: 0,
//       }}
//     >
//       {stars}
//     </div>
//   );
// };

// export default Background;


// import React from 'react';

// // Helper to generate a color spectrum (rainbow) band
// const SPECTRUM_COLORS = [
//   '#FF0000', // Red
//   '#FF7F00', // Orange
//   '#FFFF00', // Yellow
//   '#00FF00', // Green
//   '#0000FF', // Blue
//   '#4B0082', // Indigo
//   '#8B00FF', // Violet
// ];

// const BAND_COUNT = SPECTRUM_COLORS.length;
// const STARS_PER_BAND = 64;
// const DIAGONAL_ANGLE = 120; // degrees, for the diagonal lines

// // Star component
// const Star = ({
//   size,
//   color,
//   left,
//   top,
//   isBig,
// }: {
//   size: number;
//   color: string;
//   left: string;
//   top: string;
//   isBig?: boolean;
// }) => (
//   <div
//     style={{
//       position: 'absolute',
//       left,
//       top,
//       width: size,
//       height: size,
//       borderRadius: '50%',
//       background: isBig
//         ? `radial-gradient(circle at 50% 50%, #fff 0%, ${color} 60%, transparent 100%)`
//         : color,
//       boxShadow: isBig
//         ? `0 0 ${size * 2}px 2px #fff, 0 0 ${size * 4}px 0px ${color}`
//         : `0 0 ${size / 2}px ${color}`,
//       opacity: 0.85,
//       animation: `sparkle ${Math.random() * 2 + 1}s infinite`,
//       pointerEvents: 'none',
//     }}
//   />
// );

// const Background = () => {
//   const stars: React.ReactNode[] = [];

//   // For each band (color), create a diagonal line of stars
//   for (let band = 0; band < BAND_COUNT; band++) {
//     const color = SPECTRUM_COLORS[band];
//     for (let i = 0; i < STARS_PER_BAND; i++) {
//       // Calculate position along a diagonal
//       // Spread diagonals evenly across the viewport
//       const bandOffset = (band + 0.5) / BAND_COUNT;
//       const x = (i + 0.5) / STARS_PER_BAND; // 0..1
//       // Diagonal: y = x * tan(angle) + bandOffset
//       const angleRad = (DIAGONAL_ANGLE * Math.PI) / 180;
//       const y = x * Math.tan(angleRad) + bandOffset * (1 - Math.tan(angleRad));

//       // Convert to viewport units
//       const left = `${x * 100}%`;
//       const top = `${y * 100}%`;

//       // Randomly make some stars bigger/brighter
//       const isBig = Math.random() < 0.15;
//       const size = isBig ? Math.random() * 12 + 10 : Math.random() * 5 + 2;

//       stars.push(
//         <Star
//           key={`${band}-${i}`}
//           size={size}
//           color={color}
//           left={left}
//           top={top}
//           isBig={isBig}
//         />
//       );
//     }
//   }

//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100vw',
//         height: '100vh',
//         overflow: 'hidden',
//         pointerEvents: 'none',
//         zIndex: 0,
//       }}
//     >
//       {stars}
//     </div>
//   );
// };

// export default Background;


// import React from 'react';

// // Rainbow spectrum colors
// const SPECTRUM_COLORS = [
//   '#FF0000', // Red
//   '#FF7F00', // Orange
//   '#FFFF00', // Yellow
//   '#00FF00', // Green
//   '#0000FF', // Blue
//   '#4B0082', // Indigo
//   '#8B00FF', // Violet
// ];

// const BAND_COUNT = SPECTRUM_COLORS.length;
// const CLUSTERS_PER_BAND = 7;
// const STARS_PER_CLUSTER = 10;

// // Star component
// const Star = ({
//   size,
//   color,
//   left,
//   top,
//   isBig,
// }: {
//   size: number;
//   color: string;
//   left: string;
//   top: string;
//   isBig?: boolean;
// }) => (
//   <div
//     style={{
//       position: 'absolute',
//       left,
//       top,
//       width: size,
//       height: size,
//       borderRadius: '50%',
//       background: isBig
//         ? `radial-gradient(circle at 50% 50%, #fff 0%, ${color} 60%, transparent 100%)`
//         : color,
//       boxShadow: isBig
//         ? `0 0 ${size * 2}px 2px #fff, 0 0 ${size * 4}px 0px ${color}`
//         : `0 0 ${size / 2}px ${color}`,
//       opacity: 0.85,
//       animation: `sparkle ${Math.random() * 2 + 1}s infinite`,
//       pointerEvents: 'none',
//     }}
//   />
// );

// const Background = () => {
//   const stars: React.ReactNode[] = [];

//   // For each band (color), create clusters of stars that form a band
//   for (let band = 0; band < BAND_COUNT; band++) {
//     const color = SPECTRUM_COLORS[band];

//     // Each band is a horizontal band across the screen
//     const bandTopStart = (band / BAND_COUNT) * 80 + 5; // % from top, with padding
//     const bandTopEnd = ((band + 1) / BAND_COUNT) * 80 - 5;

//     for (let cluster = 0; cluster < CLUSTERS_PER_BAND; cluster++) {
//       // Cluster center position
//       const clusterLeft = Math.random() * 80 + 10; // % from left, avoid edges
//       const clusterTop =
//         bandTopStart +
//         Math.random() * (bandTopEnd - bandTopStart); // % from top, within band

//       for (let i = 0; i < STARS_PER_CLUSTER; i++) {
//         // Random offset from cluster center (circular distribution)
//         const angle = Math.random() * 2 * Math.PI;
//         const radius = Math.random() * 4 + 1; // up to 5% spread
//         const left = `${clusterLeft + Math.cos(angle) * radius}%`;
//         const top = `${clusterTop + Math.sin(angle) * radius}%`;

//         // Randomly make some stars bigger/brighter
//         const isBig = Math.random() < 0.18;
//         const size = isBig ? Math.random() * 12 + 10 : Math.random() * 5 + 2;

//         stars.push(
//           <Star
//             key={`${band}-${cluster}-${i}`}
//             size={size}
//             color={color}
//             left={left}
//             top={top}
//             isBig={isBig}
//           />
//         );
//       }
//     }
//   }

//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100vw',
//         height: '100vh',
//         overflow: 'hidden',
//         pointerEvents: 'none',
//         zIndex: 0,
//       }}
//     >
//       {stars}
//     </div>
//   );
// };

// export default Background;


// import React from 'react';

// // Rainbow spectrum colors
// const SPECTRUM_COLORS = [
//   '#FF0000', // Red
//   '#FF7F00', // Orange
//   '#FFFF00', // Yellow
//   '#00FF00', // Green
//   '#0000FF', // Blue
//   '#4B0082', // Indigo
//   '#8B00FF', // Violet
// ];

// const BAND_COUNT = SPECTRUM_COLORS.length * 2;
// const CLUSTERS_PER_BAND = 14;
// const STARS_PER_CLUSTER = 30;
// const DIAGONAL_ANGLE = 120; // degrees, lower = more horizontal, higher = more vertical

// // Star component
// const Star = ({
//   size,
//   color,
//   left,
//   top,
//   isBig,
// }: {
//   size: number;
//   color: string;
//   left: string;
//   top: string;
//   isBig?: boolean;
// }) => (
//   <div
//     style={{
//       position: 'absolute',
//       left,
//       top,
//       width: size,
//       height: size,
//       borderRadius: '50%',
//       background: isBig
//         ? `radial-gradient(circle at 50% 50%, #fff 0%, ${color} 60%, transparent 100%)`
//         : color,
//       boxShadow: isBig
//         ? `0 0 ${size * 2}px 2px #fff, 0 0 ${size * 4}px 0px ${color}`
//         : `0 0 ${size / 2}px ${color}`,
//       opacity: 0.85,
//       animation: `sparkle ${Math.random() * 2 + 1}s infinite`,
//       pointerEvents: 'none',
//     }}
//   />
// );

// const Background = () => {
//   const stars: React.ReactNode[] = [];

//   // For each band (color), create clusters of stars that form a diagonal band
//   for (let band = 0; band < BAND_COUNT; band++) {
//     const color = SPECTRUM_COLORS[band];

//     // Diagonal band: for each cluster, calculate a diagonal center
//     for (let cluster = 0; cluster < CLUSTERS_PER_BAND; cluster++) {
//       // t goes from 0 (left) to 1 (right)
//       const t = (cluster + 0.5) / CLUSTERS_PER_BAND;

//       // Diagonal band center (left, top) in percent
//       // Each band is offset vertically so bands don't overlap
//       const bandOffset = (band + 0.5) / BAND_COUNT;
//       const angleRad = (DIAGONAL_ANGLE * Math.PI) / 180;
//       // Diagonal: y = x * tan(angle) + bandOffset * (1 - tan(angle))
//       const leftCenter = t * 80 + 0; // avoid edges
//       const topCenter =
//         t * Math.tan(angleRad) * 80 +
//         bandOffset * (100 - 20 * Math.tan(angleRad));

//       for (let i = 0; i < STARS_PER_CLUSTER; i++) {
//         // Random offset from cluster center (circular distribution)
//         const angle = Math.random() * 2 * Math.PI;
//         const radius = Math.random() * 4 + 1; // up to 5% spread
//         const left = `${leftCenter + Math.cos(angle) * radius}%`;
//         const top = `${topCenter + Math.sin(angle) * radius}%`;

//         // Randomly make some stars bigger/brighter
//         const isBig = Math.random() < 0.18;
//         const size = isBig ? Math.random() * 12 + 10 : Math.random() * 5 + 2;

//         stars.push(
//           <Star
//             key={`${band}-${cluster}-${i}`}
//             size={size}
//             color={color}
//             left={left}
//             top={top}
//             isBig={isBig}
//           />
//         );
//       }
//     }
//   }

//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100vw',
//         height: '100vh',
//         overflow: 'hidden',
//         pointerEvents: 'none',
//         zIndex: 0,
//       }}
//     >
//       {stars}
//     </div>
//   );
// };

// export default Background;

// import React from 'react';

// // Rainbow spectrum colors
// const SPECTRUM_COLORS = [
//   '#FF0000', // Red
//   '#FF7F00', // Orange
//   '#FFFF00', // Yellow
//   '#00FF00', // Green
//   '#0000FF', // Blue
//   '#4B0082', // Indigo
//   '#8B00FF', // Violet
// ];

// const BAND_COUNT = SPECTRUM_COLORS.length * 2;
// const CLUSTERS_PER_BAND = 14;
// const STARS_PER_CLUSTER = 30;
// const DIAGONAL_ANGLE = 120; // degrees

// const Star = ({
//   size,
//   color,
//   left,
//   top,
//   isBig,
// }: {
//   size: number;
//   color: string;
//   left: string;
//   top: string;
//   isBig?: boolean;
// }) => (
//   <div
//     style={{
//       position: 'absolute',
//       left,
//       top,
//       width: size,
//       height: size,
//       borderRadius: '50%',
//       background: isBig
//         ? `radial-gradient(circle at 50% 50%, #fff 0%, ${color} 60%, transparent 100%)`
//         : color,
//       boxShadow: isBig
//         ? `0 0 ${size * 2}px 2px #fff, 0 0 ${size * 4}px 0px ${color}`
//         : `0 0 ${size / 2}px ${color}`,
//       opacity: 0.85,
//       animation: `sparkle ${Math.random() * 2 + 1}s infinite`,
//       pointerEvents: 'none',
//     }}
//   />
// );

// function getBandStart(bandNorm: number) {
//   // bandNorm: 0 (bottom-left), 1 (top-right)
//   // For 0 <= bandNorm < 0.5, start along left edge (y from 100 to 0, x=0)
//   // For 0.5 <= bandNorm <= 1, start along bottom edge (x from 0 to 100, y=100)
//   if (bandNorm <= 0.5) {
//     return { x: 0, y: 100 - bandNorm * 2 * 100 };
//   } else {
//     return { x: (bandNorm - 0.5) * 2 * 100, y: 0 };
//   }
// }

// function getBandEnd(bandNorm: number) {
//   // For 0 <= bandNorm < 0.5, end along right edge (y from 100 to 0, x=100)
//   // For 0.5 <= bandNorm <= 1, end along top edge (x from 0 to 100, y=0)
//   if (bandNorm <= 0.5) {
//     return { x: 100, y: 100 - bandNorm * 2 * 100 };
//   } else {
//     return { x: (bandNorm - 0.5) * 2 * 100, y: 100 };
//   }
// }

// const Background = () => {
//   const stars: React.ReactNode[] = [];

//   for (let band = 0; band < BAND_COUNT; band++) {
//     const color = SPECTRUM_COLORS[band % SPECTRUM_COLORS.length];
//     const bandNorm = band / (BAND_COUNT - 1);

//     const start = getBandStart(bandNorm);
//     const end = getBandEnd(bandNorm);

//     for (let cluster = 0; cluster < CLUSTERS_PER_BAND; cluster++) {
//       const t = (cluster + 0.5) / CLUSTERS_PER_BAND;
//       const leftCenter = start.x + (end.x - start.x) * t;
//       const topCenter = start.y + (end.y - start.y) * t;

//       for (let i = 0; i < STARS_PER_CLUSTER; i++) {
//         const angle = Math.random() * 2 * Math.PI;
//         const radius = Math.random() * 4 + 1;
//         const left = `${leftCenter + Math.cos(angle) * radius}%`;
//         const top = `${topCenter + Math.sin(angle) * radius}%`;

//         const isBig = Math.random() < 0.18;
//         const size = isBig ? Math.random() * 12 + 10 : Math.random() * 5 + 2;

//         // Only render stars within the viewport
//         if (
//           leftCenter + Math.cos(angle) * radius >= 0 &&
//           leftCenter + Math.cos(angle) * radius <= 100 &&
//           topCenter + Math.sin(angle) * radius >= 0 &&
//           topCenter + Math.sin(angle) * radius <= 100
//         ) {
//           stars.push(
//             <Star
//               key={`${band}-${cluster}-${i}`}
//               size={size}
//               color={color}
//               left={left}
//               top={top}
//               isBig={isBig}
//             />
//           );
//         }
//       }
//     }
//   }

//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100vw',
//         height: '100vh',
//         overflow: 'hidden',
//         pointerEvents: 'none',
//         zIndex: 0,
//       }}
//     >
//       {stars}
//     </div>
//   );
// };

// export default Background;

// import React from 'react';

// // Rainbow spectrum colors
// const SPECTRUM_COLORS = [
//   '#FF0000', // Red
//   '#FF7F00', // Orange
//   '#FFFF00', // Yellow
//   '#00FF00', // Green
//   '#0000FF', // Blue
//   '#4B0082', // Indigo
//   '#8B00FF', // Violet
// ];

// const BAND_COUNT = SPECTRUM_COLORS.length * 4;
// const CLUSTERS_PER_BAND = 14;
// const STARS_PER_CLUSTER = 30;
// const DIAGONAL_ANGLE = 60; // degrees

// const Star = ({
//   size,
//   color,
//   left,
//   top,
//   isBig,
// }: {
//   size: number;
//   color: string;
//   left: string;
//   top: string;
//   isBig?: boolean;
// }) => (
//   <div
//     style={{
//       position: 'absolute',
//       left,
//       top,
//       width: size,
//       height: size,
//       borderRadius: '50%',
//       background: isBig
//         ? `radial-gradient(circle at 50% 50%, #fff 0%, ${color} 60%, transparent 100%)`
//         : color,
//       boxShadow: isBig
//         ? `0 0 ${size * 2}px 2px #fff, 0 0 ${size * 4}px 0px ${color}`
//         : `0 0 ${size / 2}px ${color}`,
//       opacity: 0.85,
//       animation: `sparkle ${Math.random() * 2 + 1}s infinite`,
//       pointerEvents: 'none',
//     }}
//   />
// );

// const Background = () => {
//   const stars: React.ReactNode[] = [];

//   // Diagonal direction vector (normalized)
//   const angleRad = (DIAGONAL_ANGLE * Math.PI) / 180;
//   const dx = Math.cos(angleRad);
//   const dy = -Math.sin(angleRad); // negative to go from bottom-left to top-right

//   // The maximum distance needed to fill the screen diagonally
//   const maxDist = Math.sqrt(100 * 100 + 100 * 100);

//   for (let band = 0; band < BAND_COUNT; band++) {
//     const color = SPECTRUM_COLORS[band % SPECTRUM_COLORS.length];
//     // Evenly space bands along the bottom edge
//     const bandOffset = band / (BAND_COUNT - 1);
//     const baseX = bandOffset * 100;
//     const baseY = 100;

//     for (let cluster = 0; cluster < CLUSTERS_PER_BAND; cluster++) {
//       // Move along the diagonal direction
//       const t = (cluster + 0.5) / CLUSTERS_PER_BAND;
//       // Scale t so the bands fill the viewport
//       const leftCenter = baseX + t * dx * maxDist;
//       const topCenter = baseY + t * dy * maxDist;

//       for (let i = 0; i < STARS_PER_CLUSTER; i++) {
//         const angle = Math.random() * 2 * Math.PI;
//         const radius = Math.random() * 4 + 1;
//         const left = `${leftCenter + Math.cos(angle) * radius}%`;
//         const top = `${topCenter + Math.sin(angle) * radius}%`;

//         const isBig = Math.random() < 0.18;
//         const size = isBig ? Math.random() * 12 + 10 : Math.random() * 5 + 2;

//         // Only render stars within the viewport
//         if (
//           leftCenter + Math.cos(angle) * radius >= 0 &&
//           leftCenter + Math.cos(angle) * radius <= 100 &&
//           topCenter + Math.sin(angle) * radius >= 0 &&
//           topCenter + Math.sin(angle) * radius <= 100
//         ) {
//           stars.push(
//             <Star
//               key={`${band}-${cluster}-${i}`}
//               size={size}
//               color={color}
//               left={left}
//               top={top}
//               isBig={isBig}
//             />
//           );
//         }
//       }
//     }
//   }

//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100vw',
//         height: '100vh',
//         overflow: 'hidden',
//         pointerEvents: 'none',
//         zIndex: 0,
//       }}
//     >
//       {stars}
//     </div>
//   );
// };

// export default Background;

// import React from 'react';

// // Rainbow spectrum colors
// const SPECTRUM_COLORS = [
//   '#FF0000', // Red
//   '#FF7F00', // Orange
//   '#FFFF00', // Yellow
//   '#00FF00', // Green
//   '#0000FF', // Blue
//   '#4B0082', // Indigo
//   '#8B00FF', // Violet
// ];

// const BAND_COUNT = SPECTRUM_COLORS.length * 2;
// const CLUSTERS_PER_BAND = 12;
// const STARS_PER_CLUSTER = 10;
// const DIAGONAL_ANGLE = 60; // degrees

// const Star = ({
//   size,
//   color,
//   left,
//   top,
//   isBig,
// }: {
//   size: number;
//   color: string;
//   left: string;
//   top: string;
//   isBig?: boolean;
// }) => (
//   <div
//     style={{
//       position: 'absolute',
//       left,
//       top,
//       width: size,
//       height: size,
//       borderRadius: '50%',
//       background: isBig
//         ? `radial-gradient(circle at 50% 50%, #fff 0%, ${color} 60%, transparent 100%)`
//         : color,
//       boxShadow: isBig
//         ? `0 0 ${size * 2}px 2px #fff, 0 0 ${size * 4}px 0px ${color}`
//         : `0 0 ${size / 2}px ${color}`,
//       opacity: 0.85,
//       animation: `sparkle ${Math.random() * 2 + 1}s infinite`,
//       pointerEvents: 'none',
//     }}
//   />
// );

// const Background = () => {
//   const stars: React.ReactNode[] = [];

//   const angleRad = (DIAGONAL_ANGLE * Math.PI) / 180;
//   const dx = Math.cos(angleRad);
//   const dy = -Math.sin(angleRad);
//   const maxDist = Math.sqrt(2) * 100;

//   for (let band = 0; band < BAND_COUNT; band++) {
//     const color = SPECTRUM_COLORS[band % SPECTRUM_COLORS.length];
//     const bandNorm = band / (BAND_COUNT - 1);

//     let baseX: number, baseY: number;
//     if (bandNorm < 0.5) {
//       // Start along the bottom edge (x: 0→100, y: 100)
//       baseX = bandNorm * 2 * 100;
//       baseY = 100;
//     } else {
//       // Start along the left edge (x: 0, y: 100→0)
//       baseX = 0;
//       baseY = 100 - (bandNorm - 0.5) * 2 * 100;
//     }

//     for (let cluster = 0; cluster < CLUSTERS_PER_BAND; cluster++) {
//       const t = (cluster + 0.5) / CLUSTERS_PER_BAND;
//       const leftCenter = baseX + t * dx * maxDist;
//       const topCenter = baseY + t * dy * maxDist;

//       for (let i = 0; i < STARS_PER_CLUSTER; i++) {
//         const angle = Math.random() * 2 * Math.PI;
//         const radius = Math.random() * 4 + 1;
//         const left = `${leftCenter + Math.cos(angle) * radius}%`;
//         const top = `${topCenter + Math.sin(angle) * radius}%`;

//         const isBig = Math.random() < 0.18;
//         const size = isBig ? Math.random() * 12 + 10 : Math.random() * 5 + 2;

//         // Only render stars within the viewport
//         if (
//           leftCenter + Math.cos(angle) * radius >= 0 &&
//           leftCenter + Math.cos(angle) * radius <= 100 &&
//           topCenter + Math.sin(angle) * radius >= 0 &&
//           topCenter + Math.sin(angle) * radius <= 100
//         ) {
//           stars.push(
//             <Star
//               key={`${band}-${cluster}-${i}`}
//               size={size}
//               color={color}
//               left={left}
//               top={top}
//               isBig={isBig}
//             />
//           );
//         }
//       }
//     }
//   }

//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100vw',
//         height: '100vh',
//         overflow: 'hidden',
//         pointerEvents: 'none',
//         zIndex: 0,
//       }}
//     >
//       {stars}
//     </div>
//   );
// };

// export default Background;

// import React from 'react';

// const SPECTRUM_COLORS = [
//   '#FF0000', '#FF7F00', '#FFFF00', '#00FF00',
//   '#0000FF', '#4B0082', '#8B00FF',
// ];

// const BAND_COUNT = SPECTRUM_COLORS.length * 2;
// const CLUSTERS_PER_BAND = 12;
// const STARS_PER_CLUSTER = 10;
// const DIAGONAL_ANGLE = 60; // degrees

// const Star = ({
//   size, color, left, top, isBig,
// }: {
//   size: number;
//   color: string;
//   left: string;
//   top: string;
//   isBig?: boolean;
// }) => (
//   <div
//     style={{
//       position: 'absolute',
//       left,
//       top,
//       width: size,
//       height: size,
//       borderRadius: '50%',
//       background: isBig
//         ? `radial-gradient(circle at 50% 50%, #fff 0%, ${color} 60%, transparent 100%)`
//         : color,
//       boxShadow: isBig
//         ? `0 0 ${size * 2}px 2px #fff, 0 0 ${size * 4}px 0px ${color}`
//         : `0 0 ${size / 2}px ${color}`,
//       opacity: 0.85,
//       animation: `sparkle ${Math.random() * 2 + 1}s infinite`,
//       pointerEvents: 'none',
//     }}
//   />
// );

// const Background = () => {
//   const stars: React.ReactNode[] = [];

//   const angleRad = (DIAGONAL_ANGLE * Math.PI) / 180;
//   const dx = Math.cos(angleRad);
//   const dy = -Math.sin(angleRad);
//   const maxDist = Math.sqrt(2) * 100;

//   // Distribute bands along both the left and bottom edges
//   for (let band = 0; band < BAND_COUNT; band++) {
//     const color = SPECTRUM_COLORS[band % SPECTRUM_COLORS.length];
//     const bandNorm = band / (BAND_COUNT - 1);

//     let baseX: number, baseY: number;
//     if (bandNorm < 0.5) {
//       // Start along the bottom edge (x: 0→100, y: 100)
//       baseX = bandNorm * 2 * 100;
//       baseY = 100;
//     } else {
//       // Start along the left edge (x: 0, y: 100→0)
//       baseX = 0;
//       baseY = 100 - (bandNorm - 0.5) * 2 * 100;
//     }

//     for (let cluster = 0; cluster < CLUSTERS_PER_BAND; cluster++) {
//       const t = (cluster + 0.5) / CLUSTERS_PER_BAND;
//       const leftCenter = baseX + t * dx * maxDist;
//       const topCenter = baseY + t * dy * maxDist;

//       for (let i = 0; i < STARS_PER_CLUSTER; i++) {
//         const angle = Math.random() * 2 * Math.PI;
//         const radius = Math.random() * 4 + 1;
//         const left = `${leftCenter + Math.cos(angle) * radius}%`;
//         const top = `${topCenter + Math.sin(angle) * radius}%`;

//         const isBig = Math.random() < 0.18;
//         const size = isBig ? Math.random() * 12 + 10 : Math.random() * 5 + 2;

//         // Only render stars within the viewport
//         if (
//           leftCenter + Math.cos(angle) * radius >= 0 &&
//           leftCenter + Math.cos(angle) * radius <= 100 &&
//           topCenter + Math.sin(angle) * radius >= 0 &&
//           topCenter + Math.sin(angle) * radius <= 100
//         ) {
//           stars.push(
//             <Star
//               key={`${band}-${cluster}-${i}`}
//               size={size}
//               color={color}
//               left={left}
//               top={top}
//               isBig={isBig}
//             />
//           );
//         }
//       }
//     }
//   }

//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100vw',
//         height: '100vh',
//         overflow: 'hidden',
//         pointerEvents: 'none',
//         zIndex: 0,
//       }}
//     >
//       {stars}
//     </div>
//   );
// };

// export default Background;

// import React from 'react';

// const SPECTRUM_COLORS = [
//   '#FF0000', '#FF7F00', '#FFFF00', '#00FF00',
//   '#0000FF', '#4B0082', '#8B00FF',
// ];
// const BAND_COUNT = SPECTRUM_COLORS.length * 2; // 14 bands
// const STAR_GRID = 22; // number of stars per row/column

// const DIAGONAL_ANGLE = 45; // degrees

// const Star = ({
//   size, color, left, top, isBig,
// }: {
//   size: number;
//   color: string;
//   left: string;
//   top: string;
//   isBig?: boolean;
// }) => (
//   <div
//     style={{
//       position: 'absolute',
//       left,
//       top,
//       width: size,
//       height: size,
//       borderRadius: '50%',
//       background: isBig
//         ? `radial-gradient(circle at 50% 50%, #fff 0%, ${color} 60%, transparent 100%)`
//         : color,
//       boxShadow: isBig
//         ? `0 0 ${size * 2}px 2px #fff, 0 0 ${size * 4}px 0px ${color}`
//         : `0 0 ${size / 2}px ${color}`,
//       opacity: 0.85,
//       animation: `sparkle ${Math.random() * 2 + 1}s infinite`,
//       pointerEvents: 'none',
//     }}
//   />
// );

// function getBandIndex(x: number, y: number, bandCount: number, angle: number) {
//   // Project (x, y) onto the diagonal direction (45deg: bottom-left to top-right)
//   const angleRad = (angle * Math.PI) / 180;
//   const proj = x * Math.cos(angleRad) + y * Math.sin(angleRad);
//   // Normalize to 0..1
//   const norm = (proj + Math.sqrt(2) * 0.5 * STAR_GRID) / (Math.sqrt(2) * STAR_GRID);
//   // Map to band index
//   return Math.floor(norm * bandCount) % bandCount;
// }

// const Background = () => {
//   const stars: React.ReactNode[] = [];

//   for (let row = 0; row < STAR_GRID; row++) {
//     for (let col = 0; col < STAR_GRID; col++) {
//       // Add jitter for a more organic look
//       const jitterX = (Math.random() - 0.5) * (100 / STAR_GRID) * 0.7;
//       const jitterY = (Math.random() - 0.5) * (100 / STAR_GRID) * 0.7;
//       const left = (col / (STAR_GRID - 1)) * 100 + jitterX;
//       const top = (row / (STAR_GRID - 1)) * 100 + jitterY;

//       // Assign band/color based on diagonal
//       const bandIdx = getBandIndex(col, row, BAND_COUNT, DIAGONAL_ANGLE);
//       const color = SPECTRUM_COLORS[bandIdx % SPECTRUM_COLORS.length];

//       const isBig = Math.random() < 0.18;
//       const size = isBig ? Math.random() * 12 + 10 : Math.random() * 5 + 2;

//       stars.push(
//         <Star
//           key={`${row}-${col}`}
//           size={size}
//           color={color}
//           left={`${left}%`}
//           top={`${top}%`}
//           isBig={isBig}
//         />
//       );
//     }
//   }

//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100vw',
//         height: '100vh',
//         overflow: 'hidden',
//         pointerEvents: 'none',
//         zIndex: 0,
//       }}
//     >
//       {stars}
//     </div>
//   );
// };

// export default Background;

// import React from 'react';

// const SPECTRUM_COLORS = [
//   '#FF0000', '#FF7F00', '#FFFF00', '#00FF00',
//   '#0000FF', '#4B0082', '#8B00FF',
// ];
// const BAND_COUNT = SPECTRUM_COLORS.length * 2; // 14 bands
// const STAR_GRID = 36; // more stars for smoother bands

// const DIAGONAL_ANGLE = 45; // degrees

// const BAND_CORE = 0.65; // percent of band width to fill (0.65 = 65%)

// const Star = ({
//   size, color, left, top, isBig,
// }: {
//   size: number;
//   color: string;
//   left: string;
//   top: string;
//   isBig?: boolean;
// }) => (
//   <div
//     style={{
//       position: 'absolute',
//       left,
//       top,
//       width: size,
//       height: size,
//       borderRadius: '50%',
//       background: isBig
//         ? `radial-gradient(circle at 50% 50%, #fff 0%, ${color} 60%, transparent 100%)`
//         : color,
//       boxShadow: isBig
//         ? `0 0 ${size * 2}px 2px #fff, 0 0 ${size * 4}px 0px ${color}`
//         : `0 0 ${size / 2}px ${color}`,
//       opacity: 0.85,
//       animation: `sparkle ${Math.random() * 2 + 1}s infinite`,
//       pointerEvents: 'none',
//     }}
//   />
// );

// function getBandIndexAndFrac(x: number, y: number, bandCount: number, angle: number) {
//   const angleRad = (angle * Math.PI) / 180;
//   const proj = x * Math.cos(angleRad) + y * Math.sin(angleRad);
//   const norm = (proj + Math.sqrt(2) * 0.5 * STAR_GRID) / (Math.sqrt(2) * STAR_GRID);
//   const band = Math.floor(norm * bandCount) % bandCount;
//   const bandFrac = (norm * bandCount) - band; // 0..1, position within band
//   return { band, bandFrac };
// }

// const Background = () => {
//   const stars: React.ReactNode[] = [];

//   for (let row = 0; row < STAR_GRID; row++) {
//     for (let col = 0; col < STAR_GRID; col++) {
//       const jitterX = (Math.random() - 0.5) * (100 / STAR_GRID) * 0.7;
//       const jitterY = (Math.random() - 0.5) * (100 / STAR_GRID) * 0.7;
//       const left = (col / (STAR_GRID - 1)) * 100 + jitterX;
//       const top = (row / (STAR_GRID - 1)) * 100 + jitterY;

//       // Get band and position within band
//       const { band, bandFrac } = getBandIndexAndFrac(col, row, BAND_COUNT, DIAGONAL_ANGLE);

//       // Only render stars near the center of the band
//       if (Math.abs(bandFrac - 0.5) < BAND_CORE / 2) {
//         const color = SPECTRUM_COLORS[band % SPECTRUM_COLORS.length];
//         const isBig = Math.random() < 0.18;
//         const size = isBig ? Math.random() * 12 + 10 : Math.random() * 5 + 2;

//         stars.push(
//           <Star
//             key={`${row}-${col}`}
//             size={size}
//             color={color}
//             left={`${left}%`}
//             top={`${top}%`}
//             isBig={isBig}
//           />
//         );
//       }
//     }
//   }

//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100vw',
//         height: '100vh',
//         overflow: 'hidden',
//         pointerEvents: 'none',
//         zIndex: 0,
//       }}
//     >
//       {stars}
//     </div>
//   );
// };

// export default Background;

// import React from 'react';

// const SPECTRUM_COLORS = [
//   '#FF0000', '#FF7F00', '#FFFF00', '#00FF00',
//   '#0000FF', '#4B0082', '#8B00FF',
// ];
// const BAND_COUNT = SPECTRUM_COLORS.length * 2; // 14 bands
// const STAR_GRID = 36; // more stars for smoother bands

// const DIAGONAL_ANGLE = 45; // degrees
// const BAND_CORE = 0.65; // percent of band width to fill (0.65 = 65%)

// const Star = ({
//   size, color, left, top, isBig,
// }: {
//   size: number;
//   color: string;
//   left: string;
//   top: string;
//   isBig?: boolean;
// }) => (
//   <div
//     style={{
//       position: 'absolute',
//       left,
//       top,
//       width: size,
//       height: size,
//       borderRadius: '50%',
//       background: isBig
//         ? `radial-gradient(circle at 50% 50%, #fff 0%, ${color} 60%, transparent 100%)`
//         : color,
//       boxShadow: isBig
//         ? `0 0 ${size * 2}px 2px #fff, 0 0 ${size * 4}px 0px ${color}`
//         : `0 0 ${size / 2}px ${color}`,
//       opacity: 0.85,
//       animation: `sparkle ${Math.random() * 2 + 1}s infinite`,
//       pointerEvents: 'none',
//     }}
//   />
// );

// function getBandIndexAndFrac(x: number, y: number, bandCount: number, angle: number, grid: number) {
//   const angleRad = (angle * Math.PI) / 180;
//   // Center the grid so it covers all corners
//   const proj = (x - grid / 2) * Math.cos(angleRad) + (y - grid / 2) * Math.sin(angleRad);
//   // Normalize to 0..1 over the full diagonal
//   const norm = (proj + (Math.sqrt(2) / 2) * grid) / (Math.sqrt(2) * grid);
//   const band = Math.floor(norm * bandCount) % bandCount;
//   const bandFrac = (norm * bandCount) - band; // 0..1, position within band
//   return { band, bandFrac, norm };
// }

// const Background = () => {
//   const stars: React.ReactNode[] = [];
//   const grid = STAR_GRID * 2; // double the grid for full coverage

//   for (let row = 0; row < grid; row++) {
//     for (let col = 0; col < grid; col++) {
//       // Map grid to viewport coordinates (0..100)
//       const left = (col / (grid - 1)) * 100;
//       const top = (row / (grid - 1)) * 100;

//       // Get band and position within band
//       const { band, bandFrac, norm } = getBandIndexAndFrac(col, row, BAND_COUNT, DIAGONAL_ANGLE, grid);

//       // Only render stars near the center of the band and inside the viewport
//       if (
//         Math.abs(bandFrac - 0.5) < BAND_CORE / 2 &&
//         left >= 0 && left <= 100 &&
//         top >= 0 && top <= 100
//       ) {
//         const color = SPECTRUM_COLORS[band % SPECTRUM_COLORS.length];
//         const isBig = Math.random() < 0.18;
//         const size = isBig ? Math.random() * 12 + 10 : Math.random() * 5 + 2;

//         // Add jitter for a more organic look
//         const jitterX = (Math.random() - 0.5) * (100 / grid) * 0.7;
//         const jitterY = (Math.random() - 0.5) * (100 / grid) * 0.7;

//         stars.push(
//           <Star
//             key={`${row}-${col}`}
//             size={size}
//             color={color}
//             left={`${left + jitterX}%`}
//             top={`${top + jitterY}%`}
//             isBig={isBig}
//           />
//         );
//       }
//     }
//   }

//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100vw',
//         height: '100vh',
//         overflow: 'hidden',
//         pointerEvents: 'none',
//         zIndex: 0,
//       }}
//     >
//       {stars}
//     </div>
//   );
// };

// export default Background;

// "use client";
// import React, { useRef, useEffect } from "react";

// const SPECTRUM_COLORS = [
//   "#FF0000", "#FF7F00", "#FFFF00", "#00FF00",
//   "#0000FF", "#4B0082", "#8B00FF",
// ];
// const BAND_COUNT = SPECTRUM_COLORS.length * 2;
// const STAR_GRID = 36;
// const DIAGONAL_ANGLE = 45;
// const BAND_CORE = 0.65;

// function getBandIndexAndFrac(x: number, y: number, bandCount: number, angle: number, grid: number, aspect: number) {
//   const angleRad = (angle * Math.PI) / 180;
//   const px = (x - grid / 2);
//   const py = (y - grid / 2) * aspect;
//   const proj = px * Math.cos(angleRad) + py * Math.sin(angleRad);
//   const norm = (proj + (Math.sqrt(2) / 2) * grid) / (Math.sqrt(2) * grid);
//   const band = Math.floor(norm * bandCount) % bandCount;
//   const bandFrac = (norm * bandCount) - band;
//   return { band, bandFrac, norm };
// }

// const Background: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     let animationId: number;
//     let running = true;

//     function draw() {
//       const canvas = canvasRef.current;
//       if (!canvas) return;
//       const ctx = canvas.getContext("2d");
//       if (!ctx) return;

//       const dpr = window.devicePixelRatio || 1;
//       const width = window.innerWidth;
//       const height = window.innerHeight;
//       canvas.width = width * dpr;
//       canvas.height = height * dpr;
//       canvas.style.width = width + "px";
//       canvas.style.height = height + "px";
//       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

//       ctx.clearRect(0, 0, width, height);

//       const aspect = height / width;
//       const grid = STAR_GRID * 2;
//       const time = performance.now() / 1000;

//       for (let row = 0; row < grid; row++) {
//         for (let col = 0; col < grid; col++) {
//           const leftPx = (col / (grid - 1)) * width;
//           const topPx = (row / (grid - 1)) * height;
//           const x = col;
//           const y = row;
//           const { band, bandFrac } = getBandIndexAndFrac(x, y, BAND_COUNT, DIAGONAL_ANGLE, grid, aspect);

//           if (
//             Math.abs(bandFrac - 0.5) < BAND_CORE / 2 &&
//             leftPx >= 0 && leftPx <= width &&
//             topPx >= 0 && topPx <= height
//           ) {
//             const color = SPECTRUM_COLORS[band % SPECTRUM_COLORS.length];
//             const isBig = ((row * 13 + col * 17) % 11) < 2;
//             const baseSize = isBig ? 16 : 6;
//             const sparkle = 0.7 + 0.3 * Math.sin(time * 2 + row + col);
//             const size = baseSize * sparkle;

//             // Jitter in px (deterministic for each star)
//             const jitterSeed = Math.sin(row * 1234.567 + col * 7654.321);
//             const jitterX = jitterSeed * (width / grid) * 0.35;
//             const jitterY = Math.cos(jitterSeed) * (height / grid) * 0.35;

//             ctx.save();
//             ctx.globalAlpha = 0.85;
//             ctx.beginPath();
//             ctx.arc(leftPx + jitterX, topPx + jitterY, size / 2, 0, 2 * Math.PI);
//             ctx.closePath();

//             // Sparkle gradient for big stars
//             if (isBig) {
//               const grad = ctx.createRadialGradient(
//                 leftPx + jitterX, topPx + jitterY, 0,
//                 leftPx + jitterX, topPx + jitterY, size / 2
//               );
//               grad.addColorStop(0, "#fff");
//               grad.addColorStop(0.6, color);
//               grad.addColorStop(1, "transparent");
//               ctx.fillStyle = grad;
//             } else {
//               ctx.fillStyle = color;
//             }
//             ctx.shadowColor = color;
//             ctx.shadowBlur = isBig ? size * 0.7 : size * 0.3;
//             ctx.fill();
//             ctx.restore();
//           }
//         }
//       }

//       if (running) {
//         animationId = requestAnimationFrame(draw);
//       }
//     }

//     draw();
//     return () => {
//       running = false;
//       cancelAnimationFrame(animationId);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         pointerEvents: "none",
//         zIndex: 0,
//         display: "block",
//       }}
//       aria-hidden="true"
//     />
//   );
// };

// export default Background;


"use client";
import React, { useEffect, useState, useMemo } from "react";

const SPECTRUM_COLORS = [
  "#FF0000", "#FF7F00", "#FFFF00", "#00FF00",
  "#0000FF", "#4B0082", "#8B00FF",
];
const BAND_COUNT = SPECTRUM_COLORS.length * 2;
const STAR_GRID = 16;
const DIAGONAL_ANGLE = 45;
const BAND_CORE = 0.85;

const Star = ({
  size, color, left, top, isBig, sparkleDuration,
}: {
  size: number;
  color: string;
  left: number;
  top: number;
  isBig?: boolean;
  sparkleDuration: number;
}) => (
  <div
    style={{
      position: "absolute",
      left,
      top,
      width: size,
      height: size,
      borderRadius: "50%",
      background: isBig
        ? `radial-gradient(circle at 50% 50%, #fff 0%, ${color} 60%, transparent 100%)`
        : color,
      boxShadow: isBig
        ? `0 0 ${size * 2}px 2px #fff, 0 0 ${size * 4}px 0px ${color}`
        : `0 0 ${size / 2}px ${color}`,
      opacity: 0.85,
      animation: `sparkle ${sparkleDuration}s infinite`,
      pointerEvents: "none",
    }}
  />
);

// Add sparkle animation to the page (only once)
if (typeof window !== "undefined" && !document.getElementById("sparkle-style")) {
  const style = document.createElement("style");
  style.id = "sparkle-style";
  style.innerHTML = `
    @keyframes sparkle {
      0%, 100% { filter: brightness(1); }
      50% { filter: brightness(1.7); }
    }
  `;
  document.head.appendChild(style);
}

function getBandIndexAndFrac(x: number, y: number, bandCount: number, angle: number, grid: number, aspect: number) {
  const angleRad = (angle * Math.PI) / 180;
  const px = (x - grid / 2);
  const py = (y - grid / 2) * aspect;
  const proj = px * Math.cos(angleRad) + py * Math.sin(angleRad);
  const norm = (proj + (Math.sqrt(2) / 2) * grid) / (Math.sqrt(2) * grid);
  const band = Math.floor(norm * bandCount) % bandCount;
  const bandFrac = (norm * bandCount) - band;
  return { band, bandFrac, norm };
}

const Background: React.FC = () => {
  const [size, setSize] = useState({ w: 1920, h: 1080 });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    const update = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Only render stars on the client after hydration
  const stars = useMemo(() => {
    if (!hydrated) return [];
    const aspect = size.h / size.w;
    const grid = STAR_GRID * 2;
    const out: React.ReactNode[] = [];
    for (let row = 0; row < grid; row++) {
      for (let col = 0; col < grid; col++) {
        const leftPx = (col / (grid - 1)) * size.w;
        const topPx = (row / (grid - 1)) * size.h;
        const x = col;
        const y = row;
        const { band, bandFrac } = getBandIndexAndFrac(x, y, BAND_COUNT, DIAGONAL_ANGLE, grid, aspect);

        if (
          Math.abs(bandFrac - 0.5) < BAND_CORE / 2 &&
          leftPx >= 0 && leftPx <= size.w &&
          topPx >= 0 && topPx <= size.h
        ) {
          const color = SPECTRUM_COLORS[band % SPECTRUM_COLORS.length];
          const isBig = ((row * 13 + col * 17) % 11) < 2;
          const baseSize = isBig ? 16 : 6;
          // Use a deterministic "random" for SSR safety
          const seed = Math.abs(Math.sin(row * 1234.567 + col * 7654.321));
          const sizePx = baseSize * (0.8 + seed * 0.4);
          const jitterX = Math.sin(row * 4321.123 + col * 8765.321) * (size.w / grid) * 0.35;
          const jitterY = Math.cos(row * 4321.123 + col * 8765.321) * (size.h / grid) * 0.35;
          const sparkleDuration = 1.2 + (seed * 1.5);

          out.push(
            <Star
              key={`${row}-${col}`}
              size={sizePx}
              color={color}
              left={leftPx + jitterX}
              top={topPx + jitterY}
              isBig={isBig}
              sparkleDuration={sparkleDuration}
            />
          );
        }
      }
    }
    return out;
  }, [size, hydrated]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      {stars}
    </div>
  );
};

export default Background;