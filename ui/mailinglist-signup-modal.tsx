"use client";

//import from react
import { useState } from "react";
// import components
import MailingListSignupForm from "./mailing-list-sign-up-form";
import Button from "./button";
import StarrySky from "./starry-sky";
// import from react icons
import { FiXCircle } from "react-icons/fi";

export default function MailingListSignupModal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        label="Sign Up for po's Mailing List"
        title="Sign up for po's mailing list"
        onClick={() => setIsOpen(true)}
        className="cursor-pointer border-2 border-[rgba(255,255,255,0.3)] p-1 px-4 rounded-full text-sm rainbow-gradient text-shadow-black-background-black"
      />
      {isOpen && (
        <div className="fixed inset-0 rainbow-gradient flex items-center justify-center z-50">
          {/* <Button
            title="Close"
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-black hover:text-neutral-600 hover:scale-110 transition-transform ease-in-out duration-200"
            icon={<FiXCircle size={28} />}
          /> */}
          <div className="bg-black/50 border-[rgba(255,255,255,0.3)] border-2 shadow-white shadow-lg rounded-4xl p-6 w-11/12 max-w-md relative z-60">
          <Button
            title="Close"
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-white hover:text-neutral-200 transition-transform ease-in-out duration-400"
            icon={<FiXCircle size={28} />}
          />
            <MailingListSignupForm />
          </div>
          <StarrySky />
        </div>
      )}
    </>
  );
}
