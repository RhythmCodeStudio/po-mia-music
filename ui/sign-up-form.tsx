// "use client";
// // import from react
// import { useActionState, useState } from "react";
// // import action
// import { signUpWithEmail } from "../app/auth/sign-up/actions";
// // import icons
// import { IoIosEye, IoIosEyeOff } from "react-icons/io";

// export default function SignUpForm() {
//   const [state, formAction, isPending] = useActionState(signUpWithEmail, null);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [passwordError, setPasswordError] = useState("");
//   const errorMessage = passwordError || state?.error;
//   const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
//     const formData = new FormData(e.currentTarget);
//     const password = formData.get("password") as string;
//     const confirmPassword = formData.get("confirmPassword") as string;

//     if (password !== confirmPassword) {
//       e.preventDefault();
//       setPasswordError("Passwords do not match");
//       return;
//     }
//     setPasswordError("");
//   };

//   return (
//     <form
//       action={formAction}
//       onSubmit={handleSubmit}
//       className="flex flex-col gap-5 min-h-screen items-center justify-center">
//       <div className="w-sm">
//         <h1 className="mt-10 text-center text-2xl/9 font-bold text-white">
//           Create new account
//         </h1>
//       </div>

//       <div className="flex flex-col gap-1.5 w-sm">
//         <label
//           htmlFor="name"
//           className="block text-sm font-medium text-gray-100">
//           Name
//         </label>
//         <input
//           id="name"
//           name="name"
//           type="text"
//           required
//           placeholder="John Doe"
//           autoComplete="username"
//           className="block rounded-md w-full bg-white/5 px-2 py-1.5 placeholder:text-gray-500 text-white outline-1 outline-white/10 focus:outline-blue-600"
//         />
//       </div>

//       <div className="flex flex-col gap-1.5 w-sm">
//         <label
//           htmlFor="email"
//           className="block text-sm font-medium text-gray-100">
//           Email address
//         </label>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           required
//           placeholder="john@my-company.com"
//           autoComplete="email"
//           className="block rounded-md w-full bg-white/5 px-2 py-1.5 placeholder:text-gray-500 text-white outline-1 outline-white/10  focus:outline-blue-600"
//         />
//       </div>

//       <div className="flex flex-col gap-1.5 w-sm">
//         <label
//           htmlFor="password"
//           className="block text-sm font-medium text-gray-100">
//           Password
//         </label>
//         <div className="relative">
//           <input
//             id="password"
//             name="password"
//             type={showPassword ? "text" : "password"}
//             required
//             placeholder="*****"
//             autoComplete="new-password"
//             className="block rounded-md w-full bg-white/5 px-2 py-1.5 pr-10 placeholder:text-gray-500 text-white outline-1 outline-white/10 focus:outline-blue-600"
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
//             aria-label={showPassword ? "Hide password" : "Show password"}>
//             {showPassword ? (
//               <IoIosEyeOff className="w-5 h-5" />
//             ) : (
//               <IoIosEye className="w-5 h-5" />
//             )}
//           </button>
//         </div>
//       </div>

//       <div className="flex flex-col gap-1.5 w-sm">
//         <label
//           htmlFor="confirmPassword"
//           className="block text-sm font-medium text-gray-100">
//           Confirm Password
//         </label>
//         <div className="relative">
//           <input
//             id="confirmPassword"
//             name="confirmPassword"
//             type={showConfirmPassword ? "text" : "password"}
//             required
//             placeholder="*****"
//             autoComplete="new-password"
//             className="block rounded-md w-full bg-white/5 px-2 py-1.5 pr-10 placeholder:text-gray-500 text-white outline-1 outline-white/10 focus:outline-blue-600"
//           />
//           <button
//             type="button"
//             onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//             className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
//             aria-label={
//               showConfirmPassword ? "Hide password" : "Show password"
//             }>
//             {showConfirmPassword ? (
//               <IoIosEyeOff className="w-5 h-5" />
//             ) : (
//               <IoIosEye className="w-5 h-5" />
//             )}
//           </button>
//         </div>
//       </div>
//       <div className="w-sm">
//         {errorMessage && (
//           <div className="text-center rounded-md px-3 py-2 text-sm text-red-500 bg-red-500/10 border border-red-500/20">
//             {errorMessage}
//           </div>
//         )}
//       </div>
//       <button
//         type="submit"
//         disabled={isPending}
//         className="flex w-sm justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed">
//         {isPending ? "Creating account..." : "Create Account"}
//       </button>
//     </form>
//   );
// }

