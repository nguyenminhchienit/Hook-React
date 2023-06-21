import { useEffect, useState } from "react";

//1. useEffect(callback)
//  - callback duoc goi khi component re-render
//  - callback duoc goi sau khi elements da duoc them vao DOM    
//2. useEffect(callback,[])
//  - callback chi duoc goi mot lan khi component mounted
//3. useEffect(callback,[depens])


//------------- DUNG CHUNG CUA EFFECT ----------------
//1. Callback luon duoc goi khi component mounted
function Effect() {
    const [title,setTitle] = useState('');
    const [post,setPost] = useState([]);

    useEffect(() => {
        document.title = title;
    })

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => {
                setPost(data)
            })
    },[])


    return ( 
        <div>
            <input 
                value={title} 
                onChange={(e)=> setTitle(e.target.value)} 
                type="text" 
                style={{marginTop: '10px'}}
            />
            <ul>
                {post.map((item) => {
                    return <li key={item.id}>{item.title}</li>
                })}
            </ul>
        </div>
     );
}

export default Effect;