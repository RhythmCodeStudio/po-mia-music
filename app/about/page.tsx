// import component
import Heading from "../../ui/heading";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Heading
        text="About"
        headingLevel={2}
        className="font-bold text-4xl text-shadow-black-background-black mt-8"
      />
      </div>
  );
}