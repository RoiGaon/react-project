import { useContext } from "react";
import FavoritesContext from "../../contextStore/favoritesContext";
import Card from "../cardUI/Card";
import classes from "./HotelCardItem.module.css";

export default function HotelCardItem({
  _id,
  bizName,
  bizImage,
  bizPhone,
  bizAddress,
  bizDescription,
  user,
  delOption,
}) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.isItemFavorite(_id);

  function toggleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorites(_id);
    } else {
      favoritesCtx.addFavorites({
        _id: _id,
        bizName: bizName,
        bizImage: bizImage,
        bizPhone: bizPhone,
        bizAddress: bizAddress,
        bizDescription: bizDescription,
        userId: user._id,
      });
    }
  }

  return (
    <Card width={`w-30-l w-70-m`}>
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
        <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler}>
            {itemIsFavorite ? "Remove From Favorites" : "Add To Favorites"}
          </button>
        </div>
        <br />
        {user.biz && delOption ? (
          <div className={classes.actions}>
            <button onClick={() => {}}>Delete Card</button>
          </div>
        ) : null}
      </div>
    </Card>
  );
}
