// import components
import Heading from "../ui/heading";
import CalendarEvent from "../ui/calendar-event";

export default function Calendar() {
  return (
    <div className="flex flex-col flex-grow items-center justify-center space-y-6">
      <Heading
        text="Calendar"
        headingLevel={2}
        className="text-4xl font-semibold text-shadow-black-background-black"
      />
      <CalendarEvent
        title="po mia plays blacklist christmas"
        date="Sunday, December 28"
        time="7:00 PM"
        locationName="Moshmellow"
        locationStreetAddress="3359 S. Jefferson Ave"
        locationCity="St. Louis"
        locationState="MO"
        locationZip="63118"
        description="This is a sample event description."
      />
    </div>
  );
}