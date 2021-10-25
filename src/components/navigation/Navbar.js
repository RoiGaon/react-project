import { useHistory } from "react-router-dom";
import classes from "./Navbar.module.css";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { tabs } from "../../helpers/tabs/tabs";
import { Navbar, Nav, Container, Form } from "react-bootstrap";

export default function NavbarComp({ user, set }) {
  const history = useHistory();

  function onLogOut() {
    localStorage.clear();
    set({});
    history.replace("/");
  }
  return (
    <Navbar className={classes.header} expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {user._id ? (
              <>
                {user._id && user.biz
                  ? tabs
                      .filter((tab) => tab.loggedIn)
                      .map((tab, index) => (
                        <Nav.Link
                          key={index}
                          to={tab.href}
                          as={Link}
                          className={classes.navLink}
                        >
                          {tab.icon} {tab.name}
                        </Nav.Link>
                      ))
                  : tabs
                      .filter((tab) => tab.notBiz)
                      .map((tab, index) => (
                        <Nav.Link
                          key={index}
                          to={tab.href}
                          as={Link}
                          className={classes.navLink}
                        >
                          {tab.icon} {tab.name}
                        </Nav.Link>
                      ))}
              </>
            ) : (
              <>
                {tabs
                  .filter((tab) => !tab.loggedIn)
                  .map((tab, index) => (
                    <Nav.Link
                      key={index}
                      to={tab.href}
                      as={Link}
                      className={classes.navLink}
                    >
                      {tab.icon} {tab.name}
                    </Nav.Link>
                  ))}
              </>
            )}
          </Nav>
          {user._id ? (
            <Form className="d-flex">
              <button
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib lightest-blue"
                onClick={() => onLogOut()}
              >
                <FaSignOutAlt></FaSignOutAlt> LogOut
              </button>
            </Form>
          ) : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
