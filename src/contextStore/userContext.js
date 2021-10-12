import { createContext, useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FavoritesContext from "./favoritesContext";
import { toast } from "react-toastify";
import { getMeData, registerNewAccount, signInUser } from "../helpers/fetcher";

const UserContext = createContext({
  name: null,
  email: null,
  biz: null,
  cards: [],
  addUser: (data) => {},
  removeUser: (userId) => {},
  isUserSigned: (data) => {},
});

export function UserContextProvider(props) {
  const history = useHistory();
  const [userDetails, setUserDetails] = useState();
  const favoritesCtx = useContext(FavoritesContext);

  useEffect(() => {
    getMeData(localStorage.getItem("token"), (data) => {
      setUserDetails(data);
    });
  }, []);

  function addUserHandler(data) {
    registerNewAccount(data, (response) => {
      if (response._id) {
        toast("Account Created Successfully");
        setUserDetails(data);
        history.replace("/all-cards");
      } else {
        toast("Eror Acount was not created");
      }
    });
  }

  function removeUserHandler(userId) {
    getMeData(localStorage.removeItem("token"));
    setUserDetails(userId === false);
    history.replace("/");
  }

  function isUserSignedHandler(data) {
    signInUser(data, (response) => {
      if (response.token) {
        toast("Welcome to U");
        localStorage.setItem("token", response.token);
        getMeData(response.token, (data) => {
          setUserDetails(data);
        });
        history.replace("/all-cards");
      } else {
        toast("Fail to log in");
      }
    });
  }

  const context = {
    name: userDetails.name,
    email: userDetails.email,
    biz: userDetails.biz,
    cards: favoritesCtx.favorites,
    addUser: addUserHandler,
    removeUser: removeUserHandler,
    isUserSigned: isUserSignedHandler,
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
