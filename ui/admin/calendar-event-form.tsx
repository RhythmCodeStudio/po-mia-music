"use client";
// import from react
import { useState, useEffect } from "react";
// import from next
import Image from "next/image";
// import from cloudinary
import { CldUploadWidget } from "next-cloudinary";
import { removeCalendarEventImage } from "@/actions/cloudinary";
// import actions
import {
  createCalendarEvent,
  updateCalendarEvent,
} from "../../actions/actions";
// import components
import FormInput from "../form-input";
import FormDateInput from "../form-date-input";
import StateAutoComplete from "../state-auto-complete";
import Button from "../button";
import Heading from "../heading";
// import from utils
import { getDayOfWeek } from "@/utils/utils";

interface CalendarEventFormProps {
  mode: "create" | "edit";
  eventId: string;
  initialDayOfWeek: string;
  initialDate: string;
  initialTime: string;
  initialCost: string;
  initialVenueName: string;
  initialVenueStreetAddress: string;
  initialVenueCity: string;
  initialVenueState: string;
  initialVenueZip: string;
  initialDescription?: string;
  initialImage?: string;
  initialImagePublicId?: string;
  initialTicketLink?: string;
  initialEventLink?: string;
  initialVenueLink?: string;
  initialMoreInfoLink?: string;
  onClose: () => void;
}

