// import { MOVIES } from '../movies.js';
import styled from "styled-components";

const Card = ({ movies }) => {
  return (
      <MoviesGrid>
          {movies.map(movie => (
              <MovieContainer key={movie.id}>
                  <MovieItem>
                      <MoviePoster 
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                          alt={movie.title} 
                      />
                      <Overlay />
                  </MovieItem>
                  <MovieInfo>
                      <MovieTitle>{movie.title}</MovieTitle>
                      <ReleaseDate>{movie.release_date}</ReleaseDate>
                  </MovieInfo>
              </MovieContainer>
          ))}
      </MoviesGrid>
  );
};

export default Card;

const MoviesGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    gap: 15px;
    padding: 20px;
    list-style: none;
`;

const MovieContainer = styled.li`
    display: flex;
    flex-direction: column; /* 카드와 정보가 세로로 쌓이도록 설정 */
    width: 100%;
`;

const MovieItem = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    width: 100%;
    color: white; /* 흰색 글씨 색상 */

    &:hover {
        transition: transform 0.2s ease-in-out;
    }

    &:hover > div {
        opacity: 1; /* hover 시 overlay를 보이게 함 */
    }
`;

const MoviePoster = styled.img`
    width: 100%;         
    height: 100%;        
    object-fit: cover;   
    border-radius: 8px;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5); /* 반투명 검정 배경 */
    opacity: 0; /* 기본 상태에서 투명함 */
    transition: opacity 0.2s ease-in-out; 
`;

const MovieInfo = styled.div`
    color: white; 
    padding: 10px; 
`;

const MovieTitle = styled.h3`
    margin: 0; 
    font-size: 15px; 
`;

const ReleaseDate = styled.p`
    margin: 0; 
    font-size: 10px; 
`;