// import components
import ContactFormContainer from "../../ui/contact-form-container";
import MailingListSignUpForm from "../../ui/mailing-list-sign-up-form";
import Heading from "../../ui/heading";
import IconLinkGroup from "../../ui/icon-link-group";
// import link data
import { contactLinkData } from "@/lib/contact-link-data";

export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <Heading
        text="Contact"
        headingLevel={2}
        className="text-4xl font-semibold text-shadow-black-background-black mt-8"
      />
      <div className="mt-2 icon-shadow">
        <IconLinkGroup
          orientation="horizontal"
          linkData={contactLinkData}
          size={28}
        />
      </div>
      <div className="w-full p-8 flex flex-col justify-center items-center">
        {/* <div className="bg-black/50 border-[rgba(255,255,255,0.3)] border-2 shadow-white shadow-lg rounded-4xl p-8"> */}
        {/* <div> */}
          <MailingListSignUpForm />
        {/* </div> */}
        <ContactFormContainer />
      </div>
    </section>
  );
}
