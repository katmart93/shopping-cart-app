// components
import ShoppingCart from "./ShoppingCart";

export default function ShoppingCartContainer({
  hiddenMenu,
  cartItems,
  totalPrice,
  itemCount,
}) {
  return (
    <div className="shoppingCartContainer">
      <ShoppingCart cartItems={cartItems} />
    </div>
  );
}
