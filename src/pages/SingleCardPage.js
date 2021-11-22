import React from "react";
import { useParams, useHistory } from "react-router";
import Card from "../components/cardUI/Card";
import classes from "../components/hotelCardItem/HotelCardItem.module.css";
import classes2 from "../components/newCard/NewCard.module.css";

export default function SingleCardPage({ user }) {
  const [cardItem, setCardItem] = React.useState({});
  const { bizImage, bizName, bizAddress, bizPhone, bizDescription } = cardItem;
  const { id } = useParams();
  const history = useHistory();
  const token = localStorage.getItem("token");

  React.useEffect(() => {
    fetch(`http://localhost:3000/api/cards/${id}`, {
      headers: { "x-auth-token": token },
    })
      .then((response) => response.json())
      .then((data) => setCardItem(data))
      .catch((error) => console.log(error));
  }, [id, token]);

  const titleInputRef = React.useRef({ current: bizName });
  const imageInputRef = React.useRef({ current: bizImage });
  const addressInputRef = React.useRef({ current: bizAddress });
  const descriptionInputRef = React.useRef({ current: bizDescription });
  const phoneInputRef = React.useRef({ current: bizPhone });

  const updateHotel = (hotelData) => {
    fetch(`http://localhost:3000/api/cards/${id}`, {
      method: "PATCH",
      body: JSON.stringify(hotelData),
      headers: { "Content-Type": "application/json", "x-auth-token": token },
    })
      .then((response) => response.json())
      .then((data) => history.push("/profile"))
      .catch((error) => console.error(error));
  };

  function inputHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const hotelData = {
      bizName: enteredTitle,
      bizImage: enteredImage,
      bizAddress: enteredAddress,
      bizDescription: enteredDescription,
      bizPhone: enteredPhone,
    };

    updateHotel(hotelData);
  }

  return (
    <>
      {user._id === cardItem.user_id ? (
        <form className={classes2.form} onSubmit={inputHandler}>
          <Card width={`w-100`}>
            <div className={classes2.control}>
              <label htmlFor="name">Biz Name: </label>
              <input
                type="text"
                id="name"
                required
                ref={titleInputRef}
                defaultValue={bizName}
              />
            </div>
            <div className={classes2.control}>
              <label htmlFor="image">Biz Image: </label>
              <input
                type="url"
                id="image"
                required
                ref={imageInputRef}
                defaultValue={bizImage}
              />
            </div>
            <div className={classes2.control}>
              <label htmlFor="address">Biz Address: </label>
              <input
                type="text"
                id="address"
                required
                ref={addressInputRef}
                defaultValue={bizAddress}
              />
            </div>
            <div className={classes2.control}>
              <label htmlFor="phone">Biz Phone: </label>
              <input
                type="phone"
                id="phone"
                required
                ref={phoneInputRef}
                defaultValue={bizPhone}
              />
            </div>
            <div className={classes2.control}>
              <label htmlFor="description">Biz description: </label>
              <textarea
                rows="4"
                id="description"
                required
                ref={descriptionInputRef}
                defaultValue={bizDescription}
              />
            </div>
            <div className={classes2.actions}>
              <button>Update Card</button>
            </div>
          </Card>
        </form>
      ) : (
        <div className="tc ma5 width-50">
          <Card>
            <div className={classes.item}>
              <div className={classes.image}>
                <img src={bizImage} alt={bizName} />
              </div>
              <div className={classes.content}>
                <h3>{bizName}</h3>
                <address>{bizAddress}</address>
                <p>{bizPhone}</p>
                <p>{bizDescription}</p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}
