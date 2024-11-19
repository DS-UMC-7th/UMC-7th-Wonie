// import { createContext, useState } from "react";

// export const TodoContext = createContext();//데이터 담고 있음

// //우산을 만들었음
// export function TodoContextProvider( {children} ) {

//       //투두리스트, 화면에 출력되는 (추가, 삭제, 수정)
//   const [todos, setTodos] = useState([
//     { id: 1, task: '투두 만들어보기' },
//     { id: 2, task: '희연 혜원 혜윤 건 찬민' },
//   ]);

//   const [text, setText] = useState('');

//   const [editingId, setEditingId] = useState(false);
//   const [editText, setEditText] = useState('');

//   //렌더링 방지
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   //1. 추가하기
//   const addTodo = () => {
//     if(text.trim().length === 0){
//       alert('입력해라!')
//       return;
//     }
//     setTodos((prev) => [
//       ...prev, 
//       {id: Math.floor(Math.random()*100) +2, task: text},
//     ]);
//     setText('');
//   };

//   //2. 삭제하기
//   // console.log(todos.filter((todo) => 클릭했을 때 받아오는 아이디 !== todo.id));
//   const deleteTodo = (id) => { //이 줄의 id는 삭제하기 버튼 눌렀을 때의 아이디
//     setTodos((prev) => prev.filter((item) => item.id !== id)); //item.id는 현재 있는 모든 id
//   };

//   //3. 수정하기 
//   const updateTodo = (id, text) => {
//     setTodos((prev) => 
//       prev.map((item) => (item.id === id ? {...item, task:text}: item))
//     );
//     setEditingId('');
//   };

//     return <TodoContext.Provider value={{
//         todos, 
//         setTodos,
//         text,
//         setText,
//         editingId,
//         setEditingId,
//         editText,
//         setEditText,
//         handleSubmit,
//         addTodo,
//         deleteTodo,
//         updateTodo,
//     }}>{children}</TodoContext.Provider>;
// }








// import { createContext, useState } from "react";

// export const TodoContext = createContext();

// export const TodoProvider = ({ children }) => {
//   const [todos, setTodos] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const addTodo = async (newTodo) => {
//     setIsLoading(true);
//     try {
//       const response = await fetch("http://localhost:3000/todo", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newTodo),
//       });
//       const result = await response.json();
//       setTodos((prev) => [...prev, result]);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const deleteTodo = async (id) => {
//     setIsLoading(true);
//     try {
//       await fetch(`http://localhost:3000/todo/${id}`, { method: "DELETE" });
//       setTodos((prev) => prev.filter((todo) => todo.id !== id));
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const updateTodo = async (id, updates) => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(`http://localhost:3000/todo/${id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(updates),
//       });
//       const updatedTodo = await response.json();
//       setTodos((prev) =>
//         prev.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo))
//       );
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <TodoContext.Provider value={{ todos, setTodos, addTodo, deleteTodo, updateTodo, isLoading, error }}>
//       {children}
//     </TodoContext.Provider>
//   );
// };
