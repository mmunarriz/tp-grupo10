import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import "../App.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import Swal from "sweetalert2";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({
  id,
  title,
  poster_path,
  backdrop_path,
  vote_average,
  release_date,
  overview,
}) => {

  const { user } = useAuth();
  console.log(user.email)

  const [showMovie, setShowMovie] = useState(false);

  const handleShowMovie = () => setShowMovie(true);
  const handleCloseMovie = () => setShowMovie(false);

  //2 referenciamos la bd con su coleccion

  const favoritasCollection = collection(db, "Favoritas");

  //3 declaramos una función para almacenar

  const addFavorite = async (e) => {
    await addDoc(favoritasCollection, {
      id_movie: id,
      id_user: user.email,
      title: title,
    });
  };

  //5 configuración sweetalert
  const confirmFavorite = (id) => {
    Swal.fire({
      title: "You are going to add the movie!",
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add it!",
    }).then((result) => {
      if (result.isConfirmed) {
        addFavorite(id);
        Swal.fire("Added", "The movie was added to favorites.", "Cute");
      }
    });
  };

  return (
    <div className="card text-center bg-dark mb-2 tarjeta">
      <div className="card-body">
        <img className="card-img-top" src={API_IMG + poster_path} alt="img" />
        <div className="card-body boton-oculto">
          <div>
            <button
              className="css-button css-button-3d css-button-3d--green"
              type="button"
              onClick={handleShowMovie}
            >
              <i class="fa-solid fa-plus"></i> Info
            </button>

          </div>
          <Modal show={showMovie} onHide={handleCloseMovie}>
            <Modal.Header closeButton>
              <Modal.Title>
                <button
                  className="css-button css-button-3d css-button-3d--yellow"
                  type="button"
                  onClick={() => {
                    confirmFavorite(id);
                  }}
                >
                  <i class="fa-solid fa-star"></i> Add favorites
                </button>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                className="card-img-top"
                style={{ width: "14rem" }}
                src={API_IMG + backdrop_path}
                alt="img"
              />
              <h3>{title}</h3>
              <h4>Vote average: {vote_average}</h4>
              <h5>Release Date: {release_date}</h5>
              <br></br>
              <h6>Overview</h6>
              <p>{overview}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseMovie}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;