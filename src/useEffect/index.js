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
//2. Cleanup Func luon duoc goi truoc khi component unmounted
//3. Cleanup Func luon duoc goi truoc khi callback duoc goi (tru lan dau mounted)

function Effect() {
    const [title,setTitle] = useState('');
    const [post,setPost] = useState([]);
    const [type,setType] = useState('posts');
    const [showGoToTop,setShowGoToTop] = useState(false);
    const [width,setWidth] = useState(window.innerWidth);
    const [countDown,setCountDown] = useState(180);
    const [avatar,setAvatar] = useState('');

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

    //DOM events
    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY > 200);
        }

        window.addEventListener('scroll',handleScroll);
        console.log('addEventListener')

        //Cleanup Func
        return ()=> {
            
            window.removeEventListener('scroll',handleScroll);
            console.log('removeEventListener')
        }
    },[])

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize',handleResize);

        //Cleanup func
        return () => {
            window.removeEventListener('resize',handleResize);
        }
    },[]);


    //4. use with setInterval,setTimeout
    // useEffect(() => {
    //     setInterval(() => {
    //         setCountDown(prevState => prevState - 1);
    //     },1000)
    // },[])


    useEffect(() => {
        const idTimer = setTimeout(() => {
            setCountDown(countDown - 1);
        },1000)

        return () => clearTimeout(idTimer);
    },[countDown])

    //5. Preview Avatar

    //Dung cleanup func de xoa anh cu ra khoi bo nho 
    useEffect(() => {

        //cleanup func
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    },[avatar])
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];

        //Them mot obj moi co ten la preview
        file.preview = URL.createObjectURL(file)

        setAvatar(file);
    }

    return ( 
        <div>
            <h1>{countDown}</h1>
            <input 
                value={title} 
                onChange={(e)=> setTitle(e.target.value)} 
                type="text" 
                style={{marginTop: '10px'}}
            />
            <input 
                onChange={handlePreviewAvatar} 
                type="file" 
                style={{margin: '10px'}}
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
            <br></br>
            {avatar.preview && <img style={{width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover'}} src={avatar.preview} alt="user"></img>}

            <h1>{width}</h1>
            <ul>
                {post.map((item) => {
                    return <li key={item.id}>{item.title || item.email}</li>
                })}
            </ul>
            
            {showGoToTop && <button style={{position: 'fixed', bottom: '20px', right: '20px'}}>Go To Top</button>}
        </div>
     );
}

export default Effect;