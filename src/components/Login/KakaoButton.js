import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import kakaoLogo from '../../images/kakaologo.svg';

const KakaoBtn = styled.button`
    width: 296px;
    height: 40px;
    background-color: #f6e24b;
    border: 0;
    outline: 0;
    border-radius: 10px;
    margin-top: 60px;
    text-align: left;
    
    cursor: pointer;
    &:hover {
        box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
    }

    img.icon {
        vertical-align: middle;
        display: inline-block;
        width: 20px;
        height: 18.5px;
        margin: 0 auto;
        margin-left: 4px;
        margin-top: 10px;
        margin-bottom: 11.5px;
        background-color: #f6e24b;
    }
    span.buttonText {
        @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap');
        vertical-align: middle;
        width: 146px;
        height: 16px;
        margin: 0 auto;
        margin-left: 48px;
        margin-top: 12px;
        margin-bottom: 12px;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #000000;
    }
`;

function KakaoButton() {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const kakaoLoginClickHandler = () => {
        const kakaoFetchUsers = async () => {
            try {
                setUsers(null);
                setError(null);
                setLoading(true);
                const response = await axios.get(
                    'users/login/kakao'
                );
                setUsers(response.data);
            } catch(e) {
                setError(e);
            }
            setLoading(false);
        };
        kakaoFetchUsers();
    }

    return (
        <KakaoBtn onClick={kakaoLoginClickHandler}>
            <img src={kakaoLogo} alt="kakao" className="icon"/>
            <span className="buttonText">카카오톡으로 로그인하기</span>
        </KakaoBtn>
    )
}

export default KakaoButton;
