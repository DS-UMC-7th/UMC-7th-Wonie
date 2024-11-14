// import {useEffect, useState} from "react";
import Card from '../components/Card';
// import { axiosInstance } from "../apis/axios.instance";
import useCustomFetch from "../../hooks/useCustomFetch";
import CardList from '../components/CardList';
import CardListSkeleton from '../components/Skeleton/card-list-skeleton';

const Now_playing = () => {
    // const [movies, setMovies] = useState([])

    // useEffect(() => {
    //     const getMovies = async () => {
    //             const response = await axiosInstance.get(`/now_playing?language=ko&page=1`)
    //             setMovies(response.data.results);
    //     }
    //     getMovies();
    // }, []);
    const { data: movies, isLoading, isError } = useCustomFetch(`/movie/now_playing?language=ko&page=1`);

    if (isLoading) {
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
