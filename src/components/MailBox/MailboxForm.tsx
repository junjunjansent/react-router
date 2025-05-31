import { useState } from "react";
import { useNavigate } from "react-router";
import { useMailboxes } from "../../contexts/useMailboxes";
import type { NewMailbox } from "../../App";

const MailboxForm = () => {
  // state and context definition
  const [boxholderFormInput, setBoxholderFormInput] = useState<NewMailbox>({
    boxOwner: "",
    boxSize: "",
  });
  const { addNewMailbox } = useMailboxes();

  // navigation definition
  const navigate = useNavigate();

  // handler of Mailbox Form definition
  const handleMailboxInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setBoxholderFormInput({
      ...boxholderFormInput,
      [name]: value,
    });
  };

  const handleMailboxFormSubmit = (
    event: React.ChangeEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    addNewMailbox(boxholderFormInput);
    setBoxholderFormInput({ boxOwner: "", boxSize: "" });
    navigate("/mailboxes");
  };

  return (
    <>
      <h2>New Mailbox</h2>
      <form onSubmit={handleMailboxFormSubmit}>
        <label>
          Enter a Bokholder: <br />
          <input
            name="boxOwner"
            type="text"
            placeholder="Boxholder Name"
            value={boxholderFormInput.boxOwner}
            onChange={handleMailboxInput}
          ></input>
        </label>
        <label>
          Enter a Bokholder: <br />
          <select
            name="boxSize"
            value={boxholderFormInput.boxSize}
            onChange={handleMailboxInput}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MailboxForm;
