import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Po Mia Music",
    short_name: "Po Mia Music",
    description: "The official web application for Po Mia",
    start_url: "/",
    display: "standalone",
    theme_color: "#ffff66",
    background_color: "#00ff00",
    icons: [
      {
        src: "/po-mia-logo-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/po-mia-logo-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}