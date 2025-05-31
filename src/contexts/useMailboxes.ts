import { createContext, useContext } from "react";
import type { NewMailbox, Mailbox } from "../App";

type MailboxContextType = {
  mailboxes: Mailbox[];
  addNewMailbox: (newMailbox: NewMailbox) => void;
};

export const MailboxContext = createContext<MailboxContextType | undefined>(
  undefined
);

export const useMailboxes = () => {
  const context = useContext(MailboxContext);
  if (!context) {
    throw new Error("useMailboxes to use within a MailboxContext.Provider");
  }
  return context;
};
