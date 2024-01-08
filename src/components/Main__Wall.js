import "../../src/App.css";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
function Main__wall() {
    let currentUser = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate();
    function logOut(){
        localStorage.removeItem("user")
        navigate('/login')
    }
    return (
        <div className="Main__wall">
            <div className='Side__elements'>
                <ul className="Side__ul">
                    
                    <NavLink to="/"><li>Новости</li></NavLink>
                    <NavLink to="/MyProfile" className={(navData) => (navData.isActive ? "active" : "")}><li>Моя страница</li></NavLink>
                    <NavLink to="/Messages"><li>Сообщения</li></NavLink>
                    <NavLink to="/Notifications"><li>Уведомления</li></NavLink>
                    <NavLink to="/Friends"><li>Друзья</li></NavLink>
                    <NavLink to="/Community"><li>Сообщества</li></NavLink>
                    <NavLink to="/Videos"><li>Видео</li></NavLink>
                    <NavLink to="/Games"><li>Игры</li></NavLink>
                    {
                        currentUser!= null ? (<li onClick={logOut}>Выйти</li>) : (<li onClick={()=>{Navigate("/login")}}>Войти</li>)
                    }
                </ul>
            </div>
            <div className="Main__reflection"></div>
        </div>
    );
}

export default Main__wall;
