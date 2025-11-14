"use client";
import { useEffect, useRef } from "react";
import { ToastContainer, toast, Bounce, Slide } from "react-toastify";
import PushNotificationSubscriptionManager from "./push-notification-subscription-manager";

// Dummy function: replace with your real check
async function isUserSubscribed(): Promise<boolean> {
  // Implement your real logic here!
  return false;
}

const toastMessage = () => {
  toast(
    <div>
      Subscribe to notifications to stay up to date with the latest from po mia! 🎵✨
      <div className="my-2">
        <PushNotificationSubscriptionManager renderedAs="button" />
      </div>
    </div>,
    {
      position: "bottom-center", // softer position
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide, // smoother transition
      style: {
        borderRadius: "1rem",
        background: "rgba(30,30,30,0.95)",
        color: "#fff",
        boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
        fontSize: "1.05rem",
        minWidth: "260px",
        maxWidth: "90vw",
        padding: "1rem",
      },
    }
  );
};

export default function Toaster() {
  const shownRef = useRef(false);

  useEffect(() => {
    const handler = async () => {
      if (shownRef.current) return;
      shownRef.current = true;
      if (!(await isUserSubscribed())) {
        setTimeout(() => {
          toastMessage();
        }, 1500); // 1.5s delay after first interaction
      }
    };
    window.addEventListener("pointerdown", handler, { once: true });
    return () => window.removeEventListener("pointerdown", handler);
  }, []);

  return (
    <ToastContainer
      closeButton={false}
      newestOnTop
      limit={1}
      toastStyle={{
        transition: "all 0.6s cubic-bezier(.4,0,.2,1)",
      }}
    />
  );
}