import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/all-cards">Home</Link>
          </li>
          <li>
            <Link to="/new-card">New Card</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <input
              className="tc pa2 ba b-washed-blue bg-washed-red"
              type="search"
              placeholder="Search"
            />
          </li>
          <li>
            <Link to="/">LogOut</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
