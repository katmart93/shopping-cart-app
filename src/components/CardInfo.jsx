import Button from "./reusableComponents/Button";

export default function CardInfo({ shoePrice }) {
  return (
    <div className="cardInfo">
      <p>${shoePrice}</p>
      <Button />
    </div>
  );
}
