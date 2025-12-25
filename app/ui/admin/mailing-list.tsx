"use client";

// import icons
import { IoIosCopy } from "react-icons/io";
// import components
import Button from "../button";

type MailingListProps = {
  rows: { email: string }[];
};

export default async function MailingList({
  rows
}: MailingListProps) {
  
  const mailingList = rows.map((row: any) => ({ email: row.email }));
  const numberOfMailingListSubscribers = mailingList.length;
  // format list for sending a mass mailing
  const formattedMailingList = mailingList.map(subscriber => subscriber.email).join(", ");
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(formattedMailingList);
      alert("Mailing list copied to clipboard!");
    } catch (err) {
      alert("Failed to copy mailing list: " + err);
    }
  };

  return (
    <div className="">
      <p>Total Mailing List Subscribers: {numberOfMailingListSubscribers}</p>
      <p>Mailing List:</p>
      <ul>
        {mailingList.map((subscriber, index) => (
          <li key={index}>{subscriber.email}</li>
        ))}
      </ul>
      <div>
        <Button
          icon={<IoIosCopy />}
          label="Copy Mailing List"
          onClick={copyToClipboard}
          ariaLabel="Copy mailing list to clipboard"
        />
      </div>
    </div>
  );
}
