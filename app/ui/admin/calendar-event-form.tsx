// import components
import ContactFormInput from "../contact-form-input";


export default function CalendarEventForm() {
  return (
    <div className="flex flex-col space-y-4 w-full">
      <form>
      <ContactFormInput 
        label="Event Title" 
        name="eventTitle" 
        inputType="input"
        type="text"
        placeholder=""
        value=""
        required={true}
        autoComplete="off"
        errorMessage=""
        handleChange={() => {}}
        setStateVariable={() => {}}
      />
      <ContactFormInput 
        label="Date" 
        name="date" 
        inputType="input"
        type="text"
        placeholder=""
        value=""
        required={true}
        autoComplete="off"
        errorMessage=""
        handleChange={() => {}}
        setStateVariable={() => {}}
      />
      <ContactFormInput 
        label="Time" 
        name="time" 
        inputType="input"
        type="text"
        placeholder=""
        value=""
        required={true}
        autoComplete="off"
        errorMessage=""
        handleChange={() => {}}
        setStateVariable={() => {}}
      />
      <ContactFormInput 
        label="Location Name" 
        name="locationName" 
        inputType="input"
        type="text"
        placeholder=""
        value=""
        required={true}
        autoComplete="off"
        errorMessage=""
        handleChange={() => {}}
        setStateVariable={() => {}}
      />
      <ContactFormInput 
        label="Location Street Address" 
        name="locationStreetAddress" 
        inputType="input"
        type="text"
        placeholder=""
        value=""
        required={true}
        autoComplete="off"
        errorMessage=""
        handleChange={() => {}}
        setStateVariable={() => {}}
      />
      <ContactFormInput 
        label="City" 
        name="locationCity" 
        inputType="input"
        type="text"
        placeholder=""
        value=""
        required={true}
        autoComplete="off"
        errorMessage=""
        handleChange={() => {}}
        setStateVariable={() => {}}
      />
      <ContactFormInput 
        label="State" 
        name="locationState" 
        inputType="input"
        type="text"
        placeholder=""
        value=""
        required={true}
        autoComplete="off"
        errorMessage=""
        handleChange={() => {}}
        setStateVariable={() => {}}
      />
      <ContactFormInput 
        label="Zip Code" 
        name="locationZip"
        inputType="input"
        type="text"
        placeholder=""
        value=""
        required={true}
        autoComplete="off"
        errorMessage=""
        handleChange={() => {}}
        setStateVariable={() => {}}
      />
      <ContactFormInput 
        label="Description"
        name="description"
        inputType="textarea"
        type="text"
        placeholder=""
        value=""
        required={false}
        autoComplete="off"
        errorMessage=""
        handleChange={() => {}}
        setStateVariable={() => {}}
      />
      <ContactFormInput
        label="Image URL"
        name="imageUrl"
        inputType="input"
        type="text"
        placeholder=""
        value=""
        required={false}
        autoComplete="off"
        errorMessage=""
        handleChange={() => {}}
        setStateVariable={() => {}}
      />
      </form>
    </div>
  );
}