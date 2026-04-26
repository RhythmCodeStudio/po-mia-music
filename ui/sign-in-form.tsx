"use client";
// CHANGED: Added ToastContainer and CSS import
import { useActionState, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signInWithEmail } from "@/app/auth/sign-in/actions";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // CHANGED: Added CSS import
import { ToastContainer } from "react-toastify"; // CHANGED: Added ToastContainer import
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

export default function SignInForm() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(signInWithEmail, null);
  const [showPassword, setShowPassword] = useState(false);

  // CHANGED: Show error toast when there's an error
  useEffect(() => {
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state?.error]);

  // CHANGED: Show success toast and redirect on successful signin
  useEffect(() => {
    if (state?.success) {
      toast.success("Signed in successfully!");
      router.refresh();
      const timer = setTimeout(() => {
        
        router.push('/admin');
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [state?.success, router]);

  return (
    <>
      {/* CHANGED: Added ToastContainer for displaying toasts */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <form
        action={formAction}
        className="flex flex-col gap-5 items-center justify-center">
        <div className="w-xs sm:w-sm">
          <h1 className="mt-10 text-center text-2xl/9 font-bold text-white">
            Sign in to your account
          </h1>
        </div>
        
        <div className="flex flex-col gap-1.5 w-xs sm:w-sm">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-100">
            Email address
          </label>
          {/* CHANGED: Added disabled state while pending */}
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@my-company.com"
            disabled={isPending}
            className="block rounded-md w-full bg-white/5 px-2 py-1.5 placeholder:text-gray-500 text-white outline-1 outline-white/10 focus:outline-blue-600 disabled:opacity-50"
          />
        </div>
        
        <div className="flex flex-col gap-1.5 w-xs sm:w-sm">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-100">
            Password
          </label>
          <div className="relative">
            {/* CHANGED: Added disabled state while pending */}
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              placeholder="*****"
              disabled={isPending}
              className="block rounded-md w-full bg-white/5 px-2 py-1.5 placeholder:text-gray-500 text-white outline-1 outline-white/10 focus:outline-blue-600 disabled:opacity-50"
            />
            {/* CHANGED: Added aria-label improvement */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
              aria-label={showPassword ? "Hide password" : "Show password"}>
              {showPassword ? (
                <IoIosEyeOff className="w-5 h-5" />
              ) : (
                <IoIosEye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
        
        {/* CHANGED: Updated button text and disabled state */}
        <button
          type="submit"
          disabled={isPending}
          className="flex w-xs sm:w-sm justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed">
          {isPending ? "Signing in..." : "Sign in"}
        </button>
        
        <p className="w-full text-center text-sm">
          Don't have an account?{" "}
          <Link
            href="/auth/sign-up"
            className="font-medium text-blue-600 hover:text-blue-500">
            Sign up
          </Link>
        </p>
      </form>
    </>
  );
}