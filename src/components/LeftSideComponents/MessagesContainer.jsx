import '../../App.css';
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreater } from '../../redux/messagesReducer';
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
        }
    }
}

let MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(Messages);
export default MessagesContainer