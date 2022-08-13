import CartImg from "../img/cart.png";

export default function TotalPrice({ totalPrice, itemCount }) {
  return (
    <div className="shoppingCartPrice">
      <h2>Total price: ${totalPrice}</h2>
      <div
        className="allCartItems"
        style={{ background: `url('${CartImg}') no-repeat center/cover` }}
      >
        <div className="itemsAmountWrap">
          <p>{itemCount}</p>
        </div>
      </div>
    </div>
  );
}
