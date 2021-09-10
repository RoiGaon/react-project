// import classes from "./Card.module.css";
function Card(props) {
  return (
    <div className="tc bg-washed-red w-100 dib br5 pa3 ma2 bw2 shadow-5">
      {props.children}
    </div>
  );
}

export default Card;
