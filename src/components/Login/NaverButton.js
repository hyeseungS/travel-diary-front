import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const NaverBtn = styled.div`
    
`;

function NaverButton() {
    const { naver } = window;

    const NaverLogin = () => {
        Naver();
        UserProfile();
    }

    const [data, setData] = useState({nickname:'', image:''});
    useEffect(NaverLogin, [NaverLogin])
    const Naver = () => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: 'REACT_APP_NAVER_CLIENT_ID',
            callbackUrl: "http://localhost:3000/",
            isPopup: false,
            loginButton: { color: "green", type: 3, height: '50'},
            callbackHandle: true
        });
        naverLogin.init();
    }

    const UserProfile = () => {
        window.location.href.includes('access_token') && GetUser();
        function GetUser() {
            const location = window.location.href.split('=')[1];
            const token = location.split('&')[0];
            fetch('user/login/naver', {
                method: 'GET',
                headers: {
                    "Content-type" : "application/json",
                    "Authorization": token
                },
            }).then((res) => res.json())
            .then((res)=> {
                localStorage.setItem("access_token", res.token);
                setData({
                    nickname: res.nickname,
                    image: res.image
                })
            }).catch((err) => console.log(err));
        }
    };

    return (
        <NaverBtn onClick={NaverLogin} id="naverIdLogin"></NaverBtn>
    );
}

export default NaverButton;