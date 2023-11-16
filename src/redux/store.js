import messagesReducer from "./messagesReducer";


let store = {
    _state: {
        friends: [
            {
                id: 1,
                img: "Habib.jpg",
                name: "Хабиб Нурмагомедов",
                age: "20 сентября 1988г",
                job: "UFC Lightweight champion"
            },
            {
                id: 2,
                img: "Lewis.jpg",
                name: "Lewis",
                age: " 7 января 1985г",
                job: "Formula 1 champion"
            },
            {
                id: 3,
                img: "Scriptonite.jpg",
                name: "Scriptonite",
                age: " 3 июня 1990г",
                job: "Rap artist"
            },
            {
                id: 3,
                img: "Scriptonite.jpg",
                name: "Scriptonite",
                job: "Rap artist"
            },
            {
                id: 3,
                img: "Scriptonite.jpg",
                name: "Scriptonite",
                job: "Rap artist"
            }
        ],
        messagesPage:{
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
    },
    getState(){
        return this._state;
    },
    _callsubscribe(){
        console.log("state changed");
    },
    subscribe (observer) {
        this._callsubscribe = observer;
    },
    dispatch(action){
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._callsubscribe(this._state);
    }
}

export default store;
