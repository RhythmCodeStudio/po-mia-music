// import components
import NavListItem from "./nav-list-item";

export default function DesktopNav({
  navListItems,
}: {
  navListItems: {
    label: string;
    href: string;
    htmlElement: string;
    category?: string;
  }[];
}) {
  return (
    <nav>
      <ul className="w-full flex gap-12 lg:gap-16 justify-between text-lg 3xl:text-2xl">
        {navListItems.map((item) => (
          <NavListItem 
            key={item.label}
            label={item.label}
            href={item.href}
            htmlElement={item.htmlElement}
          />
        ))}
      </ul>
    </nav>
  );
}