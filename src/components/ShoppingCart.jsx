import React from "react";

export default function ShoppingCart({ cartItems }) {
  return (
    <div className="shoppingCart">
      {cartItems.map((item) => (
        <div key={item.id} className="cardRow">
          <div className="cardImg">
            <p>x{item.cartCount}</p>
            <img src={item.img} alt="shoe" />
          </div>
          <div className="cardPrice">
            <p>${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
