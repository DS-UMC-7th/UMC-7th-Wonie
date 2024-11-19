import React from "react";
import styled from "styled-components";

const ErrorMessage = () => {
  return (
    <ErrorContainer>
      <ErrorIcon>
        <Cross>
          <Line />
          <Line rotate />
        </Cross>
      </ErrorIcon>
      <ErrorText>에러가 발생했습니다</ErrorText>
    </ErrorContainer>
  );
};

export default ErrorMessage;


const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ErrorIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: #e74c3c;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: fadeIn 0.5s ease-in-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const Cross = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  animation: draw 0.5s ease-in-out forwards;

  @keyframes draw {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;

const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 6px;
  background-color: white;
  border-radius: 3px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${(props) => (props.rotate ? "45deg" : "-45deg")});
`;

const ErrorText = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #555;
`;
