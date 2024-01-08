import '../App.css';
import { NavLink } from "react-router-dom";

function Header() {
    
    return (
        <div className="Header">    
            <div className="Header__display">
                <div className="container Header__display__on">
                    <div className='header__point__logo'>
                        <NavLink to="/"><img className="Header__logo" src="./images/logo.png" alt="logo"/></NavLink>
                        <NavLink to="/"><h1>ТопЧат</h1></NavLink>
                    </div>
                    <div className='Header__search'>
                        <img className='Header__search__img' src='./images/search.png'></img>
                        <input placeholder='Поиск'></input>
                    </div>
                    <div className='Notifications'>
                        <div className='Header__notifications'>
                            <NavLink to="/Notifications"><img className='Header__notifications__img' src='./images/notifications.png'></img></NavLink>
                        </div>
                        <div className='Header__notifications'>
                            <img className='Header__music__img'src='./images/music.png'></img>
                        </div>
                    </div>
                    <div className='Registration'>
                        <NavLink to="/Login"><img src='./images/log_in.png'></img></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
