import { useEffect, useState } from "react";
import instance from "../../Axois/instance";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addMovieToFavorites } from "../store/slices/favorites";
import {useNavigate} from "react-router-dom";

export default function Movies() {

  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await instance.get(`/movie/popular?page=${currentPage}`);
        setMovies(res.data.results);
        setTotalPages(res.data.total_pages);

      } catch (err) {
        console.log(err);
      }
    };

    getMovies() 
  }, [currentPage]);

 console.log(movies);

 const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

   const favorite = useSelector ((state)=> state.favorites.favorites);
   const dispatch = useDispatch();
  const navigate = useNavigate();

const addMovieToFav = (movie) => {
  dispatch(addMovieToFavorites(movie));
  navigate("/fav")
};

  return (
    <>
    
<Row xs={1} md={4} className="g-4">
      
      {movies.map((movie)=>{

        return  <Col key={movie.id}>
        <Card className="">
          <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>
              {movie.overview}
            </Card.Text>
            <a className="btn btn-primary" href={`/movie/${movie.id}`}>Details</a>
            <button className="btn btn-link" onClick={() => addMovieToFav(movie)}>
                  {favorite.some((mov) => mov.id == movie.id) ? <FaHeart color="red" size="30px" /> : <FaRegHeart size="30px"/>}
                </button>
          </Card.Body>
        </Card>
      </Col>

      })}
       
    </Row>

    <div className="pagination-buttons m-4">
        <button className="btn btn-primary" onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button className="btn btn-primary m-4" onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
     
    </>
  );
}
