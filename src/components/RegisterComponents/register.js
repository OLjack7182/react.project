import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../RegisterComponents/register.css";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

let Register = (props)=>{
    
    const navigate = useNavigate();
    const [eye, setEye] = useState(true);
    const [newUser, setNewUser] = useState({
        email: null,
        password: null,
        name: null,
        surname: null
    })
    let createUser = ()=>{
        fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            })
                .then(response =>{
                    console.log(response)
                    if(!response.ok) {
                        throw new Error ('Network error');
                    }
                    return response.json();
                })
                .then(data =>{
                    props.createUser(data)
                    localStorage.setItem('user', JSON.stringify({...data.user, accessToken: data.accessToken}))
                    navigate("/")
                })
                .catch(error=>{
                    console.error('Error during POST request:', error.message);
                })
        }
        return(
            <div className="Register">
                <div action="#" className="forma">
                    <h2 className="form__title">Регистрация</h2>
                    <input type="text" placeholder="Ваш email" onChange={(e)=>setNewUser({...newUser, email:e.target.value})}/>
                    <div className="password">
                        <input type={eye ? 'password': 'text'} placeholder="Ваш пароль" onChange={(e)=>setNewUser({...newUser, password:e.target.value})}/>
                        <span onClick={() => setEye(prevEye => !prevEye)}>
                            {eye ? <FaEye /> : <FaEyeSlash />}
                        </span>
                    </div>
                    <input type="text" placeholder="Имя" onChange={(e)=>setNewUser({...newUser, name:e.target.value})}/>
                    <input type="text" placeholder="Фамилия" onChange={(e)=>setNewUser({...newUser, surname:e.target.value})}/>
                    <button className="form__btn" onClick={createUser} type="button">Регистрировать</button>
                    <NavLink to="/login"><h4>У меня есть аккаунт</h4></NavLink>
                </div>
            </div>
        )
    }
export default Register;