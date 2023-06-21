import { useEffect, useState } from "react";
const tabs = ['posts','comments','albums'];

//1. useEffect(callback)
//  - callback duoc goi khi component re-render
//  - callback duoc goi sau khi elements da duoc them vao DOM    
//2. useEffect(callback,[])
//  - callback chi duoc goi mot lan khi component mounted
//3. useEffect(callback,[deps])
//  -callback duoc goi khi deps thay doi


//------------- DUNG CHUNG CUA EFFECT ----------------
//1. Callback luon duoc goi khi component mounted
function Effect() {
    const [title,setTitle] = useState('');
    const [post,setPost] = useState([]);
    const [type,setType] = useState('posts');
    console.log(type);

    //1.
    useEffect(() => {
        document.title = title;
    })

    //2.
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => {
                setPost(data)
            })
    },[])

    //3. 
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(data => {
            setPost(data)
        })
    },[type]);


    return ( 
        <div>
            <input 
                value={title} 
                onChange={(e)=> setTitle(e.target.value)} 
                type="text" 
                style={{marginTop: '10px'}}
            />
            {tabs.map((tab) => {
                return <button  
                    style={type === tab ? {background: '#333', color: '#fff'} : {}} 
                    key={tab} 
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            })}
            <ul>
                {post.map((item) => {
                    return <li key={item.id}>{item.title || item.email}</li>
                })}
            </ul>
        </div>
     );
}

export default Effect;