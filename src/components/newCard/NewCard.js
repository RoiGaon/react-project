import { useRef } from "react";
import Card from "../cardUI/Card";
import classes from "./NewCard.module.css";

function NewCard(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  const phoneInputRef = useRef();

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

    props.addHotel(hotelData);
  }

  return (
    <form className={classes.form} onSubmit={inputHandler}>
      <Card width={100}>
        <div className={classes.control}>
          <label htmlFor="name">Biz Name: </label>
          <input type="text" id="name" required ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Biz Image: </label>
          <input type="url" id="image" required ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Biz Address: </label>
          <input type="text" id="address" required ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="phone">Biz Phone: </label>
          <input type="phone" id="phone" required ref={phoneInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Biz description: </label>
          <textarea
            rows="4"
            id="description"
            required
            ref={descriptionInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Add Card</button>
        </div>
      </Card>
    </form>
  );
}

export default NewCard;
