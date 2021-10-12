import { useEffect, useState } from "react";
import HotelCardList from "../components/hotelCardList/HotelCardList";
import SearchBox from "../components/searchbox/searchbox";
import Scroll from "../components/scroll/scroll";

function AllCardsPage({ user }) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCards, setLoadedCards] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/api/cards")
      .then((response) => response.json())
      .then((data) => {
        setLoadedCards(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
    return () => console.log("cleanUp");
  }, []);

  function onSearchChange(event) {
    setSearchfield(event.target.value);
  }

  const filteredCards = loadedCards.filter((card) => {
    return card.bizName.toLowerCase().includes(searchfield.toLowerCase());
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1 className="tc">Choose Hotels!</h1>
      <SearchBox searchChange={onSearchChange} />
      <br />
      <Scroll>
        <HotelCardList cards={filteredCards} user={user} />
      </Scroll>
    </div>
  );
}

export default AllCardsPage;
