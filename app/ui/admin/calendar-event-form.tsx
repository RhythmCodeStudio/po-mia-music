"use client";
// import from react
import { useState } from "react";
// import actions
import { createCalendarEvent } from "../../../actions/actions";
// import components
import ContactFormInput from "../contact-form-input";
import Button from "../button";
import Heading from "../heading";

export default function CalendarEventForm() {
  const [id, setId] = useState(1);
  const [eventTitle, setEventTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [locationName, setLocationName] = useState("");
  const [locationStreetAddress, setLocationStreetAddress] = useState("");
  const [locationCity, setLocationCity] = useState("");
  const [locationState, setLocationState] = useState("");
  const [locationZip, setLocationZip] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setStateVariable: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const value = e.target.value;
    setStateVariable(value);
  };

  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await createCalendarEvent({
        // id: id.toString(),
        title: eventTitle,
        startDate: new Date(date),
        endDate: undefined, // or add an end date field
        startTime: time,
        endTime: undefined, // or add an end time field
        allDay: false, // or add an allDay field
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
      setTime("");
      setLocationName("");
      setLocationStreetAddress("");
      setLocationCity("");
      setLocationState("");
      setLocationZip("");
      setDescription("");
      setImageUrl("");
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
      <form>
        <ContactFormInput
          label="Event Title"
          name="eventTitle"
          inputType="input"
          type="text"
          placeholder=""
          value={eventTitle}
          required={true}
          autoComplete="off"
          errorMessage=""
          handleChange={(e) => handleChange(e, setEventTitle)}
          setStateVariable={setEventTitle}
        />
        <ContactFormInput
          label="Date"
          name="date"
          inputType="input"
          type="text"
          placeholder=""
          value={date}
          required={true}
          autoComplete="off"
          errorMessage=""
          handleChange={(e) => handleChange(e, setDate)}
          setStateVariable={setDate}
        />
        <ContactFormInput
          label="Time"
          name="time"
          inputType="input"
          type="text"
          placeholder=""
          value={time}
          required={true}
          autoComplete="off"
          errorMessage=""
          handleChange={(e) => handleChange(e, setTime)}
          setStateVariable={setTime}
        />
        <ContactFormInput
          label="Location Name"
          name="locationName"
          inputType="input"
          type="text"
          placeholder=""
          value={locationName}
          required={true}
          autoComplete="off"
          errorMessage=""
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
          errorMessage=""
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
          errorMessage=""
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
          errorMessage=""
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
          errorMessage=""
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
