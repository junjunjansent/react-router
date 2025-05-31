import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mailboxes">Mailboxes</NavLink>
        <NavLink to="/new-mailbox">New Mailbox</NavLink>
      </ul>
    </>
  );
};

export default NavBar;
