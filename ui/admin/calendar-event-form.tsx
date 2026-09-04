"use client";
// import from react
import { useState, useEffect } from "react";
// import actions
import {
  createCalendarEvent,
  updateCalendarEvent,
} from "../../actions/actions";
// import components
import ContactFormInput from "../form-input";
import Button from "../button";
import Heading from "../heading";

interface CalendarEventFormProps {
  mode: "create" | "edit";
  eventId: string;
  initialTitle: string;
  initialDate: string;
  initialStartTime: string;
  initialEndTime?: string;
  initialAllDay: boolean;
  initialCost: string;
  initialVenueName: string;
  initialVenueStreetAddress: string;
  initialVenueCity: string;
  initialVenueState: string;
  initialVenueZip: string;
  initialDescription?: string;
  initialImageUrl?: string;
  initialTicketLink?: string;
  initialEventLink?: string;
  initialVenueLink?: string;
  initialMoreInfoLink?: string;
  onClose: () => void;
}

export default function CalendarEventForm({
  mode,
  eventId,
  initialTitle,
  initialDate,
  initialStartTime,
  initialEndTime,
  initialAllDay,
  initialCost,
  initialVenueName,
  initialVenueStreetAddress,
  initialVenueCity,
  initialVenueState,
  initialVenueZip,
  initialDescription,
  initialImageUrl,
  initialTicketLink,
  initialEventLink,
  initialVenueLink,
  initialMoreInfoLink,
  onClose,
}: CalendarEventFormProps) {
  const [id, setId] = useState(1);

  // initialize state with initial props for editing, or empty/default for create ---
  const [eventTitle, setEventTitle] = useState(initialTitle || "");
  const [date, setDate] = useState(initialDate || "");
  // const [endDate, setEndDate] = useState(initialEndDate || "");
  const [time, setTime] = useState(initialStartTime || "");
  const [endTime, setEndTime] = useState(initialEndTime || "");
  const [allDay, setAllDay] = useState(initialAllDay || false);
  const [cost, setCost] = useState(initialCost || "");
  const [venueName, setVenueName] = useState(initialVenueName || "");
  const [venueStreetAddress, setVenueStreetAddress] = useState(
    initialVenueStreetAddress || "",
  );
  const [venueCity, setVenueCity] = useState(initialVenueCity || "");
  const [venueState, setVenueState] = useState(initialVenueState || "");
  const [venueZip, setVenueZip] = useState(initialVenueZip || "");
  const [description, setDescription] = useState(initialDescription || "");
  const [imageUrl, setImageUrl] = useState(initialImageUrl || "");
  const [ticketLink, setTicketLink] = useState(initialTicketLink || "");
  const [eventLink, setEventLink] = useState(initialEventLink || "");
  const [venueLink, setVenueLink] = useState(initialVenueLink || "");
  const [moreInfoLink, setMoreInfoLink] = useState(initialMoreInfoLink || "");
  const [dateTouched, setDateTouched] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // update state if initial props change (for editing different events) ---
  useEffect(() => {
    setEventTitle(initialTitle || "");
    setDate(initialDate || "");
    // setEndDate(initialEndDate || "");
    setTime(initialStartTime || "");
    setEndTime(initialEndTime || "");
    setAllDay(initialAllDay || false);
    setCost(initialCost || "");
    setVenueName(initialVenueName || "");
    setVenueStreetAddress(initialVenueStreetAddress || "");
    setVenueCity(initialVenueCity || "");
    setVenueState(initialVenueState || "");
    setVenueZip(initialVenueZip || "");
    setDescription(initialDescription || "");
    setImageUrl(initialImageUrl || "");
    setTicketLink(initialTicketLink || "");
    setEventLink(initialEventLink || "");
    setVenueLink(initialVenueLink || "");
    setMoreInfoLink(initialMoreInfoLink || "");
  }, [
    initialTitle,
    initialDate,
    // initialEndDate,
    initialStartTime,
    initialEndTime,
    initialAllDay,
    initialCost,
    initialVenueName,
    initialVenueStreetAddress,
    initialVenueCity,
    initialVenueState,
    initialVenueZip,
    initialDescription,
    initialImageUrl,
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
    if (!eventTitle) newErrors.eventTitle = "Event title is required";
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

  const handleFormSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Optionally, scroll to first error or focus
      setDateTouched(true);
      return;
    }

    try {
      if (mode === "edit") {
        await updateCalendarEvent({
          id: eventId,
          title: eventTitle,
          date: new Date(date),
          // endDate: endDate ? new Date(endDate) : undefined,
          dayOfWeek: new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
            weekday: "long",
          }),
          startTime: time,
          endTime: endTime ? endTime : undefined,
          allDay: allDay,
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
          image: imageUrl,
        });
        alert("Event updated successfully!");
        onClose();
      } else {
        await createCalendarEvent({
          id,
          title: eventTitle,
          date: new Date(date),
          dayOfWeek: new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
            weekday: "long",
          }),
          startTime: time,
          endTime: endTime ? endTime : undefined,
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
          image: imageUrl,
        });
        setEventTitle("");
        setDate("");
        // setEndDate("");
        setTime("");
        setEndTime("");
        setAllDay(false);
        setCost("");
        setVenueName("");
        setVenueStreetAddress("");
        setVenueCity("");
        setVenueState("");
        setVenueZip("");
        setDescription("");
        setImageUrl("");
        setTicketLink("");
        setEventLink("");
        setVenueLink("");
        setMoreInfoLink("");
        setErrors({});
        setDateTouched(false);
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
      <form onSubmit={handleFormSubmit}>
        <ContactFormInput
          label="event title"
          name="eventTitle"
          inputType="input"
          type="text"
          placeholder=""
          value={eventTitle}
          required={true}
          autoComplete="off"
          errorMessage={errors.eventTitle || ""}
          handleChange={(e) => handleChange(e, setEventTitle)}
          setStateVariable={setEventTitle}
        />
        <div className="w-full grid grid-cols-1 md:grid-cols-3 md:gap-6">
          <div className="flex flex-col justify-start w-full">
            <label className="m-2 text-left text-base" htmlFor="date">
              date*
              <span className="text-xs"> (required)</span>
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              className="shadow-md shadow-black border-2 border-border-default p-2 w-full text-black placeholder-neutral-800 rounded-3xl bg-neutral-100 tracking-wide h-10"
              value={date}
              autoComplete="off"
              onChange={(e) => setDate(e.target.value)}
              onBlur={() => setDateTouched(true)}
            />
            <p
              className="text-red-200 text-xs mt-1 ml-2 min-h-5 transition-opacity duration-300"
              style={{
                visibility:
                  (dateTouched && !date) || errors.date ? "visible" : "hidden",
                opacity: (dateTouched && !date) || errors.date ? 1 : 0,
              }}>
              {(dateTouched && !date) || errors.date
                ? errors.date || "Date is required"
                : " "}
            </p>
          </div>
          {/* <div className="flex flex-col justify-start w-full mb-4"> */}
          {/* <label className="m-2 text-left text-base" htmlFor="endDate">
            end date
          </label> */}
          {/* <input
            type="date"
            id="endDate"
            name="endDate"
            className="shadow-md shadow-green-500/50 border-2 border-green-500 p-2 text-black placeholder-neutral-800 rounded-2xl bg-neutral-100 tracking-wide h-10 w-full"
            value={endDate}
            autoComplete="off"
            onChange={(e) => setDate(e.target.value)}
            // onBlur={() => setDateTouched(true)}
          /> */}
          {/* <p
            className="text-red-200 text-xs mt-1 ml-2 min-h-[1.25rem] transition-opacity duration-300"
            style={{
              visibility: (dateTouched && !date) || errors.date ? "visible" : "hidden",
              opacity: (dateTouched && !date) || errors.date ? 1 : 0,
            }}>
            {(dateTouched && !date) || errors.date ? (errors.date || "Date is required") : " "}
          </p> */}
          {/* </div> */}
          <ContactFormInput
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
          <ContactFormInput
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
          {/* <ContactFormInput
            label="end time"
            name="endTime"
            inputType="input"
            type="text"
            placeholder=""
            value={endTime}
            required={false}
            autoComplete="off"
            errorMessage=""
            handleChange={(e) => handleChange(e, setEndTime)}
            setStateVariable={setEndTime}
          /> */}
        </div>

        {/* <input
          type="checkbox"
          checked={allDay}
          onChange={() => setAllDay(!allDay)}
          className="ml-2 mt-4 mb-6"
        />
        <label htmlFor="allDay" className="ml-4">
          all day event
        </label> */}

        <ContactFormInput
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
        <ContactFormInput
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
        <ContactFormInput
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
        <ContactFormInput
          label="state"
          name="venueState"
          inputType="input"
          type="text"
          placeholder=""
          value={venueState}
          required={true}
          autoComplete="off"
          errorMessage={errors.venueState || ""}
          handleChange={(e) => handleChange(e, setVenueState)}
          setStateVariable={setVenueState}
        />
        <ContactFormInput
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
        <ContactFormInput
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
        <ContactFormInput
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
        {/* <ContactFormInput
          label="image url"
          name="imageUrl"
          inputType="input"
          type="text"
          placeholder=""
          value={imageUrl}
          required={false}
          autoComplete="off"
          errorMessage=""
          handleChange={(e) => handleChange(e, setImageUrl)}
          setStateVariable={setImageUrl}
        /> */}
        <ContactFormInput
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
        <ContactFormInput
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
        <div className="flex justify-center mt-4">
          <Button
            type="submit"
            label={mode === "edit" ? "edit event" : "create event"}
            // onClick={handleFormSubmit}
            ariaLabel={mode === "edit" ? "edit event" : "create event"}
            className="bg-blue-600 text-white rounded-full px-4 py-2 transition duration-200 text-shadow-black"
          />
          <Button
            label="cancel"
            onClick={onClose}
            ariaLabel="cancel"
            className="ml-2 bg-gray-500 text-shadow-black text-white rounded-full px-4 py-2 transition duration-200"
            type="button"
          />
        </div>
      </form>
    </div>
  );
}
