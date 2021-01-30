import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const KakaoBtn = styled.button`
    display: inline-block;
    width: 235px;
    height: 50px;
    color: #000000 85%;
    background-color: #feeb00;
    border: 1px solid transparent;
    font-family: Roboto;
    border-radius: 5px;
    white-space: nowrap;
    
    cursor: pointer;
    &:hover {
        box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
    }

    span.icon {
      background: url('') transparent 5px 50% no-repeat;
      display: inline-block;
      vertical-align: middle;
      width: 42px;
      height: 42px;
    }
    span.buttonText {
      display: inline-block;
      vertical-align: middle;
      padding-left: 35px;
      padding-right: 35px;
      font-size: 14px;
      font-weight: bold;
      /* Use the Roboto font that is loaded in the <head> */
      font-family: 'Roboto', sans-serif;
    }
`;

const { Kakao } = window;

function KakaoButton() {

    const history = useHistory();

    const kakaoLoginClickHandler = () => {
        Kakao.Auth.login({
            success: (authObj) => {
                fetch(`/user/login/kakao`, {
                    method: "GET",
                    header: {
                        "Content-type": "application/json",
                        Authorization: authObj.access_token,
                    },
                })
                .then(res => res.json())
                .then(res => {
                    localStorage.setItem("Kakao_token", res.access_token);
                    if(res.access_token) {
                        history.push("/mainpage");
                    }
                })

            },
            fail: function(error) {
                alert(JSON.stringify(error))
            },
        })
    }

    return (
        <KakaoBtn onClick={kakaoLoginClickHandler}>
            <span className="icon"></span>
            <span className="buttonText">카카오 로그인</span>
        </KakaoBtn>
    )
}

export default KakaoButton;
