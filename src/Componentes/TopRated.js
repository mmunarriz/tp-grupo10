import React, { useState, useEffect } from "react";
import "../App.css";
import MovieCard from "./MovieCard";
import { useAuth } from "../context/authContext";

function TopRated() {
  const { user } = useAuth();
  console.log(user.email)
  const [movies, setMovies] = useState([]);
  let [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=191528030c357419329af1198edbcb24&language=en-US&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, [page]);

  const controlPage = (e) => {
    switch (e.target.dataset.id) {
      case "next":
        if (page < 500) {
          setPage(page + 1);
        }
        break;
      case "prev":
        if (page > 1) {
          setPage(page - 1);
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="row mt-3">
        <h3>Top rated</h3>
        <div>
          {movies.length > 0 ? (
            <div className="container">
              <div className="grid">
                {movies.map((movieReq) => (
                  <MovieCard key={movieReq.id} {...movieReq} />
                ))}
              </div>
            </div>
          ) : (
            <h5>waiting...</h5>
          )}
        </div>
        <div className="row mb-5"></div>
        <div className="paginacion">
          <button id="btnAnterior" data-id="prev" onClick={controlPage}>
            Prev
          </button>
          <button id="btnSiguiente" data-id="next" onClick={controlPage}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default TopRated;
