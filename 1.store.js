import Redux from 'react-redux'

const reducer = (state =  5) => {
    return state;
}

// store requires a reducer as a parameter/ argument

const store = Redux.createStore(reducer);

// get current state of app with getState() method
store.getState();

// all state updates are triggered dispatching actions
// actions - simple JS object containing info about actionevent that has occurred

const action = {
    type: 'LOGIN'
}

// action Creator - simple JS function returning action, sends actions to the store to update state

const actionCreator = ()=>{
    return action
}

// dispatch - use to dispatch actions to store

store.dispatch(actionCreator());