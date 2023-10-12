import '../App.css';
import data from "../redux/redux"

function Main() {
    return (
        <div className="Main">
            <img className="Main__background" src="./images/Main_background.jpg" alt="background"/>
            <div className="movies__block"/>
            {
                data.map((d) => (
                    <div className="movie__block" key={d.id}>
                        <p>Name: {d.name}</p>
                        <p>Genre: {d.genre}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Main;
