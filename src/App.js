import './App.css';
//import State from './useState'
// import TwoWayBinding from './TwoWayBinding';
// import Effect from './useEffect';
// import Ref from './useRef';
// import Callback from './useCallBack';
// import Memo from './useMemo';
// import Reducer from './useReducer';
// import Todo from './TodoWithUseReducer';
// import UseContext from './useContext';
import Global from './GlobalStateWithContextAndReducer';

import {useState} from 'react'


function App() {
  const [show,setShow] = useState(false)
  return (
    <div className="wrapper" style={{padding: '30px'}}>
      <div>This is Home Page</div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Global></Global>}
    </div>
  );
}

export default App;
