import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <span></span>
            PayStream App
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
