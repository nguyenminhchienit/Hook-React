import { useEffect, useRef, useState } from "react";

function Ref() {
    const [countDown,setCountDown] = useState(60);
    const idTimer = useRef();
    const prevCount = useRef();
    const h1Ref = useRef();

    //Xu ly gia tri truoc va sau cuar mot phan tu 
    useEffect(() => {
        prevCount.current = countDown;
    },[countDown])


    //Lay gia tri cua height, width cua elememts
    useEffect(() => {
        const rect = h1Ref.current.getBoundingClientRect();
        console.log(rect);
    })
   
    const handleStart = () => {
        idTimer.current = setInterval(() => {
            setCountDown(prev => prev - 1);
        },1000)
        // console.log(idTimer.current)
    }

    const handleStop = () => {
        clearInterval(idTimer.current);
        // console.log(idTimer.current);
    }

    console.log(countDown,prevCount.current);
    return ( 
        <div>
            <h1 ref={h1Ref}>{countDown}</h1>
            <button onClick={handleStart} style={{margin: '10px'}}>Start</button>
            <button onClick={handleStop}>Stop</button>

        </div>
     );
}

export default Ref;