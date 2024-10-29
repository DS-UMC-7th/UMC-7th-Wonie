import styled from "styled-components";
import detailFetch from "../../hooks/useMovieDetails";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { movieId } = useParams(); 
  const { data: movie, isLoading, isError } = detailFetch(`/${movieId}?language=ko`);

  if (isLoading) return <div>로딩중...</div>;
  if (isError) return <div>에러가 발생했습니다.</div>;

  return (
      <Container>
          <Backdrop src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Backdrop" />
          <Content>
              <Details>
                <Title>{movie.title}</Title>
                <AdditionalInfo>
                  <p>평균 {Math.round(movie.vote_average * 10) / 10}</p>
                  <p>{movie.release_date}</p>
                  <p>{movie.runtime}분</p>
                </AdditionalInfo>
                <Tagline>{movie.tagline}</Tagline>
                <Overview>{movie.overview}</Overview>
              </Details>
          </Content>
      </Container>
  );
};



export default Detail;

const Container = styled.div`
  color: #fff;
  padding: 20px;
  position: relative;
`;

const Backdrop = styled.img`
  width: 100%;
  height: 400px; 
  object-fit: cover;
  border-radius: 8px;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
  height: 400px; 
  border-radius: 8px;
`;

const Details = styled.div`
  padding-left: 10px;
  background: rgba(0, 0, 0, 0.6);
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  margin-top: 2px;
`;

const Tagline = styled.h3`
  font-size: 18px;
  font-style: italic;
  margin-bottom: 10px;
`;

const Overview = styled.p`
  margin-bottom: 10px;
`;

const AdditionalInfo = styled.div`
  margin-bottom: 10px;
`;
