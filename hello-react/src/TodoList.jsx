import React, { useState, useEffect } from "react"
import axios from "axios"
import * as S from "./List.style.js"
import useFetch from "../hooks/useFetch"

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/todo");
      setTodos(response.data[0] || []);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  // Add
  const addTodo = async () => {
    if (title.trim() === "" || content.trim() === "") return;
    try {
      await axios.post("http://localhost:3000/todo", { title, content });
      setTitle("");
      setContent("");
      fetchTodos();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  // Delete
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/todo/${id}`);
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  // Update
  const updateTodo = async (id, updates) => {
    try {
      await axios.patch(`http://localhost:3000/todo/${id}`, updates);
      fetchTodos();
      setEditTodoId(null); // Exit edit mode
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  // Save edit
  const saveEditTodo = (id, updatedTitle, updatedContent) => {
    if (updatedTitle.trim() === "" || updatedContent.trim() === "") return;
    updateTodo(id, { title: updatedTitle, content: updatedContent });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <S.AppContainer>
      <S.Header>⚡ UMC ToDoList ⚡</S.Header>

      {/* Add Todo */}
      <S.TodoForm>
        <S.Input
          type="text"
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <S.Input
          type="text"
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <S.Button onClick={addTodo}>ToDo 생성</S.Button>
      </S.TodoForm>

      {/* Todo List */}
      <S.TodoListContainer>
        {todos.map((todo) => (
          <S.TodoItem key={todo.id}>
            <S.Checkbox
              type="checkbox"
              checked={todo.checked}
              onChange={() => updateTodo(todo.id, { checked: !todo.checked })}
            />
            <S.TodoContent>
              {editTodoId === todo.id ? (
                <S.EditActions>
                  <S.EditInput
                    type="text"
                    defaultValue={todo.title}
                    onChange={(e) =>
                      setTodos((prevTodos) =>
                        prevTodos.map((t) =>
                          t.id === todo.id
                            ? { ...t, title: e.target.value }
                            : t
                        )
                      )
                    }
                  />
                  <S.EditInput
                    type="text"
                    defaultValue={todo.content}
                    onChange={(e) =>
                      setTodos((prevTodos) =>
                        prevTodos.map((t) =>
                          t.id === todo.id
                            ? { ...t, content: e.target.value }
                            : t
                        )
                      )
                    }
                  />
                  <S.Button
                    onClick={() =>
                      saveEditTodo(todo.id, todo.title, todo.content)
                    }
                  >
                    수정완료
                  </S.Button>
                </S.EditActions>
              ) : (
                <div>
                  <S.StyledLink to={`/todo/${todo.id}`}>
                    <h3>{todo.title}</h3>
                  </S.StyledLink>
                  <p>{todo.content}</p>
                </div>
              )}
            </S.TodoContent>
            {editTodoId === todo.id ? null : (
              <S.Button onClick={() => setEditTodoId(todo.id)}>수정</S.Button>
            )}
            <S.Button delete onClick={() => deleteTodo(todo.id)}>
              삭제
            </S.Button>
          </S.TodoItem>
        ))}
      </S.TodoListContainer>
    </S.AppContainer>
  );
};

export default TodoList;