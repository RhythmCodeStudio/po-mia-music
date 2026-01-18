// "use client";

// // import icons
// import { IoIosCopy } from "react-icons/io";
// // import components
// import Button from "../button";

// type MailingListProps = {
//   rows: { email: string }[];
// };

// export default function MailingList({ rows }: MailingListProps) {
//   const mailingList = rows.map((row: any) => ({ email: row.email }));
//   const numberOfMailingListSubscribers = mailingList.length;
//   // format list for sending a mass mailing
//   const formattedMailingList = mailingList
//     .map((subscriber) => subscriber.email)
//     .join(", ");
//   const copyToClipboard = async () => {
//     try {
//       await navigator.clipboard.writeText(formattedMailingList);
//       alert("Mailing list copied to clipboard!");
//     } catch (err) {
//       alert("Failed to copy mailing list: " + err);
//     }
//   };

//   return (
//     <div className="">
//       <p>Total Mailing List Subscribers: {numberOfMailingListSubscribers}</p>
//       <p>Mailing List:</p>
//       <ul>
//         {mailingList.map((subscriber, index) => (
//           <li key={index}>{subscriber.email}</li>
//         ))}
//       </ul>
//       <div>
//         <Button
//           icon={<IoIosCopy />}
//           label="Copy Mailing List"
//           onClick={copyToClipboard}
//           ariaLabel="Copy mailing list to clipboard"
//         />
//       </div>
//       <a
//         href={`mailto:?bcc=${encodeURIComponent(formattedMailingList)}`}
//         className="inline-block mt-2 underline text-blue-600 hover:text-blue-800"
//         title="Open email client with mailing list in BCC">
//         Compose Email to Mailing List
//       </a>
//     </div>
//   );
// }


"use client";
// import from react
import { useState } from "react";
// import icons
import { IoIosCopy } from "react-icons/io";
// import components
import Button from "../button";
import Heading from "../heading";
import Head from "next/head";

type MailingListProps = {
  rows: { email: string }[];
};

export default function MailingList({ rows }: MailingListProps) {
  const mailingList = rows.map((row: any) => ({ email: row.email }));
  const numberOfMailingListSubscribers = mailingList.length;
  // format list for sending a mass mailing
  const formattedMailingList = mailingList
    .map((subscriber) => subscriber.email)
    .join(", ");
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(formattedMailingList);
      alert("Mailing list copied to clipboard!");
    } catch (err) {
      alert("Failed to copy mailing list: " + err);
    }
  };

  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:pomiamusic@gmail.com?bcc=${encodeURIComponent(
      formattedMailingList
    )}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubject("");
    setBody("");
  };

  return (
    <div className="w-full flex flex-col justify-center">
      <Heading
        text="Mailing List Administration"
        headingLevel={2}
        className="font-bold text-3xl mb-4 text-center"
      />
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
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2 w-full">
        <Heading
          text="Email Mailing List"
          headingLevel={3}
          className="font-bold text-2xl"
        />
        <label>
          Subject:
          <input
            type="text"
            className="border rounded px-2 py-1 w-full"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </label>
        <label>
          Body:
          <textarea
            className="border rounded px-2 py-1 w-full"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={4}
            required
          />
        </label>
        <Button
          type="submit"
          label="Email Mailing List"
          ariaLabel="Open email client to email mailing list"
        />
      </form>
    </div>
  );
}
