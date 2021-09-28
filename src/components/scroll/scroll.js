function Scroll(props) {
  return (
    <div
      style={{
        overflow: "scroll",
        overflowX: "hidden",
        border: "5px solid black",
        height: "650px",
        width: "100vw",
      }}
    >
      {props.children}
    </div>
  );
}

export default Scroll;
