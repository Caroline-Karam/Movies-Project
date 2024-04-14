import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import instance from '../../Axois/instance';

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await instance.get(`/movie/${id}`);
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, []);

  return (
    <>
      <Row className="my-4">
        <Col md={4} className="mb-3">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="img-fluid" />
        </Col>
        <Col md={8} className="d-flex flex-column justify-content-center">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </Col>
      </Row>
    </>
  );
};

export default Details;
