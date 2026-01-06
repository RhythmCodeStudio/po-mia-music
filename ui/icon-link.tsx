// import from vercel
import { track } from "@vercel/analytics";

export default function IconLink({
  href,
  icon: Icon,
  size,
  label,
  showLabel,
  className,
  labelClassName,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  size: number;
  showLabel?: boolean;
  className?: string;
  labelClassName?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center"
      title={label}
      aria-label={label}
      onClick={() => {
        track("contact icon link clicked", { name: `${label}` });
      }}>
      {/* Screen reader only text for accessibility */}
      <Icon size={size} className={className} />
      <span className={`${showLabel ? "ml-2" : "sr-only"} ${labelClassName ?? ""}`}>{label}</span>
    </a>
  );
}
