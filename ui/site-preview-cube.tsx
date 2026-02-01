"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";

const rubikColors = [
  ["#f44336", "#f44336", "#f44336", "#f44336", "#f44336", "#f44336", "#f44336", "#f44336", "#f44336"], // Red
  ["#2196f3", "#2196f3", "#2196f3", "#2196f3", "#2196f3", "#2196f3", "#2196f3", "#2196f3", "#2196f3"], // Blue
  ["#4caf50", "#4caf50", "#4caf50", "#4caf50", "#4caf50", "#4caf50", "#4caf50", "#4caf50", "#4caf50"], // Green
  ["#ffeb3b", "#ffeb3b", "#ffeb3b", "#ffeb3b", "#ffeb3b", "#ffeb3b", "#ffeb3b", "#ffeb3b", "#ffeb3b"], // Yellow
  ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"], // White
  ["#ff9800", "#ff9800", "#ff9800", "#ff9800", "#ff9800", "#ff9800", "#ff9800", "#ff9800", "#ff9800"], // Orange
];

export default function SitePreviewCube() {
  return (
    <Swiper
      effect="cube"
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      pagination={true}
      modules={[EffectCube, Pagination]}
      className="mySwiper"
      style={{
        width: "420px",
        height: "420px",
        margin: "0 auto",
      }}
    >
      {rubikColors.map((colors, idx) => (
        <SwiperSlide key={idx}>
          <div
            className="flex flex-col items-center justify-center"
            style={{
              width: "400px",
              height: "400px",
              background: "#222",
              borderRadius: "1.5rem",
              boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
              padding: "16px",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridTemplateRows: "repeat(3, 1fr)",
                gap: "8px",
                width: "100%",
                height: "100%",
              }}
            >
              {colors.map((color, i) => (
                <div
                  key={i}
                  style={{
                    background: color,
                    border: "2px solid #222",
                    borderRadius: "0.4rem",
                    width: "100%",
                    height: "100%",
                  }}
                />
              ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}