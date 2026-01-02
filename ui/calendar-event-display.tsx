// import from next
import Image from "next/image";
// import components
import Heading from "./heading";
import GoogleMapsLink from "./google-maps-link";
// import from utils
import { formatDate } from "../utils/utils";

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

  const formattedStartDate = formatDate(startDate);
  console.log("formattedStartDate:", formattedStartDate);
  const formattedEndDate = endDate ? formatDate(endDate) : undefined;
  console.log("formattedEndDate:", formattedEndDate);

  return (
    <section className="bg-black/50 border-[rgba(255,255,255,0.3)] border-2 shadow-white shadow-lg rounded-4xl p-6 z-50 w-full text-center">
       <p className="text-shadow-black-background-black">
       {formattedStartDate} {formattedEndDate ? `- ${formattedEndDate}` : ''}
      </p>
      <Heading
        text= {title}
        headingLevel={3}
        className="text-lg font-bold mb-2 text-shadow-black-background-black"
      />
      <div className="">
      {/* <p className="mb-1 text-shadow-black-background-black">
       {formattedStartDate} {formattedEndDate ? `- ${formattedEndDate}` : ''}
      </p> */}
      <p className="mb-1 text-shadow-black-background-black">
       {startTime} {endTime ? `- ${endTime}` : ''}
      </p>
      <GoogleMapsLink
        addressLineOne={locationStreetAddress}
        addressLineTwo={locationName}
        city={locationCity}
        state={locationState}
        zipCode={Number(locationZip)}
        className="mb-1 text-shadow-black-background-black underline"
      />
      {/* <p className="mb-1 text-shadow-black-background-black">
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
      </p> */}
      {/* {description && (
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
      )} */}
      </div>
    </section>
  );
}