export default function CalendarEventForm({
  mode,
  eventId,
  initialDayOfWeek,
  initialDate,
  initialTime,
  initialCost,
  initialVenueName,
  initialVenueStreetAddress,
  initialVenueCity,
  initialVenueState,
  initialVenueZip,
  initialDescription,
  initialImage,
  initialImagePublicId,
  initialTicketLink,
  initialEventLink,
  initialVenueLink,
  initialMoreInfoLink,
  onClose,
}: CalendarEventFormProps) {
  const [uploadingImage, setUploadingImage] = useState(false);
  const [imageUploadError, setImageUploadError] = useState("");
  // initialize state with initial props for editing, or empty/default for create ---
  const [dayOfWeek, setDayOfWeek] = useState(initialDayOfWeek || "");
  const [date, setDate] = useState(initialDate || "");
  const [time, setTime] = useState(initialTime || "");
  const [cost, setCost] = useState(initialCost || "");
  const [venueName, setVenueName] = useState(initialVenueName || "");
  const [venueStreetAddress, setVenueStreetAddress] = useState(
    initialVenueStreetAddress || "",
  );
  const [venueCity, setVenueCity] = useState(initialVenueCity || "");
  const [venueState, setVenueState] = useState(initialVenueState || "");
  const [venueZip, setVenueZip] = useState(initialVenueZip || "");
  const [description, setDescription] = useState(initialDescription || "");
  const [image, setImage] = useState(initialImage || "");
  const [imagePublicId, setImagePublicId] = useState(
    initialImagePublicId || "",
  );
  const [ticketLink, setTicketLink] = useState(initialTicketLink || "");
  const [eventLink, setEventLink] = useState(initialEventLink || "");
  const [venueLink, setVenueLink] = useState(initialVenueLink || "");
  const [moreInfoLink, setMoreInfoLink] = useState(initialMoreInfoLink || "");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [venueStateErrorMessage, setVenueStateErrorMessage] = useState("");

  // update state if initial props change (for editing different events) ---
  useEffect(() => {
    setDayOfWeek(initialDayOfWeek || "");
    setDate(initialDate || "");
    setTime(initialTime || "");
    setCost(initialCost || "");
    setVenueName(initialVenueName || "");
    setVenueStreetAddress(initialVenueStreetAddress || "");
    setVenueCity(initialVenueCity || "");
    setVenueState(initialVenueState || "");
    setVenueZip(initialVenueZip || "");
    setDescription(initialDescription || "");
    setImage(initialImage || "");
    setImagePublicId(initialImagePublicId || "");
    setTicketLink(initialTicketLink || "");
    setEventLink(initialEventLink || "");
    setVenueLink(initialVenueLink || "");
    setMoreInfoLink(initialMoreInfoLink || "");
  }, [
    initialDate,
    initialTime,
    initialDayOfWeek,
    initialCost,
    initialVenueName,
    initialVenueStreetAddress,
    initialVenueCity,
    initialVenueState,
    initialVenueZip,
    initialDescription,
    initialImage,
    initialImagePublicId,
    initialTicketLink,
    initialEventLink,
    initialVenueLink,
    initialMoreInfoLink,
  ]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setStateVariable: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    const value = e.target.value;
    setStateVariable(value);
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    // if (!eventTitle) newErrors.eventTitle = "Event title is required";
    if (!date) newErrors.date = "Date is required";
    if (!time) newErrors.time = "Time is required";
    // if (!cost) newErrors.cost = "Cost is required";
    if (!venueName) newErrors.venueName = "Venue name is required";
    if (!venueStreetAddress)
      newErrors.venueStreetAddress = "Street address is required";
    if (!venueCity) newErrors.venueCity = "City is required";
    if (!venueState) newErrors.venueState = "State is required";
    if (!venueZip) newErrors.venueZip = "Zip code is required";
    return newErrors;
  };

  const handleRemoveImage = async () => {
    try {
      await removeCalendarEventImage(eventId, imagePublicId);
      setImage("");
      setImagePublicId("");
    } catch (error) {
      console.error("Image removal failed:", error);
      setImageUploadError("Could not remove the image. Please try again.");
    }
  };

  const handleFormSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Optionally, scroll to first error or focus
      return;
    }

    try {
      if (mode === "edit") {
        await updateCalendarEvent({
          id: eventId,
          date: new Date(date),
          dayOfWeek,
          time: time,
          cost: cost,
          venueName,
          venueStreetAddress,
          venueCity,
          venueState,
          venueZip,
          description,
          ticketLink,
          eventLink,
          venueLink,
          moreInfoLink,
          image: image,
          imagePublicId: imagePublicId,
        });
        alert("Event updated successfully!");
        onClose();
      } else {
        await createCalendarEvent({
          date: new Date(date),
          dayOfWeek,
          time: time,
          cost: cost,
          venueName,
          venueStreetAddress,
          venueCity,
          venueState,
          venueZip,
          description,
          ticketLink,
          eventLink,
          venueLink,
          moreInfoLink,
          image: image,
          imagePublicId: imagePublicId,
        });
        setDayOfWeek("");
        setDate("");
        setTime("");
        setCost("");
        setVenueName("");
        setVenueStreetAddress("");
        setVenueCity("");
        setVenueState("");
        setVenueZip("");
        setDescription("");
        setImage("");
        setImagePublicId("");
        setTicketLink("");
        setEventLink("");
        setVenueLink("");
        setMoreInfoLink("");
        setErrors({});
        alert("Event created successfully!");
      }
    } catch (err) {
      console.error("Error saving calendar event:", err);
      alert(
        "An error occurred while saving the event. Please try again later.",
      );
    }
  };

  return (
    <div className="flex flex-col space-y-4 w-full">
      <Heading
        headingLevel={2}
        className="text-center text-2xl font-bold"
        text={mode === "edit" ? "edit event" : "add a new event"}
      />
      <form onSubmit={handleFormSubmit} className="w-full max-w-3xl mx-auto">
        <div className="relative mx-auto w-50 h-70.75 overflow-hidden rounded-3xl border-2 border-border-default shadow-md shadow-white bg-gray-800/40">
          {image ? (
            <Image
              src={image}
              alt="Event image preview"
              fill
              sizes="200px"
              className="object-cover"
              unoptimized
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-gray-100">
              No image
            </div>
          )}
        </div>
        <div className="flex justify-center items-center">
          <CldUploadWidget
            signatureEndpoint="/api/cloudinary-signature"
            uploadPreset={
              process.env
                .NEXT_PUBLIC_CLOUDINARY_CALENDAR_EVENT_IMAGE_UPLOAD_PRESET
            }
            options={{
              folder: "the-long-emergency/events",
              clientAllowedFormats: ["jpg", "jpeg", "png", "webp"],
              maxFileSize: 10 * 1024 * 1024,
              multiple: false,
            }}
            onSuccess={(result) => {
              if (result.info && typeof result.info !== "string") {
                setImage(result.info.secure_url);
                setImagePublicId(result.info.public_id);
                setImageUploadError("");
              }
            }}>
            {({ open }) => (
              <Button
                type="button"
                disabled={uploadingImage}
                onClick={image ? handleRemoveImage : () => open()}
                label={image ? "Remove Image" : "upload image"}
                className="mt-4 text-white rounded-full border-border-default border-2 shadow-white shadow-md px-4 py-1 active:scale-95 transition duration-200 ease-in-out rainbow-gradient-hover bg-black/50 hover:shadow-lg"
                labelClassName="text-shadow-black-background-black"
              />
            )}
          </CldUploadWidget>
        </div>

        {imageUploadError && (
          <p className="text-sm text-red-500">{imageUploadError}</p>
        )}
        {/* <div className="w-full grid grid-cols-1 md:grid-cols-3 md:gap-6"> */}
        <FormDateInput
          label="date"
          name="date"
          value={date}
          required={true}
          errorMessage={errors.date || ""}
          handleChange={(e) => handleChange(e, setDate)}
        />
        {dayOfWeek && <p className="text-sm text-gray-400">{dayOfWeek}</p>}

        <FormInput
          label="time"
          name="time"
          inputType="input"
          type="text"
          placeholder=""
          value={time}
          required={true}
          autoComplete="off"
          errorMessage={errors.time || ""}
          handleChange={(e) => handleChange(e, setTime)}
          setStateVariable={setTime}
        />
        <FormInput
          label="cost"
          name="cost"
          inputType="input"
          type="text"
          placeholder=""
          value={cost}
          required={true}
          autoComplete="off"
          errorMessage={errors.cost || ""}
          handleChange={(e) => handleChange(e, setCost)}
          setStateVariable={setCost}
        />
        <FormInput
          label="venue name"
          name="venueName"
          inputType="input"
          type="text"
          placeholder=""
          value={venueName}
          required={true}
          autoComplete="off"
          errorMessage={errors.venueName || ""}
          handleChange={(e) => handleChange(e, setVenueName)}
          setStateVariable={setVenueName}
        />
        <FormInput
          label="street address"
          name="venueStreetAddress"
          inputType="input"
          type="text"
          placeholder=""
          value={venueStreetAddress}
          required={true}
          autoComplete="off"
          errorMessage={errors.venueStreetAddress || ""}
          handleChange={(e) => handleChange(e, setVenueStreetAddress)}
          setStateVariable={setVenueStreetAddress}
        />
        <FormInput
          label="city"
          name="venueCity"
          inputType="input"
          type="text"
          placeholder=""
          value={venueCity}
          required={true}
          autoComplete="off"
          errorMessage={errors.venueCity || ""}
          handleChange={(e) => handleChange(e, setVenueCity)}
          setStateVariable={setVenueCity}
        />
        <StateAutoComplete
          value={venueState}
          errorMessage={venueStateErrorMessage}
          onChange={(nextValue) => {
            setVenueState(nextValue);
            setVenueStateErrorMessage("");
          }}
          onErrorMessageChange={setVenueStateErrorMessage}
        />
        <FormInput
          label="zip code"
          name="venueZip"
          inputType="input"
          type="text"
          placeholder=""
          value={venueZip}
          required={true}
          autoComplete="off"
          errorMessage={errors.venueZip || ""}
          handleChange={(e) => handleChange(e, setVenueZip)}
          setStateVariable={setVenueZip}
        />
        <FormInput
          label="description"
          name="description"
          inputType="textarea"
          type="text"
          placeholder=""
          value={description}
          required={false}
          autoComplete="off"
          errorMessage=""
          handleChange={(e) => handleChange(e, setDescription)}
          setStateVariable={setDescription}
        />
        <FormInput
          label="venue link"
          name="venueLink"
          inputType="input"
          type="text"
          placeholder=""
          value={venueLink}
          required={false}
          autoComplete="off"
          errorMessage=""
          handleChange={(e) => handleChange(e, setVenueLink)}
          setStateVariable={setVenueLink}
        />
        <FormInput
          label="ticket link"
          name="ticketLink"
          inputType="input"
          type="text"
          placeholder=""
          value={ticketLink}
          required={false}
          autoComplete="off"
          errorMessage=""
          handleChange={(e) => handleChange(e, setTicketLink)}
          setStateVariable={setTicketLink}
        />
        <FormInput
          label="more info link"
          name="moreInfoLink"
          inputType="input"
          type="text"
          placeholder=""
          value={moreInfoLink}
          required={false}
          autoComplete="off"
          errorMessage=""
          handleChange={(e) => handleChange(e, setMoreInfoLink)}
          setStateVariable={setMoreInfoLink}
        />
        <div className="flex justify-center gap-6">
          <Button
            type="submit"
            label={mode === "edit" ? "edit event" : "create event"}
            ariaLabel={mode === "edit" ? "edit event" : "create event"}
            className="w-30 mt-4 text-white rounded-full border-border-default border-2 shadow-white shadow-md px-4 py-1 active:scale-95 transition duration-200 ease-in-out rainbow-gradient-hover bg-black/50 hover:shadow-lg"
            labelClassName="text-shadow-black-background-black"
          />
          <Button
            type="button"
            label="cancel"
            onClick={onClose}
            ariaLabel="cancel"
            className="w-30 mt-4 text-white rounded-full border-border-default border-2 shadow-white shadow-md px-4 py-1 active:scale-95 transition duration-200 ease-in-out rainbow-gradient-hover bg-black/50 hover:shadow-lg"
            labelClassName="text-shadow-black-background-black"
          />
        </div>
      </form>
    </div>
  );
}
