import React, { useEffect } from "react";
import CardList from "../components/CardList";
import CardListSkeleton from "../components/Skeleton/card-list-skeleton";
import Card from "../components/Card";
import ClipLoader from "react-spinners/ClipLoader";
import { useInView } from "react-intersection-observer";
import { useGetInfiniteMovies } from "../../hooks/queries/useGetInfinteMovies";
import styled from "styled-components";
import { Container } from "../components/Skeleton/cardskeleton.style";

const OSTPage = () => {
    const {
        data: movies,
        isLoading,
        isFetching,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
        error,
        isError,
    } = useGetInfiniteMovies('now_playing');
    
    const {ref, inView} = useInView({
        threshold: 0,
    })

    useEffect(() => {
        if(inView) {
            !isFetching && hasNextPage && fetchNextPage();
        }
    }, [inView, isFetching, hasNextPage, fetchNextPage]);

    console.log('Movies:', movies);

    if (isError) {
        return <div style={{ color: 'white', textAlign: 'center' }}>에러가 발생했습니다.</div>;
    }

    // 합쳐진 movies 리스트 생성
    const allMovies = movies?.pages?.flatMap(page => page.results) || [];

    return (
        <Container>
            <Header>
            <HeaderContent>
                <HeaderImage
                src="https://an2-img.amz.wtchn.net/image/v2/h6SNEWn-l_toV5vP7vNkgA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5EQXdlRFF3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpVNU1UTXhPVEV6TXpBd09EVXdJbjAuN3UzZEVoN1RWeXhOdzg2N0hjc25IVXE5aVJuRi1ZOFpoV3FCWk9jSXIwMA"
                alt="Header"
                />
                <HeaderText>
                <Title>너의 OST가 들려</Title>
                <Subtitle>영화 47개</Subtitle>
                <Description>
                    "City of stars~" 비슷한 피아노 전주만 들어도 머릿속에 떠오르는 영화가 있듯, 장면만 봐도 머릿속에 OST가 울려 퍼지는 영화들이 있죠. 이렇게 멜로디와 함께 기억되는 장면은 그 시절의 감정까지 되살려주는 경험을 선사해주곤 합니다. 오늘을 좀 더 특별하게 보관하고 싶다면, 음악과 함께 영화를 경험해보는 건 어떨까요?
                </Description>
                </HeaderText>
            </HeaderContent>
            </Header>
            <CardList movies={allMovies.map(movie => <Card key={movie.id} movie={movie} />)} />
            {isFetching && <CardListSkeleton number={20} />}
            <div
                ref={ref}
                style={{
                    marginTop: '50px',
                    justifyContent: 'center',
                    width: '100%',
                }}
            >
                {isFetchingNextPage && <ClipLoader color={'#fff'} />}
            </div>
        </Container>
        // <>
        //     <CardList movies={allMovies.map(movie => <Card key={movie.id} movie={movie} />)} />
        //     {isFetching && <CardListSkeleton number={20} />}
        //     <div
        //         ref={ref}
        //         style={{
        //             marginTop: '50px',
        //             justifyContent: 'center',
        //             width: '100%',
        //         }}
        //     >
        //         {isFetchingNextPage && <ClipLoader color={'#fff'} />}
        //     </div>
        // </>
    );
};

export default OSTPage;


const Header = styled.div`
  padding: 40px 20px;
  border-bottom: 1px solid #333;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 8px;
  margin-right: 20px;
  object-fit: cover;
`;

const HeaderText = styled.div`
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0 0 10px;
  color: white;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #aaa;
  margin: 0 0 20px;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #ccc;
`;

