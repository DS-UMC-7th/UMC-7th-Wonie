import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const RootLayout = () => {
    return (
      <>
        <Navbar />
        <MainContent>
          <Sidebar />
          <ContentWrapper>
            <Outlet />
          </ContentWrapper>
        </MainContent>
      </>
    );
  };
  
export default RootLayout;
  
export const MainContent = styled.div`
    display: flex;
    background-color: #121212;
    height: 100vh;
`;
  
export const ContentWrapper = styled.div`
    height: 100vh;
    overflow-y: auto;
    padding: 1rem;
    background-color: #121212;
`;
