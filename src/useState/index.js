import {useState} from 'react'
function Main() {
    const [count,setCount] = useState(1);

    console.log(count);

    const handleIncrease = () => {
        setCount(prev => prev + 1)
    }

    const handleSub = () => {
        setCount(prev => prev - 1)
    }

    return ( 
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrease} style={{margin: "10px"}}>Increase</button>
            <button onClick={handleSub}>Sub</button>
        </div>
     );
}

export default Main;