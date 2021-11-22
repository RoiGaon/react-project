import { createContext, useState, useEffect } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorites: (favoriteCard) => {},
  removeFavorites: (cardId) => {},
  isItemFavorite: (cardId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:3000/api/users/cards/favorites", {
      headers: { "x-auth-token": token },
    })
      .then((response) => response.json())
      .then((data) => setUserFavorites(data));
    return () => {
      console.log("cleanUp");
    };
  }, [token]);

  function addFavoritesHandler(favoriteCard) {
    fetch(
      `http://localhost:3000/api/users/cards/${favoriteCard._id}/favorites`,
      {
        method: "POST",
        body: JSON.stringify(favoriteCard),
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      }
    )
      .then((response) => response.json())
      .then((data) =>
        setUserFavorites((prevUserFavorites) => {
          return prevUserFavorites.concat(data);
        })
      )
      .catch((error) => console.log(error));
  }

  function removeFavoritesHandler(cardId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((card) => cardId !== card._id);
    });
  }

  function isItemFavoriteHandler(cardId) {
    return userFavorites.some((card) => cardId === card._id);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorites: addFavoritesHandler,
    removeFavorites: removeFavoritesHandler,
    isItemFavorite: isItemFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
