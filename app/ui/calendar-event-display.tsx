// import from next
import Image from "next/image";
// import components
import Heading from "./heading";

interface CalendarEventProps {
  title: string;
  startDate: string;
  endDate?: string;
  startTime: string;
  endTime?: string;
  locationName: string;
  locationStreetAddress: string;
  locationCity: string;
  locationState: string;
  locationZip: string;
  imageUrl?: string;
  description?: string;
}

export default function CalendarEventDisplay(
  {
    title,
    startDate,
    endDate,
    startTime,
    endTime,
    locationName,
    locationStreetAddress,
    locationCity,
    locationState,
    locationZip,
    description,
    imageUrl,
  }: CalendarEventProps
) {
  return (
    <section className="bg-black/50 border-[rgba(255,255,255,0.3)] border-2 shadow-white shadow-lg rounded-4xl p-6 z-50 w-full">
      <Heading
        text= {title}
        headingLevel={3}
        className="text-xl font-bold mb-2 text-shadow-black-background-black text-center"
      />
      <div className="text-center">
      <p className="mb-1 text-shadow-black-background-black">
       {startDate} {endDate ? `- ${endDate}` : ''}
      </p>
      <p className="mb-1 text-shadow-black-background-black">
       {startTime} {endTime ? `- ${endTime}` : ''}
      </p>
      <p className="mb-1 text-shadow-black-background-black">
       {locationName} 
      </p>
      <p className="mb-1 text-shadow-black-background-black">
       {locationStreetAddress}
      </p>
      <p className="mb-1 text-shadow-black-background-black">
       {locationCity}, {locationState}
      </p>
      <p className="mb-1 text-shadow-black-background-black">
       {locationZip}
      </p>
      {description && (
        <p className="mb-1">
          {description}
        </p>
      )}
      {imageUrl && (
        <div className="mt-4">
          <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      )}
      </div>
    </section>
  );
}