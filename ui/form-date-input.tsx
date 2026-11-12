import { useRef, useState } from "react";
import { FiCalendar } from "react-icons/fi";
interface FormDateInputProps {
  label: string;
  name: string;
  value: string;
  required: boolean;
  errorMessage: string;
  idPrefix?: string;
  min?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormDateInput({
  label,
  name,
  value,
  required,
  errorMessage,
  idPrefix = "",
  min,
  handleChange,
}: FormDateInputProps) {
  const uniqueInputId = idPrefix ? `${idPrefix}-${name}` : name;
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const openDatePicker = () => {
    inputRef.current?.showPicker?.();
  };

  const showCustomPlaceholder = !value && !isFocused;

  return (
    <div className="flex w-full flex-col justify-start">
      <label
        className="m-2 text-left text-shadow-black-background-black"
        htmlFor={uniqueInputId}>
        {label}
        {required && (
          <>
            <span>*</span>
            <span className="text-xs"> (required)</span>
          </>
        )}
      </label>

      <div className="relative w-full">
        <input
          ref={inputRef}
          type="date"
          id={uniqueInputId}
          name={name}
          value={value}
          min={min}
          required={required}
          onChange={handleChange}
          onClick={openDatePicker}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="shadow-md shadow-black border-2 border-border-default p-2 w-full rounded-3xl bg-neutral-100 tracking-wide h-10 text-black hide-native-date-text"
        />

        {showCustomPlaceholder && (
          <span className="pointer-events-none absolute inset-y-0 left-5 flex items-center text-black">
            mm/dd/yyyy
          </span>
        )}

        <FiCalendar
          aria-hidden="true"
          className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-black"
        />
      </div>

      <p
        className="mt-1 ml-2 min-h-5 text-xs text-red-200 transition-opacity duration-300"
        style={{
          visibility: errorMessage ? "visible" : "hidden",
          opacity: errorMessage ? 1 : 0,
        }}>
        {errorMessage || " "}
      </p>
    </div>
  );
}
