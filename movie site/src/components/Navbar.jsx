import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => (
    <NavbarContainer>
      <Logo to="/">YONGCHA</Logo>
      <ButtonGroup>
        <NavButton1 to="/login">로그인</NavButton1>
        <NavButton2 to="/signup">회원가입</NavButton2>
      </ButtonGroup>
    </NavbarContainer>
  );
  
  export default Navbar;

export const NavbarContainer = styled.nav`
  background-color: #222222; 
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  color: #ea195c;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #ff2f72;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const NavButton1 = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: #222222; 

  &:hover {
    background-color: #ea195c; 
  }
`;

export const NavButton2 = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: #ea195c;
`;
