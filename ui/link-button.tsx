// import from next
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  label: string;
}

export default function LinkButton({ href, label }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center font-semibold text-white rounded-full border-border-default border-2 shadow-white shadow-md px-4 py-2 active:scale-95 transition duration-200 ease-in-out rainbow-gradient-hover bg-black/50 hover:shadow-lg mx-auto">
      <span className="font-indie-flower text-2xl lg:text-3xl text-shadow-black-background-black -mb-1">
        {label}
      </span>
    </Link>
  );
}