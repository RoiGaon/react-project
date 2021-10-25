import HotelCardItem from "../hotelCardItem/HotelCardItem";

export default function HotelCardList({ cards, user, delOption }) {
  return (
    <div className="tc">
      {cards.map((card) => (
        <HotelCardItem
          key={card._id}
          _id={card._id}
          bizImage={card.bizImage}
          bizName={card.bizName}
          bizPhone={card.bizPhone}
          bizAddress={card.bizAddress}
          bizDescription={card.bizDescription}
          user={user}
          delOption={delOption}
        />
      ))}
    </div>
  );
}
