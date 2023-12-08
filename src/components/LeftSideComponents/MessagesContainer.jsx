import '../../App.css';
import { addMessageActionCreator, setMessageActionCreator, updateNewMessageTextActionCreater } from '../../redux/messagesReducer';
import Messages from './Messages';
import { connect } from 'react-redux';




function mapStateToProps (state){
    return{
        messagesPage: state.messagesPage
    }
}

function mapDispatchToProps(dispatch){
    return {
        addMessage: ()=>{
            dispatch(addMessageActionCreator())
        },
        updateNewMessageText: (text)=>{
            dispatch(updateNewMessageTextActionCreater(text))
        },
        setMessages: (messages)=>{
            dispatch(setMessageActionCreator(messages))
        }
    }
}


let MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(Messages);
export default MessagesContainer