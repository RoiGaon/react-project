// import classes from "./Card.module.css";
function Card(props) {
  const { width, flex } = props;
  return (
    <div
      className={`${flex} ma2 tc bg-washed-red w-${width} dib br3 pa3 bw2 shadow-5`}
    >
      {props.children}
    </div>
  );
}

export default Card;
