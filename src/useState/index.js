import {useState} from 'react'
function Main() {
    const [count,setCount] = useState(1);

    console.log(count);

    const handleIncrease = () => {
        setCount(prev => prev + 1)
    }

    return ( 
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
     );
}

export default Main;