// src/components/TodoInput.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import styled from 'styled-components';

const TodoInput = () => {
  const [text, setText] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const dispatch = useDispatch();

  // 현재 시간을 설정하는 함수
  const updateTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    setCurrentTime(`${hours}:${minutes}:${seconds}`);
  };

  // 컴포넌트가 마운트되었을 때 시간 업데이트
  useEffect(() => {
    updateTime(); // 즉시 시간 업데이트
    const interval = setInterval(updateTime, 1000); // 1초마다 시간 업데이트
    return () => clearInterval(interval); 
  }, []);

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <>
      <Header>
        <span>{new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}</span>
        <span>{currentTime}</span>
      </Header>
      <InputContainer>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <AddButton onClick={handleAddTodo}>+</AddButton>
      </InputContainer>
    </>
  );
};

export default TodoInput;


const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  background-color: #f7f7f7;
  border-radius: 25px;
  padding: 10px 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 16px;
  background-color: transparent;

  &::placeholder {
    color: #aaa;
  }
`;

const AddButton = styled.button`
  background-color: #007bff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;