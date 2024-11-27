import { useDispatch } from "react-redux";
import { clearCart } from "../features/Cart/CartSlice";
import { closeModal } from "../features/Modal/modalSlice";
import styled from "styled-components";

const ModalButton = () => {
  const dispatch = useDispatch();

  return (
    <ButtonContainer>
      <ConfirmButton
        onClick={() => {
          dispatch(clearCart());
          dispatch(closeModal());
        }}
      >
        네
      </ConfirmButton>
      <CancelButton
        onClick={() => {
          dispatch(closeModal());
        }}
      >
        아니요
      </CancelButton>
    </ButtonContainer>
  );
};

export default ModalButton;

// 스타일 정의
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 15px; /* 버튼 간격 */
`;

const ConfirmButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.5);
  }
`;

const CancelButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c82333;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.5);
  }
`;
