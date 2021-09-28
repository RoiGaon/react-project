// import classes from "./Layout.module.css";
import Navbar from "./Navbar";

function Layout(props) {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      {/* className={classes.main} */}
    </>
  );
}

export default Layout;
