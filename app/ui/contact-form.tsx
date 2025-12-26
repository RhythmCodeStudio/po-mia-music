"use client";
// import from vercel
import { track } from "@vercel/analytics";
// import from react
import { useState } from "react";
// import from clsx
import { clsx } from "clsx";
// import from toastify
import { ToastContainer, Zoom, toast } from "react-toastify";
// import components
import ContactFormInput from "./contact-form-input";
// import from utils
import {
  validateEmail,
  validateName,
  validatePhone,
  validateMessage,
} from "../../utils/utils";
// import actions
import { signUpForMailingList } from "@/actions/actions";
// import from emailjs
import emailjs from "@emailjs/browser";

export default function ContactForm({
  setFormSubmitted,
}: {
  setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("");
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
  const [messageErrorMessage, setMessageErrorMessage] = useState("");
  const [deliveryErrorMessage, setDeliveryErrorMessage] = useState("");
  const [buttonSubmitted, setButtonSubmitted] = useState(false);

  const isFormValid =
    validateName(firstName.trim()) &&
    validateName(lastName.trim()) &&
    validateEmail(email.trim()) &&
    validatePhone(phone.trim()) &&
    validateMessage(message);

  const showErrorToast = (msg: string) => {
    toast.error(msg, {
      transition: Zoom,
      position: "top-center",
      closeOnClick: true,
      pauseOnHover: true,
      className: "border-2 border-neutral-400 text-white",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setState: React.Dispatch<React.SetStateAction<any>>
  ) => {
    const { name, value } = e.target;
    setState(value);
    // Validate and set error messages
    if (name === "email") {
      setEmailErrorMessage(
        value && !validateEmail(value)
          ? "Please enter a valid email address."
          : ""
      );
    }
    if (name === "first_name") {
      setFirstNameErrorMessage(
        value && !validateName(value)
          ? "Name can only contain letters and spaces."
          : ""
      );
    }
    if (name === "last_name") {
      setLastNameErrorMessage(
        value && !validateName(value)
          ? "Name can only contain letters and spaces."
          : ""
      );
    }
    if (name === "phone") {
      setPhoneErrorMessage(
        value && !validatePhone(value)
          ? "Please enter a valid phone number."
          : ""
      );
    }
    if (name === "message") {
      setMessageErrorMessage(
        value && !validateMessage(value) ? "Please enter a valid message." : ""
      );
    }
  };

  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // trim form data
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    // validation  for inputs, handle errors accordingly
    const isEmailValid = validateEmail(trimmedEmail);
    const isPhoneValid = validatePhone(trimmedPhone);
    const isFirstNameValid = validateName(trimmedFirstName);
    const isLastNameValid = validateName(trimmedLastName);
    const isMessageValid = validateMessage(message);

    const errors = [];
    if (!isEmailValid) errors.push("email");
    if (!isFirstNameValid) errors.push("first_name");
    if (!isLastNameValid) errors.push("last_name");
    if (!isPhoneValid) errors.push("phone");
    if (!isMessageValid) errors.push("message");

    if (errors.length === 0) {
      // All valid
      const emailTemplateParams = {
        first_name: trimmedFirstName,
        last_name: trimmedLastName,
        email: trimmedEmail,
        phone_number: trimmedPhone,
        message: message,
      };

      try {
        // Sign up for mailing list
        await signUpForMailingList(trimmedEmail);
        // Send email via emailjs
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          emailTemplateParams,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        );
        // .then((result) => {
        track("Contact form submission");
        setButtonSubmitted(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setFormSubmitted(true);
        // Reset the button's submitted state after 5 seconds
        setTimeout(() => {
          setButtonSubmitted(false);
        }, 5000);
        // });
      } catch (error) {
        setDeliveryErrorMessage(
          "There was an error delivering your message. Please email me at kevinlong.dev@gmail.com. My apologies for the inconvenience."
        );
        toast.error(
          <div className="p-2">
            <p>
              There was an error delivering your message. Please send me an
              email.
            </p>
            <a
              href="mailto:pomiamusic@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-500 hover:text-blue-700">
              pomiamusic@gmail.com
            </a>
          </div>,
          {
            transition: Zoom,
            position: "top-center",
            closeOnClick: true,
            pauseOnHover: true,
            className: "border-2 border-neutral-400 text-white",
          }
        );
      }
    } else if (errors.length === 1) {
      // One field is invalid
      if (errors[0] === "email")
        showErrorToast("Please enter a valid email address.");
      if (errors[0] === "name") showErrorToast("Please enter a name.");
      if (errors[0] === "phone")
        showErrorToast("Please enter a valid phone number.");
      if (errors[0] === "message") showErrorToast("Please enter a message.");
    } else {
      // Multiple fields invalid
      toast.error("Please fill in all required fields.", {
        transition: Zoom,
        position: "top-center",
        closeOnClick: true,
        pauseOnHover: true,
        className: "border-2 border-neutral-400 text-white",
      });
    }
  };

  return (
    <div className="w-full max-w-6xl text-base">
      <form
        onSubmit={handleFormSubmit}
        className="w-full max-w-6xl mx-auto relative text-green-500">
        <ContactFormInput
          inputType="input"
          label="First Name"
          name="first_name"
          type="text"
          placeholder=""
          value={firstName}
          required={true}
          autoComplete="given-name"
          errorMessage={firstNameErrorMessage}
          handleChange={handleChange}
          setStateVariable={setFirstName}
        />
        <ContactFormInput
          inputType="input"
          label="Last Name"
          name="last_name"
          type="text"
          placeholder=""
          value={lastName}
          required={true}
          autoComplete="family-name"
          errorMessage={lastNameErrorMessage}
          handleChange={handleChange}
          setStateVariable={setLastName}
        />
        <ContactFormInput
          inputType="input"
          label="Phone"
          name="phone"
          type="tel"
          placeholder=""
          value={phone}
          required={true}
          autoComplete="tel"
          errorMessage={phoneErrorMessage}
          handleChange={handleChange}
          setStateVariable={setPhone}
        />
        <ContactFormInput
          inputType="input"
          label="Email"
          name="email"
          type="text"
          placeholder=""
          value={email}
          required={true}
          autoComplete="email"
          errorMessage={emailErrorMessage}
          handleChange={handleChange}
          setStateVariable={setEmail}
        />
        <ContactFormInput
          inputType="textarea"
          label="Message"
          name="message"
          type="text"
          placeholder=""
          value={message}
          required={true}
          autoComplete="off"
          errorMessage={messageErrorMessage}
          handleChange={handleChange}
          setStateVariable={setMessage}
        />

        <div className="flex justify-center items-center p-6 mt-4">
          <span
            className={clsx(
              "transition-opacity duration-700",
              isFormValid && !buttonSubmitted ? "opacity-100" : "opacity-60"
            )}>
            <button
              id="contact-form-submit-button"
              onClick={handleFormSubmit}
              type="submit"
              disabled={!isFormValid || buttonSubmitted}
              aria-disabled={!isFormValid || buttonSubmitted}
              className={clsx(
                "text-shadow-black border border-2 rounded-2xl py-1 px-6 transition-colors transition-shadow transition-transform duration-700 ease-in-out font-semibold tracking-widest will-change-transform",
                {
                  // enabled styles
                  "bg-neutral-800 text-green-500 border-green-500 hover:border-neutral-800 hover:bg-green-500 hover:text-white cursor-pointer shadow-lg shadow-green-500/50 hover:scale-105 active:scale-95":
                    isFormValid && !buttonSubmitted,
                  // disabled styles
                  "border-green-600 text-green-600 cursor-not-allowed":
                    !isFormValid || buttonSubmitted,
                }
              )}>
              {buttonSubmitted ? "Message Sent!" : "Send"}
            </button>
          </span>
        </div>
      </form>
      <ToastContainer
        limit={1}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
    </div>
  );
}