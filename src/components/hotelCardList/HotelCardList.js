import HotelCardItem from "../hotelCardItem/HotelCardItem";
import classes from "./HotelCardList.module.css";

function HotelCardList(props) {
  return (
    <ul className={classes.list}>
      {props.cards.map((card) => (
        <HotelCardItem
          key={card.id}
          id={card.id}
          image={card.image}
          title={card.title}
          address={card.address}
          description={card.description}
        />
      ))}
    </ul>
  );
}

export default HotelCardList;
