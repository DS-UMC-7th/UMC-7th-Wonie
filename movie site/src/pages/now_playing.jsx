import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import CardList from "../components/CardList";
import CardListSkeleton from "../components/Skeleton/card-list-skeleton";
import { useGetInfiniteMovies } from "../../hooks/queries/useGetInfinteMovies";

const Now_playing = () => {
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
    } = useGetInfiniteMovies("now_playing");

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

export default Now_playing;