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