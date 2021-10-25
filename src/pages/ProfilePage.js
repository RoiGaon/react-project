import * as React from "react";
import { useHistory } from "react-router-dom";
import Card from "../components/cardUI/Card";
import HotelCardList from "../components/hotelCardList/HotelCardList";
import Scroll from "../components/scroll/scroll";
import SearchBox from "../components/searchbox/searchbox";
import { getMeCards } from "../helpers/fetcher";

export default function ProfilePage({ user }) {
  const history = useHistory();
  const [myCards, setMyCards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchfield, setSearchfield] = React.useState("");
  React.useEffect(() => {
    setIsLoading(true);
    getMeCards(localStorage.getItem("token"), (data) => {
      setMyCards(data);
    });
    setIsLoading(false);
  }, []);

  function onSearchChange(event) {
    setSearchfield(event.target.value);
  }

  const filteredCards = myCards.filter((card) => {
    return card.bizName.toLowerCase().includes(searchfield.toLowerCase());
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  let content;
  if (myCards.length > 0) {
    content = <h4 className="tc">Here's Cards You Created</h4>;
  } else {
    content = (
      <h4 className="tc pointer" onClick={() => history.push("new-card")}>
        Start Create Your Own Cards...!
      </h4>
    );
  }

  return (
    <>
      <br />
      <div className="tc">
        <Card>
          <h1>Hello {user.name} !</h1>
          <p>{user.email}</p>
          {content}
        </Card>
      </div>
      <br />
      {myCards.length > 0 ? (
        <>
          <SearchBox searchChange={onSearchChange} />
          <br />
          <Scroll>
            <HotelCardList cards={filteredCards} delOption={true} user={user} />
          </Scroll>
        </>
      ) : null}
    </>
  );
}
