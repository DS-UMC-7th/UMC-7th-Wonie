import React from "react";
import styled from "styled-components";
import { FaDesktop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";

const DevicesInfo = () => {
  return (
    <Card>
      <Header>
        <DevicesTitle>지원 기기</DevicesTitle>
      </Header>
      <Content>
        <IconWrapper>
          <FaDesktop size={50} color="#ff3d6e" />
          <FaTabletAlt size={50} color="#ff3d6e" />
          <FaMobileAlt size={50} color="#ff3d6e" />
        </IconWrapper>
        <DevicesDescription>모바일, 태블릿, PC, TV 지원</DevicesDescription>
      </Content>
    </Card>
  );
};

export default DevicesInfo;

const Card = styled.div`
  border: 1px solid #444;
  border-radius: 10px;
  padding: 20px;
  background-color: #1e1e1e;
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const DevicesTitle = styled.h4`
  color: white;
  margin-bottom: 10px;
  margin-top: 0px;
  padding: 5px 10px;
  border: 1px solid #333436; 
  border-radius: 3px; 
  background-color: #333436;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 15px;
`;

const DevicesDescription = styled.p`
  font-size: 1rem;
  color: #aaa;
`;