// "use client";
// // import from react
// import { useActionState, useState, useEffect } from "react";
// // import action
// import { signUpWithEmail } from "@/app/auth/sign-up/actions";
// // import toast
// import { toast } from "react-toastify";
// // import icons
// import { IoIosEye, IoIosEyeOff } from "react-icons/io";

// export default function SignUpForm() {
//   const [state, formAction, isPending] = useActionState(signUpWithEmail, null);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
//     const formData = new FormData(e.currentTarget);
//     const password = formData.get("password") as string;
//     const confirmPassword = formData.get("confirmPassword") as string;

//     if (password !== confirmPassword) {
//       e.preventDefault();
//       toast.error("Passwords do not match");
//       return;
//     }
//   };

//   // Show error toast when state changes with an error
//   useEffect(() => {
//     if (state?.error) {
//       toast.error(state.error);
//     }
//   }, [state?.error]);

//   return (
//     <form
//       action={formAction}
//       onSubmit={handleSubmit}
//       className="flex flex-col gap-5 min-h-screen items-center justify-center">
//       <div className="w-sm">
//         <h1 className="mt-10 text-center text-2xl/9 font-bold text-white">
//           Create new account
//         </h1>
//       </div>

//       <div className="flex flex-col gap-1.5 w-sm">
//         <label
//           htmlFor="name"
//           className="block text-sm font-medium text-gray-100">
//           Name
//         </label>
//         <input
//           id="name"
//           name="name"
//           type="text"
//           required
//           placeholder="John Doe"
//           autoComplete="username"
//           className="block rounded-md w-full bg-white/5 px-2 py-1.5 placeholder:text-gray-500 text-white outline-1 outline-white/10 focus:outline-blue-600"
//         />
//       </div>

//       <div className="flex flex-col gap-1.5 w-sm">
//         <label
//           htmlFor="email"
//           className="block text-sm font-medium text-gray-100">
//           Email address
//         </label>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           required
//           placeholder="john@my-company.com"
//           autoComplete="email"
//           className="block rounded-md w-full bg-white/5 px-2 py-1.5 placeholder:text-gray-500 text-white outline-1 outline-white/10  focus:outline-blue-600"
//         />
//       </div>

//       <div className="flex flex-col gap-1.5 w-sm">
//         <label
//           htmlFor="password"
//           className="block text-sm font-medium text-gray-100">
//           Password
//         </label>
//         <div className="relative">
//           <input
//             id="password"
//             name="password"
//             type={showPassword ? "text" : "password"}
//             required
//             placeholder="*****"
//             autoComplete="new-password"
//             className="block rounded-md w-full bg-white/5 px-2 py-1.5 pr-10 placeholder:text-gray-500 text-white outline-1 outline-white/10 focus:outline-blue-600"
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
//             aria-label={showPassword ? "Hide password" : "Show password"}>
//             {showPassword ? (
//               <IoIosEyeOff className="w-5 h-5" />
//             ) : (
//               <IoIosEye className="w-5 h-5" />
//             )}
//           </button>
//         </div>
//       </div>

