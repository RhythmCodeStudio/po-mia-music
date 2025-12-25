"use client";
// import from react
import { useState } from "react";
// import actions
import { signUpForMailingList } from "../../actions/actions";
// import from clsx
import { clsx } from "clsx";
// import from toastify
import { ToastContainer, Zoom, toast } from "react-toastify";
// import components
import ContactFormInput from "./contact-form-input";
// import from utils
import { validateEmail } from "../../utils/utils";

export default function MailingListSignUpForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const isFormValid = validateEmail(email.trim());

   const showErrorToast = (msg: string) => {
    toast.error(msg, {
      transition: Zoom,
      position: "top-center",
      closeOnClick: true,
      pauseOnHover: true,
      className: "border-2 border-neutral-400 text-white",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailErrorMessage( value && !validateEmail(value) ? "Please enter a valid email address." : "" );
  };

  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // trim form data
    const trimmedEmail = email.trim();
    const isEmailValid = validateEmail(trimmedEmail);
    if (!isEmailValid) {
      setEmailErrorMessage("Please enter a valid email address.");
      return;
    }
    try {
      await signUpForMailingList(trimmedEmail);
      setSubmitted(true);
      setEmail("");
    } catch (err) {
      console.error("Error signing up for mailing list:", err);
      showErrorToast("An error occurred while signing up. Please try again later.");
    }
  };

  return (
    <div></div>
  );
}