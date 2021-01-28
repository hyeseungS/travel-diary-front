import React from 'react';
import GoogleLogin from 'react-google-login';
import styled from 'styled-components';

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
            <GoogleLogin
                clientId={clientId}
                responseType={"id_token"}
                buttonText="Google"
                onSuccess={onSuccess}
                onFailure={onFailure} />
        </div>
    );
}

export default GoogleButton;