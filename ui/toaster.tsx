"use client";
// import from react
import { useEffect, useRef } from "react";
// import from react-toastify
import { ToastContainer, toast, Slide } from "react-toastify";
//  import components
import PushNotificationSubscriptionManager from "./push-notification-subscription-manager";
import Button from "./button";
// import context
import { usePushNotification } from "../context/push-notification-context-provider";
// import icon
import { SlClose } from "react-icons/sl";
import { RiCloseCircleFill } from "react-icons/ri";

// Dummy function: replace with your real check
// async function isUserSubscribed(): Promise<boolean> {
//   // Implement your real logic here!
//   return false;
// }

// const toastMessage = () => {
//   toast(
//     <>
//       <Button
//         onClick={() => toast.dismiss()}
//         className="absolute top-2 right-2 p-1"
//         aria-label="Close notification"
//         icon={<RiCloseCircleFill size={18} className="icon-shadow" />}
//       />

//       <div className="mt-6 flex flex-col items-center text-center text-shadow-black-background-black rounded-[1rem]">
//         <p>
//           Subscribe to notifications to stay up to date with the latest from po
//           mia!
//         </p>

//         <div className="flex justify-center mx-auto">🎵✨🎵✨</div>
//         <div className="my-2">
//           <PushNotificationSubscriptionManager renderedAs="button" />
//         </div>
//       </div>
//     </>,
//     {
//       position: "bottom-center", // softer position
//       autoClose: 7000,
//       hideProgressBar: false,
//       closeOnClick: false,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       transition: Slide, // smoother transition
//       style: {
//         borderRadius: "1rem 1rem 1rem 1rem",
//         background:
//           "linear-gradient(135deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8b00ff, #ff0000)",
//         color: "#fff",
//         boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
//         fontSize: "1rem",
//         minWidth: "260px",
//         maxWidth: "90vw",
//         padding: "1rem",
//         border: "2px solid rgba(255, 255, 255, 0.3)",
//       },
//     },
//   );
// };


// Toast content as a component to accept props from react-toastify
function ToastContent() {
  return (
    <div>
      <Button
        onClick={() => toast.dismiss()}
        className="absolute top-2 right-2 p-1"
        aria-label="Close notification"
        icon={<RiCloseCircleFill size={18} className="icon-shadow" />}
      />

      <div className="mt-6 flex flex-col items-center text-center text-shadow-black-background-black rounded-[1rem]">
        <p>
          Subscribe to notifications to stay up to date with the latest from po
          mia!
        </p>

        <div className="flex justify-center mx-auto">🎵✨🎵✨</div>
        <div className="my-2">
          <PushNotificationSubscriptionManager renderedAs="button" />
        </div>
      </div>
    </div>
  );
}

const toastMessage = () => {
  toast(<ToastContent />, {
    position: "bottom-center", // softer position
    autoClose: 7000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    closeButton: false,
    progress: undefined,
    transition: Slide, // smoother transition
    style: {
      borderRadius: "1rem 1rem 1rem 1rem",
      background:
        "linear-gradient(135deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8b00ff, #ff0000)",
      color: "#fff",
      boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
      fontSize: "1rem",
      minWidth: "260px",
      maxWidth: "90vw",
      padding: "1rem",
      border: "2px solid rgba(255, 255, 255, 0.3)",
    },
  });
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
      className={"relative"}
      closeButton={false}
      newestOnTop
      limit={1}
      toastStyle={{
        transition: "all 0.6s cubic-bezier(.4,0,.2,1)",
      }}
    />
  );
}
