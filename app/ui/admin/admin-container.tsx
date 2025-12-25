// import actions
import { getMailingList } from "../../../actions/actions";
import MailingList from "./mailing-list";

export default async function AdminContainer() {
  const mailingList = await getMailingList();
  // Transform the result to match { email: string }[]
  const rows = mailingList.map((row: any) => ({ email: row.email }));
  return <MailingList rows={rows} />;
}