//       <div className="flex flex-col gap-1.5 w-sm">
//         <label
//           htmlFor="confirmPassword"
//           className="block text-sm font-medium text-gray-100">
//           Confirm Password
//         </label>
//         <div className="relative">
//           <input
//             id="confirmPassword"
//             name="confirmPassword"
//             type={showConfirmPassword ? "text" : "password"}
//             required
//             placeholder="*****"
//             autoComplete="new-password"
//             className="block rounded-md w-full bg-white/5 px-2 py-1.5 pr-10 placeholder:text-gray-500 text-white outline-1 outline-white/10 focus:outline-blue-600"
//           />
//           <button
//             type="button"
//             onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//             className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
//             aria-label={
//               showConfirmPassword ? "Hide password" : "Show password"
//             }>
//             {showConfirmPassword ? (
//               <IoIosEyeOff className="w-5 h-5" />
//             ) : (
//               <IoIosEye className="w-5 h-5" />
//             )}
//           </button>
//         </div>
//       </div>

//       <button
//         type="submit"
//         disabled={isPending}
//         className="flex w-sm justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed">
//         {isPending ? "Creating account..." : "Create Account"}
//       </button>
//     </form>
//   );
// }

// "use client";
// // import from react
// import { useActionState, useState, useEffect } from "react";
// // import from next
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// // import action
// import { signUpWithEmail } from "@/app/auth/sign-up/actions";
// // import toast
// import { toast } from "react-toastify";
// // import icons
// import { IoIosEye, IoIosEyeOff } from "react-icons/io";

// export default function SignUpForm() {
//   const router = useRouter();
//   const [state, formAction, isPending] = useActionState(signUpWithEmail, null);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
//     const formData = new FormData(e.currentTarget);
//     const password = formData.get("password") as string;
//     const confirmPassword = formData.get("confirmPassword") as string;

//     if (password !== confirmPassword) {
//       e.preventDefault();
//       toast.error("Passwords do not match");
//       return;
//     }
//   };

//   // Show error toast when there's an error
//   useEffect(() => {
//     if (state?.error) {
//       toast.error(state.error);
//     }
//   }, [state?.error]);

//   // Show success toast and redirect on successful signup
//   useEffect(() => {
//     if (state?.success) {
//       toast.success("Account created! Redirecting...");
//       const timer = setTimeout(() => {
//         router.refresh();
//         router.push('/');
//       }, 1200);
//       return () => clearTimeout(timer);
//     }
//   }, [state?.success, router]);

//   return (
//     <form
//       action={formAction}
//       onSubmit={handleSubmit}
//       className="flex flex-col gap-5 items-center justify-center">
//       <div className="md:w-sm">
//         <h1 className="mt-10 text-center text-2xl/9 font-bold text-white">
//           Create new account
//         </h1>
//       </div>

//       <div className="flex flex-col gap-1.5 w-xs sm:w-sm">
//         <label
//           htmlFor="name"
//           className="block text-sm font-medium text-gray-100">
//           Name
//         </label>
//         <input
//           id="name"
//           name="name"
//           type="text"
//           required
//           placeholder="John Doe"
//           autoComplete="username"
//           className="block rounded-md w-full bg-white/5 px-2 py-1.5 placeholder:text-gray-500 text-white outline-1 outline-white/10 focus:outline-blue-600"
//         />
//       </div>

//       <div className="flex flex-col gap-1.5 w-xs sm:w-sm">
//         <label
//           htmlFor="email"
//           className="block text-sm font-medium text-gray-100">
//           Email address
//         </label>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           required
//           placeholder="john@my-company.com"
//           autoComplete="email"
//           className="block rounded-md w-full bg-white/5 px-2 py-1.5 placeholder:text-gray-500 text-white outline-1 outline-white/10  focus:outline-blue-600"
//         />
//       </div>

