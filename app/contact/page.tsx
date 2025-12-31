// import components
import ContactFormContainer from "../ui/contact-form-container";
import MailingListSignUpForm from "../ui/mailing-list-sign-up-form";
import Heading from "../ui/heading";

export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center w-full max-w-6xl py-6 space-y-6">
      <Heading
        text="Contact"
        headingLevel={2}
        className="text-4xl font-semibold text-shadow-black-background-black"
      />
      <div className="bg-black/50 border-[rgba(255,255,255,0.3)] border-2 shadow-white shadow-lg rounded-4xl p-8">
        <MailingListSignUpForm />
      </div>
      <ContactFormContainer />
    </section>
  );
}
