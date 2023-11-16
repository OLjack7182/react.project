import "../../src/App.css";
import { NavLink } from "react-router-dom";
function Main__wall() {
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
                </ul>
            </div>
        </div>
    );
}

export default Main__wall;
