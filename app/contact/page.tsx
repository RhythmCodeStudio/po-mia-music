// import components
import ContactFormContainer from "../../ui/contact-form-container";
import MailingListSignUpForm from "../../ui/mailing-list-sign-up-form";
import Heading from "../../ui/heading";
// import IconLinkGroup from "../../ui/icon-link-group";
import IconLinkGroupClientContainer from "@/ui/icon-link-group-client-container";
// import link data
import { contactLinkData } from "@/lib/contact-link-data";

// function delayLoad(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

export default async function Contact() {
  // await delayLoad(5000);
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <Heading
        text="Contact"
        headingLevel={2}
        className="text-4xl font-semibold text-shadow-black-background-black"
      />
      <div className="mt-2">
        <IconLinkGroupClientContainer
          orientation="horizontal"
          linkData={contactLinkData}
          size={30}
          className="icon-shadow"
        />
      </div>
      <div className="w-full p-8 flex flex-col justify-center items-center gap-8">
        <div className="w-full flex items-center justify-center ">
          <MailingListSignUpForm />
        </div>
        <div className="w-full flex items-center justify-center ">
          <ContactFormContainer />
        </div>
      </div>
    </section>
  );
}
