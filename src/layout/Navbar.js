import { useHistory } from "react-router-dom";
import classes from "./Navbar.module.css";
import classes2 from "./SecondNavbar.module.css";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { tabs } from "../helpers/tabs/tabs";

function Navbar(props) {
  const { user, set } = props;
  const history = useHistory();

  function onLogOut() {
    localStorage.clear();
    set({});
    history.replace("/");
  }
  return (
    <>
      {user._id ? (
        <header className={classes.header}>
          <nav>
            <ul>
              {user._id && user.biz
                ? tabs
                    .filter((tab) => tab.loggedIn)
                    .map((tab, index) => (
                      <li key={index}>
                        <Link to={tab.href}>
                          {tab.icon} {tab.name}
                        </Link>
                      </li>
                    ))
                : tabs
                    .filter((tab) => tab.notBiz)
                    .map((tab, index) => (
                      <li key={index}>
                        <Link to={tab.href}>
                          {tab.icon} {tab.name}
                        </Link>
                      </li>
                    ))}
            </ul>
          </nav>
          <div>
            <button
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib lightest-blue"
              onClick={() => onLogOut()}
            >
              <FaSignOutAlt></FaSignOutAlt> LogOut
            </button>
          </div>
        </header>
      ) : (
        <header className={classes2.header}>
          <nav>
            <ul>
              {tabs
                .filter((tab) => !tab.loggedIn)
                .map((tab, index) => (
                  <li key={index}>
                    <Link to={tab.href}>
                      {tab.icon} {tab.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </header>
      )}
    </>
  );
}

export default Navbar;
