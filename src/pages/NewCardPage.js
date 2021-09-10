import { useHistory } from "react-router-dom";
import NewCard from "../components/newCard/NewCard";

function NewCardPage() {
  const history = useHistory();

  function addHotelHandler(hotelData) {
    fetch(
      "https://react-getting-started-81fb6-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(hotelData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(() => {
        console.log("post sent successfully");
        history.replace("/all-cards");
      })
      .catch((err) => console.log(err));
  }

  return (
    <section>
      <h1>Add New Card</h1>
      <NewCard addHotel={addHotelHandler} />
    </section>
  );
}

export default NewCardPage;
