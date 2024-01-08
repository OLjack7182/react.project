import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../RegisterComponents/register.css";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

let Login = (props) => {
    const [eye, setEye] = useState(true);
    const [newUser, setNewUser] = useState({
        email: null,
        password: null,
    });

    function login() {
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw new Error('Ошибка сети');
            }
            return response.json();
        })
        .then(data => {
            props.createUser(data);
            localStorage.setItem('user', JSON.stringify({ ...data.user, accessToken: data.accessToken }));
            props.navigate("/");
        })
        .catch(error => {
            console.error('Ошибка во время запроса POST:', error.message);
        });
    }

    return (
        <div className="Register">
            <div action="#" className="forma">
                <h2 className="forma title">Авторизация</h2>
                <input type="text" placeholder="Ваш email" onChange={(e) => { setNewUser({ ...newUser, email: e.target.value }) }} />
                <div className="password">
                        <input type={ eye ? 'password': 'text'} placeholder="Ваш пароль" onChange={(e)=>setNewUser({...newUser, password:e.target.value})}/>
                        <span onClick={() => setEye(prevEye => !prevEye)}>
                            {eye ? <FaEye /> : <FaEyeSlash />}
                        </span>
                    </div>
                <button className="form__btn" type="button" onClick={login}>Войти</button>
                <NavLink to="/register"><h4>Регистрация</h4></NavLink>
            </div>
        </div>
    );
};

export default Login;
