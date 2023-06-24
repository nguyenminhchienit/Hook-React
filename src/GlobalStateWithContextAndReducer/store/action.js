import { SET_TODO,ADD_TODO } from "./constants";

export const setTodo = payload => {
    return {
        type: SET_TODO,
        payload
    }
}

export const addTodo = payload => {
    return {
        type: ADD_TODO,
        payload
    }
}


