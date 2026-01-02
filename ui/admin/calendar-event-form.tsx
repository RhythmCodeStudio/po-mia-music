"use client";
// import from react
import { useState } from "react";
// import actions
import { createCalendarEvent } from "../../actions/actions";
// import components
import ContactFormInput from "../contact-form-input";
import Button from "../button";
import Heading from "../heading";

export default function CalendarEventForm() {
  const [id, setId] = useState(1);
  const [eventTitle, setEventTitle] = useState("");
  const [date, setDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [time, setTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [allDay, setAllDay] = useState(false);
  const [locationName, setLocationName] = useState("");
  const [locationStreetAddress, setLocationStreetAddress] = useState("");
  const [locationCity, setLocationCity] = useState("");
  const [locationState, setLocationState] = useState("");
  const [locationZip, setLocationZip] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [dateTouched, setDateTouched] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setStateVariable: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const value = e.target.value;
    setStateVariable(value);
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!eventTitle) newErrors.eventTitle = "Event title is required";
    if (!date) newErrors.date = "Date is required";
    if (!time) newErrors.time = "Time is required";
    if (!locationName) newErrors.locationName = "Location name is required";
    if (!locationStreetAddress)
      newErrors.locationStreetAddress = "Street address is required";
    if (!locationCity) newErrors.locationCity = "City is required";
    if (!locationState) newErrors.locationState = "State is required";
    if (!locationZip) newErrors.locationZip = "Zip code is required";
    return newErrors;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Optionally, scroll to first error or focus
      setDateTouched(true);
      return;
    }

    try {
      await createCalendarEvent({
        title: eventTitle,
        startDate: new Date(date),
        endDate: endDate ? new Date(endDate) : undefined,
        startTime: time,
        endTime: endTime ? endTime : undefined,
        allDay: allDay,
        locationName,
        locationStreetAddress,
        locationCity,
        locationState,
        locationZip,
        description,
        image: imageUrl,
      });
      // Clear form fields after successful submission
      setId(id + 1);
      setEventTitle("");
      setDate("");
      setEndDate("");
      setTime("");
      setEndTime("");
      setAllDay(false);
      setLocationName("");
      setLocationStreetAddress("");
      setLocationCity("");
      setLocationState("");
      setLocationZip("");
      setDescription("");
      setImageUrl("");
      setErrors({});
      setDateTouched(false);
      alert("Event created successfully!");
    } catch (err) {
      console.error("Error creating calendar event:", err);
      alert(
        "An error occurred while creating the event. Please try again later."
      );
    }
  };

  return (
    <div className="flex flex-col space-y-4 w-full">
      <Heading
        headingLevel={2}
        className="text-center text-2xl font-bold"
        text="Add a New Event"
      />
      <form onSubmit={handleFormSubmit}>
        <ContactFormInput
          label="Event Title"
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
        <div className="flex flex-col justify-start w-full">
          <label className="m-2 text-left text-base" htmlFor="date">
            Date*
            <span className="text-xs"> (required)</span>
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            className="shadow-md shadow-green-500/50 border-2 border-green-500 p-2 max-w-xs w-full text-black placeholder-neutral-800 rounded-2xl bg-neutral-100 tracking-wide h-10 w-full"
            value={date}
            autoComplete="off"
            onChange={(e) => setDate(e.target.value)}
            onBlur={() => setDateTouched(true)}
          />
          <p
            className="text-red-200 text-xs mt-1 ml-2 min-h-[1.25rem] transition-opacity duration-300"
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
        <div className="flex flex-col justify-start w-full mb-4">
          <label className="m-2 text-left text-base" htmlFor="endDate">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            className="shadow-md shadow-green-500/50 border-2 border-green-500 p-2 w-xs text-black placeholder-neutral-800 rounded-2xl bg-neutral-100 tracking-wide h-10 w-full"
            value={endDate}
            autoComplete="off"
            onChange={(e) => setDate(e.target.value)}
            // onBlur={() => setDateTouched(true)}
          />
          {/* <p
            className="text-red-200 text-xs mt-1 ml-2 min-h-[1.25rem] transition-opacity duration-300"
            style={{
              visibility: (dateTouched && !date) || errors.date ? "visible" : "hidden",
              opacity: (dateTouched && !date) || errors.date ? 1 : 0,
            }}>
            {(dateTouched && !date) || errors.date ? (errors.date || "Date is required") : " "}
          </p> */}
        </div>
        <ContactFormInput
          label="Time"
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
          label="End Time"
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
        />
        <input
          type="checkbox"
          checked={allDay}
          onChange={() => setAllDay(!allDay)}
          className="ml-2 mt-4 mb-6"
        />
        <label htmlFor="allDay" className="ml-4">
          All Day Event
        </label>
        <ContactFormInput
          label="Location Name"
          name="locationName"
          inputType="input"
          type="text"
          placeholder=""
          value={locationName}
          required={true}
          autoComplete="off"
          errorMessage={errors.locationName || ""}
          handleChange={(e) => handleChange(e, setLocationName)}
          setStateVariable={setLocationName}
        />
        <ContactFormInput
          label="Location Street Address"
          name="locationStreetAddress"
          inputType="input"
          type="text"
          placeholder=""
          value={locationStreetAddress}
          required={true}
          autoComplete="off"
          errorMessage={errors.locationStreetAddress || ""}
          handleChange={(e) => handleChange(e, setLocationStreetAddress)}
          setStateVariable={setLocationStreetAddress}
        />
        <ContactFormInput
          label="City"
          name="locationCity"
          inputType="input"
          type="text"
          placeholder=""
          value={locationCity}
          required={true}
          autoComplete="off"
          errorMessage={errors.locationCity || ""}
          handleChange={(e) => handleChange(e, setLocationCity)}
          setStateVariable={setLocationCity}
        />
        <ContactFormInput
          label="State"
          name="locationState"
          inputType="input"
          type="text"
          placeholder=""
          value={locationState}
          required={true}
          autoComplete="off"
          errorMessage={errors.locationState || ""}
          handleChange={(e) => handleChange(e, setLocationState)}
          setStateVariable={setLocationState}
        />
        <ContactFormInput
          label="Zip Code"
          name="locationZip"
          inputType="input"
          type="text"
          placeholder=""
          value={locationZip}
          required={true}
          autoComplete="off"
          errorMessage={errors.locationZip || ""}
          handleChange={(e) => handleChange(e, setLocationZip)}
          setStateVariable={setLocationZip}
        />
        <ContactFormInput
          label="Description"
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
          label="Image URL"
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
        />
        <div className="flex justify-center mt-4">
          <Button
            label="Create Event"
            onClick={handleFormSubmit}
            ariaLabel="Create Event"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          />
        </div>
      </form>
    </div>
  );
}
