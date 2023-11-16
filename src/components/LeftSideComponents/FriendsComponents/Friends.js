import "../../../App.css"
import FriendBlock from "./FriendBlock";
import '../../../redux/store.js';
import { Link } from 'react-router-dom';

function Friends(props) {

    return (
        <div className="Friends">
            {
                props.state.friends.map((friends)=>(    
                <Link to={`/friends/${friends.id}`}>
                    <FriendBlock key={friends.id} img = {friends.img} name = {friends.name} job = {friends.job}/>
                </Link>
                ))
            }
        </div>
    );
}

export default Friends;


