// import actions
import { getMailingList } from "../../../actions/actions";

export default async function MailingList() {
  const rows = await getMailingList();
  const mailingList = rows.map((row: any) => ({ email: row.email }));
  const numberOfMailingListSubscribers = mailingList.length;

  return (
    <div className="">
      <p>Total Mailing List Subscribers: {numberOfMailingListSubscribers}</p>
      <p>Mailing List:</p>
      <ul>
        {mailingList.map((subscriber, index) => (
          <li key={index}>{subscriber.email}</li>
        ))}
      </ul>
    </div>
  );
}
