import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import googleLogo from '../../images/googlelogo.png';

const GoogleBtn = styled.button`
    width: 296px;
    height: 40px;
    background-color: #f2f2f2;
    border: 0px;
    border-radius: 10px;
    text-align: left;
    
    cursor: pointer;
    &:hover {
        box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
    }

    img.icon {
        vertical-align: middle;
        display: inline-block;
        width: 20px;
        height: 24px;
        margin: 0 auto;
        margin-left: 4px;
        margin-top: 8px;
        margin-bottom: 8px;
        background-color: #f2f2f2;
    }
    span.buttonText {
        vertical-align: middle;
        width: 107px;
        height: 16px;
        margin: 0 auto;
        margin-left: 60px;
        margin-top: 12px;
        margin-bottom: 12px;
        font-family: "Roboto";
        font-size: 14px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #4f4f4f;
    }
`;

function GoogleButton() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const googleLoginClickHandler = () => {
        const googleFetchUsers = async () => {
            try {
                setUsers(null);
                setError(null);
                setLoading(true);
                const response = await axios.get(
                    'users/login/google'
                );
                setUsers(response.data);
            } catch(e) {
                setError(e);
            }
            setLoading(false);
        };
        googleFetchUsers();
    }
    return (
        <GoogleBtn onClick={googleLoginClickHandler}>
            <img src={googleLogo} className="icon" alt="google" />
            <span className="buttonText">구글로 로그인하기</span>
        </GoogleBtn>
    );
}

export default GoogleButton;