//       <div className="flex flex-col gap-1.5 w-xs sm:w-sm">
//         <label
//           htmlFor="password"
//           className="block text-sm font-medium text-gray-100">
//           Password
//         </label>
//         <div className="relative">
//           <input
//             id="password"
//             name="password"
//             type={showPassword ? "text" : "password"}
//             required
//             placeholder="*****"
//             autoComplete="new-password"
//             className="block rounded-md w-full bg-white/5 px-2 py-1.5 pr-10 placeholder:text-gray-500 text-white outline-1 outline-white/10 focus:outline-blue-600"
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
//             aria-label={showPassword ? "Hide password" : "Show password"}>
//             {showPassword ? (
//               <IoIosEyeOff className="w-5 h-5" />
//             ) : (
//               <IoIosEye className="w-5 h-5" />
//             )}
//           </button>
//         </div>
//       </div>

//       <div className="flex flex-col gap-1.5 w-xs sm:w-sm">
//         <label
//           htmlFor="confirmPassword"
//           className="block text-sm font-medium text-gray-100">
//           Confirm Password
//         </label>
//         <div className="relative">
//           <input
//             id="confirmPassword"
//             name="confirmPassword"
//             type={showConfirmPassword ? "text" : "password"}
//             required
//             placeholder="*****"
//             autoComplete="new-password"
//             className="block rounded-md w-full bg-white/5 px-2 py-1.5 pr-10 placeholder:text-gray-500 text-white outline-1 outline-white/10 focus:outline-blue-600"
//           />
//           <button
//             type="button"
//             onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//             className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
//             aria-label={
//               showConfirmPassword ? "Hide password" : "Show password"
//             }>
//             {showConfirmPassword ? (
//               <IoIosEyeOff className="w-5 h-5" />
//             ) : (
//               <IoIosEye className="w-5 h-5" />
//             )}
//           </button>
//         </div>
//       </div>

//       <button
//         type="submit"
//         disabled={isPending}
//         className="flex w-xs sm:w-sm justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed">
//         {isPending ? "Creating account..." : "Create Account"}
//       </button>
//       <p className="w-full text-center text-sm ">
//         Already have an account?{" "}
//         <Link
//           href="/auth/sign-in"
//           className="font-medium text-blue-600 hover:text-blue-500">
//           Sign in
//         </Link>
//       </p>
//     </form>
//   );
// }

// "use client";
// import { useActionState, useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { signUpWithEmail } from "@/app/auth/sign-up/actions";
// import { toast } from "react-toastify";
// import { IoIosEye, IoIosEyeOff } from "react-icons/io";

// // CHANGED: Added constant for minimum password length
// const MIN_PASSWORD_LENGTH = 8;

// export default function SignUpForm() {
//   const router = useRouter();
//   const [state, formAction, isPending] = useActionState(signUpWithEmail, null);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [localError, setLocalError] = useState<string | null>(null);

//   // CHANGED: Enhanced handleSubmit with password length validation
//   const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
//   console.log("handleSubmit called");

//   setLocalError(null);
//   const formData = new FormData(e.currentTarget);

//   // ADDED: Debug logging
//   console.log("Form data entries:", Array.from(formData.entries()));
//   console.log("Name:", formData.get("name"));
//   console.log("Email:", formData.get("email"));
//   console.log("Password:", formData.get("password"));

//   const password = formData.get("password") as string;
//   const confirmPassword = formData.get("confirmPassword") as string;

//   if (password.length < MIN_PASSWORD_LENGTH) {
//     e.preventDefault();
//     setLocalError(`Password must be at least ${MIN_PASSWORD_LENGTH} characters`);
//     return;
//   }

//   if (password !== confirmPassword) {
//     e.preventDefault();
//     setLocalError("Passwords do not match");
//     return;
//   }
// };
//   useEffect(() => {
//     if (state?.error) {
//       setLocalError(state.error);
//       toast.error(state.error);
//     }
//   }, [state?.error]);

//   useEffect(() => {
//     if (state?.success) {
//       toast.success("Account created! Redirecting...");
//       const timer = setTimeout(() => {
//         router.refresh();
//         router.push('/');
//       }, 1200);
//       return () => clearTimeout(timer);
//     }
//   }, [state?.success, router]);

