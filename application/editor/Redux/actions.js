export const ADD_NOTE = 'ADD_NOTE'

export const addNote = (text) => {
    return {
        type: ADD_NOTE,
        payload: text
    }
}