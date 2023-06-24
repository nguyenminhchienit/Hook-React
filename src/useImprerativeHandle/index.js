import Video from "./Video";
import { useEffect, useRef } from 'react';
//useImperativeHandle tạo ra các giá trị tuỳ chỉnh khi một thành phần kích hoạt ref . 
//Tức là khi bạn truyền ref đến một thành phần tuỳ chỉnh nào đó, 
//những gì bạn nhận lại là những gì thành phần đó cho phép bạn nhận thông qua việc sử dụng useImperativeHandle

function ImprerativeHandle() {
    const videoRef = useRef();

    useEffect(() => {
        console.log(videoRef.current)
    })

    const handlePlay = () => {
        videoRef.current.play();
    } 
    const handlePause = () => {
        videoRef.current.pause();
    }
    return ( 
        <div>
            <Video ref={videoRef}></Video>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    );
}

export default ImprerativeHandle;