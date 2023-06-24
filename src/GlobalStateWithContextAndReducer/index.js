import { useStore } from "./store/hooks";
import {addTodo, setTodo} from './store/action'
import { useRef } from "react";


function Global() {

    const [state,dispatch] = useStore();
    const inputRef = useRef();

    console.log(state);

    const handleSubmit = () =>{
        dispatch(addTodo(state.todoInput));
        dispatch(setTodo(''))
        inputRef.current.focus();
    }

    return ( 
        <div>
            <input
                ref={inputRef}
                value={state.todoInput}
                placeholder="Enter todo ..."
                onChange={(e) => {dispatch(setTodo(e.target.value))}}
            />
            <button style={{marginRight: '10px'}} onClick={handleSubmit}>Add</button>
            {state.todos.map((todo,index) => {
                return <li key={index}>{todo}</li>
            })}
        </div>
     );
}

export default Global;