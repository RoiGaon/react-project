import AllCardsPage from "../../pages/AllCardsPage";
import AboutPage from "../../pages/AboutPage";
import NewCardPage from "../../pages/NewCardPage";
import FavoritesPage from "../../pages/FavoritesPage";
import BizRegisterPage from "../../pages/BizRegisterPage";
import RegisterPage from "../../pages/RegisterPage";
import SignInPage from "../../pages/SignInPage";
import { BiHome } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import { CgCardSpades } from "react-icons/cg";
import { GrNewWindow } from "react-icons/gr";
import { BiRegistered } from "react-icons/bi";
import { FaSignInAlt } from "react-icons/fa";

export const tabs = [
  {
    name: "Home",
    href: "/all-cards",
    page: AllCardsPage,
    loggedIn: true,
    notBiz: true,
    icon: <BiHome></BiHome>,
  },
  {
    name: "About",
    href: "/about",
    page: AboutPage,
    loggedIn: true,
    notBiz: true,
    icon: <FcAbout></FcAbout>,
  },
  {
    name: "New Card",
    href: "/new-card",
    page: NewCardPage,
    loggedIn: true,
    notBiz: false,
    icon: <GrNewWindow></GrNewWindow>,
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
    name: "Biz Register",
    href: "/biz-register",
    page: BizRegisterPage,
    loggedIn: false,
    icon: <BiRegistered></BiRegistered>,
  },
  {
    name: "Register",
    href: "/register",
    page: RegisterPage,
    loggedIn: false,
    icon: <BiRegistered></BiRegistered>,
  },
];
