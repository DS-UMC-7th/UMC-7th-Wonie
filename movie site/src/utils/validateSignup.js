const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

function validateSignup(values) {
    const errors = {
        email: '',
        password: '',
        confirmPassword: '',
    };

    if (emailPattern.test(values.email) === false) {
        errors.email = '올바른 이메일 형식이 아닙니다. 다시 확인해주세요!';
    }

    if (values.password.length < 0 ) {
        errors.password = '비밀번호는 필수 입력요소입니다.';
    }

    if (values.password.length < 8) {
        errors.password = '비밀번호는 8자 이상이어야 합니다.';
    }

    if (values.password.length > 16) {
        errors.password = '비밀번호는 16자 이하여야 합니다.';
    }

    if (values.password !== values.confirmPassword) {
        errors.confirmPassword = '비밀번호가 일치하지 않습니다.';
    }

    if (values.confirmPassword == '') {
        errors.confirmPassword = '비밀번호 검증은 필수 입력 요소입니다.';
    }

    return errors;
}

export { validateSignup };