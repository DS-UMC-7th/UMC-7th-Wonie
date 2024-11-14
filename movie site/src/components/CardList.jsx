import styled from 'styled-components';

const CardList = ({ movies }) => {
    return <MoviesGrid>{movies}</MoviesGrid>;
};

export default CardList;

const MoviesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 15px;
    padding: 20px;
    list-style: none;
`;