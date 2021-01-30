import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const GoogleBtn = styled.button`
    display: inline-block;
    background: white;
    color: #444;
    width: 235px;
    height: 50px;
    border-radius: 5px;
    border: thin solid #888;
    white-space: nowrap;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
    }
    span.label {
      font-family: serif;
      font-weight: normal;
    }
    span.icon {
      background: url('./googlelogo.png') transparent 5px 50% no-repeat;
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

const clientId = "OAuth Web Client ID";
function GoogleButton() {
    const googleLoginBtn = useRef(null);
    const [token, setToken] = useState("");

    useEffect(()=> {
        googleSDK();
    }, []);

    //SDK 초기 설정 및 API 초기화
    const googleSDK = () => {
        window.googleSDKLoaded = () => {
            console.log(window.gapi);
            window.gapi.load("auth2", () => {
                const auth2 = window.gapi.auth2.init({
                    cliend_id: "",
                    scope: "profile email",
                });
                // 버튼 클릭시 사용자 정보 불러오기
                auth2.attachClickHandler(
                    googleLoginBtn.current,
                    {},
                    (googleUser) => {
                        const profile = googleUser.getBasicProfile();
                        console.log(profile);
                        console.log(`Token || ${googleUser.getAuthResponse().id_token}`);
                        setToken(googleUser.getAuthResponse().id_token);
                        console.log(`ID: ${profile.getId()}`);
                        console.log(`Name: ${profile.getName()}`);
                        console.log(`Image URL: ${profile.getImageUrl()}`);
                        console.log(`Email: ${profile.getEmail()}`);
                    },
                    (error) => {
                        alert(JSON.stringify(error, undefined, 2));
                    }
                );
            });
        };

        // 구글 SDK 불러오기
        (function (d, s, id) {
            let js;
            const fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
              return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
            fjs.parentNode.insertBefore(js, fjs);
          })(document, "script", "google-jssdk");

    }
    // 백엔드로 token 보내기
    const GoogleApiPOST = (token) => {

        const history = useHistory();
        axios
          .get(`/user/login/google`, {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            sessionStorage.setItem("token", res.data.token);
            alert("로그인 되었습니다");
            history.push("/mainpage");
          })
          .catch((error) => alert("Error가 발생하였습니다", error));
      };
    return (
        <div>
            <GoogleBtn id="gSignInWrapper">
                <span className="label" />
                <div ref={googleLoginBtn} id="customBtn" className="customGPlusSignIn">
                  <span className="icon"></span>
                  <span className="buttonText">구글 로그인</span>
                </div>
            </GoogleBtn>
        </div>
    );
}

export default GoogleButton;