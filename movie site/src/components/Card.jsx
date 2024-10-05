import { MOVIES } from './mocks/movies.js';
// import styled from "styled-components";
// import './MovieList.css'; 

const Card = () => {
  return (
    <div>
      <ul className="movies-grid">
        {MOVIES.results.map(movie => (
          <li key={movie.id} className="movie-item">
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title} 
              className="movie-poster" 
            />
            <div className="overlay">
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;