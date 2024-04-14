import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoTrashBin } from "react-icons/io5";
import { removeMovieFromFavorites } from "./store/slices/favorites";

export default function Favorites() {
  //   1

  const favorite = useSelector ((state)=> state.favorites.favorites);
    console.log(favorite);

  //    2
  const dispatch = useDispatch();

 const removeMovieFromFav = (movieId) => {
  dispatch(removeMovieFromFavorites(movieId));
};

  return (
    <>
      <h1>My Favorites List</h1>

      <Row xs={1} md={4} className="g-4 p-5">
        {favorite.map((movie) => {
          return (
            <Col key={movie.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>{movie.overview}</Card.Text>
                  <Button onClick={() => removeMovieFromFav(movie)}>
                    <IoTrashBin />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}