export default function Scroll({ children }) {
  return (
    <div
      style={{
        overflow: "scroll",
        overflowX: "hidden",
        border: "5px solid black",
        height: "700px",
      }}
    >
      {children}
    </div>
  );
}
