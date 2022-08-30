import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "./../../Assets/Logo.svg";
import Button from "react-bootstrap/Button";
import "./Nav.css";

function NavMain() {
  return (
    <Navbar
      className="nav"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            width="203px"
            height="auto"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link class="s" href="#home">
              Home
            </Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#coomunity">Community</Nav.Link>
            <Nav.Item href="#deets">
              {" "}
              <Button variant="primary" size="lg" className="btn-nav">
                Join Discord
                 <a
            href="https://polygonscan.com/address/0x14F0f1191d4D2a7D7c7fB4780EeFA3F3A91BF93E"
            className=""
          >
              </Button>{" "}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMain;
