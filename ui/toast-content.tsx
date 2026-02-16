// import from react-toastify
import { toast } from "react-toastify";
//  import components
import PushNotificationSubscriptionManager from "./push-notification-subscription-manager";
import Button from "./button";
// import icon
import { RiCloseCircleFill } from "react-icons/ri";

export default function ToastContent() {
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