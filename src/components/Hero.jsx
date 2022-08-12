import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// components
import Nav from "./Nav";
import Container from "./reusableComponents/Container";
import CardContainer from "./CardContainer";

export default function Hero() {
  return (
    <section className="hero">
      <Nav />
      <Container>
        <CardContainer />
      </Container>
    </section>
  );
}
