import styled from 'styled-components';
import GoogleButton from './GoogleButton';
import KakaoButton from './KakaoButton';
import NaverButton from './NaverButton';

const LoginPageBlock = styled.div`
    width: 360px;
    height: 760px;
    border: solid 3px #c9c9c9;
    background-color: #ffffff;

    margin: 0 auto;
    margin-top: 96px;
    margin-bottom: 32px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LogoImageBlock = styled.div`
    width: 96px;
    height: 100px;

    border-radius: 10px;
    background: #6fcf97;
    margin: 0 auto;
    margin-top: 120px;
`;

const LogoBlock = styled.div`
    width: 88px;
    height: 40px;

    color: #6fcf97;
    /* @font-face {
    font-family: Cocogoose;
    src: local(Cocogoose-Regular),
        url(/path/to/Cocogoose-Regular.woff2) format("woff2"),
        url(/path/to/Cocogoose-Regular.woff) format("woff"),
        url(/path/to/Cocogoose-Regular.ttf) format("truetype");
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    } */

    font-family: Cocogoose;
    font-size: 28px;
    line-height: normal;
    letter-spacing: -2.8px;
    text-align: center;

    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 60px;
`;

const Wrapper = styled.div`
    & + & {
        margin-top: 17px;
    }
`;

function LoginPage() {

    return (
        <LoginPageBlock>
            <LogoImageBlock>
            <img src="" alt="logo"/>
            </LogoImageBlock>
            <LogoBlock>Travel</LogoBlock>
            <Wrapper>
            <GoogleButton></GoogleButton>
            </Wrapper>
            <Wrapper>
            <KakaoButton></KakaoButton>
            </Wrapper>
            <Wrapper>
            <NaverButton></NaverButton>
            </Wrapper>
        </LoginPageBlock>
    );
}

export default LoginPage;