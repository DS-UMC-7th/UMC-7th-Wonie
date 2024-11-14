import Card from '../components/Card';
import useCustomFetch from "../../hooks/useCustomFetch";
import CardList from '../components/CardList';
import CardListSkeleton from '../components/Skeleton/card-list-skeleton';

const Top_rated = () => {
    const {data:movies, isLoading, isError} = useCustomFetch(`/movie/top_rated?language=ko&page=1`);

    if (isLoading) {
        return <CardListSkeleton number={35} />;
    }
    if (isError) return <div>에러가 발생했습니다.</div>;

    return (
        <CardList movies={movies?.map((movie) => (
            <Card key={movie.id} movie={movie} />
        ))} />
    );
};


export default Top_rated;
