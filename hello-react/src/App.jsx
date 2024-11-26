// import { useContext, useState } from 'react';
// import './App.css'
// import Button from './Button';
// import Input from './Input';
// import { TodoContext } from './context/TodoContext';

// function App() {

//   const {
//     todos, 
//     text,
//     setText,
//     editingId,
//     setEditingId,
//     editText,
//     setEditText,
//     handleSubmit,
//     addTodo,
//     deleteTodo,
//     updateTodo,
//   } = useContext(TodoContext);

//   return (
//     <div className="app-container">
//       <h1>Todo List</h1>
//       <form onSubmit={handleSubmit} className="todo-form">
//         <Input
//           type="text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           placeholder="할 일 입력"
//           className="todo-input"
//         />
//         <Button onClick={addTodo} text="할 일 등록" className="add-btn" />
//       </form>
//       <div className="todo-list">
//          {/* 구조 분해 할당
//           {{todos.map(({id, task}, _) => (
//             <h4>
//               {id}. {task}
//             </h4>
//           ))}} */}
//         {todos.map((todo, _) => (
//           <div key={todo.id} className="todo-item">
//             {/*수정이 아닐 때*/}
//             {editingId !== todo.id && (
//               <div className="todo-text">
//                 <p>{todo.id}. {todo.task}</p>
//               </div>
//             )}
//             {/*수정중 상태일 때*/}
//             {editingId === todo.id && (
//               <div className="todo-edit">
//                 <Input
//                   defaultValue={todo.task}
//                   onChange={(e) => setEditText(e.target.value)}
//                   className="edit-input"
//                 />
//               </div>
//             )}
//             <Button onClick={() => deleteTodo(todo.id)} text="삭제하기" className="delete-btn" />
//             {editingId === todo.id ? (
//               <Button onClick={() => updateTodo(editingId, editText)} text="수정 완료" className="update-btn" />
//             ) : (
//               <Button onClick={() => setEditingId(todo.id)} text="수정 진행" className="edit-btn" />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "./TodoList"; // 목록 페이지
import TodoDetail from "./TodoDetail"; // 상세 페이지

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<TodoList />} />
        <Route path="/todo/:id" element={<TodoDetail />} />
      </Routes>
    </Router>
  );
};

export default App;