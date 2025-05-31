import { useMailboxes } from "../../contexts/useMailboxes";
import { Link } from "react-router";
// import debug from "debug";
// const log = debug("forms: Mailbox List");

const MailboxList = () => {
  // state and context definition
  const { mailboxes } = useMailboxes();
  //   log(mailboxes);

  return (
    <>
      <h2>Mailbox List</h2>
      <ul>
        {mailboxes.map((mailbox) => {
          return (
            <li key={mailbox._id} className="mail-box">
              <Link to={`/mailboxes/${mailbox._id}`}>
                Mailbox {mailbox._id}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MailboxList;
