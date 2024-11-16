import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { axiosAuthInstance } from "../apis/axios.instance.js";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  const checkLogin = async () => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      setIsLoggedIn(true);

      try {
        const response = await axiosAuthInstance.get('/user/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`, 
          },
        });
        const userEmail = response.data.email;
        const username = userEmail.split('@')[0];
        setNickname(username);
      } catch (error) {
        console.error('유저 정보 가져오기 실패:', error.response?.data || error.message);
        setIsLoggedIn(false); 
        setNickname('');
      }
    } else {
      setIsLoggedIn(false);
      setNickname('');
    }
  };

  useEffect(() => {
    checkLogin();

    const handleStorageChange = () => {
      console.log('Storage event detected.');
      checkLogin();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('loginStatusChanged', checkLogin);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('loginStatusChanged', checkLogin);
    };
  }, []); 

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    setNickname('');
    navigate('/login');
  };

  return (
    <NavbarContainer>
      <Logo to="/">YONGCHA</Logo>
      <ButtonGroup>
        {isLoggedIn ? (
          <>
            <WelcomeText>{nickname}님 반갑습니다!</WelcomeText>
            <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
          </>
        ) : (
          <>
            <NavButton1 to="/login">로그인</NavButton1>
            <NavButton2 to="/signup">회원가입</NavButton2>
          </>
        )}
      </ButtonGroup>
    </NavbarContainer>
  );
};
  
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

  &:hover {
    background-color: #c2164d;
  }
`;

export const WelcomeText = styled.span`
  color: white;
  font-size: 18px;
  margin-right: 1rem;
  margin-top: 8px;
`;

export const LogoutButton = styled.button`
  color: white;
  font-size: 16px;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: #ea195c;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #c2164d;
  }
`;