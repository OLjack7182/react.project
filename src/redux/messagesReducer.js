const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SET_MESSAGES = "SET-MESSAGES";


let initialState = {
    messages: [],
    newMessageText: "",
}

let messagesReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE:{
            let message = {
                id: state.messages.length+1,
                text: state.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, message],
                newMessageText: ""
            };
        }
            
        case UPDATE_NEW_MESSAGE_TEXT:{
            return {
                ...state,
                newMessageText: action.newText
            };
        }
            
        default:
            return state;

        case SET_MESSAGES: {
            return {
                ...state,
                messages: action.messages
            }
        }
    }
}

export const setMessageActionCreator = (messages)  => ({type:SET_MESSAGES, messages: messages})

export const addMessageActionCreator = ()=>({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreater = (text) =>({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default messagesReducer;