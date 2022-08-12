// components
import Container from "./reusableComponents/Container";

export default function Nav() {
  return (
    <nav>
      <Container>
        <h2>
          Shoes<span>.</span>
        </h2>
        <div className="menuWrapper"></div>
      </Container>
    </nav>
  );
}