//   const displayError = localError || state?.error;

//   return (
//     <form
//       action={formAction}
//       onSubmit={handleSubmit}
//       className="flex flex-col gap-5 items-center justify-center">
//       <div className="md:w-sm">
//         <h1 className="mt-10 text-center text-2xl/9 font-bold text-white">
//           Create new account
//         </h1>
//       </div>

//       <div className="flex flex-col gap-1.5 w-xs sm:w-sm">
//         <label htmlFor="name" className="block text-sm font-medium text-gray-100">
//           Name
//         </label>
//         <input
//           id="name"
//           name="name"
//           type="text"
//           required
//           placeholder="John Doe"
//           autoComplete="username"
//           className="block rounded-md w-full bg-white/5 px-2 py-1.5 placeholder:text-gray-500 text-white outline-1 outline-white/10 focus:outline-blue-600"
//         />
//       </div>

//       <div className="flex flex-col gap-1.5 w-xs sm:w-sm">
//         <label htmlFor="email" className="block text-sm font-medium text-gray-100">
//           Email address
//         </label>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           required
//           placeholder="john@my-company.com"
//           autoComplete="email"
//           className="block rounded-md w-full bg-white/5 px-2 py-1.5 placeholder:text-gray-500 text-white outline-1 outline-white/10 focus:outline-blue-600"
//         />
//       </div>

//       {/* CHANGED: Added password requirements hint */}
//       <div className="flex flex-col gap-1.5 w-xs sm:w-sm">
//         <label htmlFor="password" className="block text-sm font-medium text-gray-100">
//           Password
//           <span className="text-xs text-gray-400 ml-2">(minimum {MIN_PASSWORD_LENGTH} characters)</span>
//         </label>
//         <div className="relative">
//           <input
//             id="password"
//             name="password"
//             type={showPassword ? "text" : "password"}
//             required
//             placeholder="*****"
//             autoComplete="new-password"
//             className="block rounded-md w-full bg-white/5 px-2 py-1.5 pr-10 placeholder:text-gray-500 text-white outline-1 outline-white/10 focus:outline-blue-600"
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
//             aria-label={showPassword ? "Hide password" : "Show password"}>
//             {showPassword ? <IoIosEyeOff className="w-5 h-5" /> : <IoIosEye className="w-5 h-5" />}
//           </button>
//         </div>
//       </div>

//       <div className="flex flex-col gap-1.5 w-xs sm:w-sm">
//         <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-100">
//           Confirm Password
//         </label>
//         <div className="relative">
//           <input
//             id="confirmPassword"
//             name="confirmPassword"
//             type={showConfirmPassword ? "text" : "password"}
//             required
//             placeholder="*****"
//             autoComplete="new-password"
//             className="block rounded-md w-full bg-white/5 px-2 py-1.5 pr-10 placeholder:text-gray-500 text-white outline-1 outline-white/10 focus:outline-blue-600"
//           />
//           <button
//             type="button"
//             onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//             className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
//             aria-label={showConfirmPassword ? "Hide password" : "Show password"}>
//             {showConfirmPassword ? <IoIosEyeOff className="w-5 h-5" /> : <IoIosEye className="w-5 h-5" />}
//           </button>
//         </div>
//       </div>

//       {displayError && (
//         <div className="w-xs sm:w-sm text-center rounded-md px-3 py-2 text-sm text-red-500 bg-red-500/10 border border-red-500/20">
//           {displayError}
//         </div>
//       )}

//       <button
//         type="submit"
//         disabled={isPending}
//         className="flex w-xs sm:w-sm justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed">
//         {isPending ? "Creating account..." : "Create Account"}
//       </button>

//       <p className="w-full text-center text-sm">
//         Already have an account?{" "}
//         <Link href="/auth/sign-in" className="font-medium text-blue-600 hover:text-blue-500">
//           Sign in
//         </Link>
//       </p>
//     </form>
//   );
// }

