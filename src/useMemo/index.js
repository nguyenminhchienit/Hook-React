import { useMemo, useRef, useState } from "react";

function Memo() {
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [products,setProducts] = useState([]);

    const handleSubmit = () => {
        setProducts([...products,{
            name,
            price: +price
        }]);
        setName('');
        setPrice('');
        inputRef.current.focus();
    }

    const inputRef = useRef();


    //Hook useMemo giup cho code ben trong mot component khong chay lai khi khong can thiet 
    const total = useMemo(() => {
        console.log("Tinh tong ...");
        const result = products.reduce((acc,cur) => {
            return acc + cur.price;
        },0);
        return result;
    },[products]);

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangePrice = (e) => {
        setPrice(e.target.value)
    }

    return ( 
        <div>
            <input
                ref={inputRef}
                value={name}
                placeholder="Enter name ..."
                onChange={handleChangeName}
                style={{margin: '10px'}}
            />
             <input
                value={price}
                placeholder="Enter price ..."
                onChange={handleChangePrice}
                style={{marginLeft: '10px', marginRight: '10px'}}
            />
            <button onClick={handleSubmit}>Add</button>
            <br></br>
            TOTAL: {total}
            <ul>
                {products.map((product,index) => {
                    return <li key={index}>{product.name} - {product.price}</li>
                } )}
            </ul>
        </div>
     );
}

export default Memo;