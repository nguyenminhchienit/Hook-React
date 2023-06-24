import { ADD_TODO, SET_TODO } from "./constants";

const initState = {
    todoInput: '',
    todos: []
}

function reducer(state,action) {
    switch (action.type) {
        case SET_TODO:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO: 
            return {
                ...state,
                todos: [...state.todos,action.payload]
            }
        default:
            break;
    }
}

export default reducer;

export {initState}