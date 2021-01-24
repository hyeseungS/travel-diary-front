import React from 'react';
import Navigator from './Navigator';

function MainPage() {
    return (
        <div>
            <div>logo</div>
            <input type="search" />
            <button>검색</button>
            <div>Map</div>
            <Navigator />
        </div>
    );
}

export default MainPage;