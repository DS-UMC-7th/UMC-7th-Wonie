import {useEffect, useState} from "react";
import axios from "axios";
import Card from '../components/Card';

const now_playing = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
                const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}`, {
                    headers: {
                        Authorization: `Bearer Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmQxNTQwYzYxZTIwMjk5MmIzY2Q1NTY0ZWEzMmVlZSIsIm5iZiI6MTcyODIwOTIzMy4xNzgxMTgsInN1YiI6IjY3MDBmNTliMTU5MmVmMWJhOTg1NDZlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IK8j9ZE2Bc1GT9H9TXunx44RWj6536IKpi4HgE5VCII`,
                    }
                })
                setMovies(response.data.results); // 데이터를 가져와서 상태를 업데이트합니다.
        }
        getMovies();
    }, []);

    return (
        <Card movies={movies} />
    );
};


export default now_playing;
