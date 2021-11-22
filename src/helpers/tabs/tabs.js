import AllCardsPage from "../../pages/AllCardsPage";
import AboutPage from "../../pages/AboutPage";
import NewCardPage from "../../pages/NewCardPage";
import FavoritesPage from "../../pages/FavoritesPage";
import RegisterPage from "../../pages/RegisterPage";
import SignInPage from "../../pages/SignInPage";
import { VscHome } from "react-icons/vsc";
import { BiInfoSquare } from "react-icons/bi";
import { CgCardSpades } from "react-icons/cg";
import { BiAddToQueue } from "react-icons/bi";
import { BiRegistered } from "react-icons/bi";
import { BsPersonBoundingBox } from "react-icons/bs";
import { FaSignInAlt } from "react-icons/fa";
import ProfilePage from "../../pages/ProfilePage";
import SingleCardPage from "../../pages/SingleCardPage";

export const tabs = [
  {
    name: "Profile",
    href: "/profile",
    page: ProfilePage,
    loggedIn: true,
    notBiz: false,
    icon: <BsPersonBoundingBox></BsPersonBoundingBox>,
  },
  {
    name: "Home",
    href: "/all-cards",
    page: AllCardsPage,
    loggedIn: true,
    notBiz: true,
    icon: <VscHome></VscHome>,
  },
  {
    name: "About",
    href: "/about",
    page: AboutPage,
    loggedIn: true,
    notBiz: true,
    icon: <BiInfoSquare></BiInfoSquare>,
  },
  {
    name: "New Card",
    href: "/new-card",
    page: NewCardPage,
    loggedIn: true,
    notBiz: false,
    icon: <BiAddToQueue></BiAddToQueue>,
  },
  {
    name: "Favorites",
    href: "/favorites",
    page: FavoritesPage,
    loggedIn: true,
    notBiz: true,
    icon: <CgCardSpades></CgCardSpades>,
  },
  {
    name: "Sign In",
    href: "/",
    page: SignInPage,
    loggedIn: false,
    icon: <FaSignInAlt></FaSignInAlt>,
  },
  {
    name: "Register",
    href: "/register",
    page: RegisterPage,
    loggedIn: false,
    icon: <BiRegistered></BiRegistered>,
  },
  {
    href: "/:id",
    page: SingleCardPage,
    loggedIn: true,
  },
];
