import {GET_CARD} from "./action";


export const cardFormReducer = (state = [], action) => {
    switch (action.type) {
        case GET_CARD: {
            return [...state, {cardUser: action.cardUser}]
        }
        default: {
            return state
        }
    }
}