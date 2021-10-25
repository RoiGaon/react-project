import NavbarComp from "./Navbar";
import NavRouter from "./NavRouter";
import { BrowserRouter } from "react-router-dom";

export default function CompleteNavBar({ user, set }) {
  return (
    <BrowserRouter>
      <NavbarComp user={user} set={set} />
      <NavRouter set={set} user={user} />
    </BrowserRouter>
  );
}
