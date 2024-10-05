import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Navbar 스타일링
export const NavbarContainer = styled.nav`
  margin: 0px;
  background-color: #222;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

export const Logo = styled.h1`
  color: #ea195c;
  font-size: 24px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Button = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    background-color: #ea195c;
    border-radius: 4px;
  }
`;

// Sidebar 스타일링
export const SidebarContainer = styled.div`
  background-color: #222;
  color: white;
  width: 200px;
  height: 100vh;
  padding: 2rem;
`;

export const SidebarItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: #ff007f;
  }
`;

// MainContent 스타일링
export const AppLayout = styled.div`
  display: flex;
`;

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  padding: 2rem;
  background-color: #121212;
`;

export const MovieCardContainer = styled.div`
  background-color: #1c1c1c;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  color: white;
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const MovieTitle = styled.h3`
  margin: 0.5rem 0;
`;

export const MovieDate = styled.p`
  color: gray;
  margin-bottom: 1rem;
`;