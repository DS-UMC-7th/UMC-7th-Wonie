import { useState, useCallback } from 'react';
import * as S from '../styles/search.style.js'
import { useNavigate, useSearchParams } from 'react-router-dom';
import SearchMovieList from '../components/search.jsx';

const debounce = (func, delay) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
};

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value)
    }

    const [searchParams, setSearchParams] = useSearchParams( {
        mq: ''
    })

    const mq = searchParams.get('mq');

    const updateSearchQuery = useCallback(
        debounce((query) => {
            if (mq !== query) {
                setSearchParams({ mq: query });
                navigate(`/search?mq=${query}`);
            }
        }, 500),
        [mq, setSearchParams, navigate]
    );

    const handleSearchMovie = () => {
        if(mq === searchParams) return;
        navigate(`/search?mq=${searchValue}`);
    }

    const handleSearchMovieWithKeyboard = (e) => {
        if(e.key == 'Enter') {
            // handleSearchMovie();
            updateSearchQuery(searchValue);
        }
    }

    console.log(searchValue)

    return (
        <>
            <S.SearchContainer>
                <input placeholder='영화 제목을 입력해주세요...' value={searchValue} onChange={onChangeSearchValue} onKeyDown={handleSearchMovieWithKeyboard}></input>
                {/* <button onClick={handleSearchMovie}>검색</button> */}
                <button onClick={() => updateSearchQuery(searchValue)}>검색</button>
            </S.SearchContainer>
            <SearchMovieList/>
        </>
    );
};

export default Search;