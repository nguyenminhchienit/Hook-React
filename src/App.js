import './App.css';
//import State from './useState'
// import TwoWayBinding from './TwoWayBinding';\
import Effect from './useEffect';

import {useState} from 'react'


function App() {
  const [show,setShow] = useState(false)
  return (
    <div className="wrapper" style={{padding: '30px'}}>
      <div>This is Home Page</div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Effect></Effect>}
    </div>
  );
}

export default App;
