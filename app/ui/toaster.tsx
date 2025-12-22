"use client";
// import from react
import { useEffect, useRef } from "react";
// import from react-toastify
import { ToastContainer, toast, Slide } from "react-toastify";
//  import components
import PushNotificationSubscriptionManager from "./push-notification-subscription-manager";
// import context
import { usePushNotification } from "../../context/push-notification-context-provider";

// Dummy function: replace with your real check
// async function isUserSubscribed(): Promise<boolean> {
//   // Implement your real logic here!
//   return false;
// }

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
        borderRadius: "0, 1rem, 1rem, 0",
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
  const { isSubscribed } = usePushNotification();
  const shownRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isSubscribed !== false) return; 

    // const handler = () => {
    //   if (shownRef.current) return;
    //   shownRef.current = true;
    //   setTimeout(() => {
    //     toastMessage();
    //   }, 1500);
    // };
    const handler = () => {
      if (shownRef.current) return;
      shownRef.current = true;
      timeoutRef.current = setTimeout(() => {
        // Double-check before showing toast
        if (isSubscribed === false) {
          toastMessage();
        }
      }, 1500);
    };

    window.addEventListener("pointerdown", handler, { once: true });
    return () => window.removeEventListener("pointerdown", handler);
  }, [isSubscribed]);

  // If user subscribes before toast shows, clear the pending timeout
  useEffect(() => {
    if (isSubscribed && timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, [isSubscribed]);

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