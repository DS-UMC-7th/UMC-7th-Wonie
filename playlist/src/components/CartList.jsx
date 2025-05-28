import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HiOutlineShoppingBag } from "react-icons/hi";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import {calculateTotals, clearCart} from "../features/Cart/CartSlice"
import { openModal } from "../features/Modal/modalSlice";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";

function CartList() {
  const { cartItems, total } = useSelector((store) => store.cart);
  const { amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems, dispatch])

  return (
    <>
      <Header>
        <Title>UMC PlayList</Title>
        <CartIconWrapper>
          <HiOutlineShoppingBag  size={30} style={{width: "55px"}}/>
            <CartAmount>{amount}</CartAmount>
        </CartIconWrapper>
      </Header>

      <CartContainer>
        <CartHeader>
          <CartTitle>당신이 선택한 음반</CartTitle>
        </CartHeader>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
        {isOpen &&
          <ModalPortal>
            <Modal>
              <h4> 담아주신 모든 음반을 삭제하시겠습니까?</h4>
            </Modal>
          </ModalPortal>
        }
        <CartFooter>
          <TotalPriceWrapper>
            <TotalText>총 가격</TotalText>
            <TotalAmount>₩ {total}원</TotalAmount>
          </TotalPriceWrapper>
          <ResetButton onClick={() => dispatch(openModal())}>장바구니 초기화</ResetButton>
        </CartFooter>
      </CartContainer>
    </>
  );
}

export default CartList;

const Header = styled.header`
  width: 100%;
  background-color: #5852fe;
  color: #fff;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const CartIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
`;

const CartAmount = styled.span`
  position: absolute;
  top: -5px;
  right: 5px;
  background-color: #ff3b30;
  color: #fff;
  border-radius: 50%;
  font-size: 0.8rem;
  font-weight: bold;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CartContainer = styled.div`
  width: 90%;
  max-width: 800px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: auto;
`;

const CartHeader = styled.div`
  margin-bottom: 20px;
`;

const CartTitle = styled.h2`
  font-size: 1.5rem;
  color: #444;
`;

const CartFooter = styled.div`
  border-top: 1px solid #ddd;
  padding-top: 15px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TotalPriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TotalText = styled.span`
  font-size: 1rem;
  color: #333;
  font-weight: bold;
  margin-right: 10px;
`;

const TotalAmount = styled.span`
  font-size: 1rem;
  color: #007bff;
  font-weight: bold;
`;

const ResetButton = styled.button`
  background-color: #f8d7da;
  border: 1px solid #f5c2c7;
  color: #842029;
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    background-color: #f1b0b7;
    border-color: #f1a3ad;
  }
`;