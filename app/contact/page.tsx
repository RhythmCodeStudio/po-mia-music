// import from next
import Image from "next/image";
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

export const metadata = {
  title: "Contact | Po Mia | St. Louis, Missouri",
  description:
    "Get in touch with Po Mia for booking inquiries, collaborations, or just to say hello. Use the contact form, send an email, sign up for the mailing list, or connect via social media.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.pomiamusic.com/contact",
    siteName: "Po Mia: St. Louis Musician",
    title: "Contact | Po Mia | St. Louis, Missouri",
    description:
      "Get in touch with Po Mia for booking inquiries, collaborations, or just to say hello. Use the contact form, send an email, sign up for the mailing list, or connect via social media.",
  },
};

export default async function Contact() {
  // await delayLoad(5000);
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <Heading
        text="Contact"
        headingLevel={2}
        className="text-4xl font-semibold text-shadow-black-background-black font-acme tracking-widest"
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
        <div className="w-full flex items-center justify-center max-w-lg">
          <MailingListSignUpForm />
        </div>
        <div className="w-42 md:w-50 lg:w-60 h-auto">
          <Image
            src="/icons/butterfly-logo.png"
            alt="Contact Illustration"
            width={700}
            height={700}
            className="mx-auto"
          />
        </div>
        <div className="w-full flex items-center justify-center ">
          <ContactFormContainer />
        </div>
      </div>
    </section>
  );
}
