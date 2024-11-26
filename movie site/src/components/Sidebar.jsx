import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { PiFilmSlateFill } from "react-icons/pi";
import { FaMoneyCheck } from "react-icons/fa";

const Sidebar = () => (
  <SidebarContainer>
      <SidebarItem to="/search">
        <FaSearch />
        찾기
      </SidebarItem>
      <SidebarItem to="/movies">
        <PiFilmSlateFill />
        영화
      </SidebarItem>
      <SidebarItem to="/subscribe">
        <FaMoneyCheck />
        구독
      </SidebarItem>
  </SidebarContainer>
);

export default Sidebar;

export const SidebarContainer = styled.div`
  background-color: #222222;
  color: white;
  width: 150px;
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
  margin-bottom: 20px;

  &:hover {
    color: #ff007f;
  }
`;