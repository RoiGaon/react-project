import { useEffect, useState } from "react";
import HotelCardList from "../components/hotelCardList/HotelCardList";
import SearchBox from "../components/searchbox/searchbox";
import Scroll from "../components/scroll/scroll";

function AllCardsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCards, setLoadedCards] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-final-pro-default-rtdb.firebaseio.com/hotels.json")
      .then((response) => response.json())
      .then((data) => {
        const cards = [];
        for (let key in data) {
          const card = {
            id: key,
            ...data[key],
          };
          cards.push(card);
        }
        setIsLoading(false);
        setLoadedCards(cards);
      });
  }, []);

  function onSearchChange(event) {
    setSearchfield(event.target.value);
  }

  const filteredCards = loadedCards.filter((card) => {
    return card.title.toLowerCase().includes(searchfield.toLowerCase());
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1 className="tc">Choose An Hotel!</h1>
      <SearchBox searchChange={onSearchChange} />
      <br />
      <Scroll>
        <HotelCardList cards={filteredCards} />
      </Scroll>
    </div>
  );
}

export default AllCardsPage;
