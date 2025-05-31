import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

import "./App.css";
import NavBar from "./components/NavBar";
import AppRoutes from "./components/AppRoutes";
import { MailboxContext } from "./contexts/useMailboxes";

export interface NewMailbox {
  boxOwner: string;
  boxSize: string;
}

export interface Mailbox extends NewMailbox {
  _id: number;
}

const App = () => {
  const [mailboxes, setMailboxes] = useState<Mailbox[]>([]);

  const addNewMailbox = (newMailbox: NewMailbox) => {
    const newMailboxWithID: Mailbox = {
      ...newMailbox,
      _id: mailboxes.length + 1,
    };
    setMailboxes([...mailboxes, newMailboxWithID]);
  };

  return (
    <>
      <MailboxContext.Provider value={{ mailboxes, addNewMailbox }}>
        <NavBar />
        <AppRoutes />
      </MailboxContext.Provider>
    </>
  );
};

export default App;
