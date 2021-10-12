import { useContext, useState } from "react";
import HotelCardList from "../components/hotelCardList/HotelCardList";
import SearchBox from "../components/searchbox/searchbox";
import FavoritesContext from "../contextStore/favoritesContext";
import classes from "../layout/Navbar.module.css";

function FavoritesPage({ user }) {
  const [searchfield, setSearchfield] = useState("");
  const favoritesCtx = useContext(FavoritesContext);

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
      <h1 className="tc">
        My Favorites
        <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
      </h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
