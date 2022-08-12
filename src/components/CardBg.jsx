import React from "react";

export default function CardBg({ shoeImg }) {
  return (
    <div className="cardBg">
      <img src={shoeImg} alt="shoe" />
    </div>
  );
}
