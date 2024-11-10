import Card from '../components/Card';
import useCustomFetch from "../../hooks/useCustomFetch";
import CardList from '../components/CardList';

const up_coming = () => {
    const {data:movies, isLoading, isError} = useCustomFetch(`/movie/upcoming?language=ko&page=1`);

    if (isLoading) return <div>로딩중...</div>;
    if (isError) return <div>에러가 발생했습니다.</div>;

    return (
        <CardList movies={movies?.map((movie) => (
            <Card key={movie.id} movie={movie} />
        ))} />
    );
};


export default up_coming;
