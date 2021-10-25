import * as React from "react";
import HotelCardList from "../components/hotelCardList/HotelCardList";
import SearchBox from "../components/searchbox/searchbox";
import FavoritesContext from "../contextStore/favoritesContext";
import classes from "../components/navigation/Navbar.module.css";

export default function FavoritesPage({ user }) {
  const [searchfield, setSearchfield] = React.useState("");
  const favoritesCtx = React.useContext(FavoritesContext);

  function onSearchChange(event) {
    setSearchfield(event.target.value);
  }

  const filteredFavorites = favoritesCtx.favorites.filter((card) => {
    return card.bizName.toLowerCase().includes(searchfield.toLowerCase());
  });

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = (
      <>
        <SearchBox searchChange={onSearchChange} />
        <HotelCardList cards={filteredFavorites} user={user} />
      </>
    );
  }

  return (
    <section className="tc">
      <br />
      <h1 className="tc">
        My Favorites
        <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
      </h1>
      {content}
    </section>
  );
}
