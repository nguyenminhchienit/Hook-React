import { useReducer } from "react";

//useReducer
//1. initState cos the la bat ki kieu du lieu nao
//2. action
//3. reducer
//4. dispatch

//.1
const initState = 0;

//2. 
const DOWN_ACTION = 'down';
const UP_ACTION = 'up';

//3.
const reducer = (state,action) => {
    switch (action) {
        case DOWN_ACTION:
            return state - 1;

        case UP_ACTION:
            return state + 1;
        default:
            throw Error('Invalid action');
    }
}

function Reducer() {
    //Khi component mounted useReducer duoc chay nhung func reducer chua chay voi, 
    //o buoc nay kh useReducer chay thi chi gan gia tri initState cho count,
    //Sau khi khi dispatch mot action thi luc nau reducer moi duoc goi, luc nay khi dispatch thi action duoc 
    //truyen vao dispatch se la tham so cua reducer, sau do se chay dung voi action ma ban da onClick
    const [count,dispatch] = useReducer(reducer,initState);
    return ( 
        <div>
            <h1 style={{padding: '20px'}}>{count}</h1>
            <button 
                style={{marginRight: '10px'}}
                onClick={() => dispatch(DOWN_ACTION)}
            >
                Down
            </button>
            <button onClick={() => dispatch(UP_ACTION)}>Up</button>
        </div>
     );
}

export default Reducer;