import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaUser, FaSignOutAlt } from "react-icons/fa";

export default function NavScroll() {
  // You can replace the handleLogin and handleLogout with actual functions
  const handleLogin = () => {
    // Handle login functionality
  };

  const handleLogout = () => {
    // Handle logout functionality
  };

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Link to="/movies" style={{textDecoration: "none"}}>
          <span
            style={{
              fontSize: "20px",
              color: "yellow",
              fontWeight: "bold",
              marginLeft: "15px",
            }}
          >
            W
          </span>
          <span style={{ fontSize: "20px", color: "white" }}>atch</span>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link
              to="/movies"
              className="mx-3"
              style={{ color: "white", textDecoration: "none" }}
            >
              Movies
            </Link>
            <Link to="/fav" style={{ color: "white", textDecoration: "none" }}>
              Favorite
            </Link>
            <Link
              to="/about"
              className="mx-3"
              style={{ color: "white", textDecoration: "none" }}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              style={{ color: "white", textDecoration: "none" }}
            >
              Contact Us
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          {/* Login and Logout Icons */}
          <Nav className="ms-2">
            <Link to="/login" className="text-white" onClick={handleLogin}>
              <FaUser />
            </Link>
            <Link to ="/signup" variant="link" className="text-white " style ={{marginLeft:"10px"}} onClick={handleLogout}>
              <FaSignOutAlt />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
