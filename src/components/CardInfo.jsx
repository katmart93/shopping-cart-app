import Button from "./reusableComponents/Button";

export default function CardInfo({ shoePrice, updateCart }) {
  return (
    <div className="cardInfo">
      <p>${shoePrice}</p>
      <Button addItem={updateCart} />
    </div>
  );
}
