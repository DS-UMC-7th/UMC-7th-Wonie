import Card from '../components/Card';
import useCustomFetch from "../../hooks/useCustomFetch";

const top_rated = () => {
    const {data:movies, isLoading, isError} = useCustomFetch(`/top_rated?language=ko&page=1`);

    if (isLoading) return <div>로딩중...</div>;
    if (isError) return <div>에러가 발생했습니다.</div>;

    return (
        <Card movies={movies} />
    );
};


export default top_rated;
