import '../../../App.css';
import '../../../redux/store.js';
function FriendBlock(props) {

    return (
        <div className="FriendBlock">
                <img src={`./images/${props.img}`}></img>
                <div className='Friendblock__name'>
                    <h1>{props.name}</h1>
                    <h3>{props.job}</h3>
                </div>
        </div>
    );
}

export default FriendBlock;
