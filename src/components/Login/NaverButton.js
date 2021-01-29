import React from 'react';
import styled from 'styled-components';

const NaverBtn = styled.button`
    padding: 0;
    width: 300px;
    height: 45px;
    line-height: 44px;
    color: white;
    background-color: #5ab133;
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

function NaverButton() {
    return (
        <NaverBtn >네이버로 계속하기</NaverBtn>
    );
}

export default NaverButton;