import { useContext } from "react";
import FavoritesContext from "../contextStore/favoritesContext";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  const favoritesCtx = useContext(FavoritesContext);
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
            <Link to="/favorites">
              Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div className={classes.logout}>
        <Link to="/">LogOut</Link>
      </div>
    </header>
  );
}

export default Navbar;
