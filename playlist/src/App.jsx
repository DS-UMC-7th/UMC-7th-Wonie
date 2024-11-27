import './App.css'
import styled from "styled-components";
import CartList from './components/CartList';
import { useDispatch } from 'react-redux';
import { calculateTotals } from './features/Cart/CartSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals())
  })

  return (
    <AppContainer>
      <CartList />
    </AppContainer>
  )
}

export default App;


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f9fa;
`;
