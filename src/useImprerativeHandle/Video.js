import video from '../video/video1.mp4'
import { forwardRef, useImperativeHandle, useRef } from 'react';

function Video(props,ref) {
    const videoRef = useRef();

    useImperativeHandle(ref, () => {
        return {
            play(){
                videoRef.current.play();
            },
            pause(){
                videoRef.current.pause();
            },
        }
    })
    
    return ( 
        <video ref={videoRef} src={video} width={200}></video>
     );
}

export default forwardRef(Video);