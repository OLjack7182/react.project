import { useParams } from 'react-router-dom';
import '../../../App.css';
import '../../../redux/store.js';

function FriendProfile(props) {
    const { id } = useParams();

    return (
        <div className="FriendProfile">
            <img src={`./images/${props.state.friends[id - 1].img}`} alt='Profile img'/>
            <div className='Friendblock__name'>
                <h1>{props.state.friends[id-1].name}</h1>
                <h2>{props.state.friends[id-1].age}</h2>
                <h3>{props.state.friends[id-1].job}</h3>
            </div>
        </div>
    );
}

export default FriendProfile;
