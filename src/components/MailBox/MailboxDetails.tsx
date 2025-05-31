import { useParams } from "react-router";
import { useMailboxes } from "../../contexts/useMailboxes";

// import debug from "debug";
// const log = debug("forms: Mailbox Details");

const MailboxDetails = () => {
  // id and context definition
  const { mailboxId } = useParams();
  const { mailboxes } = useMailboxes();

  const selectedMailbox = mailboxes.find((mailbox) =>
    mailboxId ? mailbox._id === parseInt(mailboxId) : false
  );

  //   log(mailboxes);
  //   log(mailboxId);
  //   log(selectedMailbox);

  const mailboxDetails = selectedMailbox ? (
    <>
      <h2>Mailbox {selectedMailbox._id}</h2>{" "}
      <h3>Boxholder: {selectedMailbox.boxOwner}</h3>
      <h3>Box Size: {selectedMailbox.boxSize}</h3>
    </>
  ) : (
    <h3>Mailbox Not Found!</h3>
  );

  return mailboxDetails;
};

export default MailboxDetails;
