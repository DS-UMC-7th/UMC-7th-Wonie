import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import styled from "styled-components"
import { deleteTodo, getTodoList, patchTodo, postTodo } from "../apis/todo";
import {queryClient} from "./main.jsx"

function App() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");
  const [checked, SetChecked] = useState(false);

  console.log(search);

  const {data: todos, isPending} = useQuery({
    queryFn: () => getTodoList({ title: search }),
    queryKey: ["todos", search],
  });

  // console.log(data[0].map((todo)=> console.log(todo)));

  const {mutate: postTodoMutation} = useMutation({
    mutationFn : postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"], //재호출
      })
    },
    onError: (error) => {
      console.log(error);
    },
    onSettled: () => {
      console.log('항상 실행됨')
    },
  });

  
  const {mutate: deleteTodoMutation} = useMutation({
    mutationFn: deleteTodo, 
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],

      })
    }
  });

  const {mutate: patchTodoMutation} = useMutation({
    mutationFn: patchTodo, 
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],

      })
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, content);
    postTodoMutation({title, content});
  };



  return (
    <>
      <h1>Todo 검색</h1>
      <Input 
      style={{marginBottom: '10px'}} 
      value={search} 
      onChange={(e) => setSearch(e.target.value)}></Input>
      <From onSubmit={handleSubmit}>
        <Input 
        name = "title" 
        placeholder="제목을 입력해주세요."
        value={title} onChange={(e) => setTitle(e.target.value)}/>
        <Input 
        name = "content"
        placeholder="컨텐츠를 입력해주세요."
        value={content} onChange={(e) => setContent(e.target.value)}/>
        <Buutom type="submit">Todo 생성</Buutom>
      </From>
      {isPending ? (
        <div>로딩중 입니다.</div>
      ) : (
        <Container>
          {todos[0]?.map((todo)=> {
          return (
            <TodoContainer key={todo.id}>
              <input type="checkbox" defaultChecked={todo.checked} onChange={(e) => 
                patchTodoMutation({id: todo.id, checked: !todo.checked})}/>
              <div>
                <p>{todo.title}</p>
                <p>{todo.content}</p>
              </div>
              <button onClick={() => deleteTodoMutation({id: todo.id})}>삭제하기</button>
            </TodoContainer>
          );
        })}
        </Container>
      )}
    </>
  )
}

export default App;


const From = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #7a6ff0;
    outline: none;
    box-shadow: 0 0 5px rgba(122, 111, 240, 0.5);
  }
`;

const Buutom = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  background-color: #7a6ff0;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #6a5ee0;
    box-shadow: 0 3px 6px rgba(106, 94, 224, 0.3);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
  padding: 10px;
`;

const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #333;
  }

  button {
    padding: 6px 12px;
    border: none;
    border-radius: 6px;
    background-color: #ff6b6b;
    color: #fff;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #e65757;
    }
  }
`;