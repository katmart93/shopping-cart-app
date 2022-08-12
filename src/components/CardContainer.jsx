import Card from "./Card";

export default function CardContainer({ updateCart }) {
  return (
    <div className="cardContainer">
      <Card updateCart={updateCart} />
    </div>
  );
}
