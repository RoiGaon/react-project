import { useHistory } from "react-router-dom";
import NewCard from "../components/newCard/NewCard";
import { insertNewCard } from "../helpers/fetcher";
import { toast } from "react-toastify";

export default function NewCardPage() {
  const history = useHistory();

  function addHotelHandler(hotelData) {
    insertNewCard(hotelData, localStorage.getItem("token"), () => {
      toast("Added Successfully!");
      history.push("/all-cards");
    });
  }

  return (
    <section>
      <br />
      <h1 className="tc">Add New Card</h1>
      <NewCard addHotel={addHotelHandler} />
    </section>
  );
}
