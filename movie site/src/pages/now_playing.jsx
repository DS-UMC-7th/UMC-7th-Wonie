// import {useEffect, useState} from "react";
import Card from '../components/Card';
// import { axiosInstance } from "../apis/axios.instance";
// import useCustomFetch from "../../hooks/useCustomFetch";
import CardList from '../components/CardList';
import CardListSkeleton from '../components/Skeleton/card-list-skeleton';
// import { useGetMovies } from '../../hooks/queries/useGetMovies';
// import { useQuery } from '@tanstack/react-query';
import { useGetInfiniteMovies } from '../../hooks/queries/useGetInfinteMovies';
import {useInView} from "react-intersection-observer"
import { useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader"

const Now_playing = () => {
    // const [movies, setMovies] = useState([])

    // useEffect(() => {
    //     const getMovies = async () => {
    //             const response = await axiosInstance.get(`/now_playing?language=ko&page=1`)
    //             setMovies(response.data.results);
    //     }
    //     getMovies();
    // }, []);
    // const { data: movies, isLoading, isError } = useCustomFetch(`/movie/now_playing?language=ko&page=1`);

    // const {data, isPending, isError} = useQuery({
    //     queryFn: () => useGetMovies({category: 'now_playing', pageParam: 1}),
    //     queryKey: ['movies', 'now_playing'],
    //     cacheTime: 10000,
    //     staleTime: 10000,
    // })

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

    // // data.results로 영화 배열 가져오기
    // const movies = data?.results || [];

    console.log('Movies:', movies);

    // console.log(movies);

    //isPending = 데이터를 불러오는 중, 데이터가 로딩 중일 때 IsPending 
    //isLoading = 데이터를 불렁는 중이거나, 재시도 중일 때 true


    // if (isLoading) {
    //     return <CardListSkeleton number={35} />;
    // }

    if (isError) {
        return <div style={{ color: 'white', textAlign: 'center' }}>에러가 발생했습니다.</div>;
    }

    // 합쳐진 movies 리스트 생성
    const allMovies = movies?.pages?.flatMap(page => page.results) || [];

    return (
        <>
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
        </>
    );
};

export default Now_playing;
