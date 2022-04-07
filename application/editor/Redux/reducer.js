import { ADD_NOTE } from "./actions";

export const addReducer = (state=["item", "item2"], action) => {
    switch(action.type){
        case ADD_NOTE:
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}