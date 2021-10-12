import Navbar from "../../layout/Navbar";
import NavRouter from "./NavRouter";
import { BrowserRouter } from "react-router-dom";

function CompleteNavBar(props) {
  const { user, set } = props;
  return (
    <BrowserRouter>
      <Navbar user={user} set={set} />
      <NavRouter set={set} user={user} />
    </BrowserRouter>
  );
}

export default CompleteNavBar;
