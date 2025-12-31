"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollToTopButton() {
  const [scrollToTopButtonVisible, setScrollToTopButtonVisible] =
    useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const toggleButtonVisibility = () => {
      const shouldShowButton = window.scrollY > 300;
      setScrollToTopButtonVisible(shouldShowButton);

      if (shouldShowButton && !isHovering) {
        if (timeoutId) clearTimeout(timeoutId);
        const newTimeoutId = setTimeout(() => {
          if (!isHovering) {
            setScrollToTopButtonVisible(false);
          }
        }, 3000);
        setTimeoutId(newTimeoutId);
      }
    };

    window.addEventListener("scroll", toggleButtonVisibility);

    return () => {
      window.removeEventListener("scroll", toggleButtonVisibility);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId, isHovering]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      if (window.scrollY <= 300) {
        setScrollToTopButtonVisible(false);
        if (timeoutId) clearTimeout(timeoutId);
      }
    }, 500);
  };

  return (
    <div className="flex ml-auto z-50 text-outline">
      <button
        aria-label="scroll to top button"
        name="scroll to top button"
        className={`cursor-pointer z-80 shadow-md shadow-green-500/50 border-[rgba(255,255,255,0.3)] rainbow-gradient text-black fixed bottom-4 right-4 rounded-full p-2 w-12 hover:bg-green-800 hover:transform hover:scale-110 transition-all duration-700 ease-in-out ${
          scrollToTopButtonVisible
            ? "opacity-85"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}>
        <FaArrowUp size={24} className="h-8 w-8 animate-pulse" />
      </button>
    </div>
  );
}