import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetails() {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null); //change1
  useEffect(() => {

    console.log(params);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=ed6644c047164beb3f3d1168199545df`
      )
      .then(function (response) {
        console.log(response.data);
        if (response.data) {
          setMovie(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=ed6644c047164beb3f3d1168199545df`
      )
      .then(function (response) {
        console.log(response.data);
        if (response.data && response.data.results.length > 0) {
          // change 3
          let movie_trailer = response.data.results;
          let single_trailer = movie_trailer.find((a) =>
            a.name.includes("Official")
          );
          if (!single_trailer) {
            single_trailer = movie_trailer[0];
          }
          setTrailer(single_trailer.key);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [params.id]);

  if (!movie) {
    return <>Loading Movie Reel's</>;
  }

  return (
    <div>
      <h1 class="movie-title">{movie.original_title}</h1>
      <h4>Movie Rating {movie.vote_average}</h4>
      <h4>Movie Vote {movie.vote_count}</h4>

      {trailer && (
        <div class="testing">
          <iframe
            width="500"
            height="500"
            src={`https://www.youtube.com/embed/${trailer}`}
          ></iframe>
        </div>
      )}
    </div>
  );
}

export { MovieDetails };
