"use client";
// import from react
import { useState } from "react";
// import components
import ContactForm from "./contact-form";
// import ContactIconLinks from "./contact-icon-links";
// import copy
// import { contactPageCopy } from "@/app/lib/copy/contact-page-copy";

export default function ContactFormContainer() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <div className="flex flex-col items-stretch sm:text-lg xl:text-xl 2xl:text-2xl w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl">
      {formSubmitted ? (
        <div className="items-center justify-center ">
          <h2 className="text-4xl text-center">Thank you!</h2>
          <p className="m-8 text-center text-balance">
            Thank you!
          </p>
          <div className="flex items-center justify-center">
            {/* <ContactIconLinks 
              orientation="horizontal" 
              // include={["GitHub","LinkedIn"]} 
              size={52}/> */}
          </div>
        </div>
      ) : (
        <>
          {/* <h2 className="text-2xl lg:text-4xl font-bold text-center mt-12 lg:mt-16">
            Contact
          </h2> */}
          <div className="mt-6 lg:mt-12 items-center justify-center">
            <ContactForm setFormSubmitted={setFormSubmitted} />
          </div>
        </>
      )}
    </div>
  );
}
