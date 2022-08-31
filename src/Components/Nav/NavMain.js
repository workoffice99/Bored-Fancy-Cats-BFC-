import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "./../../Assets/Logo-3.svg";
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
            <Nav.Link class="s" href="#about">
              About
            </Nav.Link>
            <Nav.Link href="#road">Road Map</Nav.Link>
            <div className="mr-2">
              <Nav.Link href="#faq">Faq</Nav.Link>
            </div>
            <Nav.Item>
              {" "}
              <Button
                href="https://discord.gg/aEeXz42H"
                variant="primary"
                size="lg"
                className="btn-nav"
                target="_blank"
              >
                Join Discord
              </Button>{" "}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMain;
