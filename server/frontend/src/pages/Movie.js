import React from "react";
import { useParams } from "react-router-dom";

import MovieCard from "../components/MovieCard";
import ReviewBoard from "../components/ReviewBoard";

const Movie = () => {
  const { movieId } = useParams();

  console.log(movieId);
  return (
    <div role="main">
      <h1 className="pageTitle">Movie Reviews</h1>
      <MovieCard movieId={movieId} />
      <ReviewBoard movieId={movieId} />
    </div>
  );
};

export default Movie;
