// components
import ShoppingCart from "./ShoppingCart";
import TotalPrice from "./TotalPrice";

export default function ShoppingCartContainer({
  hiddenMenu,
  cartItems,
  totalPrice,
  itemCount,
}) {
  return (
    <div className="shoppingCartContainer">
      <ShoppingCart cartItems={cartItems} />
      <TotalPrice />
    </div>
  );
}
