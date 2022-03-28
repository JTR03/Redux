// Stores response to actions
// Reducers - responsible for state modification,takes state and action as arguments

import Redux from "react-redux"

const initialState = {
    login: false
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                login: true
            }
        default:
            return state;
    }

}

const actionCreator = () =>{
    return {
        type:'LOGIN'
    }
}

const store = Redux.createStore(reducer);