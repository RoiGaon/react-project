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

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/users/cards/favorites")
  //     .then((response) => response.json())
  //     .then((data) => setUserFavorites(data));
  //   return () => {
  //     console.log("cleanUp");
  //   };
  // }, [userFavorites]);

  function addFavoritesHandler(favoriteCard) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteCard);
    });
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

// function addFavoritesHandler(favoriteCard) {
//   fetch("http://localhost:3000/api/users/cards/favorites", {
//     method: "POST",
//     body: JSON.stringify(favoriteCard),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) =>
//       setUserFavorites((prevUserFavorites) => {
//         return prevUserFavorites.concat(data);
//       })
//     )
//     .catch((error) => console.log(error));
// }
