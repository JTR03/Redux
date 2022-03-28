import Redux from 'react-redux'

// using a subscribe() method - called whenever action is dispatched

const ADD = 'ADD'

const initialState = {
    num: 0
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD:
            return {
                ...state,
                num: 1
            }

        default:
            return state
    }
}

let count = 0;

const handleCount = () => {
    count++;
}

const store = Redux.createStore(reducer);

const actionCreator = ()=>{
    return {
        type: ADD
    }
}

store.subscribe(handleCount);

store.dispatch(actionCreator());
console.log(count);

// expected output: 1