import React, {useState} from 'react';

function LoginPage() {

    const [Id, setId] = useState("")
    const [Password, setPassword] = useState("")
    const onId = (event) => {
        setId(event.currentTarget.value);
    };

    const onPassword = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("Id", Id);
        console.log("Password", Password);
    };

    return (
        <div>
            <img className="Logo"/>
            <form onSubmit={onSubmit}>
                <label>ID</label>
                <input type="text" className="Id" value={Id} onChange={onId} />
                <label>PASSWORD</label>
                <input type="password" className="Password" value={Password} onChange={onPassword} />
                <br />
                <button className="Login-button">Login</button>
                <button className="Register">Register</button>
                <hr />
                <button></button>
                <button></button>
                <button></button>
            </form>
        </div>
    );
}

export default LoginPage;