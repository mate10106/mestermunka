import React, { useState } from "react";

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="all-form">
            <div className="auth-form-container">
            <form className="login-form" onSubmit={ handleSubmit }>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com"></input>
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="***********"></input>
                <button type="submit">Log in</button>
            </form>
            <button className="link-button" onClick={() =>  props.onFormSwitch('register')} >Don't have an account? Register here.</button>
            </div>
        </div>
    )
}