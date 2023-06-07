import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { MovieCard } from "../components";
import axios from "axios";

function Home({ theme, movieList }) {
  console.log(movieList);
  const [filteredMovie, setFilteredMovie] = useState([]);
  const [search, setSearch] = useState("");
  console.log(movieList);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ed6644c047164beb3f3d1168199545df&query=${search}`
      )
      .then(function (response) {
        console.log(response.data);
        if (response.data && response.data.results.length > 0) {
          const moviesWithImages = response.data.results.filter(
            (_m) => _m.backdrop_path !== null
          );

          setFilteredMovie(moviesWithImages);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [search, movieList]);

  return (
    <Container bg={theme} variant={theme}>
      <Row className="mb-4">
        <Col sm="8" md="6" className="mx-auto">
          <InputGroup>
            <InputGroup.Text id="search">Search</InputGroup.Text>
            <FormControl
              class="form-control rounded pill"
              value={search}
              aria-label="search"
              aria-describedby="search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>

      <Row className="g-4">
        {search.length > 0
          ? filteredMovie.map((movie) => (
              <Col key={movie.original_title}>
                <MovieCard moviedetails={movie} />
              </Col>
            ))
          : movieList.map((movie) => (
              <Col key={movie.original_title}>
                <MovieCard moviedetails={movie} />
              </Col>
            ))}
      </Row>
    </Container>
  );
}

export { Home };
