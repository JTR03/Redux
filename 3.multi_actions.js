import Redux from 'react-redux'

const initialState = {
    auth: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                auth: true
            }
        
        case 'LOGOUT':
            return {
                ...state,
                auth: false
            }

        default:
            return state
    }
}

const actionCreatorLogin = ()=>{
    return {
        type: 'LOGIN'
    }
}

const actionCreatorLogout = ()=>{
    return {
        type: 'LOGOUT'
    }
}

const store = Redux.createStore(reducer)