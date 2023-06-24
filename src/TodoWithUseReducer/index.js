import { useReducer, useRef } from "react"
import reducer, {initState} from "./reducer";
import { addJob,setJob,deleteJob } from "./action";

//1. initState
//2. action
//3. reducer
//4. dispatch


function Todo() {
    const [state,dispatch] = useReducer(reducer,initState);

    const inputRef = useRef();

    const {job,jobs} = state;

    const handleSubmit = () =>{
        dispatch(addJob(job));
        dispatch(setJob(''));

        inputRef.current.focus();
    }

    return ( 
        <div>
            <input
            ref={inputRef}
            value={job}
            placeholder="Enter job ..."
            onChange={(e) => dispatch(setJob(e.target.value))}
            style={{marginRight: '10px'}}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((item,index) => {
                    return <li key={index}> 
                        {item} 
                        <button 
                            style={{marginLeft: '10px'}}
                            onClick={() => dispatch(deleteJob(index))}
                        >
                            Clear
                        </button>
                    </li>
                })}
            </ul>
        </div>
     );
}

export default Todo;