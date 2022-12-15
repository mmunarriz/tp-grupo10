import React, { useEffect, useState } from "react";
import "./Banner.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=191528030c357419329af1198edbcb24&with_networks=213`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data.results[Math.floor(Math.random() * data.results.length)]);
      });
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url('${base_url}${movie?.backdrop_path}')`,
      }}
    >
      <div className="banner--fadeBottom">

        <div className="banner__contents">

          <h1 className="banner__title">
            {movie?.name || movie?.title || movie?.orginal_name}
          </h1>

          <div>
            <p className="banner__description">{movie?.overview}</p>
          </div>

          <div className="botones-descripcion">

            <div className="banner__buttons">
              <button className="banner__button">Play</button>
              <button className="banner__button">More Info</button>
            </div>

          </div>

        </div>

      </div>
    </header>
  );
}


export default Banner;