const SET_NOVOSTI = "SET-NOVOSTI ";
const ADD_NOVOSTI = "ADD-NOVOSTI";
const UPDATE_NEW_NOVOSTI_TEXT = "UPDATE-NEW-NOVOSTI-TEXT";
const TOGLE_PRELOAD = "TOGLE-PRELOAD";

let initialState = {
    novosti: [],
    newNovostiText: "",
    isPreload: true,
}

let MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOVOSTI: {
            return {
                ...state,
                novosti: [
                    ...state.novosti,
                    {
                        id: state.novosti.length + 1,
                        imgIcon: "https://celebbio.org/wp-content/cache/thumb/af/e10f3d2aaece5af_400x400.jpg",
                        time: "Сегодня в 10:00",
                        novostiText: state.newNovostiText,
                        novostiImg: "https://tengrinews.kz/userdata/news/2023/news_491893/thumb_m/photo_422588.jpeg"
                    }
                ],
                newNovostiText: ""
            };
        }
        case UPDATE_NEW_NOVOSTI_TEXT: {
            return {
                ...state,
                newNovostiText: action.newText
            };
        }
        case TOGLE_PRELOAD: {
            return {
                ...state,
                isPreLoad: action.status
            }
        }
        case SET_NOVOSTI: {
            return {
                ...state,
                novosti: action.novosti
            }
        }
        default:
            return state;
    }
}

export const addNovosti = () => ({ type: ADD_NOVOSTI })

export const updateNewNovostiText = (novistiText) => ({ type: UPDATE_NEW_NOVOSTI_TEXT, newText: novistiText })

export const setNovosti = (novosti) => ({ type: SET_NOVOSTI, novosti: novosti })

export const toglePreLoad = (status) => ({ type: TOGLE_PRELOAD, status: status })

export default MainReducer;
