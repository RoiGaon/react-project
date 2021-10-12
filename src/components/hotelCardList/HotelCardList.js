import HotelCardItem from "../hotelCardItem/HotelCardItem";

function HotelCardList(props) {
  return (
    <div className="tc">
      {props.cards.map((card) => (
        <HotelCardItem
          key={card._id}
          _id={card._id}
          bizImage={card.bizImage}
          bizName={card.bizName}
          bizPhone={card.bizPhone}
          bizAddress={card.bizAddress}
          bizDescription={card.bizDescription}
          user={props.user}
        />
      ))}
    </div>
  );
}

export default HotelCardList;
