import {useState} from 'react'

const courses = [
    {
        id: 1,
        name: 'ReactJS'
    },
    {
        id: 2,
        name: 'NodeJS'
    },
    {
        id: 3,
        name: 'NestJS'
    }
]
function TwoWayBinding() {
    const [name,setName] = useState('');
    
    //Radio/Checkbox
    const [checked,setChecked] = useState();

    const [checkedBox,setCheckedBox] = useState([]);

    console.log(checked)

    const handleSubmit = (value) => {
        console.log(value)
        setName(value)
    }

    const handleChecked = (id) => {
        setCheckedBox(prev => {
            const check = checkedBox.includes(id);
            if(check){
                return checkedBox.filter((item) => item !== id);
            }else{
                return [...prev,id];
            }
        });
    }
    console.log(checkedBox)
    return ( 
        <div>
            <input
            value={name}
            type="text"
            onChange={(e) => handleSubmit(e.target.value)}
            ></input>
            <button style={{margin: '10px'}}>Submit</button>
            <button onClick={() => setName('Messi') } style={{marginBottom: '10px'}}>Change</button>
            <ul style={{marginBottom: '10px'}}>
                {courses.map((course) => {
                    return (
                        <div key={course.id}>
                            <input type='radio' checked={checked === course.id} onChange={() => setChecked(course.id)}></input>
                            {course.name}
                        </div>
                    )
                })}
            </ul>
            <ul style={{marginBottom: '10px'}}>
                {courses.map((course) => {
                    return (
                        <div key={course.id}>
                            <input type='checkbox' checked={checkedBox.includes(course.id)} onChange={() => handleChecked(course.id)}></input>
                            {course.name}
                        </div>
                    )
                })}
            </ul>
        </div>
     );
}

export default TwoWayBinding;