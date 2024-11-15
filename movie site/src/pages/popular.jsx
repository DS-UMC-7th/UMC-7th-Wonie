import Card from '../components/Card';
import CardList from '../components/CardList';
import CardListSkeleton from '../components/Skeleton/card-list-skeleton';
import { useQuery } from '@tanstack/react-query';
import { useGetMovies } from '../../hooks/queries/useGetMovies';
import { useGetInfiniteMovies } from '../../hooks/queries/useGetInfinteMovies';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Popular = () => {

    //useQuery 
    // const {data, isPending, isError} = useQuery({
    //     queryFn: () => useGetMovies({category: 'popular', pageParam: 1}),
    //     queryKey: ['movies', 'popular'],
    //     cacheTime: 10000,
    //     staleTime: 10000,
    // })

    // const movies = data?.results || [];
    
    // if (isPending) {
    //     return <CardListSkeleton number={35} />;
    // }
    // if (isError) return <div>에러가 발생했습니다.</div>;

    // console.log(movies);

    // return (
    //     <CardList movies={movies?.map((movie) => (
    //         <Card key={movie.id} movie={movie} />
    //     ))} />
    // );


    const {
        data: movies,
        isLoading,
        isFetching,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
        error,
        isError,
    } = useGetInfiniteMovies('popular');
    
    const {ref, inView} = useInView({
        threshold: 0,
    })

    useEffect(() => {
        if(inView) {
            !isFetching && hasNextPage && fetchNextPage();
        }
    }, [inView, isFetching, hasNextPage, fetchNextPage]);

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


export default Popular;
