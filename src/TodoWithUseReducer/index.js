import { useReducer, useRef } from "react"

//1. initState
const initState = {
    job: '',
    jobs: []
}

//2. action
const SET_JOB ='set_job'
const ADD_JOB ='add_job'
const DELETE_JOB = 'delete_job'

const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload
    }
}

const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload
    }
}

const deleteJob = (payload) => {
    return {
        type: DELETE_JOB,
        payload
    }
}

//3. reducer
const reducer = (state,action) => {
    console.log("Action: ",action)
    console.log("PrevState: ",state);

    let newState;
    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break;
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs,action.payload]
            }
            break;
        case DELETE_JOB:
            const newJobs = [...state.jobs];

            newJobs.splice(action.payload,1);
            newState = {
                ...state,
                jobs: newJobs
            }
            break;
        default:
            throw Error("Invalid action")
    }

    console.log("NewState: ",newState);
    return newState;
}


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