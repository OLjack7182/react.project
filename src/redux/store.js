import messagesReducer from "./messagesReducer";
import MainReducer from "./MainReducer";


let store = {
    _state: {
        friends: [
            {
                id: 1,
                img: "https://images.app.goo.gl/qWCvzP7pruNLx9sb8",
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
            messages: [],
            newMessageText: "",
        },
        novostiPage: {
            novosti: [
            //     {
            //         imgIcon:"https://images.app.goo.gl/VZ42xvEpGppr1atQ6",
            //         communityName:"TopRacing Studio",
            //         time:"Сегодня в 10:00",
            //         novostiText:"Итальянское подразделения Motorsport сообщает, что появляется всё больше фактов об ультиматуме для Серхио Переса. Если он не проявит себя за оставшиеся гонки сезона, то его заменит, скорее всего, Даниэль Риккардо.",
            //         novostiImg:"https://images.app.goo.gl/x5VTYmsLKNpn1EoH8"
            //     },
            //     {
            //         imgIcon:"https://images.app.goo.gl/XgpLLcpi3pD6BwEj8",
            //         communityName:"Stanislavskiy",
            //         time:"Вчера в 23:30",
            //         novostiText:"Ред Булл окрыляет! Они кстати сделали специальную ливрею для предстоящего этапа в США.",
            //         novostiImg:"https://images.app.goo.gl/d5pXmGZAPMDQwhsj9"
            //     },
            //     {
            //         imgIcon:"https://images.app.goo.gl/TH7qrdi4f1vuLF5H6",
            //         communityName:"Гаснут огни",
            //         time:"22 окт в 14:00",
            //         novostiText:"В десять вечера по Москве стартует Гран-При Формулы-1 в Остине!",
            //         novostiImg:"https://images.app.goo.gl/yxeaUveKCHgAurg77"
            //     },
            //     {
            //         imgIcon:"https://images.app.goo.gl/VZ42xvEpGppr1atQ6",
            //         communityName:"TopRacing Studio",
            //         time:"Сегодня в 10:00",
            //         novostiText:"Итальянское подразделения Motorsport сообщает, что появляется всё больше фактов об ультиматуме для Серхио Переса. Если он не проявит себя за оставшиеся гонки сезона, то его заменит, скорее всего, Даниэль Риккардо.",
            //         novostiImg:"https://images.app.goo.gl/x5VTYmsLKNpn1EoH8"
            //     }
        ]
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
        this._state.novostiPage = MainReducer(this._state.novostiPage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._callsubscribe(this._state);
    }
}}

export default store;
