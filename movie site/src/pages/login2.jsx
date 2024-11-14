import styled from 'styled-components';
import useForm from '../../hooks/use-from.js';
import { validateLogin } from '../utils/validate.js';
import { axiosAuthInstance } from "../apis/axios.instance.js";
import { useNavigate } from 'react-router-dom';

const login = () => {
    const navigate = useNavigate();

    const login = useForm( {
        initialValue: {
            email: '',
            password: '',
        },
        validate: validateLogin
    })

    console.log(login.getTextInputProps)

    const handlePressLogin = async () => {
        console.log(login.values.email, login.values.password)
        
        try {
            const response = await axiosAuthInstance.post('/auth/login', {
                email: login.values.email,
                password: login.values.password,
            });
            console.log('로그인 성공', response.data);

            // AccessToken과 RefreshToken을 localStorage에 저장
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            
            window.dispatchEvent(new Event('loginStatusChanged'));

            navigate('/');
        } catch (error) {
            console.error('로그인 실패:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <Container>
            <StyledTitle>로그인</StyledTitle>

            <Input error={login.touched.email && login.errors.email} type={"email"} placeholder={"이메일을 입력해주세요!"} {...login.getTextInputProps("email")}/>
            {login.touched.email && login.errors.email && <ErrorText>{login.errors.email}</ErrorText>}
            <Input error={login.touched.password && login.errors.password} type={"password"} placeholder={"비밀번호를 입력해주세요!"} {...login.getTextInputProps("password")}/>
            {login.touched.password && login.errors.password && <ErrorText>{login.errors.password}</ErrorText>}

            <StyledButton onClick={handlePressLogin}>로그인</StyledButton>
        </Container>
    );
};

export default login;

const StyledTitle = styled.h1`
    color: white;
    margin-top: 5px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    justify-content: center;
`;

const Input = styled.input`
    margin: 10px 0;
    padding: 8px;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 4px;

    border: ${props => props.error ? '4px solid red' : '1px solid #ccc'}

    &:focus {
        border-color: #007bff;
    }
`

const ErrorText = styled.h1`
    color: red;
    font-size: 12px;
`;

const StyledButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    width: 315px;
    cursor: pointer;
    background-color: #ea195c;
    color: white;
    border: none;
    border-radius: 4px;
    margin: 10px 0;

    &:hover {
        background-color: #ce1752;
    }
`;