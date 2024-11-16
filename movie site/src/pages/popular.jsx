import Card from '../components/Card';
import useCustomFetch from "../../hooks/useCustomFetch";
import CardList from '../components/CardList';

const Popular = () => {
    const {data: movies, isLoading, isError} = useCustomFetch(`/movie/popular?language=ko&page=1`);
    
    if (isLoading) return <div>로딩중...</div>;
    if (isError) return <div>에러가 발생했습니다.</div>;

    console.log(movies);

    return (
        <CardList movies={movies?.map((movie) => (
            <Card key={movie.id} movie={movie} />
        ))} />
    );
};


export default Popular;
