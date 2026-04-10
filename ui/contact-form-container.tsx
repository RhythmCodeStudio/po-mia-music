"use client";
// import from react
import { useState } from "react";
// import components
import ContactForm from "./contact-form";
import Heading from "./heading";

export default function ContactFormContainer() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <div
      className={`flex flex-col items-stretch sm:text-lg xl:text-xl 2xl:text-2xl w-full ${formSubmitted ? "max-w-lg" : "max-w-2xl"} p-4 lg:p-8 bg-black/50 border-border-default border-2 shadow-white shadow-lg rounded-4xl`}>
      {formSubmitted ? (
        <h2 className="text-4xl text-center">thank you!</h2>
      ) : (
        <>
          <div className="items-center justify-center">
            <Heading
              text="send po a message"
              headingLevel={2}
              className="text-2xl font-semibold text-shadow-black-background-black mb-4 text-center"
            />
            <ContactForm setFormSubmitted={setFormSubmitted} />
          </div>
        </>
      )}
    </div>
  );
}
