import classes from "./Layout.module.css";
import Navbar from "./Navbar";

function Layout(props) {
  return (
    <>
      <Navbar />
      <main className={classes.main}>{props.children}</main>
    </>
  );
}

export default Layout;
