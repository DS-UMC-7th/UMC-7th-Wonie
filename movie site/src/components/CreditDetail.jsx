import styled from "styled-components";
import CreditFetch from "../../hooks/useCreditDetails";
import { useParams } from "react-router-dom";

const CreditDetail = () => {
    const { movieId } = useParams();
    const { data, isLoading, isError } = CreditFetch(`/${movieId}/credits?language=ko`);
  
    if (isLoading) return <div>로딩중...</div>;
    if (isError) return <div>에러가 발생했습니다.</div>;

    console.log(data);
  
    const cast = data?.cast || []; // data가 null일 경우 빈 배열을 사용

  
    return (
      <CastList>
        <SectionTitle>감독/출연</SectionTitle>
        <CastGrid>
          {cast.map((member) => (
            <CastMember key={member.id}>
              <ProfileImage
                src={
                  member.profile_path
                    ? `https://image.tmdb.org/t/p/w185${member.profile_path}`
                    : "/path-to-placeholder-image.jpg"
                }
                alt={member.name}
              />
              <Name>{member.name}</Name>
              <Character>{member.character}</Character>
            </CastMember>
          ))}
        </CastGrid>
      </CastList>
    );
  };
  
  export default CreditDetail;
  
  const CastList = styled.div`
    margin-top: 0px;
    margin-left:20px;
  `;
  
  const SectionTitle = styled.h2`
    font-size: 1.5rem;
    color: #ffffff;
  `;
  
  const CastGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  `;
  
  const CastMember = styled.div`
    text-align: center;
    flex-basis: calc(10% - 15px);
    max-width: calc(10% - 15px); 
    color: #ffffff;
  `;
  
  const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid white;
    object-fit: cover;
    margin-bottom: 5px;
  `;
  
  const Name = styled.p`
    font-size: 0.9rem;
    margin: 0;
  `;
  
  const Character = styled.p`
    font-size: 0.8rem;
    color: #aaa;
  `;

