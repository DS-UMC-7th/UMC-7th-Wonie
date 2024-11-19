import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoaderContainer>
      <Dots>
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </Dots>
      <Text>게시글을 불러오는 중입니다...</Text>
    </LoaderContainer>
  );
};

export default Loading;

// Styled Components
const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: #0056b3; 
  border-radius: 50%;
  animation: bounce 1.5s infinite;

  &:nth-child(2) {
    animation-delay: 0.3s;
  }
  &:nth-child(3) {
    animation-delay: 0.6s;
  }
  &:nth-child(4) {
    animation-delay: 0.9s;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
      opacity: 1;
    }
    50% {
      transform: translateY(-10px);
      opacity: 0.5;
    }
  }
`;

const Text = styled.p`
  font-size: 14px;
  color: #555;
`;
