import { useContext, useState } from "react";
import HotelCardList from "../components/hotelCardList/HotelCardList";
import SearchBox from "../components/searchbox/searchbox";
import FavoritesContext from "../contextStore/favoritesContext";

function FavoritesPage() {
  const [searchfield, setSearchfield] = useState("");
  const favoritesCtx = useContext(FavoritesContext);

  function onSearchChange(event) {
    setSearchfield(event.target.value);
  }

  const filteredFavorites = favoritesCtx.favorites.filter((card) => {
    return card.title.toLowerCase().includes(searchfield.toLowerCase());
  });

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = (
      <>
        <SearchBox searchChange={onSearchChange} />
        <HotelCardList cards={filteredFavorites} />
      </>
    );
  }

  return (
    <section className="tc">
      <h1 className="tc">My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
