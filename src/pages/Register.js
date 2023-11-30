import React, { useState } from "react";

export default function Register(props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="all-form">
            <div className="auth-form-container">
            <form className="register-form" onSubmit={ handleSubmit }>
                <label htmlFor="name">Full name</label>
                <input value={name} name="name" id="name" placeholder="Full Name" ></input>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com"></input>
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="***********"></input>
                <button type="submit">Register</button>
            </form>
            <button className="link-button" onClick={() =>  props.onFormSwitch('login')} >Already have an account? Login here.</button>
            </div>
        </div>
   )
}