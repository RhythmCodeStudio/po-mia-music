// import components
import MailingListSignUpForm from "@/ui/mailing-list-sign-up-form";
export default function MailingListUnsubscribePage() {
  return (
    <div className="flex flex-col justify-center items-center p-8">
      <MailingListSignUpForm mode="remove" />
    </div>
  );
} 
