import CardSkeleton from './card-skeleton.jsx';

const CardListSkeleton = ({number}) => {

    return (
        new Array(number).fill(0).map((_, index) => <CardSkeleton/>)
    );
};

export default CardListSkeleton;