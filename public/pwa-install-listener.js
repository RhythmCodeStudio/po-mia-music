if (typeof window !== "undefined") {
  window.deferredPWAInstallPrompt = null;
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    window.deferredPWAInstallPrompt = e;
    window.dispatchEvent(new Event("pwa-install-available"));
  });
}