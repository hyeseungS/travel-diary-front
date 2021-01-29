import React from 'react';
import KakaoLogin from 'react-kakao-login';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const KakaoBtn = styled.button`
    padding: 0;
    width: 300px;
    height: 45px;
    line-height: 44px;
    color: #000000;
    background-color: #ffeb00;
    border: 1px solid transparent;
    border-radius: 10px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    
    cursor: pointer;
    &:hover {
        box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
    }
`;

const { Kakao } = window;

function KakaoButton() {

    const history = useHistory();

    const kakaoLoginClickHandler = () => {
        Kakao.Auth.login({
            success: function (authObj) {
                fetch('/user/login/kakao', {
                    method: "GET",
                    body: JSON.stringify({
                        access_token: authObj.access_token,
                    }),
                })
                .then(res => res.json())
                .then(res => {
                    localStorage.setItem("Kakao_token", res.access_token);
                    if(res.access_token) {
                        history.push("/");
                    }
                })

            },
            fail: function(error) {
                alert(JSON.stringify(error))
            },
        })
    }

    return (
        <KakaoBtn onClick={kakaoLoginClickHandler}>카카오톡으로 계속하기</KakaoBtn>
    )
}

export default KakaoButton;
