// import from vercel
import { track } from "@vercel/analytics";

export default function IconLink({
  href,
  icon: Icon,
  size,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  size: number;
}) {

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center"
      title={label}
      aria-label={label}
      onClick={() => {
        track("contact icon link clicked", { name: `${label}` });
      }}
    >
      {/* Screen reader only text for accessibility */}
      <span className="sr-only">{label}</span>
      <Icon size={size} />
    </a>
  );
}