import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Populer() {
  const [movies, setMovies] = useState([]);
  const naviate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=fb50bac977f14e050ea83c8f1c53fc81"
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  });
  return (
    <div className="populer container ">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map((movie) => {
          return (
            <div className="col" key={movie.id}>
              <div
                onClick={() =>
                  naviate(
                    `/details/${movie.title}/${movie.overview}?img=${movie.poster_path}`
                  )
                }
                className="card"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.original_title}</h5>
                  <div className="card-text">
                    <span>{movie.release_date}</span>
                    <span className="sympol">&#10084;</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Populer;
