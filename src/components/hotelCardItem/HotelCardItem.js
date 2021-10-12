import { useContext } from "react";
import FavoritesContext from "../../contextStore/favoritesContext";
import Card from "../cardUI/Card";
import classes from "./HotelCardItem.module.css";

function HotelCardItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.isItemFavorite(props._id);

  function toggleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorites(props._id);
    } else {
      favoritesCtx.addFavorites({
        _id: props._id,
        bizName: props.bizName,
        bizImage: props.bizImage,
        bizPhone: props.bizPhone,
        bizAddress: props.bizAddress,
        bizDescription: props.bizDescription,
        userId: props.user._id,
      });
    }
  }

  return (
    <Card width={30}>
      <div className={classes.item}>
        <div className={classes.image}>
          <img src={props.bizImage} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.bizName}</h3>
          <address>{props.bizAddress}</address>
          <p>{props.bizPhone}</p>
          <p>{props.bizDescription}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler}>
            {itemIsFavorite ? "Remove From Favorites" : "Add To Favorites"}
          </button>
        </div>
        <br />
        {props.user.biz ? (
          <div className={classes.actions}>
            <button onClick={() => {}}>Delete Card</button>
          </div>
        ) : null}
      </div>
    </Card>
  );
}

export default HotelCardItem;
