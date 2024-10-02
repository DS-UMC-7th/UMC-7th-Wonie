import { useState } from 'react';
import './App.css'

function App() {
  //투두리스트, 화면에 출력되는 (추가, 삭제, 수정)
  const [todos, setTodos] = useState([
    { id: 1, task: '투두 만들어보기' },
    { id: 2, task: '희연 혜원 혜윤 건 찬민' },
  ]);

  const [text, setText] = useState('');

  const [editingId, setEditingId] = useState(false);
  const [editText, setEditText] = useState('');

  //렌더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //1. 추가하기
  const addTodo = () => {
    if(text.trim().length === 0){
      alert('입력해라!')
    }
    setTodos((prev) => [
      ...prev, 
      {id: Math.floor(Math.random()*100) +2, task: text},
    ]);
    setText('');
  };

  //2. 삭제하기
  // console.log(todos.filter((todo) => 클릭했을 때 받아오는 아이디 !== todo.id));
  const deleteTodo = (id) => { //이 줄의 id는 삭제하기 버튼 눌렀을 때의 아이디
    setTodos((prev) => prev.filter((item) => item.id !== id)); //item.id는 현재 있는 모든 id
  };

  //3. 수정하기 
  const updateTodo = (id, text) => {
    setTodos((prev) => 
      prev.map((item) => (item.id === id ? {...item, taxk:text}: item))
    );
    setEditingId('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
          <input 
            type='text' 
            value={text} 
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={() => addTodo()} type='submit'>할 일 등록</button>
      </form>
      <div>
          {/* 구조 분해 할당
          {{todos.map(({id, task}, _) => (
            <h4>
              {id}. {task}
            </h4>
          ))}} */}
          {todos.map((todo, _) => (
            <div key={todo.id} style={{ display: 'flex', gap:'20px' }}>
              {/*수정이 아닐 때*/}
              {editingId !== todo.id && (
                <div key={todo.id} style={{ display: 'flex', gap:'5px' }}>
                <p>{todo.id}. </p>
                <p>{todo.task}</p>
              </div>
              )}
              {/*수정중 상태일 때*/}
              {editingId === todo.id && (
                <div key={todo.id} style={{ display: 'flex', gap:'5px' }}>
                <p>{todo.id}. </p>
                <input 
                  defaultValue={todo.task} 
                  onChange={(e) => setEditText(e.target.value)}
                />
              </div>
              )}
              <button onClick={() => deleteTodo(todo.id)}>삭제하기</button>
        
              {editingId === todo.id ? (
                <button onClick={() => updateTodo(editingId, editText)}>수정 완료</button>
              ) : (
                <button onClick={() => setEditingId(todo.id)}>수정 진행</button>
              )}
            </div>
          ))}
      </div>
    </>
  );
}

export default App