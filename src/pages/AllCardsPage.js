import { useEffect, useState } from "react";
import HotelCardList from "../components/hotelCardList/HotelCardList";

function AllCardsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCards, setLoadedCards] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-81fb6-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
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

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <h1 className="tc">Choose An Hotel!</h1>
      <HotelCardList cards={loadedCards} />
    </section>
  );
}

export default AllCardsPage;
