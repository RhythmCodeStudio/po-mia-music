// import from next
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  label: string;
}

export default function LinkButton({
  href,
  label,
}: LinkButtonProps) {
  return (
     <Link
          href={href}
          className="flex items-center justify-center font-semibold text-white rounded-full border-[rgba(255,255,255,0.3)] border-2 shadow-white shadow-md py-2 active:scale-95 transition transition-transform transition-shadow duration-200 ease-in-out rainbow-gradient-hover bg-black/50 hover:shadow-lg w-[8rem] lg:w-[10rem] mx-auto">
          <span className="font-indie-flower text-2xl lg:text-3xl xl:text-4xl text-shadow-black-background-black -mb-1">
            {label}
          </span>
        </Link>
  );
}
