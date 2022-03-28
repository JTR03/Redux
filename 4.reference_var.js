// same code as 3.multi actions using variables references
 import Redux from 'react-redux'

 const LOGIN = 'LOGIN'
 const LOGOUT = 'LOGOUT'

 const initialState = {
     auth: false
 }

 const reducer = (state = initialState, action) => {
     switch(action.type){
         case LOGIN:
             return {
                ...state,
                auth: true
             }
        
        case LOGOUT:
            return {
                ...state,
                auth:false
            }

        default:
            return state
     }
 }

 const actionCreatorLogin = () =>{
     return {
         type: LOGIN
     }
 }

const actionCreatorLogout = () => {
    return {
        type: LOGOUT
    }
}

const store = Redux.createStore(reducer)