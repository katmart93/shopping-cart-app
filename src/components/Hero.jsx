import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// components
import Nav from "./Nav";
import Container from "./reusableComponents/Container";
import CardContainer from "./CardContainer";

export default function Hero() {
  const [totalPrice, setTotallPrice] = useState(0);
  const [itemCount, setItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [hiddenMenu, setHiddenMenu] = useState(false);

  return (
    <section className="hero">
      <Nav />
      <Container>
        <CardContainer />
      </Container>
    </section>
  );
}
