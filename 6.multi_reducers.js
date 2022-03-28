// use the combineReducers() method to define multiple reducers into 1 root reducer

import Redux from 'react-redux'

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

const logState = {
    login: false
}

const countReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        
        case DECREMENT:
            return state - 1
    
        default:
            return state;
    }
}

const logReducer = (state = logState, action) => {
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                login: true
            }
        
        case LOGOUT:
            return {
                ...state,
                login: false
            }
            
        default:
            return state
    }
}

const actionCreatorIncrement = ()=>{
    return {
        type: INCREMENT
    }
}

const actionCreatorDecrement = () =>{
    return {
        type: DECREMENT
    }
}

const loginAction = () => {
    return {
        type: LOGIN
    }
}

const logoutAction = () => {
    return {
        type: LOGOUT
    }
}


const rootReducer = Redux.combineReducer({
    count: countReducer,
    log: logReducer
})

const store = Redux.createStore(rootReducer)