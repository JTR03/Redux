// sending data to store with action

const ADD_NOTE = 'ADD_NOTE'

const reducer = (state = 'initial state',action) => {
    switch(action.type){
        case ADD_NOTE:
            return action.text

        default:
            return state
    }
}

const actionCreator = (note) => {
    return {
        type: ADD_NOTE,
        text: note
    }
}

const store = Redux.createStore(reducer);
