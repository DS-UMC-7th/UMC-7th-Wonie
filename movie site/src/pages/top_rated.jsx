import Card from '../components/Card';
import CardList from '../components/CardList';
import CardListSkeleton from '../components/Skeleton/card-list-skeleton';
import { useQuery } from '@tanstack/react-query';
import { useGetMovies } from '../../hooks/queries/useGetMovies';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useGetInfiniteMovies } from '../../hooks/queries/useGetInfinteMovies';
import ClipLoader from 'react-spinners/ClipLoader';

const Top_rated = () => {

    //useQuery 
    // const {data, isPending, isError} = useQuery({
    //     queryFn: () => useGetMovies({category: 'top_rated', pageParam: 1}),
    //     queryKey: ['movies', 'top_rated'],
    //     cacheTime: 10000,
    //     staleTime: 10000,
    // })

    // const movies = data?.results || [];

    // if (isPending) {
    //     return <CardListSkeleton number={35} />;
    // }
    // if (isError) return <div>에러가 발생했습니다.</div>;

    // return (
    //     <CardList movies={movies?.map((movie) => (
    //         <Card key={movie.id} movie={movie} />
    //     ))} />
    // );


    //useInfiniteQuery
    // const {
    //     data: movies,
    //     isLoading,
    //     isFetching,
    //     hasNextPage,
    //     fetchNextPage,
    //     isFetchingNextPage,
    //     error,
    //     isError,
    // } = useGetInfiniteMovies('top_rated');
    
    // const {ref, inView} = useInView({
    //     threshold: 0,
    // })

    // useEffect(() => {
    //     if(inView) {
    //         !isFetching && hasNextPage && fetchNextPage();
    //     }
    // }, [inView, isFetching, hasNextPage, fetchNextPage]);

    // if (isError) {
    //     return <div style={{ color: 'white', textAlign: 'center' }}>에러가 발생했습니다.</div>;
    // }

    // // 합쳐진 movies 리스트 생성
    // const allMovies = movies?.pages?.flatMap(page => page.results) || [];

    // return (
    //     <>
    //         <CardList movies={allMovies.map(movie => <Card key={movie.id} movie={movie} />)} />
    //         {isFetching && <CardListSkeleton number={20} />}
    //         <div
    //             ref={ref}
    //             style={{
    //                 marginTop: '50px',
    //                 justifyContent: 'center',
    //                 width: '100%',
    //             }}
    //         >
    //             {isFetchingNextPage && <ClipLoader color={'#fff'} />}
    //         </div>
    //     </>
    // );



    //Pagination 
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 관리
    const [currentMovies, setCurrentMovies] = useState([]); // 현재 페이지 데이터 관리

    const {
        data: movies,
        isLoading,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
        error,
        isError,
    } = useGetInfiniteMovies("top_rated");

    useEffect(() => {
        // 현재 페이지 데이터를 업데이트
        if (movies?.pages?.[currentPage - 1]?.results) {
            setCurrentMovies(movies.pages[currentPage - 1].results);
        }
    }, [currentPage, movies]);

    const handleNextPage = () => {
        if (hasNextPage && movies?.pages?.length === currentPage) {
            // 현재 페이지가 이미 로드된 페이지라면 fetchNextPage를 호출
            fetchNextPage();
        }
        setCurrentPage((prev) => prev + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    if (isLoading) {
        return <CardListSkeleton number={20} />;
    }

    if (isError) {
        return <div style={{ color: "white", textAlign: "center" }}>에러가 발생했습니다.</div>;
    }

    return (
        <div>
            {/* 현재 페이지 데이터 렌더링 */}
            <CardList movies={currentMovies.map((movie) => <Card key={movie.id} movie={movie} />)} />

            {/* 페이지네이션 버튼 */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                    marginTop: "20px",
                }}
            >
                {/* 이전 페이지 버튼 */}
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    style={{
                        backgroundColor: currentPage === 1 ? "gray" : "#007BFF",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: currentPage === 1 ? "not-allowed" : "pointer",
                    }}
                >
                    Previous
                </button>

                {/* 현재 페이지 표시 */}
                <span style={{ color: "white", fontSize: "16px" }}>Page {currentPage}</span>

                {/* 다음 페이지 버튼 */}
                <button
                    onClick={handleNextPage}
                    disabled={!hasNextPage && currentPage === movies?.pages?.length}
                    style={{
                        backgroundColor: !hasNextPage && currentPage === movies?.pages?.length ? "gray" : "#007BFF",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: !hasNextPage && currentPage === movies?.pages?.length ? "not-allowed" : "pointer",
                    }}
                >
                    Next
                </button>
            </div>

            {/* 로딩 표시 */}
            {isFetchingNextPage && (
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                    <CardListSkeleton number={20} />
                </div>
            )}
        </div>
    );
};


export default Top_rated;
