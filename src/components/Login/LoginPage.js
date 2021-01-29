import styled from 'styled-components';
import GoogleButton from './GoogleButton';
import KakaoButton from './KakaoButton';
import NaverButton from './NaverButton';

const LoginPageBlock = styled.div`
    width: 360px;
    height: 760px;

    background: white;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

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
    font-family: Cocogoose-Regular;
    font-size: 28px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
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