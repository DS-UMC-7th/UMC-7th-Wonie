import React from "react";
import styled from "styled-components";
import { MdPeopleOutline } from "react-icons/md";
import { IoMdPerson } from "react-icons/io"; // 사용자 아이콘
import { BsBadge4kFill } from "react-icons/bs";
import { MdOutlineHdrOn } from "react-icons/md";
import { BsFillCameraVideoFill } from "react-icons/bs"; // 비디오 아이콘
import { MdHd } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import { RiNumber5 } from "react-icons/ri";

import PlanCard from "./PlanCard";



const PlansContainer = ({ selectedPlan, onSelectPlan }) => {
  const plans = [
    {
      id: "premium",
      name: "프리미엄",
      price: "12,900원",
      features: [
        "최대 4대 동시 감상",
        "Ultra HD 4K 지원",
        "HDR 10+ 지원",
        "비디오 100개 저장",
      ],
      icons: [<MdPeopleOutline />, <BsBadge4kFill />, <MdOutlineHdrOn />, <BsFillCameraVideoFill />],
    },
    {
      id: "basic",
      name: "베이직",
      price: "7,900원",
      features: [
        "최대 1대 동시 감상",
        "Full HD 지원",
        "HDR 10+ 미지원",
        "비디오 5개 저장",
      ],
      icons: [<IoMdPerson />, <MdHd />, <FaXmark />, <RiNumber5 />],
    },
  ];

  return (
    <Container>
      {plans.map((plan) => (
        <PlanCard
          key={plan.id}
          plan={plan}
          selected={selectedPlan === plan.id}
          onClick={() => onSelectPlan(plan.id)}
        />
      ))}
    </Container>
  );
};

export default PlansContainer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
