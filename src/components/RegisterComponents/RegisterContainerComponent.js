import Register from './register';
import { connect } from 'react-redux';
import { createUser } from '../../redux/usersReduser';

let RegisterContainer = (props) =>{
    return <Register {...props}/>
}

function mapStateToProps (state){
    return{
        usersPage: state.users,
    }
}

export default connect(mapStateToProps,{createUser})(RegisterContainer);