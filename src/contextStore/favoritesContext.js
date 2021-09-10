import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorites: (favoriteCard) => {},
  removeFavorites: (cardId) => {},
  isItemFavorite: (cardId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoritesHandler(favoriteCard) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteCard);
    });
  }

  function removeFavoritesHandler(cardId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((card) => cardId !== card.id);
    });
  }

  function isItemFavoriteHandler(cardId) {
    return userFavorites.some((card) => cardId === card.id);
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
