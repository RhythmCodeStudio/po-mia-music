// import from next
import Link from "next/link";
// import components
import SignUpForm from "@/ui/sign-up-form";

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-6">
        <SignUpForm />
      </div>
    </div>
  );
}
