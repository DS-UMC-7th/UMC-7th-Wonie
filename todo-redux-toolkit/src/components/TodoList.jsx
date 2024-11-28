// src/components/TodoList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/todoSlice';
import styled from 'styled-components';

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
  
    return (
      <ListContainer>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <Checkbox
              completed={todo.completed}
              onClick={() => dispatch(toggleTodo(todo.id))}
            />
            <Text completed={todo.completed}>{todo.text}</Text>
            <DeleteButton onClick={() => dispatch(deleteTodo(todo.id))}>
              🗑
            </DeleteButton>
          </ListItem>
        ))}
      </ListContainer>
    );
  };
  
  export default TodoList;


  const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #007bff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &::after {
    content: '';
    width: 12px;
    height: 12px;
    background-color: ${({ completed }) => (completed ? '#007bff' : 'transparent')};
    border-radius: 50%;
  }
`;

const Text = styled.span`
  flex-grow: 1;
  margin-left: 15px;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  color: ${({ completed }) => (completed ? '#aaa' : '#000')};
  font-size: 16px;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #dc3545;
  font-size: 18px;

  &:hover {
    color: #a71d2a;
  }
`;
