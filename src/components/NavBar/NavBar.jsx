import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import './NavBar.css'

function NavBar() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className="pesa__brand">
            <span>
              <FaRegMoneyBill1 className="pesa__icon" />
            </span>
            PayStream App
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
