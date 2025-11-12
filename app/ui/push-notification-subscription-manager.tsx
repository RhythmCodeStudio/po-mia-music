"use client";
import { useState, useEffect } from "react";

async function subscribeUser(sub: any) {
  await fetch("/api/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sub),
  });
}

async function unsubscribeUser(endpoint: string) {
  await fetch("/api/unsubscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ endpoint }),
  });
}

// for generating keys
function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

// Manage the browser's push subscription
export default function PushNotificationSubscriptionManager() {
  const [isSupported, setIsSupported] = useState(false);
  const [subscription, setSubscription] = useState<PushSubscription | null>(null);
  // const [message, setMessage] = useState("");
  // const [url, setUrl] = useState("");

  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      setIsSupported(true);
      registerServiceWorker();
    }
  }, []);

  // Register service worker, then retrieve subscription if present
  async function registerServiceWorker() {
    const registration = await navigator.serviceWorker.register("/sw.js", {
      scope: "/",
      updateViaCache: "none",
    });
    const sub = await registration.pushManager.getSubscription();
    setSubscription(sub);
  }

  async function subscribeToPush() {
    const registration = await navigator.serviceWorker.ready;
    const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!
      ),
    });
    setSubscription(sub);
    const serializedSub = JSON.parse(JSON.stringify(sub));
    await subscribeUser(serializedSub);
  }

  async function unsubscribeFromPush() {
    if (subscription) {
      await subscription.unsubscribe();
    }
    setSubscription(null);
    if (subscription) {
      const serializedSub = JSON.parse(JSON.stringify(subscription));
      await unsubscribeUser(serializedSub);
    }
  }

  // async function sendTestNotification() {
  //   if (subscription) {
  //     await sendNotification(message, url);
  //     setMessage("");
  //     setUrl("");
  //   }
  // }

  if (!isSupported) {
    return <p>Push notifications are not supported in this browser.</p>;
  }

  return (
    <div>
      {subscription ? (
        <div>
          <p>You are subscribed to push notifications.</p>
          <button onClick={unsubscribeFromPush}>Unsubscribe</button>
        </div>
      ) : (
        <div>
          <p>You are not subscribed to push notifications.</p>
          <button onClick={subscribeToPush} className="cursor-pointer">Subscribe</button>
        </div>
      )}
    </div>
  );
}