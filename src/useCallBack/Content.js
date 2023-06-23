import { memo } from "react";

function Content({onIncrease}) {
    console.log('re-render');
    return ( 
        <div>
            <h1>Welcome to Takis</h1>
            <button onClick={onIncrease}>Increase</button>
        </div>
     );
}

export default memo(Content);