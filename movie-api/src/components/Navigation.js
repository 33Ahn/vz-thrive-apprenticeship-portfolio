import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import reels from "../../public/reels.jpg";

function Navigation({ changeTheme, theme }) {
  return (
    <Navbar sticky="top" className={theme}>
      <Container>
        <Navbar.Brand className="title">
          <Image src={reels} width="30" className="me-2" />
          Reel Girls Movie Trailers
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Nav.Link as="div">
            <NavLink to="/" className="allMovies">
              All Movies
            </NavLink>
          </Nav.Link>
        </Nav>
        <div>
          <input type="checkbox" onChange={changeTheme} id="theme-toggle" />
          <label htmlFor="theme-toggle" className="toggle">
            Toggle Theme
          </label>
        </div>
      </Container>
    </Navbar>
  );
}

export { Navigation };
