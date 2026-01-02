type GoogleMapsLinkProps = {
  addressLineOne: string;
  addressLineTwo: string;
  city: string;
  state: string;
  zipCode: number;
  text?: string;
  className?: string;
};

export default function GoogleMapsLink({
  addressLineOne,
  addressLineTwo,
  city,
  state,
  zipCode,
  text,
  className,
}: GoogleMapsLinkProps) {
  return (
    <div>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          addressLineOne
        )},${encodeURIComponent(addressLineTwo)},${encodeURIComponent(
          city
        )},${encodeURIComponent(state)},${zipCode}`}
        target="_blank"
        rel="noopener noreferrer"
        className={className || "text-blue-600 underline"}
      >
        {text ? (
          <span>{text}</span>
        ) : (
          <>
            <p>{addressLineOne}</p>
            <p>{addressLineTwo}</p>
            <p>
              {city}, {state}
            </p>
            <p>{zipCode}</p>
          </>
        )}
      </a>
    </div>
  );
}