"use client";
// import from next
import Image from "next/image";
import { useSearchParams } from "next/navigation";
// import components
import MailingListSignUpForm from "../../ui/mailing-list-sign-up-form";

export default function MailingListPage() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");
  return (
    <>
      {mode === "remove" || mode === "sign-up" ? (
        <div className="flex flex-col justify-center items-center w-full p-8">
           <div className="w-72 h-auto p-8">
                <Image
                  alt="po mia rubik's cube logo with butterflies"
                  src="/icons/butterfly-logo.png"
                  width={700}
                  height={700}
                  // className="rounded-4xl shadow-lg shadow-white"
                />
              </div>
          {mode === "remove" ? (
            <MailingListSignUpForm mode="remove" />
          ) : (
            <>
              {/* <div className="w-72 h-auto p-8">
                <Image
                  alt="po sitting on a frog statue outside Venie Cafe"
                  src="/icons/butterfly-logo.png"
                  width={700}
                  height={700}
                  // className="rounded-4xl shadow-lg shadow-white"
                />
              </div> */}

              <MailingListSignUpForm mode="sign-up" />
            </>
          )}
        </div>
      ) : (
        typeof window !== "undefined" && (window.location.href = "/")
      )}
    </>
  );
}
