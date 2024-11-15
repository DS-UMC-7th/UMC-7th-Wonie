import Card from '../components/Card';
import CardList from '../components/CardList';
import CardListSkeleton from '../components/Skeleton/card-list-skeleton';
import { useQuery } from '@tanstack/react-query';
import { useGetMovies } from '../../hooks/queries/useGetMovies';

const Top_rated = () => {

    const {data, isPending, isError} = useQuery({
        queryFn: () => useGetMovies({category: 'top_rated', pageParam: 1}),
        queryKey: ['movies', 'top_rated'],
        cacheTime: 10000,
        staleTime: 10000,
    })

    const movies = data?.results || [];

    if (isPending) {
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
