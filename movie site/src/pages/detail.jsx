// import styled from "styled-components";
// import detailFetch from "../../hooks/useMovieDetails";
// import creditFetch from "../../hooks/useCredit";
// import { useParams } from "react-router-dom";
import InfoDetail from "../components/InfoDetail";
import CreditDetail from "../components/CreditDetail";

const Detail = () => {
  // const { movieId } = useParams(); 
  // // const { data: movie, isLoading, isError } = detailFetch(`/${movieId}?language=ko`);
  // // const { data: cast, isLoading2, isError2 } = creditFetch(`/${movieId}/credits?language=ko`);

  // if (isLoading) return <div>로딩중...</div>;
  // if (isError) return <div>에러가 발생했습니다.</div>;

//   return (
//     <Container>
//         <MovieInfo>
//             <Title>{movie.title}</Title>
//             <Details>평균 {movie.vote_average} | {movie.release_date?.split('-')[0]} | {movie.runtime}분</Details>
//             <Tagline>{movie.tagline}</Tagline>
//             <Overview>{movie.overview}</Overview>
//         </MovieInfo>
//         <Backdrop src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title} />
//         <CastList>
//             <SectionTitle>감독/출연</SectionTitle>
//             <CastGrid>
//                 {cast.map((member) => (
//                     <CastMember key={member.id}>
//                         <ProfileImage
//                             src={
//                                 member.profile_path
//                                     ? `https://image.tmdb.org/t/p/w185${member.profile_path}`
//                                     : "/path-to-placeholder-image.jpg"
//                             }
//                             alt={member.name}
//                         />
//                         <Name>{member.name}</Name>
//                         <Character>{member.character} (voice)</Character>
//                     </CastMember>
//                 ))}
//             </CastGrid>
//         </CastList>
//     </Container>
// );
// };

  return (
    <>
      <InfoDetail></InfoDetail>
      <CreditDetail></CreditDetail>
    </>
  );
};



export default Detail;

// const Container = styled.div`
//   color: #fff;
//   padding: 20px;
//   position: relative;
// `;

// const Backdrop = styled.img`
//   width: 100%;
//   height: 400px; 
//   object-fit: cover;
//   border-radius: 8px;
//   position: relative;
// `;

// const Content = styled.div`
//   display: flex;
//   position: absolute;
//   top: 0;
//   left: 0;
//   padding: 20px;
//   width: 100%;
//   height: 400px; 
//   border-radius: 8px;
// `;

// const Details = styled.div`
//   padding-left: 10px;
//   background: rgba(0, 0, 0, 0.6);
//   width: 40%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
// `;

// const Title = styled.h1`
//   font-size: 24px;
//   margin-bottom: 10px;
// `;

// const Tagline = styled.h3`
//   font-size: 18px;
//   font-style: italic;
//   margin-bottom: 10px;
// `;

// const Overview = styled.p`
//   margin-bottom: 10px;
// `;

// const AdditionalInfo = styled.div`
//   margin-bottom: 10px;
// `;


// const Container = styled.div`
//     color: white;
//     padding: 20px;
// `;

// const MovieInfo = styled.div`
//     margin-bottom: 30px;
// `;

// const Title = styled.h1`
//     font-size: 2.5rem;
//     margin: 0;
// `;

// const Details = styled.p`
//     font-size: 1rem;
//     color: #aaa;
// `;

// const Tagline = styled.h3`
//     font-style: italic;
//     color: #ddd;
// `;

// const Overview = styled.p`
//     font-size: 1rem;
//     line-height: 1.5;
// `;

// const Backdrop = styled.img`
//     width: 100%;
//     border-radius: 8px;
//     margin-bottom: 20px;
// `;

// const CastList = styled.div`
//     margin-top: 30px;
// `;

// const SectionTitle = styled.h2`
//     font-size: 1.5rem;
//     margin-bottom: 10px;
// `;

// const CastGrid = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     gap: 15px;
// `;

// const CastMember = styled.div`
//     text-align: center;
//     width: 100px;
// `;

// const ProfileImage = styled.img`
//     width: 100px;
//     height: 100px;
//     border-radius: 50%;
//     object-fit: cover;
//     margin-bottom: 5px;
// `;

// const Name = styled.p`
//     font-size: 0.9rem;
//     margin: 0;
// `;

// const Character = styled.p`
//     font-size: 0.8rem;
//     color: #aaa;
// `;
