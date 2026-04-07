"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

/**
 * Handles hash-based scrolling to elements with IDs
 * Solves the issue where hash links work in dev but not in production
 */
export default function HashScrollHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get hash from URL
    const hash = window.location.hash.slice(1); // Remove the '#'
    
    if (!hash) return;

    // Wait a tick to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [searchParams]); // Re-run if route changes

  return null;
}
