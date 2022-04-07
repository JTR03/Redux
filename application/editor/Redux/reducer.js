import { ADD_NOTE } from "./actions";

const initialState = [
   
]

export const addReducer = (state=initialState, action) => {
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