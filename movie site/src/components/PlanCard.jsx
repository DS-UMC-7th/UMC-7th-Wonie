import React from "react";
import styled from "styled-components";

const PlanCard = ({ plan, selected, onClick }) => {
  return (
    <Card selected={selected} onClick={onClick}>
      {selected && <CheckMark>✔</CheckMark>}
      <CardHeader selected={selected}>
        <PlanName>{plan.name}</PlanName>
        <PlanPrice>{plan.price}</PlanPrice>
      </CardHeader>
      <PlanDetails>
        {plan.features.map((feature, index) => (
          <Feature key={index}>
            <FeatureIconWrapper>
              <FeatureIcon>{plan.icons[index]}</FeatureIcon>
              <FeatureText>{feature}</FeatureText>
            </FeatureIconWrapper>
          </Feature>
        ))}
      </PlanDetails>
    </Card>
  );
};

export default PlanCard;

const Card = styled.div`
  border: ${(props) => (props.selected ? "2px solid #ff3d6e" : "1px solid #444")};
  border-radius: 10px;
  width: 300px;
  background-color: ${(props) =>
    props.selected ? "#1e1e1e" : "#121212"};
  cursor: pointer;
  position: relative;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CheckMark = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: white;
  color: #ff3d6e;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.2rem;
`;

const CardHeader = styled.div`
  background-color: ${(props) => (props.selected ? "#ff3d6e" : "transparent")};
  color: white;
  background: ${(props) => (props.selected ? "#ff3d6e" : "#1e1e1e")};
  padding: 20px;
  border-radius: 8px 8px 0 0;
  margin-bottom: 20px;
`;

const PlanName = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const PlanPrice = styled.p`
  font-size: 1.2rem;
  margin: 0;
`;

const PlanDetails = styled.ul`
  list-style: none;
  padding: 0;
`;

const Feature = styled.li`
  display: flex;
  justify-content: center;
  color: white;
  margin-bottom: 16%;
`;

const FeatureIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FeatureIcon = styled.span`
  font-size: 2rem;
  margin-bottom: 5px;
`;

const FeatureText = styled.span`
  font-size: 1rem;
  color: #ccc;
`;
