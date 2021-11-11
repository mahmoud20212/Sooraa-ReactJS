import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Link } from "react-router-dom";
import Search from "./Search";

class NavBar extends Component {
  render() {
    const icon = <i style={{ fontSize: "17px" }} className="far fa-user"></i>;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{ fontSize: 30 }} href="/">
            Sooraa
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {this.props.position == "top" ? <Search display="d-flex" /> : ""}
            </Nav>
            {this.props.in == "main2" ? (
              <Nav className="m-1">
                <Link to="/profile" className="nav-link m-1">
                  {icon} <b>الملف الشخصي</b>
                </Link>
              </Nav>
            ) : (
              <Nav className="m-1">
                <NavLink to="/signup" className="nav-link m-1">
                  <b>
                    {" "}
                    <i className="far fa-heart"></i> تسجيل عضو جديد
                  </b>
                </NavLink>
                <NavLink to="/signin" className="nav-link m-1">
                  <b>{icon} تسجيل الدخول</b>
                </NavLink>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
