import * as React from "react";
import HotelCardList from "../components/hotelCardList/HotelCardList";
import SearchBox from "../components/searchbox/searchbox";
import Scroll from "../components/scroll/scroll";
import { getAllCards } from "../helpers/fetcher";

export default function AllCardsPage({ user }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [loadedCards, setLoadedCards] = React.useState([]);
  const [searchfield, setSearchfield] = React.useState("");

  React.useEffect(() => {
    setIsLoading(true);
    getAllCards((data) => {
      setLoadedCards(data);
      setIsLoading(false);
    });
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
      <br />
      <h1 className="tc">Choose Hotels!</h1>
      <br />
      <SearchBox searchChange={onSearchChange} />
      <br />
      <Scroll>
        <HotelCardList cards={filteredCards} user={user} delOption={false} />
      </Scroll>
    </div>
  );
}
