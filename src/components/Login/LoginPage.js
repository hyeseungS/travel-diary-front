import React, {useState} from 'react';
import styled from 'styled-components';
import GoogleButton from './GoogleButton';
import KakaoButton from './KakaoButton';
import NaverButton from './NaverButton';

const LoginPageBlock = styled.div`
    width: 512px;
    height: 768px;

    background: #e9ecef;
    border-radius: 16px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

    margin: 0 auto;
    margin-top: 96px;
    margin-bottom: 32px;

    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Wrapper = styled.div`
    & + & {
        margin-top: 1rem;
    }
`;

const Label = styled.div`
    font-size: 1rem;
    color: gray;
    margin-bottom: 0.25rem;
`;

const Input = styled.input`
    width: 90%;
    border: 1px solid gray;
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
`;

const Login = styled.div`
    margin-top: 0.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    background: gray;
    color: white;

    text-align: center;
    font-size: 1rem;
    font-weight: 500;

    cursor: pointer;
    user-select: none;
    transition: .2s all;

    &:hover {
        background: gray;
    }

    &:active {
        background: gray;
    }

`;

function LoginPage() {

    const [Id, setId] = useState("")
    const [Password, setPassword] = useState("")
    const onId = (event) => {
        setId(event.currentTarget.value);
    };

    const onPassword = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("Id", Id);
        console.log("Password", Password);
    };

    const onClick = () => {
        console.log("Id", Id);
        console.log("Password", Password);
    }
    return (
        <LoginPageBlock>
            <img className="Logo"/>
            <form onSubmit={onSubmit}>
                <Wrapper>
                <Label>이메일</Label>
                <Input type="email" className="Id" value={Id} onChange={onId} />
                </Wrapper>
                <Wrapper>
                <Label>비밀번호</Label>
                <Input type="password" className="Password" value={Password} onChange={onPassword} />
                </Wrapper>
                <br />
                <Login >로그인</Login>
                <hr />
                <GoogleButton></GoogleButton>
                <KakaoButton></KakaoButton>
                <NaverButton></NaverButton>
            </form>
        </LoginPageBlock>
    );
}

export default LoginPage;