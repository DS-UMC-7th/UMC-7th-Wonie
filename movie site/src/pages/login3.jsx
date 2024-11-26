import styled from 'styled-components';
import useForm from '../../hooks/use-from.js';
import { validateLogin } from '../utils/validate.js';
import { axiosAuthInstance } from "../apis/axios.instance.js";
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

const Login = () => {
    const navigate = useNavigate();

    const login = useForm({
        initialValue: {
            email: '',
            password: '',
        },
        validate: validateLogin
    });

    const loginMutation = useMutation({
        mutationFn: (credentials) =>
            axiosAuthInstance.post('/auth/login', credentials),
        onSuccess: (response) => {
            console.log('로그인 성공', response.data);
    
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
    
            window.dispatchEvent(new Event('loginStatusChanged'));
    
            navigate('/');
        },
        onError: (error) => {
            console.error('로그인 실패:', error.response?.data || error.message);
        },
    });

    const handlePressLogin = () => {
        if (!login.values.email || !login.values.password) {
            console.error('이메일 또는 비밀번호가 입력되지 않았습니다.');
            return;
        }

        loginMutation.mutate({
            email: login.values.email,
            password: login.values.password,
        });
    };

    return (
        <Container>
            <StyledTitle>로그인</StyledTitle>

            <Input
                error={login.touched.email && login.errors.email}
                type={"email"}
                placeholder={"이메일을 입력해주세요!"}
                {...login.getTextInputProps("email")}
            />
            {login.touched.email && login.errors.email && (
                <ErrorText>{login.errors.email}</ErrorText>
            )}
            <Input
                error={login.touched.password && login.errors.password}
                type={"password"}
                placeholder={"비밀번호를 입력해주세요!"}
                {...login.getTextInputProps("password")}
            />
            {login.touched.password && login.errors.password && (
                <ErrorText>{login.errors.password}</ErrorText>
            )}

            <StyledButton onClick={handlePressLogin} disabled={loginMutation.isLoading}>
                {loginMutation.isLoading ? '처리 중...' : '로그인'}
            </StyledButton>
        </Container>
    );
};

export default Login;

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

    border: ${(props) => (props.error ? '4px solid red' : '1px solid #ccc')};

    &:focus {
        border-color: #007bff;
    }
`;

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

    &:disabled {
        background-color: #aaa;
        cursor: not-allowed;
    }
`;
