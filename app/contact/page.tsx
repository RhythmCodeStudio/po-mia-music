// import components
import ContactFormContainer from "../ui/contact-form-container";
import MailingListSignUpForm from "../ui/mailing-list-sign-up-form";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-6xl">
      <h1>Contact Po</h1>
      <MailingListSignUpForm />
      <ContactFormContainer />
    </div>
  );
}