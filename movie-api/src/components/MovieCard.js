import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";
function MovieCard({ moviedetails }) {
  const [movie, setmovie] = useState(null);

  return (
    <Card style={{ width: "18rem" }} className="addBorder mx-auto">
      <Card.Img
        width="286"
        height="300"
        variant="top"
        src={`https://image.tmdb.org/t/p/w500/${moviedetails.backdrop_path}`}
      />
      <Card.Body>
        <Card.Title>
          <Link class="link" to={`/${moviedetails.id}`}>
            {moviedetails.original_title}
          </Link>
        </Card.Title>
        <Card.Text as="div"></Card.Text>
      </Card.Body>
    </Card>
  );
}
export { MovieCard };
