import React from 'react';
import styled from 'styled-components';
import Navigator from './Navigator';
import travel from '../images/Travel.svg';
import more from '../images/more.svg';
import direct from '../images/directButton.svg';

const MainPageBlock = styled.div`
    width: 360px;
    height: 760px;
    border: solid 3px #c9c9c9;
    background-color: #ffffff;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeadBlock = styled.div`
    width: 360px;
    height: 56px;
    padding-top: 8px;
    background-color: #ffffff;
    img.travel {
        width: 88px;
        height: 40px;
        margin-left: 128px;
        margin-top: 4px;
        object-fit: contain;
        text-align: left;
    }
    button.moreBtn {
        width: 24px;
        height: 24px;
        margin-left: 88px;
        object-fit: contain;
        background-color: white;
        border: 0;
        outline: 0;
        cursor: pointer;
        img.more-vertical {
            position: absolute;
            top: 35px;
        }
    }
`;

const Background = styled.div`
    width: 360px;
    height: 638px;
    background-image: linear-gradient(to bottom, #fcfcff, #d0ffff);
`;

const SearchBlock = styled.div`
    width: 312px;
    height: 34px;
    margin-top: 11px;
    margin-left: 21px;
    padding-top: 2px;
    border-radius: 20px;
    border: solid 1px #bdbdbd;
    background-color: #ffffff;
    button.searchBtn {
        width: 40px;
        height: 32px;
        border: 0;
        outline: 0;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        background-color: #ffffff;
    }
    input.search {
        width: 270px;
        height: 32px;
        font-size: 12px;
        border: 0;
        outline: 0;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        background-color: #ffffff;
    }
`;

const MapBlock = styled.div`
    width: 312px;
    height: 481px;
    margin-top: 21px;
    margin-left: 24px;
    object-fit: contain;
    box-shadow: 7px 7px 12px 0 #b2d6e1;
`;

const DirectBtn = styled.button`
    width: 59px;
    height: 59px;
    margin-left: 284px;
    margin-bottom: 10px;
    border-radius: 50%;
    border: 0;
    outline: 0;
    cursor: pointer;
    img.directImg {
        position: absolute;
        right: 457px;
        top: 620px;
    }
`;

function MainPage() {
    return (
        <MainPageBlock>
            <HeadBlock>
                <img src={travel} alt="travel" className="travel"/>
                <button className="moreBtn"><img src={more} alt="more" className="more-vertical"/></button>
            </HeadBlock>
            <Background>
            <SearchBlock>
            <button className="searchBtn">s</button>
            <input type="search" placeholder="나의 여행 찾아보기" className="search" />
            </SearchBlock>
            <MapBlock></MapBlock>
            <DirectBtn><img src={direct} alt="direct" className="directImg"/></DirectBtn>
            </Background>
            <Navigator />
        </MainPageBlock>
    );
}

export default MainPage;