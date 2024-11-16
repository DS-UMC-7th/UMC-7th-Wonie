import { useSearchParams } from 'react-router-dom';
import useCustomFetch from '../../hooks/useCustomFetch';
import Card from '../components/Card';
import * as S from '../styles/search.style.js'
import CardList from './CardList.jsx';
import CardListSkeleton from './Skeleton/card-list-skeleton.jsx';

const SearchMovieList = () => {
    const [searchParams, setSearchParams] = useSearchParams( {
        mq: ''
    })

    const mq = searchParams.get('mq');

    const url = `/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=1`

    const {data: movies, isLoading, isError} = useCustomFetch(url);

    console.log(movies);

    if(isError){
        return <h1 style={{color: 'white'}}>에러 발생</h1>
    }

    if (isLoading) {
        return (
            <S.MovieGridContainer>
                <CardListSkeleton number={20}/>
            </S.MovieGridContainer>
        )
    }

    if(mq && movies.length === 0){
        return (
            <div style={{ textAlign:'center', marginTop: '30px' }}>
                <h1 style={{ color: 'white'}}>검색어 {mq}에</h1>
                <h1 style={{ color: 'white'}}>해당하는 데이터가 없습니다.</h1>
            </div>
        )
    };

    return (
        <S.MovieGridContainer>
            <CardList movies={movies?.map((movie) => (
                <Card key={movie.id} movie={movie} />
            ))} />
        </S.MovieGridContainer>
    )
}

export default SearchMovieList;