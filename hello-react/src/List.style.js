import { Link } from "react-router-dom"
import styled from "styled-components"

export const AppContainer = styled.div`
  max-width: 600px;
  margin: 30px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.h1`
  text-align: center;
  color: black;
  margin-bottom: 20px;
`;

export const TodoForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: ${(props) => (props.delete ? "#e74c3c" : "#ff9900")};
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${(props) =>
      props.delete ? "#c0392b" : "#e68a00"};
  }

  & + & {
    margin-left: 10px;
  }
`;

export const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

export const TodoContent = styled.div`
  flex: 1;
  margin-left: 20px;
`;

export const EditInput = styled.input`
  margin-right: 10px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const EditActions = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;

  &:visited {
    color: #333; 
  }

  &:hover {
    color: #555;
  }
`;