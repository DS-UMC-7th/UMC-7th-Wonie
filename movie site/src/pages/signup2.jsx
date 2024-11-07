import styled from 'styled-components';
import useForm from '../../hooks/use-from.js';
import { validateSignup } from '../utils/validateSignup.js';
import { axiosAuthInstance } from "../apis/axios.instance.js";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    const signup = useForm({
        initialValue: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        validate: validateSignup
    });

    const handlePressSignup = async () => {
        console.log(signup.values.email, signup.values.password, signup.values.confirmPassword);
        
        try {
            const response = await axiosAuthInstance.post('/auth/register', {
                email: signup.values.email,
                password: signup.values.password,
                passwordCheck: signup.values.confirmPassword,
            });
            console.log('회원가입 성공', response.data);
            navigate('/login');
        } catch (error) {
            console.error('회원가입 실패:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <Container>
            <StyledTitle>회원가입</StyledTitle>

            <Input error={signup.touched.email && signup.errors.email} type={"email"} placeholder={"이메일을 입력해주세요!"} {...signup.getTextInputProps("email")}/>
            {signup.touched.email && signup.errors.email && <ErrorText>{signup.errors.email}</ErrorText>}
            
            <Input error={signup.touched.password && signup.errors.password} type={"password"} placeholder={"비밀번호를 입력해주세요!"} {...signup.getTextInputProps("password")}/>
            {signup.touched.password && signup.errors.password && <ErrorText>{signup.errors.password}</ErrorText>}
            
            <Input error={signup.touched.confirmPassword && signup.errors.confirmPassword} type={"password"} placeholder={"비밀번호를 다시 입력해주세요!"} {...signup.getTextInputProps("confirmPassword")} />
            {signup.touched.confirmPassword && signup.errors.confirmPassword && <ErrorText>{signup.errors.confirmPassword}</ErrorText>}
            
            <StyledButton onClick={handlePressSignup}>제출</StyledButton>
        </Container>
    );
};

export default Signup;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    justify-content: center;
`;

const StyledTitle = styled.h1`
    color: white;
    margin-top: 5px;
`;

const Input = styled.input`
    margin: 10px 0;
    padding: 8px;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 4px;
    border: ${props => props.error ? '2px solid red' : '1px solid #ccc'};

    &:focus {
        border-color: #007bff;
    }
`;

const ErrorText = styled.p`
    color: red;
    font-size: 12px;
    margin-top: -10px;
    margin-bottom: 10px;
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

