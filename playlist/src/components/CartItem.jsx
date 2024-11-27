// import React from "react";
// import styled from "styled-components";
// import { FaChevronUp, FaChevronDown } from "react-icons/fa";
// import {increase, decrease, removeItem} from "../features/Cart/CartSlice"
// import { useDispatch } from "react-redux";

// function CartItem({ id, title, singer, price, img, amount }) {
//   const dispatch = useDispatch();

//   return (
//       <ItemContainer>
//         <ItemDetails>
//           <ItemImage src={img} alt={`${title} 이미지`} />
//           <ItemText>
//             <ItemTitle>{title}</ItemTitle>
//             <ItemSinger>{singer}</ItemSinger>
//             <ItemPrice>₩ {price}</ItemPrice>
//           </ItemText>
//         </ItemDetails>
//         <CounterContainer>
//           <Button onClick={() => dispatch(increase(id))}>
//             <FaChevronUp />
//           </Button>
//           <Count>{amount}</Count>
//           <Button onClick={() => {
//             if (amount === 1){
//               dispatch(removeItem(id))
//               return;
//             }
//             dispatch(decrease(id))
//           }}>
            
//             <FaChevronDown />
//           </Button>
//         </CounterContainer>
//       </ItemContainer>
//     );
//   }
  
// export default CartItem;

// const ItemContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 15px;
//   padding: 10px;
//   border-bottom: 1px solid #ddd;
// `;

// const ItemDetails = styled.div`
//   display: flex;
//   flex: 1;
//   align-items: center;
// `;

// const ItemImage = styled.img`
//   width: 50px;
//   height: 50px;
//   object-fit: cover;
//   border-radius: 5px;
//   margin-right: 15px;
// `;

// const ItemText = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const ItemTitle = styled.span`
//   font-size: 1rem;
//   font-weight: bold;
//   color: #333;
// `;

// const ItemSinger = styled.span`
//   font-size: 0.9rem;
//   color: #666;
// `;

// const ItemPrice = styled.span`
//   font-size: 0.9rem;
//   color: #888;
// `;

// const CounterContainer = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
// `;

// const Button = styled.button`
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
//   font-size: 1.2rem;
//   margin: 0 5px;
//   color: #007bff;

//   &:hover {
//     color: #0056b3;
//   }
// `;

// const Count = styled.span`
//   font-size: 1rem;
//   font-weight: bold;
//   color: #333;
// `;



import React from "react";
import styled from "styled-components";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useCartStore } from "../features/Cart/cartStore";

function CartItem({ id, title, singer, price, img, amount }) {
  const { increase, decrease, removeItem } = useCartStore();

  return (
    <ItemContainer>
      <ItemDetails>
        <ItemImage src={img} alt={`${title} 이미지`} />
        <ItemText>
          <ItemTitle>{title}</ItemTitle>
          <ItemSinger>{singer}</ItemSinger>
          <ItemPrice>₩ {price}</ItemPrice>
        </ItemText>
      </ItemDetails>
      <CounterContainer>
        <Button onClick={() => increase(id)}>
          <FaChevronUp />
        </Button>
        <Count>{amount}</Count>
        <Button
          onClick={() => {
            if (amount === 1) {
              removeItem(id);
              return;
            }
            decrease(id);
          }}
        >
          <FaChevronDown />
        </Button>
      </CounterContainer>
    </ItemContainer>
  );
}

export default CartItem;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const ItemDetails = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 15px;
`;

const ItemText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;

const ItemSinger = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

const ItemPrice = styled.span`
  font-size: 0.9rem;
  color: #888;
`;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  margin: 0 5px;
  color: #007bff;

  &:hover {
    color: #0056b3;
  }
`;

const Count = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;
