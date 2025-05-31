import { Routes, Route } from "react-router";
import MailboxDetails from "./MailBox/MailboxDetails";
import MailboxForm from "./MailBox/MailboxForm";
import MailboxList from "./MailBox/MailboxList";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Not the cleanest for a Home Page, need to research a bit more on how to navigate to prevent circular declaration */}
      <Route
        path="/"
        element={
          <main>
            <h1>Post Office</h1>
          </main>
        }
      ></Route>
      <Route path="/mailboxes" element={<MailboxList />}></Route>
      <Route path="/new-mailbox" element={<MailboxForm />}></Route>
      <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />}></Route>
    </Routes>
  );
};

export default AppRoutes;
