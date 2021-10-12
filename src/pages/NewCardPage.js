import { useHistory } from "react-router-dom";
import NewCard from "../components/newCard/NewCard";
import { insertNewCard } from "../helpers/fetcher";
import { toast } from "react-toastify";

function NewCardPage() {
  const history = useHistory();

  function addHotelHandler(hotelData) {
    insertNewCard(hotelData, localStorage.getItem("token"), () => {
      toast("Added Successfully!");
      history.push("/all-cards");
    });

    // fetch("https://react-final-pro-default-rtdb.firebaseio.com/hotels.json", {
    //   method: "POST",
    //   body: JSON.stringify(hotelData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then(() => {
    //     console.log("post sent successfully");
    //     history.replace("/all-cards");
    //   })
    //   .catch((err) => console.log(err));
  }

  return (
    <section>
      <h1 className="tc">Add New Card</h1>
      <NewCard addHotel={addHotelHandler} />
    </section>
  );
}

export default NewCardPage;
