import React, { useState } from "react";
import styled from "styled-components";
import PlansContainer from "../components/PlansContainer";
import DevicesInfo from "../components/DevicesInfo";

const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("premium");

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <Container>
      <Title>구독권을 선택해 주세요</Title>
      <Subtitle>원할 때 언제든 해지할 수 있어요</Subtitle>

      <PlansContainer selectedPlan={selectedPlan} onSelectPlan={handleSelectPlan} />
      <DevicesInfo />
      <Button>구독 시작하기</Button>
    </Container>
  );
};

export default SubscriptionPage;

const Container = styled.div`
  background-color: #121212;
  color: white;
  text-align: center;
  padding: 40px 20px;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: #aaa;
  font-size: 1rem;
  margin-bottom: 30px;
`;

const Button = styled.button`
  background-color: #ff3d6e;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.2rem;
  border-radius: 8px;
  margin-top:10px;
  width:55%;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #eb3966;
  }
`;