const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
    messages: [
        {
            id: 1,
            text: 'Hello world'
        },
        {
            id: 2,
            text: 'Hi'
        },
        {
            id: 3,
            text: 'Im fine'
        }
    ],
    newMessageText: "",
}

let messagesReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE:
            let message = {
                id: state.messages.length=1,
                text: state.newMessageText
            }
            state.messages.push(message);
            state.newMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = ()=>({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreater = (text) =>({type: UPDATE_NEW_MESSAGE_TEXT})

export default messagesReducer;