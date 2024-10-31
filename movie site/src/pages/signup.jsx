import styled from 'styled-components';
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const login = () => {
    const schema = yup.object().shape({
        email: yup.string().email().required('이메일을 반드시 입력해주세요.'),
        password: yup.string().min(8, '비밀번호는 8자 이상이어야 합니다.').max(16, '비밀번호는 16자 이하여야 합니다.').required(),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.').required('비밀번호 검증은 필수 입력 요소입니다.'),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log('회원가입 폼 데이터 제출')
        console.log(data);
    }

    return (
        <Container>
            <StyledTitle>회원가입</StyledTitle>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <StyledInput type="email" placeholder="이메일을 입력해주세요!" {...register("email")} />
                <ErrorMessage>{errors.email?.message}</ErrorMessage>

                <StyledInput type="password" placeholder="비밀번호를 입력해주세요!" {...register("password")} />
                <ErrorMessage>{errors.password?.message}</ErrorMessage>

                <StyledInput type="password" placeholder="비밀번호를 다시 입력해주세요!" {...register("confirmPassword")} />
                <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
                
                <StyledButton type="submit" value="제출" />
            </StyledForm>
        </Container>
    );
};

export default login;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

const StyledTitle = styled.h1`
    color: white;
    margin-top: 5px;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
`;

const StyledInput = styled.input`
    margin: 10px 0;
    padding: 10px;
    font-size: 16px;
    border-radius: 4px;
    border: none;
    width: 100%;
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 14px;
    margin: 0;
`;

const StyledButton = styled.input`
    padding: 10px 20px;
    font-size: 16px;
    width: 108%;
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