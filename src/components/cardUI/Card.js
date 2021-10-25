export default function Card({ width, children }) {
  return (
    <div className={`ma2 tc bg-washed-red ${width} dib br3 pa3 bw2 shadow-5`}>
      {children}
    </div>
  );
}
