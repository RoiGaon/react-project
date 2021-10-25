import * as React from "react";
import HotelCardList from "../components/hotelCardList/HotelCardList";
import SearchBox from "../components/searchbox/searchbox";
import Scroll from "../components/scroll/scroll";

export default function AllCardsPage({ user }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [loadedCards, setLoadedCards] = React.useState([]);
  const [searchfield, setSearchfield] = React.useState("");

  React.useEffect(() => {
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
