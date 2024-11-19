import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import useFetch from "../hooks/useFetch"
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";

const TodoDetail = () => {
  const { id } = useParams();
  const { data: todo, loading, error } = useFetch(`/todo/${id}`);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage/>;
  if (!todo) return <p>Todo not found</p>;

  return (
    <Container>
      <Header>⚡ UMC ToDoList - 상세 페이지 ⚡</Header>
      <Detail>
        <p><strong>ID:</strong> {todo.id}</p>
        <p><strong>제목:</strong> {todo.title}</p>
        <p><strong>내용:</strong> {todo.content}</p>
        <p><strong>완료 상태:</strong> {todo.checked ? "완료" : "진행 중"}</p>
        <p><strong>생성일:</strong> {new Date(todo.createdAt).toLocaleString()}</p>
      </Detail>
    </Container>
  );
};

export default TodoDetail;

const Container = styled.div`
  max-width: 600px;
  margin: 30px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h1`
  text-align: center;
  color: black;
  margin-bottom: 20px;
`;

const Detail = styled.div`
  font-size: 16px;

  p {
    margin-bottom: 10px;
  }

  strong {
    color: black;
  }
`;