"use client";
import { useActionState, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signUpWithEmail } from "@/app/auth/sign-up/actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // ADD THIS LINE
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { ToastContainer } from "react-toastify";

const MIN_PASSWORD_LENGTH = 8;

export default function SignUpForm() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(signUpWithEmail, null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password.length < MIN_PASSWORD_LENGTH) {
      e.preventDefault();
      toast.error(
        `Password must be at least ${MIN_PASSWORD_LENGTH} characters`,
      );
      return;
    }

    if (password !== confirmPassword) {
      e.preventDefault();
      toast.error("Passwords do not match");
      return;
    }
  };

  useEffect(() => {
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state?.error]);

  useEffect(() => {
    if (state?.success) {
      toast.success("Account created!");
      const timer = setTimeout(() => {
        router.refresh();
        router.push("/admin");
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [state?.success, router]);

  return (
    <>
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
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 items-center justify-center bg-black/50 border-border-default border-2 shadow-white shadow-lg rounded-4xl p-6 w-full max-w-md">
        <div className="md:w-sm">
          <h1 className="text-center text-2xl/9 font-bold text-shadow-black-background-black">
            create new account
          </h1>
        </div>

        <div className="flex flex-col gap-1.5 w-xs sm:w-sm">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-shadow-black-background-black">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="po mia"
            autoComplete="username"
            disabled={isPending}
            className="shadow-md shadow-black border-2 border-border-default p-2 w-full text-black placeholder-neutral-800 rounded-4xl bg-neutral-100 tracking-wide h-10 caret-[#ff7f00]"
          />
        </div>

        <div className="flex flex-col gap-1.5 w-xs sm:w-sm">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-shadow-black-background-black">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="enter your email address"
            autoComplete="email"
            disabled={isPending}
            className="shadow-md shadow-black border-2 border-border-default p-2 w-full text-black placeholder-neutral-800 rounded-4xl bg-neutral-100 tracking-wide h-10 caret-[#ff7f00]"
          />
        </div>

        <div className="flex flex-col gap-1.5 w-xs sm:w-sm">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-shadow-black-background-black">
            Password
            <span className="text-xs ml-2">
              (minimum {MIN_PASSWORD_LENGTH} characters)
            </span>
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              placeholder="enter a new password"
              autoComplete="new-password"
              disabled={isPending}
              className="shadow-md shadow-black border-2 border-border-default p-2 w-full text-black placeholder-neutral-800 rounded-4xl bg-neutral-100 tracking-wide h-10 caret-[#ff7f00]"
            />
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

        <div className="flex flex-col gap-1.5 w-xs sm:w-sm">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-shadow-black-background-black">
            Confirm Password
          </label>
          <div className="relative">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              required
              placeholder="confirm your password"
              autoComplete="new-password"
              disabled={isPending}
              className="shadow-md shadow-black border-2 border-border-default p-2 w-full text-black placeholder-neutral-800 rounded-4xl bg-neutral-100 tracking-wide h-10 caret-[#ff7f00]"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
              aria-label={
                showConfirmPassword ? "Hide password" : "Show password"
              }>
              {showConfirmPassword ? (
                <IoIosEyeOff className="w-5 h-5" />
              ) : (
                <IoIosEye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="flex w-xs sm:w-sm mt-2 justify-center rainbow-gradient px-3 py-1.5 text-sm/6 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-border-default shadow-white shadow-md hover:shadow-lg rounded-full">
          <span className="text-shadow-black-background-black">
            {isPending ? "Creating account..." : "Create Account"}
          </span>
        </button>

        <p className="w-full text-center text-sm text-shadow-black-background-black">
          Already have an account?{" "}
          <Link
            href="/auth/sign-in"
            className="font-medium text-blue-600 hover:text-blue-500 ml-1">
            Sign in
          </Link>
        </p>
      </form>
    </>
  );
}
