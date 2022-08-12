// components
import CardBg from "./CardBg";
import CardInfo from "./CardInfo";
import { ShoeData } from "./ShoeData";

export default function Card() {
  return (
    <>
      {ShoeData.map((shoe, idx) => (
        <div key={idx} className="card">
          <CardBg shoeImg={shoe.cardImg} />
          <CardInfo shoePrice={shoe.cardPrice} />
        </div>
      ))}
    </>
  );
}
