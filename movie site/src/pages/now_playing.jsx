// import {useEffect, useState} from "react";
import Card from '../components/Card';
// import { axiosInstance } from "../apis/axios.instance";
// import useCustomFetch from "../../hooks/useCustomFetch";
import CardList from '../components/CardList';
import CardListSkeleton from '../components/Skeleton/card-list-skeleton';
import { useGetMovies } from '../../hooks/queries/useGetMovies';
import { useQuery } from '@tanstack/react-query';

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

    const {data, isPending, isError} = useQuery({
        queryFn: () => useGetMovies({category: 'now_playing', pageParam: 1}),
        queryKey: ['movies', 'now_playing'],
        cacheTime: 10000,
        staleTime: 10000,
    })

    // data.results로 영화 배열 가져오기
    const movies = data?.results || [];

    console.log(movies);

    //isPending = 데이터를 불러오는 중, 데이터가 로딩 중일 때 IsPending 
    //isLoading = 데이터를 불렁는 중이거나, 재시도 중일 때 true


    if (isPending) {
        return <CardListSkeleton number={35} />;
    }

    if (isError) {
        return <div style={{ color: 'white', textAlign: 'center' }}>에러가 발생했습니다.</div>;
    }

    return (
        <CardList
            movies={movies?.map((movie) => (
                <Card key={movie.id} movie={movie} />
            ))}
        />
    );
};


export default Now_playing;
