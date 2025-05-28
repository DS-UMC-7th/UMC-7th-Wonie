// import React from "react";
// import ModalButton from "./ModalButton";
// import { useSelector } from "react-redux";
// import styled from "styled-components";

// function Modal({ children }) {
//   const { isOpen } = useSelector((state) => state.modal);

//   if (!isOpen) return null;

//   return (
//     <ModalOverlay>
//       <ModalContent>
//         {children}
//         <ModalButton />
//       </ModalContent>
//     </ModalOverlay>    
//   );
// }

// export default Modal;

// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.6); /* 어두운 배경 */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 1000; /* 모달이 다른 요소 위에 나타나도록 */
// `;

// const ModalContent = styled.div`
//   background: #fff;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   max-width: 400px;
//   width: 90%;
//   text-align: center;
//   z-index: 1001; /* 컨텐츠가 Overlay 위에 위치하도록 */
// `;


import React from "react";
import ModalButton from "./ModalButton";
import styled from "styled-components";
import { useModalStore } from "../features/Cart/cartStore";

function Modal({ children }) {
  const { isOpen } = useModalStore();

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        {children}
        <ModalButton />
      </ModalContent>
    </ModalOverlay>
  );
}

export default Modal;


const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* 어두운 배경 */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* 모달이 다른 요소 위에 나타나도록 */
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 90%;
  text-align: center;
  z-index: 1001; /* 컨텐츠가 Overlay 위에 위치하도록 */
`;
