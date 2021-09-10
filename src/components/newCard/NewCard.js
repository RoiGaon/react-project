import { useRef } from "react";
import Card from "../cardUI/Card";
import classes from "./NewCard.module.css";

function NewCard(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function inputHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const hotelData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.addHotel(hotelData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={inputHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Card Title: </label>
          <input type="text" id="title" required ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Card Image: </label>
          <input type="url" id="image" required ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Card Address: </label>
          <input type="text" id="address" required ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Card description: </label>
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
      </form>
    </Card>
  );
}

export default NewCard;
