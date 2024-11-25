import CardSkeleton from './card-skeleton.jsx';
import styled from 'styled-components';


const CardListSkeleton = ({number}) => {

    return (
        <SkeletonGrid>
            {new Array(number).fill(0).map((_, index) => (
                <CardSkeleton key={index} />
            ))}
        </SkeletonGrid>
    );
};

export default CardListSkeleton;

const SkeletonGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr); 
    gap: 15px; 
    padding: 20px;
`;