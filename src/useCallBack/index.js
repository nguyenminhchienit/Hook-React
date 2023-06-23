import { useCallback, useState } from "react";
import Content from "./Content";

function Callback() {
    const [count,setCount] = useState(0);

    //Cach su dung giong nhu callback doi voi tham so thu hai
    //useCallBack se chay va tra ve tham chieu ve cho bien handleIncresse mot gia tri, gia tri nay 
    //se bi thay doi khi deps thay doi, nhung neu khong truyen deps thi se luon tra ve tham chieu do
    //va neu tham chieu do khong bi thay doi thi useCallBack ket hop voi memo thi se kiem tra props neu khong bi
    //thay doi thi sex khong re-render laij component con
    const handleIncrease = useCallback(() =>{
        setCount(prev => prev + 1);
    },[]);
 
    return ( 
        <div>
            <Content onIncrease={handleIncrease}></Content>
            <h1>{count}</h1>
        </div>
     );
}

export default Callback;