import '../App.css';
import { NavLink } from "react-router-dom"
function Header() {
    return (
        <div className="Header">
            <div className="container">
                <div className="Header__display">
                    <img className="Header__logo" src="./images/logo.png" alt="logo"/>
                    <ul className="Header__ul">
                        <NavLink to="/FirstElement" className={(navData) => (navData.isActive ? "active" : "")}><li>Новостройки</li></NavLink>
                        <NavLink to="/SecondElement"><li>О застройщиках</li></NavLink>
                        <NavLink to="/"><li>Сотрудничество</li></NavLink>
                        <NavLink to="/"><li>Больше</li></NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
