import React from 'react';
import GoogleLogin from 'react-google-login';
import styled from 'styled-components';

const GoogleBtn = styled(GoogleLogin)`
    padding: 0;
    width: 300px;
    height: 45px;
    line-height: 44px;
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

const clientId = "OAuth Web Client ID";
function GoogleButton({ onSocial }) {
    const onSuccess = async(response) => {
        console.log(response);

        const { googleId, profileObj : {email, name}} = response;

        await onSocial({
            socialId: googleId,
            socialType: 'google',
            email,
            nickname: name
        });
    }

    const onFailure = (error) => {
        console.log(error);
    }
    return (
        <div>
            <GoogleBtn
                clientId={clientId}
                responseType={"id_token"}
                buttonText="Google"
                onSuccess={onSuccess}
                onFailure={onFailure}>
            </GoogleBtn>
        </div>
    );
}

export default GoogleButton;