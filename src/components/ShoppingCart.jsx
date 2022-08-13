import React from "react";

export default function ShoppingCart({ cartItems, removeItem }) {
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
            <i className="fa fa-times" onClick={() => removeItem(item.id)}></i>
          </div>
        </div>
      ))}
    </div>
  );
}
