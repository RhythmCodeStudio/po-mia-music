import { signOut } from "@/actions/actions";
// import { redirect } from "next/navigation";
// import components
import Button from "./button";
// import icon
import { RiLogoutCircleRLine } from "react-icons/ri";

export default function SignOutButton() {
  const handleSignOut = async () => {
    try {
      signOut();

      // Optionally, you can add a success message or redirect the user after signing out
      // alert("Signed out successfully!");
    } catch (error) {
      console.error("Error signing out:", error);
      // alert("Failed to sign out. Please try again.");
    }
  };

  return (
    <Button
      onClick={handleSignOut}
      className="text-black hover:underline"
      // label="Sign Out"
      type="button"
      ariaLabel="Sign out of your account"
      icon={<RiLogoutCircleRLine size={32} />}
    />
  );
}