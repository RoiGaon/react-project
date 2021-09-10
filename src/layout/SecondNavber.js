import classes from "./SecondNavber.module.css";
import { Link } from "react-router-dom";

function SecondNavber() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/">SignIn</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default SecondNavber;
