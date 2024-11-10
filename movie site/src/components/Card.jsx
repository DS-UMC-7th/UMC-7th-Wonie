import { Link } from 'react-router-dom';
import styled from "styled-components";

// const Card = ({ movies }) => {
//     return (
//         <MoviesGrid>
//             {movies.map(movie => (
//                 <StyledLink to={`/movies/${movie.id}`} key={movie.id}>
//                     <MovieContainer>
//                         <MovieItem>
//                             <MoviePoster 
//                                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
//                                 alt={movie.title} 
//                             />
//                             <Overlay />
//                         </MovieItem>
//                         <MovieInfo>
//                             <MovieTitle>{movie.title}</MovieTitle>
//                             <ReleaseDate>{movie.release_date}</ReleaseDate>
//                         </MovieInfo>
//                     </MovieContainer>
//                 </StyledLink>
//             ))}
//         </MoviesGrid>
//     );
// };
  
// export default Card;
  
// const StyledLink = styled(Link)`
//     text-decoration: none;
//     color: inherit;
// `;
  
// const MoviesGrid = styled.ul`
//     display: grid;
//     grid-template-columns: repeat(9, 1fr);
//     gap: 15px;
//     padding: 20px;
//     list-style: none;
// `;
  
// const MovieContainer = styled.li`
//     display: flex;
//     flex-direction: column;
//     width: 100%;
// `;
  
// const MovieItem = styled.div`
//     position: relative;
//     overflow: hidden;
//     border-radius: 8px;
//     width: 100%;
//     color: white;
  
//     &:hover {
//         transition: transform 0.2s ease-in-out;
//     }
  
//     &:hover > div {
//         opacity: 1;
//     }
// `;
  
// const MoviePoster = styled.img`
//     width: 100%;         
//     height: 100%;        
//     object-fit: cover;   
//     border-radius: 8px;
// `;
  
// const Overlay = styled.div`
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: rgba(0, 0, 0, 0.5);
//     opacity: 0;
//     transition: opacity 0.2s ease-in-out; 
// `;
  
// const MovieInfo = styled.div`
//     color: white; 
//     padding: 10px; 
// `;
  
// const MovieTitle = styled.h3`
//     margin: 0; 
//     font-size: 15px; 
// `;
  
// const ReleaseDate = styled.p`
//     margin: 0; 
//     font-size: 10px; 
// `;


const Card = ({ movie }) => {
    return (
        <StyledLink to={`/movies/${movie.id}`}>
            <MovieContainer>
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
        </StyledLink>
    );
};

export default Card;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const MovieContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const MovieItem = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    width: 100%;
    color: white;

    &:hover {
        transition: transform 0.2s ease-in-out;
    }

    &:hover > div {
        opacity: 1;
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
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
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